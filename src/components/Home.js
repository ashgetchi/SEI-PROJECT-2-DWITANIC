import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <h1>Dwitanic</h1>
      <button>
        <Link to="/game">Click me!</Link>
      </button>
    </>
  )
}
export default Home