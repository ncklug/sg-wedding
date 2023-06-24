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
        paddingTop: "1em",
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
        <div style={{ padding: "3.5em" }}>
          <div>
            {title}
            <div style={{ margin: "0.3em 0 0.3em", fontSize: "1.2em" }}>
              June 2023
            </div>
            <div style={{ margin: "0 0 2.8em" }}>{materials}</div>
          </div>

          <div style={{ fontSize: "0.95em" }}>
            {paragraphs.map((paragraph) => (
              <Paragraph gap="s">{paragraph}</Paragraph>
            ))}
          </div>
          {mode !== "print" ? null : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3em",
              }}
            >
              <Image src={qr} style={{ width: "25%", height: "25%" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
