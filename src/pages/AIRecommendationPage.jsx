import React, { useState, useEffect } from 'react';
import { 
  Send,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from 'lucide-react';

const AIRecommendationPage = () => {
  const [selectedAI, setSelectedAI] = useState('화장품법');
  const [showFAQ, setShowFAQ] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAIListExpanded, setIsAIListExpanded] = useState(true);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // AI 전문가 데이터
  const aiExperts = {
    '화장품법': {
      name: '화장품법 AI',
      icon: '⚖️',
      description: '화장품 관련 법규, 규제, 인허가 전문 상담',
      accuracy: 98,
      tags: ['법규 혁신', '인허가 절차'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      faqs: [
        '기능성화장품 신고 절차가 어떻게 되나요?',
        '화장품 성분 표시 순서 규정을 알려주세요',
        '의약외품과 화장품의 차이점을 알려주세요'
      ]
    },
    '패키지': {
      name: '패키지 분석 AI',
      icon: '📦',
      description: '제품 라벨링, 마케팅 문구, 브랜드 메시지 설정',
      accuracy: 95,
      tags: ['마케팅 문구', '제품 설명'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      faqs: [
        '안티에이징 크림 제품명을 추천해주세요',
        '민감성 피부용 제품 설명 문구를 작성해주세요',
        '프리미엄 브랜드 스토리를 만들어주세요'
      ]
    },
    '수출': {
      name: '수출 업무 AI',
      icon: '🌍',
      description: '해외 수출을 위한 인증, 규제, 절차 가이드',
      accuracy: 97,
      tags: ['국가별 규제', '인증 절차'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      faqs: [
        '미국 FDA 등록 절차를 알려주세요',
        'EU CPNP 신고와 필요한 서류는 무엇인가요?',
        '중국 NMPA 인증 비용과 기간을 알려주세요'
      ]
    },
    '성분': {
      name: '성분 분석 AI',
      icon: '🧪',
      description: '화장품 성분 안전성, 효능, 상호작용 분석',
      accuracy: 96,
      tags: ['성분 안전성', '효능 분석'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      faqs: [
        '레티놀과 비타민C를 함께 사용해도 되나요?',
        '임산부가 피해야 할 화장품 성분을 알려주세요',
        '천연 방부제 대안을 추천해주세요'
      ]
    },
    '트렌드': {
      name: '트렌드 분석 AI',
      icon: '📊',
      description: '화장품 시장 트렌드, 소비자 분석, 경쟁사 분석',
      accuracy: 94,
      tags: ['시장 분석', '트렌드 예측'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
      faqs: [
        '2024년 K-뷰티 트렌드를 분석해주세요',
        'Z세대가 선호하는 화장품 특징은 무엇인가요?',
        '친환경 화장품 시장 전망을 알려주세요'
      ]
    },
    '가격': {
      name: '가격 책정 AI',
      icon: '💰',
      description: '시장 분석 기반 최적 가격 책정 및 수익성 분석',
      accuracy: 93,
      tags: ['가격 분석', '수익성 계산'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-600',
      faqs: [
        '프리미엄 세럼 적정 가격을 산정해주세요',
        '온라인 vs 오프라인 가격 전략을 제안해주세요',
        '신제품 런칭 시 가격 책정 방법을 알려주세요'
      ]
    }
  };

  const currentAI = aiExperts[selectedAI];

  // 메시지 전송
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponses = {
        '화장품법': [
          '화장품법에 따르면, 해당 사항은 다음과 같이 규정되어 있습니다...',
          '관련 법규를 확인해보니, 이 경우 식약처 신고가 필요합니다.',
          '화장품 안전기준에 의하면, 해당 성분은 허용 농도 내에서 사용 가능합니다.'
        ],
        '패키지': [
          '브랜드 아이덴티티를 고려한 제품명을 제안드리겠습니다...',
          '타겟 고객층에 맞는 마케팅 문구를 작성해드리겠습니다.',
          '프리미엄 브랜드 포지셔닝에 적합한 스토리를 제안드립니다.'
        ],
        '수출': [
          '해당 국가의 화장품 수출 규정을 확인해보겠습니다...',
          '필요한 인증서류와 절차를 안내해드리겠습니다.',
          '수출 시 주의사항과 비용을 정리해드리겠습니다.'
        ],
        '성분': [
          '해당 성분의 안전성과 효능을 분석해드리겠습니다...',
          '성분 간 상호작용을 검토하여 안전한 조합을 제안드립니다.',
          '대체 성분과 최적 농도를 추천해드리겠습니다.'
        ],
        '트렌드': [
          '최신 시장 트렌드를 분석한 결과를 공유드리겠습니다...',
          '소비자 선호도 변화와 시장 기회를 분석해드립니다.',
          '경쟁사 동향과 차별화 전략을 제안드리겠습니다.'
        ],
        '가격': [
          '시장 분석을 통한 최적 가격대를 제안드리겠습니다...',
          '수익성 분석과 가격 전략을 수립해드립니다.',
          '경쟁력 있는 가격 포지셔닝을 제안드리겠습니다.'
        ]
      };

      const responses = aiResponses[selectedAI] || aiResponses['화장품법'];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('ko-KR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  // FAQ 클릭 시 자동 입력
  const handleFAQClick = (question) => {
    setInputMessage(question);
  };

  // AI 전문가 선택 컴포넌트
  const AIExpertSelector = () => (
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
  );

  // 채팅 영역 컴포넌트
  const ChatArea = () => (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden h-full lg:h-[600px]">
      {/* AI 헤더 */}
      <div className={`bg-gradient-to-r ${currentAI.color} text-white p-5 rounded-t-3xl`}>
        <div className="flex items-center space-x-4">
          <div className="text-2xl bg-white/20 backdrop-blur-sm rounded-2xl p-3">
            {currentAI.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold">{currentAI.name}</h2>
            <p className="text-sm opacity-90 mt-1">{currentAI.description}</p>
          </div>
        </div>
      </div>

      {/* 자주 묻는 질문 */}
      <div className="p-4 border-b border-gray-100">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="flex items-center justify-between w-full text-left hover:bg-gray-50 rounded-xl p-2 transition-colors duration-200"
        >
          <h3 className="text-base font-bold text-gray-800">자주 묻는 질문</h3>
          {showFAQ ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        {showFAQ && (
          <div className="mt-3 grid grid-cols-1 gap-2">
            {currentAI.faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => handleFAQClick(faq)}
                className="p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 border border-gray-200 hover:border-gray-300 text-sm hover:shadow-sm"
              >
                <span className="text-gray-700">{faq}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 채팅 영역 */}
      <div className="flex-1 overflow-y-auto p-5">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-5xl mb-4 opacity-20">💬</div>
            <h3 className={`text-xl font-bold mb-2 ${currentAI.textColor}`}>
              안녕하세요! {currentAI.name}입니다.
            </h3>
            <p className="text-gray-500 text-sm">
              궁금한 것이 있으시면 언제든 물어보세요.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-3xl shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.sender === 'user' ? '나' : currentAI.name} • {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-3xl shadow-sm">
                  <p className="text-sm">
                    {currentAI.name}이 답변을 준비하고 있습니다...
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {currentAI.name} • 지금
                  </p>
                </div>
              </div>
            )}
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
            placeholder={`${currentAI.name}에게 질문하세요`}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="px-6 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>전송</span>
          </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 헤더 섹션 */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI 어시스턴트
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            화장품 업계 전문 AI가 모든 궁금증을 해결해드립니다
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* AI 전문가 선택 영역 */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <AIExpertSelector />
          </div>
          
          {/* 채팅 영역 */}
          <div className="flex-1">
            <ChatArea />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRecommendationPage;

