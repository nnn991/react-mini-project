import React from 'react'
import classes from './Head.module.css'

const Head = (props) => {
  return (
    <>
      <div>
        <header className={classes.header} id='header'>
          <h2>너의 거리는 !</h2>
          <h3>재미로 보는 거리 계산</h3>
        </header>
      </div>
    </>
  )
}

export default Head