import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Terminal, Code2, Cpu, CheckCircle2, Activity } from 'lucide-react';

const PYTHON_SCRIPTS = [
  {
    id: 'keg_vision',
    name: 'keg_vision_pipeline.py',
    title: 'Computer Vision Keg Tracking',
    category: 'CUDA Accelerated OpenCV & YOLO',
    code: `import cv2
import numpy as np
from edge_ai import JetsonInferenceEngine

# Initialize Advantech iCAM-540 industrial AI vision stream
camera = cv2.VideoCapture("rtsp://icam540.factory.local/stream_01")
engine = JetsonInferenceEngine(
    model="keg_tracker_fp16.engine",
    device="cuda:0"
)

print("[CUDA] Loading TensorRT FP16 execution engine...")
while camera.isOpened():
    ret, frame = camera.read()
    if not ret: break
    
    # Real-time object detection & QR matrix decoding
    detections = engine.detect(frame, conf_thresh=0.88)
    qr_serial = decode_industrial_qr(frame, detections)
    
    print(f"[EDGE AI] Verified Keg ID: {qr_serial} | FPS: {engine.fps:.1f} | Latency: 1.1ms")`,
    logs: [
      '[CUDA] Allocating TensorRT FP16 execution buffers on Jetson AGX Orin...',
      '[INFO] Advantech iCAM-540 GigE Vision Stream Connected @ 60 FPS (1920x1080)',
      '[DETECT] Bounding Box Lock: Conveyor Lane #1 -> Confidence: 99.4%',
      '[QR DECODE] Matrix Verified -> Keg Serial: #PROD_3490 (Stainless Steel 50L)',
      '[SYNC] Transaction committed to Edge SQLite Cache -> MQTT Uplink Active (19ms latency)',
      'STATUS: PIPELINE RUNNING // 60.0 FPS // LATENCY: 1.1ms // ACCURACY: 99.6%',
    ],
    metricLabel: 'Tracking Accuracy',
    metricValue: '99.6%',
    fps: '60.0 FPS',
  },
  {
    id: 'rdpms_fft',
    name: 'vibration_fft_diagnostics.py',
    title: 'Industrial IoT Frequency FFT',
    category: 'Scikit-Learn Isolation Forest',
    code: `import numpy as np
from scipy.fft import rfft, rfftfreq
from sklearn.ensemble import IsolationForest

# Sample 10 kHz industrial accelerometer stream over Modbus RTU
raw_vibration = fetch_sensor_telemetry(bus="RS485", sensor_id="MEMS_TRIAX_04")

# Time-Domain to Frequency-Domain Decomposition
fft_spectrum = np.abs(rfft(raw_vibration))
rms_energy = np.sqrt(np.mean(raw_vibration ** 2))

# Unsupervised Anomaly Detection
detector = IsolationForest(contamination=0.01, random_state=42)
anomaly_score = detector.decision_function([[rms_energy, fft_spectrum.max()]])

print(f"[DIAGNOSTICS] RMS Energy: {rms_energy:.4f}g | Health Index: {anomaly_score[0]:.2f}")`,
    logs: [
      '[MODBUS] Polling MEMS Triaxial Accelerometer @ 10,000 Hz sample rate...',
      '[FFT] Computing 2048-point Fast Fourier Transform harmonic spectrum...',
      '[FEATURE] RMS Vibration Energy: 0.0412g | Peak Harmonic: 142.5 Hz',
      '[ML INFERENCE] Scikit-Learn Isolation Forest Decision Score: +0.84 (Normal Operation)',
      '[TELEMETRY] Transmitting 10s health summary to TimescaleDB Cloud Cluster...',
      'STATUS: MACHINE HEALTH NOMINAL // UPTIME: 99.99% // ANOMALY PROBABILITY: 0.4%',
    ],
    metricLabel: 'Machine Health Score',
    metricValue: '99.6 / 100',
    fps: '10 kHz Sampling',
  },
  {
    id: 'geospatial_ml',
    name: 'landslide_xgboost_engine.py',
    title: 'Geospatial Hazard Prediction',
    category: 'XGBoost Classification & GeoPandas',
    code: `import pandas as pd
from xgboost import XGBClassifier

# Ingest environmental sensor network telemetry
features = pd.DataFrame([{
    "rolling_rain_24h_mm": 142.5,
    "volumetric_water_content_pct": 88.4,
    "pore_water_pressure_kpa": 32.1,
    "slope_inclinometer_deg": 14.2
}])

# Load trained monsoon geotechnical model
model = XGBClassifier()
model.load_model("models/landslide_predictor_v2.json")

hazard_prob = model.predict_proba(features)[0][1] * 100
print(f"[PREDICTION] 48-Hour Slope Hazard Probability: {hazard_prob:.1f}% | Alert: SAFE")`,
    logs: [
      '[SENSOR FUSION] Aggregating 18 geotechnical probe nodes across Western Ghats...',
      '[FEATURE ENG] Computed 24-hour antecedent rainfall saturation index: 1.42',
      '[XGBOOST] Executing multi-class tree ensemble inference (Depth=6, Est=250)...',
      '[RESULT] Slope Stability Safety Factor: 1.84 | Failure Probability: 2.1%',
      '[WEBHOOK] Early Warning API Heartbeat Sent -> Response Time: 14ms',
      'STATUS: SLOPE STABLE // INFERENCE TIME: 1.4ms // F1-SCORE: 0.94',
    ],
    metricLabel: 'Model F1-Score',
    metricValue: '0.94',
    fps: '< 2ms Alert',
  },
];

