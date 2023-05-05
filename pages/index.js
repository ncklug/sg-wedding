import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import door from "../assets/door_1.png";

export default function Index() {
  return (
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
          style={{ alignSelf: "center", display: "flex", alignItems: "center" }}
        >
          <Link
            style={{ marginBottom: "3.5em", marginRight: "1em" }}
            onClick={(e) => {
              alert("Please try again later :)");
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
          <svg width="25em" height="5em" overflow="visible">
            {/* TODO: Add dots */}
            <svg height="50%">
              <rect width="100%" height="100%" fill="black"></rect>
              <rect
                y="10%"
                x="0.5%"
                width="99%"
                height="80%"
                fill="white"
              ></rect>
              <rect y="20%" x="1%" width="95%" height="60%" fill="black"></rect>
            </svg>
            <svg y="50%" height="1.5em" overflow="visible">
              <text y="97.5%" x="89%" dominant-baseline="ideographic">
                99%
              </text>
            </svg>
          </svg>
        </div>
      </div>
      <div style={{ flex: "1" }}></div>
    </div>
  );
}
