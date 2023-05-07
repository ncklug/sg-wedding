import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import door from "../assets/door_1.png";
import bablogo from "../assets/bablogo.png";
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

const LOADING_DOTS = ["   ", ".  ", ".. ", "..."];

export default function Index() {
  const [doorTooltipOpen, setDoorTooltipOpen] = useState(false);
  const timeoutId = useRef(undefined);

  useEffect(() => {
    if (doorTooltipOpen) {
      timeoutId.current = setTimeout(() => {
        setDoorTooltipOpen(false);
      }, 3000);
    } else {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = undefined;
      }
    }
  }, [doorTooltipOpen]);

  const [loadingDotsIdx, setLoadingDotsIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoadingDotsIdx((prev) => prev + 1);
    }, 800);
  }, [loadingDotsIdx]);

  return (
    <ChakraProvider theme={theme}>
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
        <Head>
          <title>Nathan & Faith</title>
        </Head>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <div style={{ fontSize: "0.95em", marginBottom: "0.3em" }}>
              Please check back later :&#41;
              {/* <span style={{ display: "inline-block", width: "3em" }}>
                {LOADING_DOTS[loadingDotsIdx % 4]}
              </span> */}
            </div>
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Tooltip
                label={
                  <span style={{ fontSize: "1em" }}>
                    Come back later :&#41;
                  </span>
                }
                bg="black"
                color="white"
                isOpen={doorTooltipOpen}
              >
                <Link
                  style={{ marginBottom: "3.5em", marginRight: "1em" }}
                  onClick={(e) => {
                    setDoorTooltipOpen((prev) => !prev);
                    e.preventDefault();
                  }}
                  href="/home"
                >
                  <Image
                    src={door}
                    style={{
                      width: "3em",
                      height: "5em",
                    }}
                  />
                </Link>
              </Tooltip> */}
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
                    width="74%"
                    height="60%"
                    fill="black"
                  ></rect>
                </svg>
                <svg y="50%" height="1.5em" overflow="visible">
                  <text y="97.5%" x="64%" dominantBaseline="ideographic">
                    74%
                  </text>
                </svg>
              </svg>
              {/* <Link
                style={{ marginBottom: "3em", marginLeft: "1em" }}
                href="/wedding"
              >
                <Image
                  src={bablogo}
                  style={{
                    width: "3.9em",
                    height: "3.9em",
                  }}
                />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
