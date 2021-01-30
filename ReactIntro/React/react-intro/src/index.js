
import React from 'react'
import ReactDOM from 'react-dom'
import image from './frontend_technologies.jpg'
import './App.css'
const rootElement = document.getElementById('root')
const picture = (
    <div>
    <img src={image} alt="img"></img>
    </div>
)

const inputs = (
    <div >
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email adress to receive news and updates</p>
      <form>
          <input placeholder="First name"></input>
          <input placeholder="Last name"></input>
          <input placeholder="Email"></input>
      </form>
      <button>Subscribe</button>
    </div>
)
ReactDOM.render(inputs, rootElement)