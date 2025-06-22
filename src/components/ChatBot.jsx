import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, Bot, ChevronUp, ChevronDown } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('main'); // 'main', 'chat'
  const [showFAQ, setShowFAQ] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const consultationTopics = [
    {
      icon: '💡',
      title: '제품 기획 상담',
      description: '새로운 제품 아이디어 구체화'
    },
    {
      icon: '🏭',
      title: '제조사 매칭',
      description: '신뢰할 수 있는 제조업체 연결'
    },
    {
      icon: '🌍',
      title: '해외 진출',
      description: '글로벌 시장 진출 전략'
    },
    {
      icon: '💰',
      title: '비용 문의',
      description: '제품별 상세 견적 안내'
    },
    {
      icon: '📋',
      title: '인증 문의',
      description: '필요한 인증 및 허가 안내'
    },
    {
      icon: '🚀',
      title: '기타 문의',
      description: '그 외 궁금한 사항'
    }
  ];

  const faqItems = [
    '제품 개발 기간은 얼마나 걸리나요?',
    '최소 주문 수량(MOQ)은 어떻게 되나요?',
    '해외 수출은 어떻게 진행되나요?',
    '비용은 어떻게 책정되나요?'
  ];

  const handleTopicSelect = (topic) => {
    const newMessage = {
      id: Date.now(),
      text: `${topic.title}에 대해 문의드립니다.`,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([newMessage]);
    setCurrentView('chat');

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `${topic.title}에 대해 문의해주셔서 감사합니다. 전문 상담사가 곧 연결될 예정입니다. 구체적으로 어떤 부분이 궁금하신가요?`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleFAQSelect = (question) => {
    const newMessage = {
      id: Date.now(),
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([newMessage]);
    setCurrentView('chat');

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "좋은 질문입니다! 전문 상담사가 자세한 답변을 드릴 수 있도록 연결해드리겠습니다. 잠시만 기다려주세요.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "감사합니다! 전문 상담사가 곧 연결될 예정입니다. 더 자세한 상담을 원하시면 운영시간(10:00-17:00) 내에 문의해주세요.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentView('main');
    setMessages([]);
  };

  return (
    <>
      {/* 채팅봇 버튼 */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-gray-600 to-stone-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* 채팅 창 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-gray-600 to-stone-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">BrandPack 상담</h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <Clock className="w-3 h-3" />
                    <span>AI 상담팀 가능 (운영시간: 10:00-17:00)</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 메인 상담 화면 */}
          {currentView === 'main' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* 환영 메시지 */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-stone-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">안녕하세요! 👋</h4>
                <p className="text-sm text-gray-600">
                  BrandPack 상담에 오신 것을 환영합니다.<br />
                  어떤 도움이 필요하신가요?
                </p>
              </div>

              {/* 상담 주제 선택 */}
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-3">상담 주제를 선택해주세요</h5>
                <div className="grid grid-cols-2 gap-2">
                  {consultationTopics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicSelect(topic)}
                      className="p-3 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-left"
                    >
                      <div className="text-lg mb-1">{topic.icon}</div>
                      <div className="text-sm font-medium text-gray-800">{topic.title}</div>
                      <div className="text-xs text-gray-500">{topic.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ 섹션 */}
              <div>
                <button 
                  onClick={() => setShowFAQ(!showFAQ)}
                  className="flex items-center justify-between w-full font-medium text-gray-800 mb-3"
                >
                  <span>자주 묻는 질문</span>
                  {showFAQ ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showFAQ && (
                  <div className="space-y-2">
                    {faqItems.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleFAQSelect(question)}
                        className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="text-sm font-medium text-gray-800">{question}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 채팅 화면 */}
          {currentView === 'chat' && (
            <>
              {/* 메시지 영역 */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="text-center mb-4">
                  <button 
                    onClick={() => setCurrentView('main')}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← 상담 주제로 돌아가기
                  </button>
                </div>
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-gradient-to-r from-gray-600 to-stone-700 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* 입력 영역 */}
              <div className="p-4 border-t border-gray-200">
                <div className="mb-2 text-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    👤 운영시간 외 (10:00-17:00)
                  </span>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-gray-600 to-stone-700 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;

