import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="container-div"> 
        <div className="home-text">
          <h1>Dwitanic</h1>
          <h2>Come 2 play: instructions</h2>
          <ul>
            <li>A quote will appear on the page from one of our cast memebers</li>
            <li>click on the button to guess who said the quote</li>
            <li>click the poster to find out more</li>
          </ul>
        </div>
        <button>
          <Link to="/game">
            <img className="dwight-image"src="https://i.redd.it/wd3eu7mlv9i01.jpg"></img>
          </Link>
        </button>
      </div>
    </>
  )
}
export default Home