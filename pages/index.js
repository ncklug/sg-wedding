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
            style={{ marginBottom: "5%", marginRight: "0.5rem" }}
            onClick={(e) => {
              alert("Please try again later :)");
              e.preventDefault();
            }}
            href="/home"
          >
            <Image
              src={door}
              style={{
                width: 37,
                height: 62,
                /* transform: perspective(300px) rotateY(-28deg) skew(0deg, 11deg) */
              }}
            />
          </Link>
          <svg width="50vw" height="10vh">
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
            <svg y="50%" height="50%">
              <text y="97.5%" x="89%">
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
