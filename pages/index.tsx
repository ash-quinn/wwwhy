import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>
        whyisbread: <b>a retard with a purpose</b>
      </h1>
      <div className="videoContainer">
        <div
          style={{
            width: "100%",
            height: "0px",
            position: "relative",
            paddingBottom: "56.250%",
          }}
        >
          <iframe
            src="https://streamable.com/e/27pw2f?autoplay=1&nocontrols=1"
            frameBorder={0}
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay"
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
