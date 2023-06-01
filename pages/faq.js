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
        <Box as="span" flex="1" textAlign="center" fontSize="1.4em">
          {props.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>{props.children}</AccordionPanel>
  </AccordionItem>
);

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
          minHeight: `calc(${14 * numTopWaves}dvw + 450px)`,
          fontSize: "0.7rem",
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
            <h1
              style={{
                marginBottom: "0.5em",
                fontSize: "2.9em",
                marginLeft: "0.5em",
              }}
            >
              FAQ
            </h1>
            <Accordion allowToggle>
              <FaqSection title="Dress Code">
                <p>Dark Colors</p>
                <p>Earth Tones</p>
                <p>Neutrals</p>
                <div
                  style={{ color: "grey", marginTop: "1em", fontSize: "0.8em" }}
                >
                  <p>&#40;+Bonus points for</p>
                  <p>outfits that suit the</p>
                  <p>"street-boho art exhibition"</p>
                  <p>aesthetic. Ask us for more</p>
                  <p>details if you're curious!&#41;</p>
                </div>
              </FaqSection>

              <FaqSection title="Schedule">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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
                    <div>Guests seated</div>
                    <div>4:00 pm</div>
                    <div>Ceremony</div>
                    <div>4:45 pm</div>
                    <div>High Tea Reception</div>
                    <div>6-ish pm</div>
                    <div>FIN.</div>
                  </div>
                </div>
              </FaqSection>
              <FaqSection title="Venue">
                <Box mb="2em">
                  <a href="https://www.google.com/maps/place/Lowercase/@1.3028042,103.8494325,17z/data=!3m2!4b1!5s0x31da19bbe3f56eb1:0x933756d15c1f6e6d!4m6!3m5!1s0x31da19bbe54f44ad:0xd56b9ca0edc99414!8m2!3d1.3028042!4d103.8520074!16s%2Fg%2F11b6nnjgnx?entry=ttu">
                    <p>Lowercase, Lasalle</p>
                    <p>Blk D #01-01</p>
                    <p>1 McNally St</p>
                    <p>187940</p>
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
