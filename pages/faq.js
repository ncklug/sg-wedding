import { WavePath } from "../components/WavePath";

const Card = (props) => (
  <div
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "1em 0",
      // margin: "5em 0",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontSize: "20px",
      textAlign: "center",
    }}
  >
    {props.children}
  </div>
);

const CardSection = (props) => <div>{props.children}</div>;

export default function Home() {
  return (
    <div
      style={{
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <WavePath offset={0.5} fill="black" />
      <Card>
        <div>
          <h1>FAQ</h1>
          <h2>
            <a href="#dresscode">Dress Code</a>
          </h2>
          <h2>
            <a href="#schedule">Schedule</a>
          </h2>
          <h2>
            <a href="#venue">Venue</a>
          </h2>
          <h2>
            <a href="#transport">Transport/Parking</a>
          </h2>
        </div>
      </Card>
      <WavePath offset={0.5} fill="black" />
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3em",
            margin: "1em 0",
          }}
        >
          <CardSection>
            <h2 id="dresscode">Dress Code</h2>
            <p>Dark colors, neutrals, earth tones</p>
            {/* <p style={{ color: "grey" }}>If desired, "punk boho"</p> */}
          </CardSection>
          <CardSection>
            <h2 id="schedule" style={{ marginBottom: "1em" }}>
              Schedule
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                marginLeft: "20%",
                textAlign: "left",
                gap: "1em 2em",
              }}
            >
              <div>3:30 pm</div>
              <div>Arrival</div>
              <div>3:45 pm</div>
              <div>Seating</div>
              <div>4:00 pm</div>
              <div>Ceremony</div>
              <div>4:45 pm</div>
              <div>Reception</div>
              <div>6-ish pm</div>
              <div>fin.</div>
            </div>
          </CardSection>
          <CardSection>
            <h2 id="venue">Venue</h2>
            <a href="https://www.google.com/maps/place/Lowercase/@1.3028042,103.8494325,17z/data=!3m2!4b1!5s0x31da19bbe3f56eb1:0x933756d15c1f6e6d!4m6!3m5!1s0x31da19bbe54f44ad:0xd56b9ca0edc99414!8m2!3d1.3028042!4d103.8520074!16s%2Fg%2F11b6nnjgnx?entry=ttu">
              <p>Lowercase, Lasalle</p>
              <p>Blk D #01-01, 1 McNally St, 187940</p>
            </a>
          </CardSection>
          <CardSection>
            <h2 id="transport">
              <a href="https://www.lasalle.edu.sg/institute-of-contemporary-arts-sg/visit-ica-singapore/getting-here">
                Transport/Parking
              </a>
            </h2>
          </CardSection>
        </div>
      </Card>
      <WavePath offset={0.5} fill="black" />
    </div>
  );
}
