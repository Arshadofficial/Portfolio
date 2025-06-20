import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.setAttribute("chatbotId", "bsPNGV8aJD8kNSqxXQ7uL"); // Your bot ID
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default ChatbotWidget;
