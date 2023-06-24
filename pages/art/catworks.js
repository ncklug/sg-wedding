import Image from "next/image"
import qr from "../../assets/qr/catworks.svg"
import { ArtistStatement } from "../../components/ArtistStatement"

export default function Catworks() {
  return (
    <ArtistStatement
      title={
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>
            “This is why I went to art school”
          </div>

          <div style={{ fontWeight: 800, fontSize: "1.2em" }}>
            (Faith and Nathan’s actually affordable art)
          </div>
        </div>
      }
      materials="Assemblage of capsule machine figures (mostly cats), dried flowers, found objects, miscellaneous"
      qr={qr}
      // mode="print"
      paragraphs={[
        `Nathan really strongly encouraged Faith to make this series, because
he felt it really captures a couple of the things he finds most
delightful about her.`,
        `First, she has an eye for the most peculiarly wonderful things that
other people may overlook. As they travel, she always has an eye out
for free or inexpensive nice things, whether they be small things like
feathers or plants or a small wheel, or large things like the time she
got a free antique trunk with barely working handles at a flea market
that they then carried all around Tokyo with them.`,
        `She doesn’t stop with just collecting things though. Those collected
things are then put together in delightfully unexpected ways like the
works you see here. She also does this with food, especially leftovers
(Nathan calls her a “food composer”), finding ways to make things that
both of them dread to eat again into something better than it started.`,
        `The title references her angst that this is what she’s using her art
school education for, and also the time they went to an “affordable
art fair” in Singapore where almost all the art was over $1000. These
pieces are all under $10 (not actually for sale) :)`,
      ]}
    />
  )
}
