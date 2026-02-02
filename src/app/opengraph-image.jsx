import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Wanichanon Saelee - Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "200px",
            height: "200px",
            background: "rgba(59, 130, 246, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Wanichanon Saelee
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "36px",
              color: "#94a3b8",
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            Full-Stack Developer
          </p>

          {/* Skills tags */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Next.js", "TypeScript", "Node.js"].map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: "20px",
                  padding: "10px 24px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "9999px",
                  color: "#e2e8f0",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Website URL */}
          <p
            style={{
              fontSize: "24px",
              color: "#64748b",
              marginTop: "40px",
            }}
          >
            wanichanon.dev
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
