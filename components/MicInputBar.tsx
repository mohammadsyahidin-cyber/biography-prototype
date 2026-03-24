"use client";

import React, { useState } from "react";
import { Mic, Image, Keyboard, Square } from "lucide-react";

function WaveBars() {
  return (
    <div className="flex items-center justify-center gap-[3px]" style={{ height: 20 }}>
      {[0, 150, 300, 150, 0].map((delay, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: 16,
            borderRadius: 2,
            backgroundColor: "var(--accent-coral)",
            animation: `wave-bar 0.8s ease-in-out ${delay}ms infinite`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}

export function MicInputBar({
  label = "点击录音，语音采访",
  color = "green",
  onSend,
  recordingResult,
}: {
  label?: string;
  color?: "green" | "coral";
  onSend?: (text: string) => void;
  recordingResult?: string;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const micBg = color === "green" ? "var(--accent-green)" : "var(--accent-coral)";

  const handleMicClick = () => {
    if (isRecording) {
      setIsRecording(false);
      if (onSend) onSend(recordingResult || "（语音录入内容）");
    } else {
      setIsRecording(true);
    }
  };

  const handleSendText = () => {
    if (inputText.trim() && onSend) {
      onSend(inputText.trim());
      setInputText("");
      setShowTextInput(false);
    }
  };

  if (showTextInput) {
    return (
      <div
        className="shrink-0 flex flex-col gap-2 font-outfit"
        style={{
          padding: "10px 24px 16px",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendText()}
            placeholder="输入文字内容..."
            autoFocus
            className="flex-1 font-outfit"
            style={{
              height: 44,
              borderRadius: 22,
              backgroundColor: "var(--bg-muted)",
              paddingLeft: 16,
              paddingRight: 16,
              fontSize: 14,
              color: "var(--text-primary)",
              border: "none",
              outline: "none",
            }}
          />
          <button
            onClick={handleSendText}
            className="shrink-0 flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: micBg,
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "var(--white)", fontSize: 14, fontWeight: 600 }}>发送</span>
          </button>
        </div>
        <button
          onClick={() => setShowTextInput(false)}
          className="self-center"
          style={{
            fontSize: 12,
            color: "var(--text-tertiary)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          切换到语音
        </button>
      </div>
    );
  }

  return (
    <div
      className="shrink-0 flex flex-col items-center gap-[10px] font-outfit"
      style={{
        padding: "10px 24px 8px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="flex items-center justify-center gap-[24px]">
        <button
          onClick={() => {}}
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "var(--bg-muted)",
            border: "none",
            cursor: "pointer",
            opacity: isRecording ? 0.4 : 1,
            pointerEvents: isRecording ? "none" : "auto",
            transition: "opacity 0.2s",
          }}
        >
          <Image size={18} style={{ color: "var(--text-secondary)" }} />
        </button>

        {/* Mic button with pulse ring when recording */}
        <div
          className="flex items-center justify-center"
          style={{ width: 104, height: 104, position: "relative" }}
        >
          {isRecording && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "var(--accent-coral-light)",
                animation: "pulse-ring 1.5s ease-in-out infinite",
              }}
            />
          )}
          <button
            onClick={handleMicClick}
            className="flex items-center justify-center"
            style={{
              width: isRecording ? 72 : 88,
              height: isRecording ? 72 : 88,
              borderRadius: "50%",
              backgroundColor: isRecording ? "var(--accent-coral)" : micBg,
              border: "none",
              cursor: "pointer",
              transition: "width 0.25s, height 0.25s, background-color 0.25s",
              position: "relative",
              zIndex: 1,
            }}
          >
            {isRecording ? (
              <Square
                size={24}
                fill="var(--white)"
                strokeWidth={0}
                style={{ color: "var(--white)" }}
              />
            ) : (
              <Mic size={36} style={{ color: "var(--white)" }} />
            )}
          </button>
        </div>

        <button
          onClick={() => !isRecording && setShowTextInput(true)}
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "var(--bg-muted)",
            border: "none",
            cursor: isRecording ? "default" : "pointer",
            opacity: isRecording ? 0.4 : 1,
            pointerEvents: isRecording ? "none" : "auto",
            transition: "opacity 0.2s",
          }}
        >
          <Keyboard size={18} style={{ color: "var(--text-secondary)" }} />
        </button>
      </div>

      {isRecording ? (
        <div className="flex flex-col items-center gap-1">
          <WaveBars />
          <span
            style={{
              fontSize: 12,
              color: "var(--accent-coral)",
              fontWeight: 500,
              animation: "fade-pulse 2s ease-in-out infinite",
            }}
          >
            正在聆听...
          </span>
        </div>
      ) : (
        <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
          {label}
        </span>
      )}
    </div>
  );
}
