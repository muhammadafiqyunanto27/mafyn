import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt =
  "MAFYN — Full-stack Development & Custom Web Applications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const forest = "#142D26";
const butter = "#F5F1E5";
const sand = "#D6CBB8";
const lime = "#D9E6A5";

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
          backgroundColor: forest,
          color: butter,
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${sand}55`,
            paddingBottom: "26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: lime,
                color: forest,
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 9,
              }}
            >
              MAFYN
            </span>
          </div>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 4,
              color: sand,
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
              maxWidth: 960,
            }}
          >
            Engineering Digital Solutions.
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 23,
              lineHeight: 1.4,
              color: sand,
              maxWidth: 780,
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
            borderTop: `1px solid ${sand}55`,
            paddingTop: "24px",
            fontSize: 16,
            letterSpacing: 2,
            color: sand,
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
