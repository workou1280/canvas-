# canvas-
Making painting board with js

click : https://workou1280.github.io/canvas-/.

#Seconde step

새롭게 알게된 기술

display: flex == display: inline-flex

flex는 container가 수직

inline-flex는 container가 수평

*둘다 내부의 아이템은 변화x

flex-direction: item의 축을 지정

flex-direction: colum은 수직축

button의 기존 css reset 하는 법

unset을 사용하자 

ex) all: unset


#Third step

새롭게 알게된 기술

onMouseMove라는 event를 사용하면 마우스의 움직임을 알 수 있다.

그 중에서 Client X,Client y는 윈도우안에서의 움직임을 총채

offsetX : The offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node. 

마우스 연습

https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event

Error

At the start, i got an error msg from web which is that variation is alreday defined.

i was confused, because i have no problem for defining variaition without parenthesis untill i got the msg. so anyway it's not fault. it's beacuase of javascript. So if you add parenthesis on before you define variation. It works!!!


#fourth step

beginPath() path,즉 라인을 그리고 싶을 때 시작해야 할 점

moveTo(x,y) 라인의 시작점

lineTo(x,y) 라인의 끝점 

stroke() path 채워주기

#fifth step 

array를 선언해서 stroke 색깔 바꿔주기 

#sixth step

아래와 같은 예시로 작성하면 더 에러를 많이 줄이고 작성할 수 있음

if (mode) 

{

    mode.addEventListener("click", handleModeClick);

}

Event의 활용도가 중요하니 아래에 가서 event 확인 하도록

https://developer.mozilla.org/ko/docs/Web/Events

Error

app.js에서 type 에러가 났음 

그 이유 html document가 읽히기 전에 이미 app.js가 작동해서 그런 것 

해결책 : 아래로 내려버림 끝


#seventh

채우기 기본 동작

ctx.fillStyle = 'blue';

ctx.fillRect(10, 10, 100, 100);

1.색깔을 눌러서 fillstyle 색깔을 바꿔준다

2.mode를 눌러 fill 모드로 바꿔준다.(filling 즉,flag를 on 시킴)

3.캔버스를 click 하면 색깔이 filling 되게 만들어 준다.


#eight

save 버튼 만들어 주기 

1.태크를 create

2.태그에 href,download 속성을 추가 해준다. 즉, 이미 a요소가 href,download 속성을 가지고 있어야 한다.

3.a 태그에 click event를 넣어주면 끝 

자세한 설명은 아래 링크에 

https://developer.mozilla.org/ko/docs/Web/HTML/Element/a
