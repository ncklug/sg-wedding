import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bablogo from "../assets/bablogo.png";
import webFaq from "../assets/uwuwebFAQwhite.png";
import backgroundHorizontal from "../assets/backgroundHorizontal.png";
import backgroundVertical from "../assets/backgroundVertical.png";
import { ChakraProvider, Center } from "@chakra-ui/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { theme } from "../components/theme";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [pulseFactor, setPulseFactor] = useState(1);
  const clearTimeoutRef = useRef();
  const { width, height } = useWindowSize();
  const isHorizontal = width > height;
  const imageMeta = isHorizontal ? backgroundHorizontal : backgroundVertical;
  const viewportRatio = width / height;
  const imageRatio = imageMeta.width / imageMeta.height;
  let size = { width: 0, height: 0 };
  if (width != null) {
    size =
      viewportRatio > imageRatio
        ? { height: height, width: height * imageRatio }
        : { width: width, height: width / imageRatio };
  }
  useEffect(() => {
    if (clearTimeoutRef.current) {
      clearTimeout(clearTimeoutRef.current);
      clearTimeoutRef.current = undefined;
    }
    clearTimeoutRef.current = setTimeout(
      () => {
        setPulseFactor((prev) => (prev === 1 ? prev * 1.05 : 1));
      },
      pulseFactor === 1 ? 500 : 70
    );
  }, [pulseFactor]);
  const faqRatio = (1.2 * (isHorizontal ? 2.5 : 3)) / pulseFactor;
  const heartWidth = (webFaq.width * (size.width / imageMeta.width)) / faqRatio;
  const heartHeight =
    (webFaq.height * (size.height / imageMeta.height)) / faqRatio;
  const heartWidthOffset = (heartWidth - heartWidth * pulseFactor) / 2;
  const heartHeightOffset = (heartHeight - heartHeight * pulseFactor) / 2;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Nathan & Faith</title>
      </Head>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <Center h="100dvh" w="100dvw">
          <div style={size}>
            <Image {...size} src={imageMeta} />
            <Link
              href="/faq"
              style={{
                position: "relative",
                zIndex: 1,
                top:
                  heartHeightOffset -
                  size.height +
                  size.height * (isHorizontal ? 0.44 : 0.47),
                left:
                  heartWidthOffset + size.width * (isHorizontal ? 0.22 : 0.65),
                transform: `rotate(${isHorizontal ? -5 : 5}deg)`,
              }}
            >
              <Image
                style={{}}
                width={heartWidth}
                height={heartHeight}
                src={webFaq}
              />
            </Link>
          </div>
        </Center>
      </div>
    </ChakraProvider>
  );
}
