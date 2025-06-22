import React, { useState } from 'react';
import { ChevronRight, Play, Package, TrendingUp, MessageCircle, Clock, ArrowRight, Star, Users, Globe, Zap, Brain, Shield, CheckCircle, ChevronDown, Calendar, ArrowDown } from 'lucide-react';
import '../App.css';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. 히어로 섹션 - 그레이 톤 */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 text-white relative overflow-hidden">
        {/* 배경 애니메이션 요소들 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gray-300/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-400/10 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* 왼쪽 콘텐츠 */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-700/50 rounded-full text-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              차세대 뷰티 플랫폼
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                브랜드<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">런칭부터</span><br />
                글로벌 진출까지<br />
                원스톱으로!
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                콘셉트 선택부터 제조공장 매칭, AI 상담, 그리고<br />
                <span className="text-yellow-400 font-semibold">해외 유통까지</span> BrandPack이 함께합니다
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                무료 AI 상담 받기
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                브랜드 콘셉트 보기
              </button>
            </div>

            {/* 인증 배지들 */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">ISO 인증</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">GMP 인증</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">FDA 승인</span>
              </div>
            </div>
          </div>

          {/* 오른쪽 제품 카드 */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  LIVE PREVIEW
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                  {/* 제품 이미지 배경 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
                    <div className="w-20 h-28 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg relative">
                      {/* 제품 라벨 */}
                      <div className="absolute top-2 left-1 right-1 h-16 bg-gradient-to-b from-gray-100 to-white rounded-sm flex flex-col items-center justify-center">
                        <div className="text-xs font-bold text-gray-800">PURE</div>
                        <div className="text-xs font-bold text-gray-800">GLOW</div>
                        <div className="w-6 h-1 bg-gray-300 rounded mt-1"></div>
                      </div>
                      {/* 펌프 */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gray-400 rounded-t"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PURE GLOW</h3>
                <p className="text-gray-300 text-sm">비건 트럼 브라이트닝 라인</p>
                <p className="text-gray-400 text-xs mt-2">100% 비건 성분으로 자연스러운 톤업과 브라이트닝 효과를 제공하는 라인</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">100% 비건</span>
                  </div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">자연스러운 톤업</span>
                  </div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">브라이트닝 효과</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">720원</div>
                  <div className="text-xs text-gray-400">시작 가격</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4,000개</div>
                  <div className="text-xs text-gray-400">MOQ</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">75일</div>
                  <div className="text-xs text-gray-400">런칭 기간</div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                이 콘셉트로 시작하기
              </button>
            </div>

            {/* 플로팅 도트들 */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 하단 화살표 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm mb-2">더 많은 기능 보기</p>
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </section>

      {/* 2. 선택 이유 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            왜 <span className="text-blue-600">BrandPack</span>을 선택해야 할까요?
          </h2>
          <p className="text-xl text-gray-600 mb-16">성공적인 브랜드 런칭을 위한 BrandPack만의 차별화된 강점</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">원스톱 솔루션</h3>
              <p className="text-gray-600">기획부터 제조, 유통까지 모든 과정을 한 곳에서 해결하세요.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 기반 전문성</h3>
              <p className="text-gray-600">화장품법, 패키지, 수출 인증 등 AI 챗봇의 전문 지식을 제공합니다.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">글로벌 네트워크</h3>
              <p className="text-gray-600">해외 바이어 매칭, 물류 지원으로 글로벌 시장 진출을 돕습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 핵심 서비스 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              BrandPack의 <span className="text-purple-600">핵심 서비스</span>
            </h2>
            <p className="text-xl text-gray-600">브랜드 런칭에 필요한 모든 것을 한 곳에서 해결하세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 제조공장 네트워크 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-blue-600 font-semibold">200+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">제조공장 네트워크</h3>
              <p className="text-gray-600 mb-4">전국 200+ 검증된 제조공장</p>
              <p className="text-sm text-gray-500 mb-6">ISO, GMP 인증을 받은 신뢰할 수 있는 제조공장과 직접 연결하여 최고 품질의 제품을 생산합니다.</p>
              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* AI 어시스턴트 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <div className="bg-purple-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-purple-600 font-semibold">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 어시스턴트</h3>
              <p className="text-gray-600 mb-4">화장품법/패키지/수출인증 AI</p>
              <p className="text-sm text-gray-500 mb-6">전문 지식을 학습한 AI가 24시간 실시간 상담을 제공하여 빠르고 정확한 답변을 드립니다.</p>
              <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* 용기 카탈로그 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <div className="bg-orange-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-orange-600 font-semibold">1,500+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">용기 카탈로그</h3>
              <p className="text-gray-600 mb-4">1,500+ 용기 실시간 검색</p>
              <p className="text-sm text-gray-500 mb-6">다양한 재질과 디자인의 용기를 실시간으로 검색하고 주문할 수 있는 통합 플랫폼을 제공합니다.</p>
              <button className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* 브랜드 콘셉트 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="bg-green-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-green-600 font-semibold">50+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">브랜드 콘셉트</h3>
              <p className="text-gray-600 mb-4">완성된 50+ 브랜드 기획안</p>
              <p className="text-sm text-gray-500 mb-6">타겟부터 패키징까지 완성된 브랜드 콘셉트를 바로 선택하여 빠른 런칭이 가능합니다.</p>
              <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* 글로벌 유통 지원 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-blue-600 font-semibold">Global</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">글로벌 유통 지원</h3>
              <p className="text-gray-600 mb-4">해외 시장 진출 원스톱 솔루션</p>
              <p className="text-sm text-gray-500 mb-6">해외 바이어 매칭, 물류, 인증 컨설팅까지 글로벌 진출을 위한 모든 것을 지원합니다.</p>
              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* 개발된 제품 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-gray-600" />
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-gray-600 font-semibold">500+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">개발된 제품</h3>
              <p className="text-gray-600 mb-4">BrandPack을 통해 탄생한 제품들</p>
              <p className="text-sm text-gray-500 mb-6">다양한 카테고리의 제품들이 BrandPack을 통해 성공적으로 개발되고 시장에 출시되었습니다.</p>
              <button className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 실시간 통계 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            실시간으로 확인하는 <span className="text-green-600">플랫폼 현황</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">지금 이 순간에도 새로운 브랜드들이 탄생하고 있습니다</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">247<span className="text-blue-600">개</span></div>
              <div className="text-gray-600 mb-4">활성 제조공장</div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-green-600 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                LIVE
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1,247<span className="text-purple-600">건</span></div>
              <div className="text-gray-600 mb-4">누적 런칭</div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-green-600 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                LIVE
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3,892<span className="text-blue-600">회</span></div>
              <div className="text-gray-600 mb-4">AI 상담</div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-green-600 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                LIVE
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">75<span className="text-orange-600">일</span></div>
              <div className="text-gray-600 mb-4">평균 런칭 기간</div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-green-600 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                LIVE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 완성된 브랜드 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              BrandPack으로 <span className="text-red-600">완성된 브랜드들</span>
            </h2>
            <p className="text-xl text-gray-600">우리의 서비스를 통해 성공적으로 런칭된 브랜드 포트폴리오를 확인하세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">MILD FLOW</h3>
                <p className="text-gray-400 text-sm">민감성 피부를 위한 순한 진정 라인</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-800 to-teal-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">AC RESET</h3>
                <p className="text-gray-400 text-sm">트러블 피부를 위한 강력한 솔루션</p>
              </div>
            </div>

            <div className="bg-gray-500 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">URBAN SHIELD</h3>
                <p className="text-gray-300 text-sm">도시 유해 환경으로부터 피부 보호</p>
              </div>
            </div>

            <div className="bg-green-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-700 to-emerald-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-green-800" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">VITAL GLOW</h3>
                <p className="text-green-200 text-sm">생기 넘치는 피부를 위한 비건 톤업</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
              더 많은 포트폴리오 보기 <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. 고객 후기 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              성공적인 브랜드들의 <span className="text-orange-600">생생한 후기</span>
            </h2>
            <p className="text-xl text-gray-600">BrandPack과 함께 성공한 고객들의 이야기를 들어보세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "BrandPack 덕분에 복잡한 과정 없이 70일 만에 제 브랜드를 런칭할 수 있었습니다. 특히 AI 상담은 정말 큰 도움이 되었어요."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">김민준</div>
                  <div className="text-sm text-gray-500">(주)뷰티스타 대표</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "다양한 용기와 콘셉트를 한눈에 볼 수 있어서 기획 시간이 절반으로 줄었습니다. 글로벌 유통 지원 덕분에 해외 시장 진출도 쉬웠어요."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">박선영</div>
                  <div className="text-sm text-gray-500">코스메틱 기획팀장</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "제조공장 매칭부터 수출 인증까지, 모든 과정이 투명하고 신뢰할 수 있었습니다. BrandPack은 스타트업에게 최고의 파트너입니다."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">이재현</div>
                  <div className="text-sm text-gray-500">글로벌 코스메틱스 CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4단계 프로세스 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              간단한 4단계로 <span className="text-cyan-600">브랜드 완성</span>
            </h2>
            <p className="text-xl text-gray-600">복잡한 과정을 단순하게, 75일만에 브랜드 런칭까지</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                {/* 화살표 */}
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">콘셉트 선택</h3>
              <p className="text-gray-600 text-sm">AI 추천 또는 직접 선택</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Package className="w-8 h-8 text-purple-600" />
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">제조공장 매칭</h3>
              <p className="text-gray-600 text-sm">최적의 공장 자동 매칭</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 상담</h3>
              <p className="text-gray-600 text-sm">법규, 인증, 패키지 상담</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">제작 & 런칭</h3>
              <p className="text-gray-600 text-sm">75일 만에 브랜드 완성</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 최신 소식 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              BrandPack의 <span className="text-blue-600">최신 소식</span>
            </h2>
            <p className="text-xl text-gray-600">화장품 산업 트렌드부터 BrandPack 업데이트까지</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-900 flex items-center justify-center">
                <Package className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2025.06.15</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">BrandPack, 2025년 상반기 화장품 트렌드 보고서 발표</h3>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-800 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2025.06.10</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">글로벌 바이어 1000명 초청, BrandPack 온라인 매칭데이 성료</h3>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-500 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2025.06.01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI 어시스턴트, 화장품 법규 상담 1만 건 돌파</h3>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              더 많은 소식 보기 <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 <span className="text-green-600">질문</span>
            </h2>
            <p className="text-xl text-gray-600">BrandPack에 대해 궁금한 점이 있다면 여기서 확인하세요</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "BrandPack은 어떤 서비스인가요?",
                answer: "BrandPack은 화장품 브랜드 런칭을 위한 원스톱 플랫폼입니다. 콘셉트 기획부터 제조공장 매칭, AI 상담, 글로벌 유통까지 모든 과정을 지원합니다."
              },
              {
                question: "브랜드 런칭까지 얼마나 걸리나요?",
                answer: "평균 75일 정도 소요됩니다. 콘셉트 선택, 제조공장 매칭, 생산, 품질검사 등의 과정을 거쳐 완성된 제품을 받아보실 수 있습니다."
              },
              {
                question: "해외 수출도 지원하나요?",
                answer: "네, 글로벌 유통 지원 서비스를 통해 해외 바이어 매칭, 수출 인증, 물류 지원까지 원스톱으로 제공합니다."
              },
              {
                question: "소규모 브랜드도 이용할 수 있나요?",
                answer: "물론입니다. 최소 주문 수량(MOQ)부터 대량 생산까지 다양한 규모의 브랜드를 지원합니다. 스타트업부터 대기업까지 모든 고객을 환영합니다."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA 섹션 - 그레이 톤 */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            지금 바로<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">시작하세요</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            200+ 제조공장, AI 상담, 1,500+ 용기가 기다리고 있습니다<br />
            <span className="text-yellow-400 font-semibold">1,247개</span> 브랜드가 이미 성공적으로 런칭했습니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              무료 AI 상담 시작
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
              <Package className="w-5 h-5 mr-2" />
              제조공장 둘러보기
            </button>
          </div>

          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">보안 인증</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">품질 보증</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">24/7 지원</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 푸터 */}
      <footer className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* BrandPack */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">BrandPack</h3>
              <p className="text-gray-600 mb-4">콘텐츠 기반 화장품 브랜드 런칭 플랫폼</p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* 서비스 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">서비스</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">파트너 찾기</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">용기 보기</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">콘셉트 보기</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">글로벌 비즈니스</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">AI 추천</a></li>
              </ul>
            </div>

            {/* 회사 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">회사</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">회사 소개</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">포트폴리오</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">콘텐츠</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">자주 묻는 질문</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">문의하기</a></li>
              </ul>
            </div>

            {/* 연락처 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처</h3>
              <ul className="space-y-2 text-gray-600">
                <li>📞 02-1234-5678</li>
                <li>✉️ contact@brandpack.com</li>
                <li>📍 서울특별시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 BrandPack. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700 mr-4">이용약관</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

