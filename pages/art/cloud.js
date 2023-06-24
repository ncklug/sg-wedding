import qr from "../../assets/qr/cloud.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Cloud() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>“Kavod”</div>
        </div>
      }
      materials="Dried flowers, preserved flowers, chicken wire"
      qr={qr}
      //   mode="printQr"
      paragraphs={[
        `As described in the description of the blanket fort tent (“Home”), this flower cloud represents the couple’s longing for their relationship to be led by God as they sojourn through this life towards a more permanent home… It also reminds them of a funny story from early in their relationship that you can ask them about.`,
        `Even within this work itself though, there are a collection of tensions.`,
        `The first is the tension inherent in God’s glory being represented by a cloud. The word “Kavod”, which is the original Hebrew word that is translated as “glory”, can also be translated as “heavy” or “weighty”. How odd that a cloud can be heavy.`,
        `When Nathan first saw Faith making the cloud, he said it looked like a “flower explosion”, bursting forth with life, yet curiously made from plants that died long ago and only still exist because they’ve been dried or preserved.`,
        `While it may seem blasphemous to even allegorically represent the glory of God with a collection of dead things in an age eager to proclaim God as dead, the couple in fact find that this actually highlights the essential nature of why they are called to be sojourners. That is, they often have observed that when they think they’ve captured the essence of who God is, whether in music, teaching, culture, or in this case in art, they very often find themselves holding a bouquet of preserved flowers. God’s spirit has moved on to a new thing, and they long to follow the sound of its wind, which blows in such a way that they cannot tell where it comes from or where it is going.`,
      ]}
    />
  )
}
