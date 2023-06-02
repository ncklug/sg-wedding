const Paragraph = (props) => (
  <div
    style={{
      margin: "1em 0",
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
        margin: "5em",
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0em" }}>
        <Paragraph>
          <Paragraph>...and that's how they met.</Paragraph>
          She just wandered through his front door during dinner...
          <Aside>
            "Who is this white boy hosting mala hot pot?", she thought to
            herself...
          </Aside>
        </Paragraph>
        <Paragraph>
          Later that evening, he gave her a tour of his house, sharing about his
          dreams for it to become a place of community and hospitality. To his
          surprise, what began as an opportunity for him to share his vision
          turned into a collaboration as she opened up about her own dreams for
          what community could be.
          <Aside>
            At one point, he got so excited that he went to hug her, forgetting
            that they had only just met 30 minutes prior, which he then
            retracted and turned into the most awkward high-five...
          </Aside>
        </Paragraph>
        <Paragraph>
          At this point he knew there was something special about her, but could
          also tell that she was much cooler than he was. He tried to play it
          cool while also taking every chance he could to talk with her more
          over the short 5 days she was in Seattle.
          <Aside>
            What he didn't realize was that she was direct enough that "playing
            it cool" just came across as uninterested... So much for his one
            foray into coolness...
          </Aside>
        </Paragraph>
        <Paragraph>
          By the end of the 4th day after meeting each other, they both knew
          they couldn't just let this go when she left. He last-minute took
          vacation to follow her to LA for the 4 days she was there, she came
          back to Seattle a couple months later for American Thanksgiving, and
          then he flew to Singapore for Chinese New Year and met her parents.
          <Aside>
            All the while, whenever they weren't in person, they spent most of
            their free time on video chats getting to know each other. They were
            simultaneously befuddled and intrigued that they had found someone
            who they felt made so little sense and yet so much sense. They were
            determined to go deeper until they really understood the other
            person, and haven't stopped since...
          </Aside>
        </Paragraph>
        <Paragraph>
          A few short weeks later, the pandemic closed the world's borders and
          left them stranded apart. They began to supplement their regular video
          chats with shows they would watch simultaneously ("Three, two, one,
          go", he would say, to make sure they were watching the same thing at
          the same time so their laughter and commentary was also in sync) as
          well as video games that ended up being surprisingly helpful to build
          understanding of their dynamics.
        </Paragraph>
        <Paragraph>
          Then, suddenly, an window of opportunity. Singapore very briefly
          opened its borders for visitors with close ties to Singaporeans, which
          amazingly included long term relationships even though they weren't
          engaged or married. On Christmas Day, with a broken toe, he hobbled
          through airport security and into his quarantine hotel, where he found
          bags of welcome gifts she left for him.
          <Aside>
            One of the welcome gifts was an adorable mini Christmas tree that,
            in the midst of his disorientation, he didn't realize was real and
            therefore needed to be watered...
          </Aside>
        </Paragraph>
        <Paragraph>
          After his time in Singapore, and as the world began to return to
          normal, they found other ways and places to stick together. They
          visited her friend and his former housemate &#40;who was the reason
          they met in the first place&#41; in Tokyo, studied justice and
          peacemaking together for 3 months in community in South Africa, read
          innumerable hotel, hostel, and Airbnb reviews, and learned all the
          sorts of complicated things that a couple can only learn about
          themselves and each other in the midst of unstable circumstances.
        </Paragraph>
        <Paragraph>
          Over time, it became clear that the differences that they (mostly he)
          wondered might drive them apart actually catalyzed growth in each of
          them in areas that had been stuck for decades. While they still have a
          lot to learn to fully thrive together, it's clear to both of them at
          this point that they couldn't have found a better lifelong
          collaborator...
        </Paragraph>
      </div>
    </div>
  );
}
