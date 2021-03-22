# canvas-
Making painting board with js

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