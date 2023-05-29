import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import door from "../assets/door_1.png";
import bablogo from "../assets/bablogo.png";
// import wave from "../assets/wave.svg";
import {
  Tooltip,
  extendTheme,
  ChakraProvider,
  defineStyleConfig,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

// define the base component styles
const baseTooltipStyle = {};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle: baseTooltipStyle });

const theme = extendTheme({
  components: {
    Tooltip: tooltipTheme,
  },
});

const WavePathBackground = (props) =>
  [0, 1, 2, 5, 6, 7].map((n) => <WavePath offset={n} />);

const WavePath = (props) => (
  <svg
    width="100vw"
    height="14em"
    viewBox="0 0 1098.72 37"
    style={{
      position: "absolute",
      top: `calc(-120px + ${props.offset * 14 || 0}dvh`,
    }}
  >
    <path
      id="curve"
      fill="transparent"
      d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
    />
    <text
      width="100%"
      style={{ transform: "translate3d(0, 0, 0)", fontSize: "3em" }}
    >
      <textPath
        style={{ transform: "translate3d(0, 0, 0)" }}
        alignmentBaseline="top"
        xlinkHref="#curve"
        id="text-path"
      >
        {"FAITH & NATHAN & ".repeat(5)}
        <animate
          attributeName="startOffset"
          from={`-${100 + props.offset * 20}%`}
          to={`-${props.offset * 20}%`}
          begin="0s"
          dur="3s"
          repeatCount="indefinite"
        />
      </textPath>
    </text>
  </svg>
);

export default function Index() {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Nathan & Faith</title>
      </Head>
      <WavePathBackground />
      <div
        style={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "min(3dvh, 2dvw)",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.95em",
                marginBottom: "0.3em",
              }}
            >
              Please check back later :&#41;
            </div>
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg width="25em" height="5em" overflow="visible">
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
                    width="87%"
                    height="60%"
                    fill="black"
                  ></rect>
                </svg>
                <svg y="50%" height="1.5em" overflow="visible">
                  <text y="97.5%" x="79%" dominantBaseline="ideographic">
                    87%
                  </text>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
