import { useEffect } from "react";

const Paragraph = (props) => (
  <p
    style={{
      display: "block",
      // lineHeight: 1.3,
      margin: "1em 0",
      fontFamily: "'Inter', sans-serif",
      ...props.style,
    }}
  >
    {props.children}
  </p>
);

export default function Home() {
  return (
    <div
      style={{
        margin: "5em",
        height: "100vh",
      }}
    >
      <div>
        <Paragraph>...and that's how we met.</Paragraph>
        <Paragraph style={{ marginBottom: "3em" }}>
          She just wandered through my front door during dinner...
        </Paragraph>
        <Paragraph style={{ marginBottom: "3em" }}>
          &#40;"Who is this white boy hosting mala hot pot?", she thought to
          herself&#41;
        </Paragraph>
        <Paragraph style={{ marginBottom: "3em" }}>
          Later that evening, I gave her a tour of the house, sharing about my
          dreams for it to become a place of community and hospitality. She
          smiled and nodded knowingly, as if my dreams were somehow familiar to
          her.
        </Paragraph>
      </div>
    </div>
  );
}
