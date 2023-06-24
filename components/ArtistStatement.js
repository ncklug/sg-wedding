import { Paragraph } from "../components/Paragraph"
import Image from "next/image"

export const ArtistStatement = ({ paragraphs, title, materials, qr, mode }) => (
  <div
    style={{
      fontFamily: "'Inter', sans-serif",
      width: "100dvw",
    }}
  >
    <div
      style={{
        paddingTop: "3em",
        backgroundColor: mode ? "white" : "black",
        width: "100%",
        height: "100dvh",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "40em",
          backgroundColor: "white",
        }}
      >
        <div style={{ padding: mode ? "0.5em" : "3.5em" }}>
          {mode === "printText" ? null : (
            <div>
              {title}
              <div style={{ margin: "0.3em 0 0.3em", fontSize: "1.2em" }}>
                June 2023
              </div>
              <div style={{ margin: "0 0 2.8em" }}>{materials}</div>
            </div>
          )}
          {mode === "printQr" ? (
            <Image src={qr} style={{ width: "100%", height: "100%" }} />
          ) : (
            paragraphs.map((paragraph) => (
              <Paragraph gap="s">{paragraph}</Paragraph>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
)
