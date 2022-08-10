import React, { useEffect, useContext } from "react";
import "./Chat.css";
import { dataFlowContext } from "../../App";

const Chat = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("chat-active");
  }, []);

  return <div>Chat</div>;
};

export default Chat;
