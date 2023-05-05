import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import door from "../assets/door_1.png";
import {
  Tooltip,
  extendTheme,
  ChakraProvider,
  defineStyleConfig,
} from "@chakra-ui/react";

// define the base component styles
const baseTooltipStyle = {};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle: baseTooltipStyle });

const theme = extendTheme({
  components: {
    Tooltip: tooltipTheme,
  },
});

export default function Index() {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "min(3vh, 2vw)",
        }}
      >
        <Head>
          <title>SG Wedding!</title>
        </Head>

        <div style={{ flex: "2", display: "flex" }}>
          <div
            style={{
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tooltip
              label={
                <span style={{ fontSize: "1em" }}>Come back later :&#41;</span>
              }
              // placement="top"
              bg="black"
              color="white"
            >
              <Link
                style={{ marginBottom: "3.5em", marginRight: "1em" }}
                onClick={(e) => {
                  e.preventDefault();
                }}
                href="/home"
              >
                <Image
                  src={door}
                  style={{
                    width: "3em",
                    height: "5em",
                    /* transform: perspective(300px) rotateY(-28deg) skew(0deg, 11deg) */
                  }}
                />
              </Link>
            </Tooltip>
            <svg width="25em" height="5em" overflow="visible">
              {/* TODO: Add dots */}
              <svg height="50%">
                <rect width="100%" height="100%" fill="black"></rect>
                <rect
                  y="10%"
                  x="1%"
                  width="98%"
                  height="80%"
                  fill="white"
                ></rect>
                <rect
                  y="20%"
                  x="2%"
                  width="93%"
                  height="60%"
                  fill="black"
                ></rect>
              </svg>
              <svg y="50%" height="1.5em" overflow="visible">
                <text y="97.5%" x="89%" dominantBaseline="ideographic">
                  99%
                </text>
              </svg>
            </svg>
          </div>
        </div>
        <div style={{ flex: "1" }}></div>
      </div>
    </ChakraProvider>
  );
}
