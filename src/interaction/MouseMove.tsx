import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { HEX2RGBA, Rgba, validRGBA, RGBA2CSSTEXT } from "../lib/hexToRgba";

interface MousePointerProps {
  pointerSize: string;
  mouseDownEffectColorRGBA: Rgba;
  pointerColorRGBA: Rgba;
}
/* styled-component */
const MousePointer = styled.div<MousePointerProps>`
  position: fixed;
  width: ${(props) => props.pointerSize};
  height: ${(props) => props.pointerSize};
  transform: translateX(-50%) translateY(-50%) scale(100%);
  transition: transform 0.2s;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  .pointer {
    width: ${(props) => props.pointerSize};
    height: ${(props) => props.pointerSize};
    background: ${(props) => RGBA2CSSTEXT(props.pointerColorRGBA)};
    border-radius: 50%;
    transition: top 0.1s, left 0.1s;
  }
  &.mouse-down {
    transform: translateX(-50%) translateY(-50%) scale(200%);
    background: ${(props) => RGBA2CSSTEXT(props.mouseDownEffectColorRGBA)};
    .pointer {
      transform: scale(50%);
    }
  }
`;

/* Props */
interface Props {
  pointerSize?: string; // 10px, 10% 10vw 단위 커버를 위해 문자열로 받습니다.
  pointerColor?: Rgba | string; //hex 컬러 rgba컬러 모두 괜찮습니다. 내부에서 변환해줘요.
  mouseDownEffectColor?: Rgba | string; //hex 컬러 rgba컬러 모두 괜찮습니다. 내부에서 변환해줘요.
}

const MouseMove = ({
  pointerSize = "10px",
  pointerColor = "#b925f4", //hex , rgba
  mouseDownEffectColor = "#27e6b3",
}: Props) => {
  const vaildColor = (color: Rgba | string) => {
    if (validRGBA(color as Rgba)) {
      return true;
    } else {
      return false;
    }
  };
  const pointerColorRGBA = vaildColor(pointerColor)
    ? (pointerColor as Rgba)
    : (HEX2RGBA(pointerColor as string) as Rgba);
  console.log(pointerColorRGBA.join(","), "pointerColorRGBA");
  const mouseDownEffectColorRGBA = vaildColor(mouseDownEffectColor)
    ? (mouseDownEffectColor as Rgba)
    : (HEX2RGBA(mouseDownEffectColor as string) as Rgba);

  const pointerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log("dd");
      pointerRef.current!.style.left = `${e.clientX}px`;
      pointerRef.current!.style.top = `${e.clientY}px`;
    });
    window.addEventListener("mousedown", () => {
      pointerRef.current!.classList.toggle("mouse-down");
    });
    window.addEventListener("mouseup", () => {
      pointerRef.current!.classList.toggle("mouse-down");
    });
  }, []);

  return (
    <MousePointer
      ref={pointerRef}
      className="pointer-area"
      pointerSize={pointerSize}
      pointerColorRGBA={pointerColorRGBA as Rgba}
      mouseDownEffectColorRGBA={mouseDownEffectColorRGBA}
    >
      <div className="pointer"></div>
    </MousePointer>
  );
};

export default MouseMove;
