import React from 'react'
import './Chat.scss';

export default function Chat() {
  return (
    <div className="chat">
        <div className="chatbox">
          <h2 className="chat_title"> Meet your friend, Rohan:</h2>
          <ul className="messages">
            <li> tags: Grief</li>
            <br/>
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
