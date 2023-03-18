import React from 'react'
import './Chat.scss';

export default function Chat() {
  return (
    <div className="chat">
      <h1>
      Connect
        </h1>
        

        <div className="chatbox">
          <ul id="messages">
            <li> Hi, I need help!</li>
            <li> That's nice.</li>
          </ul>
          <form id="form" action="">
            <input id="input" autocomplete="off" /><button>Send</button>
          </form>

        </div>
      </div>
  )
}
