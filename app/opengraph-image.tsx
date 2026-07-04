import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Static, on-brand social preview (WhatsApp/Twitter/LinkedIn link unfurls).
export const alt = "PrismLab: Money, in focus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Exact "Tight Hand" fan mark (dark variant) from components/Logo.tsx, inlined so
// Satori renders it reliably as an <img> data-URI rather than live SVG transforms.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 120 120" fill="none"><g transform="translate(60 88)"><g transform="rotate(-34)"><rect x="-16" y="-52" width="32" height="50" rx="7" fill="#0E7A46"/></g><g transform="rotate(-17)"><rect x="-16" y="-52" width="32" height="50" rx="7" fill="#149E5D"/></g><g><rect x="-16" y="-52" width="32" height="50" rx="7" fill="#2DD48A"/></g><g transform="rotate(17)"><rect x="-16" y="-52" width="32" height="50" rx="7" fill="#6FE3AE"/></g><g transform="rotate(34)"><rect x="-16" y="-52" width="32" height="50" rx="7" fill="#B7F2D4"/></g></g></svg>`;
const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

// Fonts are vendored in app/ (Satori-compatible TTFs) and read from disk at
// build time, so the OG image has no network dependency on Google Fonts.
async function loadSora(weight: 400 | 700): Promise<Buffer> {
  return readFile(join(process.cwd(), "app", `Sora-${weight}.ttf`));
}

export default async function OpengraphImage() {
  const [sora400, sora700] = await Promise.all([loadSora(400), loadSora(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0E1512",
          backgroundImage:
            "radial-gradient(1000px 500px at 12% 0%, rgba(52,208,127,0.20), rgba(14,21,18,0) 60%)",
          color: "#F4F6F3",
          fontFamily: "Sora",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_URI} width={96} height={96} alt="" />
          <div style={{ display: "flex", fontSize: 46, fontWeight: 700, letterSpacing: -1 }}>
            Prism<span style={{ color: "#34D07F" }}>Lab</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            <div style={{ display: "flex" }}>Money, finally</div>
            <div style={{ display: "flex" }}>
              in <span style={{ color: "#34D07F" }}>&nbsp;focus.</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 400, color: "#9AA6A0", maxWidth: 900, lineHeight: 1.35 }}>
            Every account, every currency, and a real FIRE plan — one clear picture of when you can stop working.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#34D07F", letterSpacing: 1 }}>
          prismlab.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: sora400, weight: 400, style: "normal" },
        { name: "Sora", data: sora700, weight: 700, style: "normal" },
      ],
    },
  );
}
