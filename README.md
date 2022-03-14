---
title:  "react-mini-project - 거리(distance)"
excerpt: "[0]. 너의 거리는"

categories: html
tags:
  - [html, css, javascript, react]

toc: true
toc_sticky: true
 
date: 2022-03-13
last_modified_at: 2022-03-13
---
# React 미니 프로젝트 (너의 거리는)
  
* 팀원 구성 :  
  - 이정훈  
  
* 프로젝트 소개 : 자신의 위치로부터 지역과의 거리를 알아보자.  
  
* 프로젝트 진행 기간 : 2022-03-10 ~ 2022-03-12  
  
* 구현 기능 :  
  1. 현재 위치정보 수집 : geolocation api를 사용하여 현재 접속한 ip를 기반으로 위도, 경도 정보를 찾아낸다.  
  2. get location 버튼 : geolocation으로 받아온 정보를 버튼을 클릭하였을 때 나타나게 설정하였다.
  3. reference table : material-ui API를 사용하여 표를 작성하고, 거리 계산에 참고값으로 사용되는 값들을 정리하였다.
  4. 좌표 거리 계산 : 두개의 좌표(위도, 경도)가 주어질 때, 두 좌표 사이의 거리를 구해주는 수식을 구현하였다.
  
* 과정 : 
  
  0. 방향 설정 : 구현기능 설계 및 아웃라인 도출

  ![layout2](https://user-images.githubusercontent.com/59858894/158050970-a432d425-7089-4ff3-9fbe-276011610bf1.png)

  1. 브라우저 화면 구성 :  
    
  ![b1](https://user-images.githubusercontent.com/59858894/158051070-5be8fc3c-9b48-4615-83a6-83d0aa0ec934.PNG)

  2. input data : 

  ![캡처333](https://user-images.githubusercontent.com/59858894/158086008-589a1b8b-0a8c-41cc-b821-b0b85c29a1e9.PNG)


  3. 기능 점검 :  
    
  ![btn](https://user-images.githubusercontent.com/59858894/158051209-6c12156a-6dac-4d6c-8ea8-37ae5723c5a2.gif)
    

  # Trouble shooting
    
  * npm 오류 : 모듈이 있는 폴더에서 npm start가 계속해서 에러가 났었다.  
    - 알고보니 my-app으로 cd를 하지 않아서 그랬다... (난 바보다...)  <br/>
 
  * 현재 위치 좌표 받아오기 :  
    - 처음 geolocation을 사용했을 때, 무한적으로 현재의 위치를 반환해주어 다른 작업이 불가능 했었다.  
    - 로직 내에서 값을 반환하지 않고 함수형식으로 변환하여 바깥에서 값을 반환하도록 수정하였다.  <br/>
     
  * 과도한 export로 원하는 컴포넌트가 어디서 사용되는지를 찾기 어려웠을 뿐만 아니라, 동일한 export가 반복되면 수행 오류가 발생하는 것을 확인하였다.
    - 해당 경우에 중복으로 나타나는 컴포넌트들을 줄이고 하나의 컴포넌트에 내용을 추가하여 해결하였다.  <br/>
    
  * 이미지 추가시 src에서는 추가되지 않았다.   
    - 이유는 잘 모르겠지만 src 폴더 내에서의 img추가는 이루어지지 않았다.  
    - public에서 img폴더를 만든 후 그 안에 이미지를 위치시켰을 때는 작동하였다.
  
  # 아쉬운 점

  1. 혼자서 작업하다보니 시간이 오래 걸렸다.
  2. 버튼 클릭시 모달이 뜨게 구현하는데 어려움을 겪었다.
  3. 서버에 저장된 값들을 모달에 불러오려 했지만 연동하지 못했다.  
  4. 기존의 의도와는 다르게 제작하게되어 난잡한 것 같다.
  5. 위치 정보를 받아와서 그 값을 기준으로 거리를 계산해야 하는데 그렇지 못했다.


  # 개선할 사항
  
  1. 전체적인 UI를 수정해야 한다.
  2. modal에 데이터가 출력되도록 연동을 시켜야 한다.
 
