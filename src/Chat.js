import React from 'react'
import './Chat.scss';

export default function Chat() {
  return (
    <div className="chat">
      <h1>
      Connect
        </h1>
        

        <div className="chatbox">
          <h2> Chatbox 1</h2>
          <ul className="messages">
            <li> Hi, I need help!</li>
            <li> That's nice.</li>
          </ul>
          <form className="form" action="">
            <input className="input" autocomplete="off" /><button>Send</button>
          </form>

        </div>
      </div>
  )
}
