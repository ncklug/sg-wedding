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
        height: "100vh",
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0em" }}>
        <Paragraph>
          <Paragraph>...and that's how we met.</Paragraph>
          She just wandered through my front door during dinner...
          <Aside>
            "Who is this white boy hosting mala hot pot?", she thought to
            herself...
          </Aside>
        </Paragraph>
        <Paragraph>
          Later that evening, I gave her a tour of the house, sharing about my
          dreams for it to become a place of community and hospitality. She
          smiled and nodded knowingly, as if my dreams were somehow familiar to
          her.
          <Aside>
            At one point, I got so excited that I went to hug her, forgetting
            that we had only just met 30 minutes prior, which I then retracted
            and turned into the most awkward high-five...
          </Aside>
        </Paragraph>
        <Paragraph>
          At this point I knew there was something special about her, but could
          also tell that she was much cooler than me. I tried to play it cool
          while also taking every chance I could to talk with her more over the
          short 5 days she was in Seattle.
          <Aside>
            What I didn't realize was that she was direct enough that "playing
            it cool" just came across as uninterested... So much for my one
            foray into coolness...
          </Aside>
        </Paragraph>
        <Paragraph>
          By the end of the 4th day after meeting each other, we both knew we
          couldn't just let this go when she left. I last-minute took vacation
          to follow her to LA for the 4 days she was there, she came back to
          Seattle a couple months later for American Thanksgiving, and then I
          flew to Singapore for Chinese New Year and met her parents.
          <Aside>
            All the while, whenever we weren't in person, we spent most of our
            free time (about 4 hours/day) on video chats getting to know each
            other. We were simultaneously befuddled and intrigued that we had
            found someone who we felt made so little sense and yet so much
            sense. We were determined to go deeper until we really understood
            the other person, and haven't stopped since...
          </Aside>
        </Paragraph>
      </div>
    </div>
  );
}
