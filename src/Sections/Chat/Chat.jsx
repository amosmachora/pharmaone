import React, { useEffect, useContext } from "react";
import "./Chat.css";
import { dataFlowContext } from "../../App";

const Chat = () => {
  const { setActiveTab, setSmallScreen } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("chat-active");
    setSmallScreen(false);
  }, []);

  return <div>Chat</div>;
};

export default Chat;
