import qr from "../../assets/qr/pt2.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Pt2() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>
            “Community Collage”
          </div>
        </div>
      }
      materials="Polaroids, fabric wristband, tokens"
      qr={qr}
      //   mode="print"
      paragraphs={[
        `This the second in a three-part interactive series (starting with “Welcome to uwuvu” and followed by “Let Love Bloom How It May”), this is where the primary interactivity comes into play.`,
        `We invite each and every one of you to take a photo of something at the wedding that catches your eye, and head to the polaroid station, where a volunteer will print it off for you and post it on the wall with everyone else’s. Then, you’ll be given a fabric wristband and two tokens, one of which can be used in the third part of the series.`,
        `This part represents the way that friendships are strengthened through sharing perspectives and memories with others, represented by the photos, taken from the community's perspective and reflecting what is meaningful to them.`,
        `As perspectives and memories are shared, they become part of and enrich a larger narrative (represented by the photo wall as a whole). These stronger and more integrated bonds are represented by the fabric wristbands, which are stronger and are also typically used for longer events like multi-day festivals.`,
        `The 2 tokens signify that in deeper friendship, we each get to know more and more of the essence of the other, represented by the fact that both tokens bear Faith and Nathan’s symbol, and exist as invitations into deeper relationship still.`,
      ]}
    />
  )
}
