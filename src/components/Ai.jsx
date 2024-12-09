import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';

const Ai = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([
      ...messages,
      { text: inputMessage, sender: 'user' }
    ]);
    setInputMessage('');
    
    
    // setTimeout(() => {
    //   setMessages(prev => [...prev, {
    //     text: "Hello! I'm your AI assistant. How can I help you?",
    //     sender: 'ai'
    //   }]);
    // }, 1000);
  };

  return (
    <div className="fixed z-50 bottom-4 right-4">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600"
      >
        <FaRobot size={24} />
        
      </button>

      
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
          </div>

        
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

         
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Ai;
