import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const AIRecommendationPage = () => {
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
      icon: '✍️',
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
      name: '수출 인증 AI',
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
  }, [selectedAI]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 헤더 섹션 */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI 추천 시스템
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            화장품 업계 전문 AI가 법규, 마케팅, 수출, 성분 분석까지 모든 궁금증을 해결해드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <div className="text-lg font-bold text-blue-600">6개</div>
              <div className="text-xs text-gray-600">전문 AI 봇</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <div className="text-lg font-bold text-green-600">24/7</div>
              <div className="text-xs text-gray-600">실시간 상담</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
              <div className="text-lg font-bold text-purple-600">95%+</div>
              <div className="text-xs text-gray-600">정확도</div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* AI 전문가 선택 영역 */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="flex items-center justify-between p-6 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">AI 전문가 선택</h3>
                <button 
                  onClick={() => setIsAIListExpanded(!isAIListExpanded)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                >
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${isAIListExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <div className={`px-6 pb-6 space-y-4 ${!isAIListExpanded ? 'hidden lg:block' : ''}`}>
                {Object.entries(aiExperts).map(([key, ai]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAI(key)}
                    className={`group cursor-pointer bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 w-full text-left ${
                      selectedAI === key
                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{ai.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{ai.name}</h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{ai.description}</p>
                        <div className="space-y-1 mb-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">정확도</span>
                            <span className="text-xs font-bold text-green-600">{ai.accuracy}%</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {ai.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                          {ai.tags.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              +{ai.tags.length - 2}
                            </span>
                          )}
                        </div>
                        {selectedAI === key && (
                          <div className="text-xs text-blue-600 font-medium">✓ 현재 선택됨</div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 채팅 영역 */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden h-full lg:h-[600px]">
              {/* AI 헤더 */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    {currentAI.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{currentAI.name}</h3>
                    <p className="text-blue-100 text-sm">{currentAI.description}</p>
                  </div>
                </div>
              </div>

              {/* 자주 묻는 질문 */}
              <div className="p-5 border-b border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-3">자주 묻는 질문</h4>
                <div className="grid grid-cols-1 gap-2">
                  {currentAI.faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq)}
                      className="text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm text-gray-700 hover:text-blue-700 transition-colors"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>

              {/* 채팅 메시지 */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 입력 영역 */}
              <div className="p-5 border-t border-gray-100">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`${currentAI.name}에게 질문해보세요...`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>전송</span>
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

export default AIRecommendationPage;

