import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MouseMove from "./interaction/MouseMove";
import styled from "styled-components";
import Mouse from "./interaction/Mouse";
import { useSelector } from "react-redux";
import { RootReducerType } from "./store";
import MouseMoveBird from "./interaction/MouseMoveBird";
import Parallax1 from "./interaction/Parallax1";
import TextEffect from "./interaction/TextEffect";
import ScrollEventPlayer from "./interaction/ScrollEventPlayer";
import ScrollEventPlayer2 from "./interaction/ScrollEventPlayer2";

const Block = styled.div`
  width: 100vw;
  /* height: 100vh; */
`;
function App() {
  const mouseInfo = useSelector((state: RootReducerType) => state.moveMouse);
  console.log(mouseInfo);
  return (
    <Block className="App">
      {/* <MouseMove pointerSize="40px" mouseDownEffectColor=""></MouseMove> */}
      {/* <TextEffect text="안녕하세요."></TextEffect>
      <Parallax1></Parallax1> */}
      <ScrollEventPlayer></ScrollEventPlayer>
      <ScrollEventPlayer2></ScrollEventPlayer2>

      {/* 

스크롤 이벤트의 문제점

스크롤이 동작하는 순간순간마다 실행된다.
정확히는 스크롤 이벤트에 부여한 콜백함수가 실행되는 것이다.

여기까지는 별 문제가 없을 수 있다.

다만, 특정 요소의 좌표값을 계속 검사해야하는 로직의 경우,
그것이 리스트 100개라면, 스크롤 이슈가 발생 할 수 있다.

리스트 100개를 순간순간마다 검사하기 때문이다.
그렇다면, 어떻게 100개의 스크롤 이벤트를 관리할 수 있을까?

1번, 스크롤 이벤트를 각 배열로 맵핑한다.
[1번 이벤트, 2번 이벤트, 3번 이벤트, 4번 이벤트, 5번 이벤트 ...]

맵핑한 이벤트 객체를 생성한다
{
  동작 여부 : 부울린
  이벤트 시작 좌표 : 숫자
  이벤트 종료 좌표 : 숫자
}

스크롤을 움직일 때 마다 해당 좌표값을 검색하는 것은 뺄 수 없다.
다만, 스크롤을 움직일 때 전부를 검색하지 않는식으로 줄여보자.

기존 : 스크롤 동작 -> 스크롤 이벤트 전부 실행
개선 : 스크롤 동작 -> 스크롤 이벤트가 아닌, 근사치 범위만 탐색하여 해당하는이벤트에 접근-> 실행
여기서 근사치라 함은 window.scrollY값으로 부터 window.scrollY + window.innerHeight 값으로 정한다.

그렇다면 스크롤이 동작했을 때, 근사치 범위만 탐색하는 로직이 필요해진다.
어떻게 구성해야할까?

먼저 addEventListener에 등록하는 것은 하나여야한다.
그러기 위해서는 리덕스의 엑션크리에이터 같은 개념의
스크롤이벤트크리에이터가 있어야한다.
스크롤 이벤트가 반환하는 객체 구조는 다음과 같다.
{
  시작:{
    시작좌표 : 숫자
    시작함수 : 함수
  }
  종료:{
    종료좌표 : 숫자
    종료함수 : 함수
  }
}

스크롤 이벤트 크리에이터의 인자로 받는 객체의 구조도 위와 동일해야한다.
스크롤 이벤트 크리에이터는 위와 같은 구조의 객체를 인자로 받으면, 다음과 같은 일을 한다.

1.좌표 순서대로 이벤트를 등록한다.(배열)
등록되는 배열은 어떻게 생겨야할까? 
객체의 생김새는 위와 같다.
두가지 기준을 둔다. 
 1) 객체 자체의 배열 [{},{}]
 2) 객체 자체의 스타트와 종료값을 가진 객체가 담긴 배열
 [
   {
     시작값: 
     종료값:
    1)배열의 인덱스:
    }
 ]



그렇다면 스크롤 이벤트의 콜백함수(플레이어)는 어떻게 생겨야할까?
1. loop, requestAnimationFrame한다.
2. 일정 구간값을 입력 받는다. 1000px 단위로 해보자. 1000px마다 객체를 생성하며, 아래와 같은 구조를 가진다.
[
  {
    events: [{start,end,function}]
  }
]
이벤트를 등록하게 되면, 종료값과, 시작값에 따라 events 배열에 들어간다. 각각 들어간 정보는 target함수로 연결된다.
3.현제 스크롤 값에 따른 등록된 이벤트를 검색한다. 1000px단위이니, 4천px이라면, 3번 인덱스.events에서 검색한다. 해당되는 이벤트를 실행한다.











*/}

      {/* <MouseMoveBird></MouseMoveBird> */}
      {/* <Mouse></Mouse> */}
      {/* <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove /> */}
    </Block>
  );
}

export default App;
