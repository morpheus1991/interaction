import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Block = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  .word-wrapper {
    justify-content: center;
    display: flex;
    font-size: 70px;
    transform: scale(1.1);
    transition: 1s;
    > div {
      opacity: 0;
    }
    .empty-word {
      width: 20px;
    }
  }
`;
interface Props {
  text: string;
  time?: number;
}

const TextEffect = ({ text = "가나다라", time = 3 }: Props) => {
  const wordWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = wordWrapperRef.current?.querySelectorAll("div");
    class timeObjCreator {
      minTime;
      maxTime;
      ratio;
      constructor(time: number, ratio: number) {
        this.minTime = time <= 2 ? 2 : time - 2;
        this.maxTime = time;
        this.ratio = ratio;
      }
    }

    const timeObj = new timeObjCreator(time, 2);
    words?.forEach((word) => {
      let minTiem;
      if (timeObj.maxTime <= 3) {
        minTiem = timeObj.maxTime - 1;
      } else {
        minTiem = timeObj.minTime;
      }
      word.style.transition = `${
        Math.random() * timeObj.ratio + minTiem
      }s cubic-bezier(0.895, 0.415, 0.000, 1.160)`;
      word.style.opacity = "1";
      wordWrapperRef.current!.style.transform = "scale(100%)";
    });
  });

  return (
    <Block>
      <div className="word-wrapper" ref={wordWrapperRef}>
        {text.split("").map((word) => {
          if (word === " ") {
            return <div className="empty-word">{word}</div>;
          } else {
            return <div>{word}</div>;
          }
        })}
      </div>
    </Block>
  );
};

export default TextEffect;
