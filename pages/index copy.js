import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import webFaq from "../assets/uwuwebFAQwhite.png";
import backgroundHorizontal from "../assets/backgroundHorizontal.png";
import backgroundVertical from "../assets/backgroundVerticalCropped.png";
import { ChakraProvider, Center } from "@chakra-ui/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { theme } from "../components/theme";
import { Door } from "../components/Door";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const WEDDING_TIME = "06/24/2023 15:45:00+08:00"

const Countdown = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [baseCurrentTime, setBaseCurrentTime] = useState(new Date(WEDDING_TIME).getTime())
  useEffect(() => {
    const timeoutId = setTimeout(() => {setElapsedSeconds(prev => prev + 1)}, 1000)
    return () => clearTimeout(timeoutId)
  }, [elapsedSeconds])
  useEffect(() => {
    setBaseCurrentTime((new Date()).getTime())
  }, []) 
  const currentTime = baseCurrentTime + (elapsedSeconds *1000)
  // const weddingTime = (new Date("06/24/2023 13:45:00")).getTime()
  const weddingTime = (new Date(WEDDING_TIME)).getTime()
  const differenceInMiliseconds = weddingTime - currentTime
  if (differenceInMiliseconds < 0) {
    return 'NAO!'
  }
  const differenceInSeconds = Math.floor(differenceInMiliseconds /1000)
  const seconds = differenceInSeconds % 60
  const differenceInMinutes = Math.floor(differenceInSeconds /60)
  const minutes = differenceInMinutes %60
  const differenceInHours = Math.floor(differenceInMinutes /60)
  const hours = differenceInHours % 24
  const days = Math.floor(differenceInHours /24)

  return <div>
    <div>
      {`${days}DAY${days === 1 ? '' : 'S'}`}
      </div><div>{`${hours}HR${hours === 1 ? '' : 'S'}`}
    </div>
    <div>
      {`${minutes}MIN${minutes === 1 ? '' : 'S'}`}</div><div>{`${seconds}SEC${seconds === 1 ? '' : 'S'}`}
    </div>
  </div>
}

export default function Index() {
  // Add comment
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
  const baseHeartHeight = webFaq.height * (size.height / imageMeta.height);
  const heartHeight = baseHeartHeight / faqRatio;
  const heartWidthOffset = (heartWidth - heartWidth * pulseFactor) / 2;
  const heartHeightOffset = (heartHeight - heartHeight * pulseFactor) / 2;
  const router = useRouter();

  const totalNumArrows = isHorizontal ? 4 : 3;
  const [arrowCount, setArrowCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setArrowCount((prev) => (prev + 1) % totalNumArrows);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [arrowCount]);

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
            <div
              style={{
                position: "relative",
                zIndex: 1,
                top: -size.height + size.height * (isHorizontal ? 0.43 : 0.21),
                left: size.width * (isHorizontal ? 0.14 : 0.15),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  fontSize: isHorizontal
                    ? baseHeartHeight / 18
                    : baseHeartHeight / 15,
                }}
              >
                <div style={{ fontSize: isHorizontal ? "2em" : "1.2em" }}>
                  {Array(totalNumArrows - 1)
                    .fill()
                    .map((_, i) => (
                      <span
                        style={
                          totalNumArrows - 2 - i < arrowCount
                            ? {}
                            : { visibility: "hidden" }
                        }
                      >
                        &lt;
                      </span>
                    ))}
                </div>
                <div
                  style={
                    isHorizontal
                      ? {}
                      : {
                          fontSize: "0.6em",
                        }
                  }
                >
                  <div>Our</div>
                  <div>Story</div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                top: -size.height + size.height * (isHorizontal ? 0.49 : 0.37),
                left: size.width * (isHorizontal ? 0.04 : 0.05),

              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  fontSize: isHorizontal
                    ? baseHeartHeight / 18
                    : baseHeartHeight / 15,
                }}
              >
                <div
                  style={
                    isHorizontal
                      ? {}
                      : {
                          fontSize: "0.6em",
                        }
                  }
                >
                  <div>24/06</div><div>2023</div>
                  <div><Countdown /></div>
                </div>
              </div>
            </div>
            <Link
              href="/faq"
              style={{
                position: "relative",
                zIndex: 1,
                // top: 
                //   heartHeightOffset -
                //   size.height +
                //   size.height * (isHorizontal ? 0.44 : 0.4)
                // ,
                top: 
                  heartHeightOffset -
                  size.height +
                  size.height * (isHorizontal ? 0.14 : 0.4)
                ,
                left:
                  heartWidthOffset + size.width * (isHorizontal ? 0.3 : 0.65),
                transform: `rotate(${isHorizontal ? -5 : 5}deg)`,
              }}
            >
              <Image width={heartWidth} height={heartHeight} src={webFaq} />
            </Link>
            <Door
              onOpen={() => router.push("/story")}
              width={isHorizontal ? baseHeartHeight / 4 : baseHeartHeight / 7}
              style={{
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
                // top: `calc(${
                //   -size.height -
                //    heartHeight +
                //   size.height * (isHorizontal ? 0.12 : 0.05)
                // }px)`,
                top: 
                  -size.height -
                   heartHeight +
                  size.height * (isHorizontal ? -0.07 : 0.05)
                ,
                left: size.width * (isHorizontal ? 0.05 : 0.04),
              }}
            />
          </div>
        </Center>
      </div>
    </ChakraProvider>
  );
}
