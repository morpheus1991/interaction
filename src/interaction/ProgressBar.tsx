import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  verticalMode?: boolean;
  maxHeight?: string;
  maxWidth?: string;
}
interface BlockProps {
  maxHeight?: string;
  maxWidth?: string;
}
const Block = styled.div<BlockProps>`
  .progress-area {
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => (props.maxHeight ? props.maxHeight : "4px")};
    background: #fff;
  }
  .progress-bar {
    height: ${(props) => (props.maxHeight ? props.maxHeight : "4px")};
    display: block;
    background: red;
  }
  .progress-area.vertical {
    width: ${(props) => (props.maxWidth ? props.maxWidth : "4px")};
    height: ${(props) => (props.maxHeight ? props.maxHeight : "4px")};
    min-height: 400px;
    max-height: 80vh;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    .progress-bar {
      width: ${(props) => (props.maxWidth ? props.maxWidth : "4px")};
    }
  }
`;
const ProgressBar = ({ verticalMode, maxWidth, maxHeight }: Props) => {
  const progressAreaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      let per =
        (scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (!verticalMode) {
        progressBarRef.current!.style.width = `${per}%`;
      } else {
        progressBarRef.current!.style.height = `${per}%`;
      }
    });
  }, []);

  return (
    <Block maxWidth={maxWidth} maxHeight={maxHeight}>
      <div
        className={`progress-area ${verticalMode ? "vertical" : ""}`}
        ref={progressAreaRef}
      >
        <span className="progress-bar" ref={progressBarRef}></span>
      </div>
    </Block>
  );
};

export default ProgressBar;
