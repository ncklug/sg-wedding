import door6 from "../assets/door_6.png";
import Image from "next/image";
import Link from "next/link";

const Paragraph = (props) => (
  <div
    style={{
      margin: "3em 0",
      ...props.style,
    }}
  >
    {props.children}
  </div>
);

const Aside = (props) => (
  <div
    style={{
      margin: "1em 0 1em 4em",
      color: "grey",
      ...props.style,
    }}
  >
    &#40;{props.children}&#41;
  </div>
);

export default function Home() {
  return (
    <div
      style={{
        padding: "3em 0",
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.5,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        width: "100dvw",
      }}
    >
      <div
        style={{
          padding: "min(5em, 5dvw)",
          backgroundColor: "white",
          // width: "70%",
          // minWidth: "33em",
          maxWidth: "85dvh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2em",
            alignItems: "center",
          }}
        >
          <Image style={{ display: "inline" }} src={door6} width="55" />
          {/* <Paragraph style={{ marginBottom: "3em" }}> */}
          <span>
            She walked through his front door one day during dinner... and
            that's how they met :&#41;
          </span>
        </div>
        {/* </Paragraph> */}
        <Paragraph>
          She was visiting her good friend in Seattle, who happened to be his
          housemate...
          <Aside>
            "Wah, this white boy is hosting mala hot pot!", she thought to
            herself
          </Aside>
        </Paragraph>
        <Paragraph>
          Later that evening, he gave her a tour of his house, sharing about his
          dreams for it to become a place of community and hospitality. To his
          surprise, what began as an opportunity for him to share his vision
          turned into a deeper conversation as she opened up about her own
          dreams for what intentional community could be...
          <Aside>
            At one point, he got so excited that he attempted to give her a hug,
            forgetting that they had only just met 30 minutes prior, whereupon
            he then retracted said hug mid-way and turned it into the most
            awkward high-five
          </Aside>
        </Paragraph>
        <Paragraph>
          He knew there was something special about her, but found himself a bit
          out of his depth when it came to matching her vibe and style game. He
          tried to play it cool while also taking every chance he could to talk
          with her more over the short 5 days she was in Seattle...
          <Aside>
            What he didn't realize was that she was direct enough that "playing
            it cool" just came across as uninterested... Thankfully she was
            direct enough that she just straight up asked him if he was
            interested
          </Aside>
        </Paragraph>
        <Paragraph>
          They both knew they couldn't just let this go when she left. This
          non-spontaneous boy took a spontaneous vacation to follow her to LA
          for the 4 days she was there, she came back to Seattle a couple months
          later for American Thanksgiving, and then he flew to Singapore for
          Chinese New Year and met her parents...
          <Aside>
            All the while, whenever they weren't in person, they spent most of
            their free time on video chats getting to know each other. They were
            simultaneously befuddled and intrigued that they had found someone
            who they felt made so little sense and yet so much sense. They were
            determined to really understand the other person and solve the
            mystery, and haven't stopped since
          </Aside>
        </Paragraph>
        <Paragraph>
          A few short weeks later, the pandemic closed the world's borders and
          left them stranded apart. They began to supplement their regular video
          chats with shows they would watch simultaneously ("Three, two, one,
          go", he would say, to make sure they were watching the same thing at
          the same time so their laughter and commentary were in sync) as well
          as video games that ended up being surprisingly helpful in building a
          mutual understanding of their dynamics...
          <Aside>
            She ran headfirst into "danger", while he strategized from a safe
            distance
          </Aside>
        </Paragraph>
        <Paragraph>
          Then, suddenly, a window of opportunity. Singapore very briefly opened
          its borders for visitors with close ties to Singaporeans, which
          amazingly included long term relationships even though they weren't
          engaged or married. On Christmas Day, having broken his toe just two
          days prior, he hobbled through airport security and into his
          quarantine hotel, where he found bags of welcome gifts she left for
          him...
          <Aside>
            One of the welcome gifts was an adorable mini Christmas tree that,
            in the midst of his disorientation, he didn't realize was real and
            therefore needed to be watered. So it died.
          </Aside>
        </Paragraph>
        <Paragraph>
          After his 6 month visa in Singapore was up, and as parts of the world
          began to return to normal, they found other places to continue growing
          their relationship in person. They traveled through 9 countries in 10
          months, studied justice and peacemaking together in community in South
          Africa, toured Croatia with her parents and Israel with his, and most
          recently visited her friend and his former housemate &#40;who was the
          reason they met in the first place&#41; in Tokyo, all the while
          reading innumerable hotel, hostel, and Airbnb reviews and learning all
          the sorts of complicated things that a couple can only learn about
          themselves and each other in the midst of ever-changing
          circumstances...
        </Paragraph>
        <Paragraph>
          Through all their adventures, it became clear that the personality
          differences that they were occasionally uncertain about ended up
          actually catalyzing growth in each of them in areas that had been
          stuck for decades. But of course, they're not simply getting married
          to become legal live-in life coaches; they're excited about the kind
          of person they've found in each other and the beautiful life they can
          see themselves building together in a lifelong collaboration...
        </Paragraph>
        <Paragraph style={{ marginTop: "5em" }}>
          <Link href="/">Return to main page</Link>
        </Paragraph>
      </div>
    </div>
  );
}
