import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bablogo from "../assets/bablogo.png";
import webFaq from "../assets/uwuwebFAQwhite.png";
import backgroundHorizontal from "../assets/backgroundHorizontal.png";
import backgroundVertical from "../assets/backgroundVertical.png";
import {
  extendTheme,
  ChakraProvider,
  defineStyleConfig,
  Center,
} from "@chakra-ui/react";
import { useWindowSize } from "@uidotdev/usehooks";

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
  const faqRatio = isHorizontal ? 2.5 : 3;

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
                top: -size.height + size.height * (isHorizontal ? 0.44 : 0.47),
                left: size.width * (isHorizontal ? 0.22 : 0.65),
                transform: `rotate(${isHorizontal ? -5 : 5}deg)`,
              }}
            >
              <Image
                style={{}}
                width={
                  (webFaq.width * (size.width / imageMeta.width)) / faqRatio
                }
                height={
                  (webFaq.height * (size.height / imageMeta.height)) / faqRatio
                }
                src={webFaq}
              />
            </Link>
          </div>
        </Center>
        {/* <div
          style={
            height != null
              ? {
                  height,
                  width,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage:
                    width > height
                      ? `url("${backgroundHorizontal.src}")`
                      : `url("${backgroundVertical.src}")`,
                }
              : {}
          }
        /> */}
      </div>
    </ChakraProvider>
  );
}
