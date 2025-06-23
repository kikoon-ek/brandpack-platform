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
    <div className="min-h-screen bg-gray-50">
      {/* 간결한 헤더 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 어시스턴트</h1>
          <p className="text-gray-600">화장품 업계 전문 AI가 모든 궁금증을 해결해드립니다</p>
        </div>
      </section>

      {/* 메인 콘텐츠 - PC에서 좌우 배치, 모바일에서 세로 배치 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-[320px_1fr] gap-6">
          
          {/* AI 전문가 선택 영역 - PC에서 좌측, 모바일에서 상단 */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              
              {/* 헤더 - 모바일에서만 접기 버튼 */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">AI 전문가</h3>
                <button 
                  onClick={() => setIsAIListExpanded(!isAIListExpanded)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors sm:hidden"
                >
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isAIListExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* AI 목록 */}
              <div className={`p-6 space-y-4 ${!isAIListExpanded ? 'hidden sm:block' : ''}`}>
                {Object.entries(aiExperts).map(([key, ai]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAI(key)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${
                      selectedAI === key
                        ? 'border-gray-300 bg-gray-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{ai.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 mb-1">{ai.name}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ai.description}</p>
                        
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-gray-500">정확도</span>
                          <span className="text-sm font-medium text-gray-700">{ai.accuracy}%</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {ai.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {selectedAI === key && (
                          <div className="text-xs text-gray-700 font-medium mt-2 flex items-center gap-1">
                            <span>✓</span> 현재 선택됨
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 채팅 영역 - PC에서 우측, 모바일에서 하단 */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[600px] sm:h-[700px]">
              
              {/* AI 헤더 */}
              <div className="bg-gray-900 text-white p-6 rounded-t-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl bg-white/10 rounded-lg p-3">
                    {currentAI.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{currentAI.name}</h3>
                    <p className="text-gray-300 text-sm">{currentAI.description}</p>
                  </div>
                </div>
              </div>

              {/* 자주 묻는 질문 */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">자주 묻는 질문</h4>
                <div className="space-y-2">
                  {currentAI.faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>

              {/* 채팅 메시지 */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-3 rounded-lg">
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
              <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`${currentAI.name}에게 질문해보세요...`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
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

export default NewAIAssistantPage;

