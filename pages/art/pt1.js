import qr from "../../assets/qr/pt1.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Catworks() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>
            “Welcome to uwuvu”
          </div>
        </div>
      }
      materials="Paper wristband"
      qr={qr}
      //   mode="printQr"
      paragraphs={[
        `This is the first in a three-part interactive series (followed by “Community Collage” and “Let Love Bloom How It May”). This wristband is intended to be evocative of the kind of wristband used for entry into events, and here has a double meaning.`,
        `On the surface, it literally marks your entry into this wedding, which we intend to theme as a premier of an art exhibition representing our lives and relationship. So much of a real relationship cannot be described with words or even captured with pictures. We did our best to design a semi-immersive exhibition space where we can try to convey the essence of our relationship through a varied collection of art pieces in different mediums.`,
        `You’re likely reading this right as you enter, so we invite you to take this time to pause and reflect on whatever experiences you may have with Faith and Nathan or their families in preparation for the ceremony to start.`,
        `On a deeper level, as the first in a three-part interactive series on friendship, this work is designed to capture the moment when a potential friend-to-be invites you into their life and into their world. Whether that be a simple invitation to coffee, an unexpected moment of vulnerability between meetings at work, or an especially meaningful group activity, these moments are what this wristband is designed to represent: an invitation to enter another person’s inner world.`,
      ]}
    />
  )
}
