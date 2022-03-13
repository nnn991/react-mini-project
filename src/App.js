import React, { useState } from 'react'
import Calculate from './components/Calculate/Calculate'
import Body from './components/Main/Body'
import Body2 from './components/Main/Body2'
import Head from './components/Main/Head'
import Modal from './components/Modal/Modal'
import MaterialTable from './MaterialTable'

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Head />
      <Body />

      {/* 지역별 그림과 거리 계산 결과를 모달로 보여주자 5개의 테이블 or card를 만들어 지역의 사진을 띄워놓고 hover 기능 및 클릭시 modal이 나오게 구현 */}
      {cartIsShown && <Modal onClose={closeCartHandler}/>}
      <Body2 onOpen={openCartHandler}/>
      <hr></hr>
      <Calculate />
      <MaterialTable />
    </div>
  )
}

export default App