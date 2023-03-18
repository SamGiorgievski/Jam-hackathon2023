import React from 'react'
import './Chat.scss';

export default function Chat() {
  return (
    <div className="chat">
      <h1>
      Connect
        </h1>
        

        <div className="chatbox">
          <h2> Meet your friend, Rohan:</h2>
          <ul className="messages">
            <li> Rohan: Hi, I need help!</li>
            <li> Sam: That's nice.</li>
          </ul>
          <form className="form" action="">
            <input className="input" autocomplete="off" /><button>Send</button>
          </form>

        </div>
      </div>
  )
}
