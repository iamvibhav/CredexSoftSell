import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedQuestions = [
  {
    id: '1',
    question: 'How much can I get for my license?',
    answer: 'On average, our customers receive 70-80% of the original license value. The exact amount depends on factors like license type, remaining validity, and market demand.',
  },
  {
    id: '2',
    question: 'What types of licenses do you buy?',
    answer: 'We purchase enterprise software, creative suites, development tools, security software, and productivity tool licenses. Most major software vendors are supported.',
  },
  {
    id: '3',
    question: 'How long does the process take?',
    answer: 'The entire process typically takes less than 24 hours. This includes license verification, valuation, and payment processing once you accept our offer.',
  },
  {
    id: '4',
    question: 'Is the process secure?',
    answer: 'Yes! We use bank-level encryption for all transactions and follow strict security protocols for license transfers. Your data is protected at every step.',
  },
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Hello! How can I help you today? Please select one of the common questions below, or type your own question.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (question: typeof predefinedQuestions[0]) => {
    const newMessages: Message[] = [
      ...messages,
      {
        id: Date.now().toString() + '-q',
        text: question.question,
        sender: 'user',
        timestamp: new Date(),
      },
      {
        id: Date.now().toString() + '-a',
        text: question.answer,
        sender: 'bot',
        timestamp: new Date(),
      },
    ];
    setMessages(newMessages);
    setSelectedQuestion(null);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
          >
            {/* Chat Header */}
            <div className="bg-primary-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageCircle className="text-white" size={20} />
                <h3 className="text-white font-semibold">SoftSell Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Common Questions
              </h4>
              <div className="space-y-2">
                {predefinedQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left text-sm p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  );
};

export default ChatWidget;