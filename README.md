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
  3. reference table : 거리 계산에 참고값으로 사용되는 값들을 표로 정리하였다.
  4. 좌표 거리 계산 : 두개의 좌표(위도, 경도)가 주어질 때, 두 좌표 사이의 거리를 구해주는 수식을 구현하였다.
  
* 과정 : 
  
  0. 방향 설정 : 구현기능 설계 및 아웃라인 도출

  ![layout2](https://user-images.githubusercontent.com/59858894/158050970-a432d425-7089-4ff3-9fbe-276011610bf1.png)

  1. 브라우저 화면 구성 :  
    
  ![b1](https://user-images.githubusercontent.com/59858894/158051070-5be8fc3c-9b48-4615-83a6-83d0aa0ec934.PNG)

  2. 기능 점검 :  
    
  ![btn](https://user-images.githubusercontent.com/59858894/158051209-6c12156a-6dac-4d6c-8ea8-37ae5723c5a2.gif)
    

  # Error revising
    
  - 도시 이름 정보를 받아오기 : 이름의 정보를 받아오는 것이 아니라 index를 받아오는 것임을 늦게 알아차렸다.  
    
  - openweathermap은 온도 정보를 절대온도(K)로 주기 때문에 섭씨로 바꾸는 작업이 필요했다.  
    - 그런데 알고보니 api url 뒤에 &units=metric을 붙이면 알아서 섭씨로 변경해 주었다.  
    
  - 브라우저 화면에 나타나는 값을 변경하기 위해서 innerText를 사용하였는데 오류가 발생하였다.  
    - innerText는 안전성이 떨어지는 좋지 않은 방식이었다.  
    - textContent로 변경하니 바로 해결되었다.  
  
  - 날씨에 따라서 배경화면이 변경되게 하는 부분에서 시간이 많이 소요되었다.  
    - 기존 설정에서는 img 태그를 사용하여 화면에 나타나는 배경은 최상단에 등록되어 변화하지 않았다.  
    - div 태그로 변경한 후 배경 변경이 가능해졌다.  
  
  # 아쉬운 점

  1. 혼자서 작업하다보니 시간이 오래 걸렸다.
  2. 버튼 클릭시 모달이 뜨게 구현하는데 어려움을 겪었다.
  3. 서버에 저장된 값들을 모달에 불러오려 했지만 연동하지 못했다.
