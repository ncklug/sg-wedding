import { WavePath } from "../components/WavePath";
import { ChakraProvider, Center } from "@chakra-ui/react";
import { theme } from "../components/theme";
import { useWindowSize } from "@uidotdev/usehooks";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItem,
} from "@chakra-ui/react";

const Card = (props) => (
  <div
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "2em 3em",
      width: "100%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        maxWidth: 800,
        flex: 1,
      }}
    >
      {props.children}
    </div>
  </div>
);

const FaqSection = (props) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
          {props.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>{props.children}</AccordionPanel>
  </AccordionItem>
);

// export default function Home() {
//   return (
//     <div
//       style={{
//         flexDirection: "column",
//         height: "100vh",
//       }}
//     >
//       <WavePath offset={0.5} fill="black" />
//       <Card>
//         <div>
//           <h1>FAQ</h1>
//           <h2>
//             <a href="#dresscode">Dress Code</a>
//           </h2>
//           <h2>
//             <a href="#schedule">Schedule</a>
//           </h2>
//           <h2>
//             <a href="#venue">Venue</a>
//           </h2>
//           <h2>
//             <a href="#transport" style={{ textOverflow: "" }}>
//               Transport/Parking
//             </a>
//           </h2>
//         </div>
//       </Card>
//       <WavePath offset={0.5} fill="black" />
//       <Card>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "3em",
//             margin: "1em 0",
//           }}
//         >
//           <CardSection>
//             <h2 id="dresscode">Dress Code</h2>
//             <p>Dark colors, neutrals, earth tones</p>
//             <p style={{ color: "grey" }}>
//               &#40;Bonus points for outfits that suit the "punk boho"
//               aesthetic&#41;
//             </p>
//           </CardSection>
//           <CardSection>
// <h2 id="schedule" style={{ marginBottom: "1em" }}>
//   Schedule
// </h2>
// <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "auto 1fr",
//     marginLeft: "20%",
//     textAlign: "left",
//     gap: "1em 2em",
//   }}
// >
//   <div>3:30 pm</div>
//   <div>Arrival</div>
//   <div>3:45 pm</div>
//   <div>Seating</div>
//   <div>4:00 pm</div>
//   <div>Ceremony</div>
//   <div>4:45 pm</div>
//   <div>Reception</div>
//   <div>6-ish pm</div>
//   <div>fin.</div>
// </div>
//           </CardSection>
//           <CardSection>
// <h2 id="venue">Venue</h2>
// <a href="https://www.google.com/maps/place/Lowercase/@1.3028042,103.8494325,17z/data=!3m2!4b1!5s0x31da19bbe3f56eb1:0x933756d15c1f6e6d!4m6!3m5!1s0x31da19bbe54f44ad:0xd56b9ca0edc99414!8m2!3d1.3028042!4d103.8520074!16s%2Fg%2F11b6nnjgnx?entry=ttu">
//   <p>Lowercase, Lasalle</p>
//   <p>Blk D #01-01, 1 McNally St, 187940</p>
// </a>
//           </CardSection>
//           <CardSection>
//             <h2 id="transport">
//               <a href="https://www.lasalle.edu.sg/institute-of-contemporary-arts-sg/visit-ica-singapore/getting-here">
//                 Transport/Parking
//               </a>
//             </h2>
//           </CardSection>
//         </div>
//       </Card>
//       <WavePath offset={0.5} fill="black" />
//     </div>
//   );
// }

export default function Faq() {
  const { width, height } = useWindowSize();
  let numTopWaves = 1;
  if (width < 900) {
    numTopWaves++;
  }
  if (width < 500) {
    numTopWaves++;
  }
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          flexDirection: "column",
          height: "100dvh",
          minWidth: 450,
          minHeight: `calc(${14 * numTopWaves}dvw + 400px)`,
          fontSize: "0.8rem",
          overflow: "hidden",
        }}
      >
        {Array(numTopWaves)
          .fill()
          .map((_, i) => (
            <WavePath offset={i} fill="black" />
          ))}
        <Card>
          <div>
            <h1 style={{ marginBottom: "1em" }}>FAQ</h1>
            <Accordion allowToggle>
              <FaqSection title="Dress Code">
                <p>Dark colors, neutrals, earth tones</p>
                <p style={{ color: "grey", marginTop: "1em" }}>
                  &#40;Bonus points for outfits that suit the "punk boho art
                  gallery" aesthetic. Ask us for more details if you're
                  curious&#41;
                </p>
              </FaqSection>

              <FaqSection title="Schedule">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      // marginLeft: "20%",
                      textAlign: "left",
                      gap: "1em 2em",
                    }}
                  >
                    <div>3:45 pm</div>
                    <div>Seating</div>
                    <div>4:00 pm</div>
                    <div>Ceremony</div>
                    <div>4:45 pm</div>
                    <div>Reception</div>
                    <div>6-ish pm</div>
                    <div>fin.</div>
                  </div>
                </div>
              </FaqSection>
              <FaqSection title="Venue">
                <Box mb="2em">
                  <a href="https://www.google.com/maps/place/Lowercase/@1.3028042,103.8494325,17z/data=!3m2!4b1!5s0x31da19bbe3f56eb1:0x933756d15c1f6e6d!4m6!3m5!1s0x31da19bbe54f44ad:0xd56b9ca0edc99414!8m2!3d1.3028042!4d103.8520074!16s%2Fg%2F11b6nnjgnx?entry=ttu">
                    <p>Lowercase, Lasalle</p>
                    <p>Blk D #01-01, 1 McNally St, 187940</p>
                  </a>
                </Box>
                For transport/parking information,{" "}
                <a href="https://www.lasalle.edu.sg/institute-of-contemporary-arts-sg/visit-ica-singapore/getting-here">
                  click here
                </a>
              </FaqSection>
            </Accordion>
          </div>
        </Card>
        {/* {Array().fill(0).map((_, i) => 
        )} */}
        <WavePath offset={0} fill="black" />
        <WavePath offset={1} fill="black" />
        <WavePath offset={2} fill="black" />
        <WavePath offset={3} fill="black" />
        <WavePath offset={4} fill="black" />
        <WavePath offset={5} fill="black" />
        <WavePath offset={6} fill="black" />
        <WavePath offset={9} fill="black" />
      </div>
    </ChakraProvider>
  );
}
