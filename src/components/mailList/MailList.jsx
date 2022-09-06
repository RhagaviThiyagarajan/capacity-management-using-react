import React from 'react'
import './mailList.css'
function MailList() {
  return (
    <div className="mail">
    <h1 className="mailTitle">Already an user? SIGN IN</h1>
    <span className="mailDesc">SIGN -UP!</span>
    <div className='mailInputContainer'>
        <input type="text" plceholder="Your Email"/>
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default MailList
