import qr from "../../assets/qr/pt3.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Pt3() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>
            “Let Love Bloom How It May”
          </div>
        </div>
      }
      materials="Capsule machine, flower tea, tokens, surprise"
      qr={qr}
      //   mode="printQr"
      paragraphs={[
        `The third and final piece in this three-part interactive series (preceded by “Welcome to uwuvu” and “Community Collage”), invites reflection on the unpredictable nature of mature friendship. One of the tokens from “Community Collage” is used in the capsule/gacha machine, which gives a random prize in a small ball, and the other token is kept as a souvenir.`,
        `The delightful and often frustrating thing about capsule machines is that you don’t know which of the prizes you are going to get. In this case, most of the capsules contain flower teas, representing the continued blooming and blossoming of friendship.`,
        `However, there are 3 capsules (out of ~135 total) which contain a peculiar and special alternative, which some may find delightful and others may not understand or want. And so it is with friendship. As Faith and Nathan reflected on this new season of their lives, they also reflected back on those friendships that have been particularly special (represented by finding peculiar contents delightful), but also those deep friendships they have both lost, often for reasons they still do not understand.`,
        `But their response to the unpredictable reality of friendship, even though it may at times be painful, is to continue choosing into relationship, as their wedding hopes to be a reflection of and invitation to.`,
      ]}
    />
  )
}
