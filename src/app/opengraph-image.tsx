import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "MAFYN — Full-stack Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111318",
          color: "#F4F4F2",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(244,244,242,0.22)",
            paddingBottom: "26px",
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 9,
            }}
          >
            MAFYN
          </span>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 4,
              color: "#C8C9CC",
            }}
          >
            FULL-STACK DEVELOPMENT STUDIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 940,
            }}
          >
            Engineering Digital Solutions.
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 23,
              lineHeight: 1.4,
              color: "#C8C9CC",
              maxWidth: 760,
            }}
          >
            Websites, custom web applications, and backend systems built for
            real business problems.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,244,242,0.22)",
            paddingTop: "24px",
            fontSize: 16,
            letterSpacing: 2,
            color: "#C8C9CC",
          }}
        >
          <span>{site.domain}</span>
          <span>INDONESIA / WORLDWIDE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
