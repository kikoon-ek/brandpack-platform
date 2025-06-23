import React, { useState, useEffect } from 'react';
import { Send, ChevronDown } from 'lucide-react';

const NewAIAssistantPage = () => {
  const [selectedAI, setSelectedAI] = useState('화장품법');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAIListExpanded, setIsAIListExpanded] = useState(true);

  // AI 전문가 데이터
  const aiExperts = {
    '화장품법': {
      name: '화장품법 AI',
      icon: '⚖️',
      description: '화장품 관련 법규, 규제, 인허가 전문 상담',
      accuracy: 98,
      tags: ['법규 해석', '인허가 절차'],
      faqs: [
        '기능성화장품 신고 절차가 어떻게 되나요?',
        '화장품 성분 표시 순서 규정을 알려주세요',
        '의약외품과 화장품의 차이점을 알려주세요'
      ]
    },
    '패키지': {
      name: '패키지 문안 AI',
      icon: '📦',
      description: '제품 라벨링, 마케팅 문구, 브랜드 메시지 생성',
      accuracy: 95,
      tags: ['마케팅 문구', '제품 설명'],
      faqs: [
        '효과적인 제품명 작성 방법은?',
        '라벨 디자인 가이드라인을 알려주세요',
        '브랜드 스토리 작성 팁을 알려주세요'
      ]
    },
    '수출': {
      name: '수출 업무 AI',
      icon: '🌍',
      description: '해외 수출을 위한 인증, 규제, 절차 가이드',
      accuracy: 97,
      tags: ['국가별 규제', '인증 절차'],
      faqs: [
        'FDA 승인 절차가 어떻게 되나요?',
        'EU 화장품 규정을 알려주세요',
        '중국 수출 시 필요한 서류는?'
      ]
    },
    '성분': {
      name: '성분 분석 AI',
      icon: '🧪',
      description: '화장품 성분 안전성, 효능, 상호작용 분석',
      accuracy: 96,
      tags: ['성분 안전성', '효능 분석'],
      faqs: [
        '민감성 피부에 안전한 성분은?',
        '성분 간 상호작용을 확인하고 싶어요',
        '천연 성분의 효능을 알려주세요'
      ]
    },
    '트렌드': {
      name: '트렌드 분석 AI',
      icon: '📊',
      description: '화장품 시장 트렌드, 소비자 분석, 경쟁사 분석',
      accuracy: 94,
      tags: ['시장 분석', '트렌드 예측'],
      faqs: [
        '2024년 화장품 트렌드는?',
        '타겟 고객층 분석 방법은?',
        '경쟁사 분석 포인트를 알려주세요'
      ]
    },
    '가격': {
      name: '가격 책정 AI',
      icon: '💰',
      description: '시장 분석 기반 최적 가격 책정 및 수익성 분석',
      accuracy: 93,
      tags: ['가격 분석', '수익성 계산'],
      faqs: [
        '적정 가격 책정 방법은?',
        '원가 계산 가이드를 알려주세요',
        '수익성 분석 방법을 알려주세요'
      ]
    }
  };

  const currentAI = aiExperts[selectedAI];

  // 초기 메시지 설정
  useEffect(() => {
    setMessages([
      {
        type: 'ai',
        content: `안녕하세요! ${currentAI.name}입니다.\n궁금한 것이 있으시면 언제든 물어보세요.`,
        timestamp: new Date()
      }
    ]);
  }, [selectedAI, currentAI.name]);

  // 메시지 전송
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: `${currentAI.name}가 "${inputMessage}"에 대해 답변드리겠습니다.\n\n전문적인 상담을 위해 더 구체적인 정보를 알려주시면 더 정확한 답변을 드릴 수 있습니다.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // FAQ 클릭 처리
  const handleFAQClick = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-100">
      {/* 🔥 완전히 새로운 헤더 디자인 */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
            🚀 NEW AI 어시스턴트
          </h1>
          <p className="text-3xl text-gray-700 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            🎯 완전히 새로워진 화장품 업계 전문 AI<br />
            ✨ 법규, 마케팅, 수출, 성분 분석까지 모든 것을 해결합니다
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-2xl border-4 border-purple-200">
              <div className="text-4xl font-black text-purple-600">6개</div>
              <div className="text-gray-700 font-semibold">전문 AI 봇</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-2xl border-4 border-green-200">
              <div className="text-4xl font-black text-green-600">24/7</div>
              <div className="text-gray-700 font-semibold">실시간 상담</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-10 py-8 shadow-2xl border-4 border-pink-200">
              <div className="text-4xl font-black text-pink-600">95%+</div>
              <div className="text-gray-700 font-semibold">정확도</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 완전히 새로운 메인 콘텐츠 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* 🎯 핵심: 모바일 세로, 데스크톱 좌우 */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 🎨 AI 전문가 선택 영역 - 완전히 새로운 디자인 */}
          <div className="w-full lg:w-96 lg:flex-shrink-0 order-1">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl border-4 border-purple-200">
              
              {/* 헤더 */}
              <div className="flex items-center justify-between p-10 border-b-4 border-purple-100">
                <h3 className="text-3xl font-black text-purple-800">🎯 AI 전문가</h3>
                <button 
                  onClick={() => setIsAIListExpanded(!isAIListExpanded)}
                  className="p-4 hover:bg-purple-100 rounded-2xl transition-colors lg:hidden border-2 border-purple-300"
                >
                  <ChevronDown className={`w-8 h-8 text-purple-600 transition-transform ${isAIListExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* AI 목록 */}
              <div className={`p-10 space-y-8 ${!isAIListExpanded ? 'hidden lg:block' : ''}`}>
                {Object.entries(aiExperts).map(([key, ai]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAI(key)}
                    className={`w-full text-left p-8 rounded-3xl transition-all duration-300 border-4 ${
                      selectedAI === key
                        ? 'border-purple-500 bg-purple-100 shadow-2xl scale-105 transform'
                        : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-xl hover:scale-102'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-5xl">{ai.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-xl text-gray-800 mb-4">{ai.name}</h4>
                        <p className="text-gray-600 mb-5 line-clamp-2 font-medium">{ai.description}</p>
                        
                        <div className="flex justify-between items-center mb-5">
                          <span className="text-gray-500 font-semibold">정확도</span>
                          <span className="text-2xl font-black text-green-600">{ai.accuracy}%</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-5">
                          {ai.tags.map((tag, index) => (
                            <span key={index} className="px-4 py-2 bg-purple-200 text-purple-800 rounded-full text-sm font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {selectedAI === key && (
                          <div className="text-purple-600 font-black flex items-center gap-3 text-lg">
                            <span>🎯</span> 현재 선택됨
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 🎨 채팅 영역 - 완전히 새로운 디자인 */}
          <div className="flex-1 order-2">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl border-4 border-pink-200 flex flex-col h-[800px] lg:h-[900px]">
              
              {/* AI 헤더 */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10 rounded-t-3xl">
                <div className="flex items-center space-x-8">
                  <div className="text-5xl bg-white/30 backdrop-blur-sm rounded-3xl p-8">
                    {currentAI.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black">{currentAI.name}</h3>
                    <p className="text-purple-100 text-xl font-medium">{currentAI.description}</p>
                  </div>
                </div>
              </div>

              {/* 자주 묻는 질문 */}
              <div className="p-10 border-b-4 border-pink-100">
                <h4 className="font-black text-2xl text-gray-800 mb-8 flex items-center gap-4">
                  <span>💡</span>
                  자주 묻는 질문
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  {currentAI.faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq)}
                      className="text-left p-6 bg-pink-50 hover:bg-pink-100 rounded-2xl text-gray-700 hover:text-pink-700 transition-all duration-200 border-2 border-transparent hover:border-pink-300 hover:shadow-lg font-medium"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>

              {/* 채팅 메시지 */}
              <div className="flex-1 overflow-y-auto p-10 space-y-8">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-8 py-6 rounded-3xl shadow-xl ${
                      message.type === 'user' 
                        ? 'bg-purple-500 text-white border-4 border-purple-300' 
                        : 'bg-pink-50 text-gray-800 border-4 border-pink-200'
                    }`}>
                      <p className="whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-pink-50 px-8 py-6 rounded-3xl border-4 border-pink-200">
                      <div className="flex space-x-3">
                        <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 입력 영역 */}
              <div className="p-10 border-t-4 border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 rounded-b-3xl">
                <div className="flex space-x-6">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`${currentAI.name}에게 질문해보세요...`}
                    className="flex-1 px-8 py-6 border-4 border-purple-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-lg text-xl font-medium"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-10 py-6 bg-purple-500 text-white rounded-3xl hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-4 shadow-xl border-4 border-purple-300"
                  >
                    <Send className="w-6 h-6" />
                    <span className="font-black text-xl">전송</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewAIAssistantPage;

