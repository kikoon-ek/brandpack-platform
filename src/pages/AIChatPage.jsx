import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';

const AIChatPage = () => {
  const [selectedAI, setSelectedAI] = useState('화장품법');
  const [isAIListExpanded, setIsAIListExpanded] = useState(true);

  // AI 전문가 데이터
  const aiExperts = {
    '화장품법': {
      name: '화장품법 AI',
      icon: '⚖️',
      description: '화장품 관련 법규, 규제, 인허가 전문 상담',
      accuracy: 98
    },
    '패키지': {
      name: '패키지 문안 AI',
      icon: '📦',
      description: '제품 라벨링, 마케팅 문구, 브랜드 메시지 생성',
      accuracy: 95
    },
    '수출': {
      name: '수출 업무 AI',
      icon: '🌍',
      description: '해외 수출을 위한 인증, 규제, 절차 가이드',
      accuracy: 97
    }
  };

  const currentAI = aiExperts[selectedAI];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 헤더 섹션 */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            AI 추천 시스템
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            화장품 업계 전문 AI가 법규, 마케팅, 수출, 성분 분석까지 모든 궁금증을 해결해드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-600">6개</div>
              <div className="text-sm text-gray-600 font-medium">전문 AI 봇</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-white/20">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600 font-medium">실시간 상담</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-white/20">
              <div className="text-3xl font-bold text-purple-600">95%+</div>
              <div className="text-sm text-gray-600 font-medium">정확도</div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 - 핵심 flex-col lg:flex-row 구조 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* AI 전문가 선택 영역 - 모바일: 전체 너비, 데스크톱: 320px 고정 */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30">
              
              {/* 헤더 */}
              <div className="flex items-center justify-between p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800">AI 전문가 선택</h3>
                <button 
                  onClick={() => setIsAIListExpanded(!isAIListExpanded)}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-colors lg:hidden"
                >
                  <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${isAIListExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* AI 목록 */}
              <div className={`p-8 space-y-6 ${!isAIListExpanded ? 'hidden lg:block' : ''}`}>
                {Object.entries(aiExperts).map(([key, ai]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAI(key)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                      selectedAI === key
                        ? 'border-blue-500 bg-blue-50 shadow-xl'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="text-4xl">{ai.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-lg text-gray-800 mb-3">{ai.name}</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{ai.description}</p>
                        
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-500 font-medium">정확도</span>
                          <span className="text-sm font-bold text-green-600">{ai.accuracy}%</span>
                        </div>
                        
                        {selectedAI === key && (
                          <div className="text-sm text-blue-600 font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            현재 선택됨
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 채팅 영역 - 남은 공간 모두 사용 */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-2xl border border-white/30 flex flex-col h-full lg:h-[600px]">
              
              {/* AI 헤더 */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-t-3xl">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl bg-white/20 backdrop-blur-sm rounded-3xl p-5">
                    {currentAI.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{currentAI.name}</h3>
                    <p className="text-blue-100 text-lg">{currentAI.description}</p>
                  </div>
                </div>
              </div>

              {/* 채팅 메시지 */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md px-6 py-4 rounded-3xl shadow-lg bg-gray-100 text-gray-800 border border-gray-200">
                    <p className="text-sm leading-relaxed">안녕하세요! {currentAI.name}입니다. 궁금한 것이 있으시면 언제든 물어보세요.</p>
                  </div>
                </div>
              </div>

              {/* 입력 영역 */}
              <div className="p-8 border-t border-gray-100 bg-gray-50 rounded-b-3xl">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder={`${currentAI.name}에게 질문해보세요...`}
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-lg"
                  />
                  <button className="px-8 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors flex items-center space-x-3 shadow-lg">
                    <Send className="w-5 h-5" />
                    <span className="font-semibold">전송</span>
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

export default AIChatPage;

