import qr from "../../assets/qr/tent.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Tent() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>“Home”</div>
        </div>
      }
      materials="Assorted cloth, fishing line, birch poles, assorted rugs and other decor"
      qr={qr}
      //   mode="print"
      paragraphs={[
        `This is the centerpiece, and it represents so much about the couple’s experiences and values.`,
        `To Nathan, it evokes some of his most vivid memories from childhood: hours spent building blanket forts that took up entire rooms of his childhood home for months, spiderweb forts topped with balloons which are some of his only memories of his late cousin, and trench and tarp forts dug into the woods behind his house that were one of the best ways for him to connect with his childhood friends and get his head out of books and video games.`,
        `To Faith, it evokes memories of one of her favorite seasons, spent in the Middle East, with frequent trips to one of her favorite places, Wadi Rum, the red sand desert. This season was where some of her deepest friendships formed, and where in many ways she felt like she most thrived.`,
        `To them as a couple it represents their nomadic lifestyle, which began as a practical necessity because of the reality of international visa regulations and will likely continue out of their longing for a diversity of experiences and perspectives. As they sojourn, they long to metaphorically pitch a tent, that though it may not be as permanent a dwelling as those built of wood or stone, they hope that it can still be a place of refuge, especially for those who struggle to find a place they can belong.`,
        `On top of all of that, taken together with the flower cloud above, it also represents their connection with God’s people, who lived in tents as they wandered the desert in preparation for their permanent home. They were guided in their wanderings by a cloud, which represented the presence and glory of God, who traveled with them.`,
      ]}
    />
  )
}
