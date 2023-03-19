import React, {useState, useEffect} from "react";
import { io } from "socket.io-client";
import "./Chat.scss";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";

export default function Chat() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="chat">
      <h1>Connect</h1>

      {/* <div className="chatbox">
          <h2> Meet your friend, Rohan:</h2>
          <ul className="messages">
            <li> Rohan: Hi, I need help!</li>
            <li> Sam: That's nice.</li>
          </ul>
          <form className="form" action="">
            <input className="input" autocomplete="off" /><button>Send</button>
          </form>
        </div> */}

      {socket ? (
        <div>
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}

    </div>
  );
}
