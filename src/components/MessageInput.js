const { useEffect, useState } = require("react");

const MessageInput = (props) => {
  const { socket } = props;
  const [value, setValue] = useState();

  const submitForm = (event) => {
    event.preventDefault();
    socket.emit("message", value);
    setValue("");
  };

  return (
    <form className="form" action="">
      <input className="input" autocomplete="off" />
      <button>Send</button>
    </form>
  );
};

export default MessageInput;