export default function InteractivePythonConsole() {
  const [selectedScriptIndex, setSelectedScriptIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleLines, setConsoleLines] = useState([]);
  const [executionComplete, setExecutionComplete] = useState(false);

  const activeScript = PYTHON_SCRIPTS[selectedScriptIndex];
  const terminalRef = useRef(null);

  const runScript = () => {
    setIsRunning(true);
    setExecutionComplete(false);
    setConsoleLines(['[SYSTEM] Python 3.11.4 (Edge AI Jetpack 6.2 Environment)']);

    activeScript.logs.forEach((line, i) => {
      setTimeout(() => {
        setConsoleLines((prev) => [...prev, line]);
        if (i === activeScript.logs.length - 1) {
          setIsRunning(false);
          setExecutionComplete(true);
        }
      }, (i + 1) * 380);
    });
  };

  const resetTerminal = () => {
    setIsRunning(false);
    setExecutionComplete(false);
    setConsoleLines(['[SYSTEM] Ready for execution. Press "Run Python Script" to begin inference.']);
  };

  useEffect(() => {
    resetTerminal();
  }, [selectedScriptIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [consoleLines]);

  return (
    <div
      className="glass-card"
      style={{
        padding: '36px',
        background: 'linear-gradient(135deg, rgba(14, 14, 24, 0.78) 0%, rgba(8, 8, 14, 0.92) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65), 0 0 40px rgba(212, 175, 55, 0.08)',
      }}
    >
      {/* Top Header Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '28px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37',
            }}
          >
            <Code2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.12em' }}>
              // INTERACTIVE PYTHON AI LAB
            </div>
            <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F4F4F6' }}>
              Live Python Edge Engineering Console
            </h3>
          </div>
        </div>

        {/* Script Selection Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {PYTHON_SCRIPTS.map((script, idx) => (
            <button
              key={script.id}
              onClick={() => setSelectedScriptIndex(idx)}
              style={{
                padding: '9px 18px',
                borderRadius: '100px',
                fontSize: '0.82rem',
                fontWeight: 600,
                border: idx === selectedScriptIndex ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.12)',
                background: idx === selectedScriptIndex ? 'rgba(212, 175, 55, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                color: idx === selectedScriptIndex ? '#F3E5AB' : '#9E9EB2',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {script.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Code Editor left, Terminal right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Left Panel: Python Code Window */}
        <div
          style={{
            background: '#07070B',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Editor Header */}
          <div
            style={{
              padding: '14px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#27C93F' }} />
              <span style={{ fontSize: '0.8rem', color: '#A0A0B2', marginLeft: '8px', fontFamily: 'monospace' }}>
                {activeScript.name}
              </span>
            </div>

            <span
              className="glass-pill"
              style={{ padding: '4px 12px', fontSize: '0.72rem', color: '#D4AF37', fontWeight: 700 }}
            >
              {activeScript.category}
            </span>
          </div>

          {/* Syntax Highlighted Code Box */}
          <pre
            style={{
              padding: '20px',
              margin: 0,
              color: '#D0D0E0',
              fontFamily: 'Consolas, "Fira Code", monospace',
              fontSize: '0.86rem',
              lineHeight: 1.6,
              overflowX: 'auto',
              minHeight: '260px',
            }}
          >
            <code>{activeScript.code}</code>
          </pre>
        </div>

        {/* Right Panel: Execution Terminal & Output */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#07070B',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Top Bar */}
          <div
            style={{
              padding: '14px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D4AF37' }}>
              <Terminal size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                LIVE EXECUTION OUTPUT
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={resetTerminal}
                title="Reset Console"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#8E8E9F',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div
            ref={terminalRef}
            style={{
              padding: '18px',
              fontFamily: 'Consolas, "Fira Code", monospace',
              fontSize: '0.82rem',
              lineHeight: 1.7,
              color: '#10B981',
              minHeight: '220px',
              maxHeight: '220px',
              overflowY: 'auto',
              background: '#050508',
            }}
          >
            {consoleLines.map((line, index) => {
              const isHighlight = line.includes('STATUS:');
              return (
                <div
                  key={index}
                  style={{
                    color: isHighlight ? '#D4AF37' : line.startsWith('[SYSTEM]') ? '#9E9EB2' : '#34D399',
                    fontWeight: isHighlight ? 700 : 400,
                    marginBottom: '4px',
                  }}
                >
                  {line}
                </div>
              );
            })}
          </div>

          {/* Terminal Control Action Bar */}
          <div
            style={{
              padding: '16px 18px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#8E8E9F' }}>{activeScript.metricLabel}</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F4F4F6' }}>
                  {activeScript.metricValue}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#8E8E9F' }}>Throughput</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#D4AF37' }}>
                  {activeScript.fps}
                </div>
              </div>
            </div>

            <button
              onClick={runScript}
              disabled={isRunning}
              className="btn-gold"
              style={{
                padding: '11px 24px',
                fontSize: '0.88rem',
                opacity: isRunning ? 0.7 : 1,
              }}
            >
              <Play size={15} fill="#08080C" />
              <span>{isRunning ? 'Executing Python Engine...' : 'Run Python Pipeline'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
