import { lookup } from "dns";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
const Block = styled.div`
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  perspective: 600px;
  .contens-area {
    display: flex;
    width: 500px;
    height: 500px;
    position: relative;
    .image-stone {
      transform: rotateY(45deg);
    }
    .image-pointer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    }
    video,
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: auto;
    }
    video {
      animation: video 5s ease alternate infinite;
    }
  }

  @keyframes video {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;
const MouseMoveBird = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const image1 = useRef<HTMLImageElement>(null); //돌,
  const image2 = useRef<HTMLImageElement>(null); //나뭇가지,
  const image3 = useRef<HTMLImageElement>(null); //벌레 및 나뭇잎,
  const image4 = useRef<HTMLImageElement>(null); //깃털

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.001;
  const loop = () => {
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    image1.current!.style.transform = `rotateY(${mx / 80}deg) `;
    image2.current!.style.transform = `translate(${x}px, ${y}px)`;
    image3.current!.style.transform = `translate(${mx / 40}px, ${my / 20}px)`;
    image4.current!.style.transform = `translate(${mx / 40}px, ${-(
      my / 10
    )}px)`;

    window.requestAnimationFrame(loop);
  };
  document.querySelector("html")!.style.cursor = "none";

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      y = e.clientY;
      x = e.clientX;
      loop();
    });
  }, []);
  return (
    <Block>
      <div className="contens-area">
        <img
          className="image-stone"
          ref={image1}
          src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/1-b90e91a4.png"
        />

        <div className="vod">
          <video
            ref={videoRef}
            className=""
            autoPlay={true}
            playsInline={true}
            loop={true}
            muted={true}
            src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/videos/3-27c8c3ea.webm"
          ></video>
        </div>
        <img
          ref={image2}
          className="image-pointer"
          src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/2-f3fd6cf5.png"
        />
        <img
          ref={image3}
          className=""
          src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/4-105dd65b.png"
        />

        <img
          ref={image4}
          className=""
          src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/5-ac49bfdc.png"
        />
      </div>
    </Block>
  );
};

export default MouseMoveBird;
