import { WavePath } from "../components/WavePath"
import { ChakraProvider, Center } from "@chakra-ui/react"
import { theme } from "../components/theme"
import { useWindowSize } from "@uidotdev/usehooks"
import Link from "next/link"
import { Countdown } from "../components/Countdown"

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItem,
} from "@chakra-ui/react"

const Card = (props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        // flex: "0 1 33em",
        width: "70%",
        minWidth: "33em",
        maxWidth: "85dvh",
        backgroundColor: "black",
        color: "white",
        padding: "2em min(6em, 8dvw)",
        marginBottom: "1em",
        // width: "fit-content",
        textAlign: "center",
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      {/* <div
        style={
          {
            // maxWidth: 500,
            // flex: 1,
          }
        }
      > */}
      {props.children}
      {/* </div> */}
    </div>
  </div>
)

const FaqSection = (props) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box
          as="span"
          flex="1"
          textAlign="center"
          fontSize="1.4em"
          // color="#bfbfbf"
        >
          {props.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="#9f9f9f">
      {props.children}
    </AccordionPanel>
  </AccordionItem>
)

export default function Faq() {
  const { width, height } = useWindowSize()
  const numWaves =
    (height == null ? 0 : Math.min(Math.floor((height * 8) / width), 7)) + 1
  // let numTopWaves = 3;
  // if (width < 900) {
  //   numTopWaves++;
  // }
  // if (width < 500) {
  //   numTopWaves++;
  // }
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          flexDirection: "column",
          // height: "100dvh",
          minWidth: 350,
          // minHeight: `calc(14dvw + 450px)`,
          // minHeight: `34em`,
          fontSize: "max(0.7rem, 1.2dvw)",
          marginTop: "20dvh",
          // alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* {Array(numTopWaves)
          .fill()
          .map((_, i) => (
            <WavePath offset={i} fill="black" />
          ))} */}
        <Card>
          <div>
            <div
              style={{
                // display: "flex",
                // flexDirection: "row",
                color: "white",
                fontSize: "2.7em",

                // fontSize: isHorizontal
                //   ? baseHeartHeight / 18
                //   : baseHeartHeight / 15,
              }}
            >
              <div
              // style={
              //   // isHorizontal
              //   //   ? {}
              //   //   : {
              //   //       fontSize: "0.5em",
              //   //     }
              // }
              >
                {/* <div>24TH JUNE</div>
                <div style={{ fontSize: "0.6em" }}><Countdown /></div> */}
              </div>
            </div>
            <h1
              style={{
                marginBottom: "0.5em",
                fontSize: "2.9em",
                marginLeft: "0.5em",
                marginTop: "1.0em",
              }}
            >
              FAQ
            </h1>
            <Accordion
              allowToggle
              // onChange={() => {
              //   setTimeout(
              //     () => window.scrollTo(0, document.body.scrollHeight),
              //     200
              //   );
              // }}
            >
              <FaqSection title="Dress Code">
                <p>Dark Colors</p>
                <p>Earth Tones</p>
                <p>Neutrals</p>
                <div
                  style={{
                    color: "#606060",
                    marginTop: "1em",
                    fontSize: "0.6em",
                  }}
                >
                  <p>&#40;+Bonus points for "street-boho</p>
                  <p>outfits that you would wear to</p>
                  <p>an art exhibition" aesthetic.</p>
                  <p>Ask us for more details</p>
                  <p>if you're curious!&#41;</p>
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
                    <div>6:30 pm</div>
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
                <div style={{ marginBottom: "2em" }}>
                  * Note that there are road closures scheduled for the city
                  center area for National Day parade preparation.
                </div>
                <div>Transport/parking </div>
                <div>information</div>
                <div>
                  <a href="https://www.lasalle.edu.sg/institute-of-contemporary-arts-sg/visit-ica-singapore/getting-here">
                    click here
                  </a>
                </div>
              </FaqSection>
              <FaqSection title="Livestream">
                <Box mb="2em">There was an error with the livestream :(</Box>
                <div>
                  Once the videographer gets back to us with their footage,
                  we'll post it here for you to watch :)
                </div>
              </FaqSection>
            </Accordion>
            <div style={{ marginTop: "5em", fontSize: "0.8em" }}>
              <Link href="/">Return to main page</Link>
            </div>
          </div>
        </Card>
        <div style={{ position: "fixed", top: 0, zIndex: -1, width: "100dvw" }}>
          {Array(numWaves)
            .fill(0)
            .map((_, i) => (
              <WavePath offset={i % 2} fill="black" />
            ))}
        </div>
      </div>
    </ChakraProvider>
  )
}
