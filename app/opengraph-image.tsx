import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "Multipu Developer Documentation - The Multi-Chain Launchpad & Agent API";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read local logo as base64
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  let logoDataUrl = "";
  try {
    const logoBuffer = fs.readFileSync(logoPath);
    logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch {
    logoDataUrl = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#050608",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)",
          padding: "70px 60px 0px 60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Logo & Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          {logoDataUrl && (
            <img
              src={logoDataUrl}
              alt="Multipu Logo"
              style={{
                width: "44px",
                height: "44px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 16px rgba(120, 119, 198, 0.4))",
              }}
            />
          )}
          <span
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Multipu
          </span>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "920px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              fontSize: "62px",
              fontWeight: 600,
              color: "#f8fafc",
              lineHeight: 1.18,
              letterSpacing: "-1.8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>The multi-chain launchpad</span>
            <span>and agent API.</span>
          </div>
        </div>

        {/* Bottom Stepped Gradient Spectrum Bar (Eigenmark Style) */}
        <div
          style={{
            display: "flex",
            width: "1080px",
            height: "170px",
            position: "relative",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* Step 1: Violet */}
          <div
            style={{
              position: "absolute",
              left: "40px",
              bottom: "0px",
              width: "560px",
              height: "42px",
              background:
                "linear-gradient(90deg, rgba(88, 28, 135, 0.9) 0%, rgba(124, 58, 237, 0.95) 100%)",
              borderTop: "1.5px solid rgba(192, 132, 252, 0.8)",
              borderLeft: "1.5px solid rgba(192, 132, 252, 0.8)",
              borderRight: "1.5px solid rgba(192, 132, 252, 0.8)",
              boxShadow: "0 0 25px rgba(124, 58, 237, 0.35)",
            }}
          />

          {/* Step 2: Cyan / Blue */}
          <div
            style={{
              position: "absolute",
              left: "220px",
              bottom: "32px",
              width: "560px",
              height: "42px",
              background:
                "linear-gradient(90deg, rgba(37, 99, 235, 0.9) 0%, rgba(6, 182, 212, 0.95) 100%)",
              borderTop: "1.5px solid rgba(103, 232, 249, 0.8)",
              borderLeft: "1.5px solid rgba(103, 232, 249, 0.8)",
              borderRight: "1.5px solid rgba(103, 232, 249, 0.8)",
              boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
            }}
          />

          {/* Step 3: Mint / Green */}
          <div
            style={{
              position: "absolute",
              left: "400px",
              bottom: "64px",
              width: "560px",
              height: "42px",
              background:
                "linear-gradient(90deg, rgba(5, 150, 105, 0.9) 0%, rgba(16, 185, 129, 0.95) 100%)",
              borderTop: "1.5px solid rgba(110, 231, 183, 0.8)",
              borderLeft: "1.5px solid rgba(110, 231, 183, 0.8)",
              borderRight: "1.5px solid rgba(110, 231, 183, 0.8)",
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
            }}
          />

          {/* Step 4: Amber / Yellow */}
          <div
            style={{
              position: "absolute",
              left: "580px",
              bottom: "96px",
              width: "460px",
              height: "42px",
              background:
                "linear-gradient(90deg, rgba(217, 119, 6, 0.9) 0%, rgba(245, 158, 11, 0.95) 100%)",
              borderTop: "1.5px solid rgba(253, 224, 71, 0.8)",
              borderLeft: "1.5px solid rgba(253, 224, 71, 0.8)",
              borderRight: "1.5px solid rgba(253, 224, 71, 0.8)",
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.35)",
            }}
          />

          {/* Step 5: Coral / Rose */}
          <div
            style={{
              position: "absolute",
              left: "760px",
              bottom: "128px",
              width: "320px",
              height: "42px",
              background:
                "linear-gradient(90deg, rgba(225, 29, 72, 0.9) 0%, rgba(244, 63, 94, 0.95) 100%)",
              borderTop: "1.5px solid rgba(253, 164, 175, 0.8)",
              borderLeft: "1.5px solid rgba(253, 164, 175, 0.8)",
              borderRight: "1.5px solid rgba(253, 164, 175, 0.8)",
              boxShadow: "0 0 25px rgba(244, 63, 94, 0.35)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
