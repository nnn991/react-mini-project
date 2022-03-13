import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './Body2.module.css'

const Body2 = (props) => {

  return (
    <div>
      <h2 className={styles.h2li}>Encore Playdata로 부터의 거리를 알아보자!</h2>
      <div className={styles.btn12}>
        <div className=''>
          <p>서울<br/><br/><img src="img/서울.jpg" alt="서울" width='300' height='250'/><button className={styles.button} onClick={props.onOpen}>확인하기</button></p>
        </div>
        <div className=''>
          <p>대전<br/><br/><img src="img/대전.jpg" alt="대전" width='300' height='250'/><button className={styles.button} onClick={props.onOpen}>확인하기</button></p>
        </div>
        <div className=''>
          <p>대구<br/><br/><img src="img/대구.jpg" alt="대구" width='300' height='250'/><button className={styles.button} onClick={props.onOpen}>확인하기</button></p>
        </div>
        <div className=''>
          <p>부산<br/><br/><img src="img/부산.jpg" alt="부산" width='300' height='250'/><button className={styles.button} onClick={props.onOpen}>확인하기</button></p>
        </div>
        <div className=''>
          <p>인천<br/><br/><img src="img/인천.jpg" alt="인천" width='300' height='250'/><button className={styles.button} onClick={props.onOpen}>확인하기</button></p>
        </div>
      </div>
    </div>
  )
}

export default Body2