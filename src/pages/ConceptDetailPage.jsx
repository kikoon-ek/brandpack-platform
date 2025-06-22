import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, Share2, Download, CheckCircle, TrendingUp, Users, Target, Palette, Package, Globe } from 'lucide-react';
import '../App.css';

const ConceptDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  // 예시 콘셉트 데이터 (실제로는 props나 API에서 받아올 것)
  const concept = {
    id: 1,
    name: "RICE BRAN 2",
    category: "스킨케어",
    target: "20-30대 여성",
    priceRange: "프리미엄",
    description: "베이비 케어를 위한 전문 케어 라인으로 혁신적인 성분과 기술을 결합한 프리미엄 화장품 콘셉트입니다. 쌀겨 추출물의 독창적 활용을 통해 자연스럽고 건강한 아름다움을 추구합니다.",
    keyIngredients: ["쌀겨 추출물", "히알루론산", "나이아신아마이드", "세라마이드", "비타민 E"],
    targetPrice: "25,000-45,000원",
    marketSize: "1,200억원",
    competition: "중간",
    uniqueness: "쌀겨 성분의 독창적 활용과 전통 발효 기술의 현대적 해석",
    developmentTime: "6-8개월",
    rating: 4.8,
    likes: 156,
    views: 2340,
    tags: ["자연성분", "안티에이징", "보습", "발효기술"],
    colors: ["#F5F5DC", "#DEB887", "#D2B48C"],
    
    // 상세 정보
    brandStory: "한국의 전통 쌀 문화에서 영감을 받아 현대적인 스킨케어 기술과 결합한 혁신적인 브랜드입니다. 쌀겨에 함유된 풍부한 영양소와 항산화 성분을 활용하여 건강하고 자연스러운 피부 케어를 제공합니다.",
    
    targetCustomer: {
      demographics: "20-30대 여성",
      psychographics: "자연 성분을 선호하며, 건강한 라이프스타일을 추구하는 소비자",
      painPoints: ["화학 성분에 대한 우려", "민감한 피부", "바쁜 일상 속 간편한 케어 필요"],
      needs: ["순한 성분", "효과적인 보습", "안티에이징", "간편한 사용법"]
    },
    
    productLine: [
      {
        name: "라이스 브란 클렌징 오일",
        description: "쌀겨 오일 베이스의 순한 클렌징 오일",
        price: "28,000원",
        volume: "150ml"
      },
      {
        name: "라이스 브란 토너",
        description: "발효 쌀겨 추출물이 함유된 보습 토너",
        price: "32,000원",
        volume: "200ml"
      },
      {
        name: "라이스 브란 에센스",
        description: "집중 영양 공급을 위한 고농축 에센스",
        price: "45,000원",
        volume: "50ml"
      },
      {
        name: "라이스 브란 크림",
        description: "깊은 보습과 영양 공급을 위한 크림",
        price: "38,000원",
        volume: "50ml"
      }
    ],
    
    marketAnalysis: {
      size: "1,200억원",
      growth: "+15% (연간)",
      competitors: ["설화수", "후", "아모레퍼시픽"],
      opportunities: ["자연 성분 트렌드", "K-뷰티 글로벌 인기", "프리미엄 시장 성장"],
      threats: ["경쟁 심화", "원료 가격 상승", "규제 강화"]
    },
    
    businessModel: {
      channels: ["온라인 직판", "백화점", "드럭스토어", "해외 수출"],
      pricing: "프리미엄 가격 정책",
      promotion: ["인플루언서 마케팅", "체험 이벤트", "브랜드 스토리텔링"],
      distribution: ["국내 주요 유통채널", "아시아 주요국 진출"]
    },
    
    timeline: [
      { phase: "콘셉트 개발", duration: "1개월", status: "완료" },
      { phase: "제품 개발", duration: "3-4개월", status: "진행중" },
      { phase: "패키징 디자인", duration: "2개월", status: "대기" },
      { phase: "테스트 마케팅", duration: "1개월", status: "대기" },
      { phase: "정식 런칭", duration: "1개월", status: "대기" }
    ]
  };

  const tabs = [
    { id: 'overview', label: '개요', icon: Package },
    { id: 'target', label: '타겟 분석', icon: Target },
    { id: 'products', label: '제품 라인', icon: Palette },
    { id: 'market', label: '시장 분석', icon: TrendingUp },
    { id: 'business', label: '비즈니스 모델', icon: Globe },
    { id: 'timeline', label: '개발 일정', icon: CheckCircle }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">브랜드 스토리</h3>
              <p className="text-gray-600 leading-relaxed">{concept.brandStory}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">핵심 성분</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {concept.keyIngredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">차별화 포인트</h3>
              <p className="text-gray-600 leading-relaxed">{concept.uniqueness}</p>
            </div>
          </div>
        );
        
      case 'target':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">타겟 고객 프로필</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-3">인구통계학적 특성</h4>
                  <p className="text-gray-600">{concept.targetCustomer.demographics}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-3">심리적 특성</h4>
                  <p className="text-gray-600">{concept.targetCustomer.psychographics}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">고객 니즈 분석</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Pain Points</h4>
                  <ul className="space-y-2">
                    {concept.targetCustomer.painPoints.map((point, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Needs</h4>
                  <ul className="space-y-2">
                    {concept.targetCustomer.needs.map((need, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'products':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">제품 라인업</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {concept.productLine.map((product, index) => (
                <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-700">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.volume}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'market':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">시장 현황</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700 mb-2">{concept.marketAnalysis.size}</div>
                  <div className="text-gray-600">시장 규모</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">{concept.marketAnalysis.growth}</div>
                  <div className="text-gray-600">성장률</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{concept.competition}</div>
                  <div className="text-gray-600">경쟁 강도</div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">기회 요소</h4>
                <ul className="space-y-2">
                  {concept.marketAnalysis.opportunities.map((opp, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-3" />
                      {opp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">위협 요소</h4>
                <ul className="space-y-2">
                  {concept.marketAnalysis.threats.map((threat, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
        
      case 'business':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">유통 채널</h4>
                <ul className="space-y-2">
                  {concept.businessModel.channels.map((channel, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Globe className="w-4 h-4 text-blue-500 mr-3" />
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">마케팅 전략</h4>
                <ul className="space-y-2">
                  {concept.businessModel.promotion.map((promo, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 text-purple-500 mr-3" />
                      {promo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">가격 정책</h4>
                <p className="text-gray-600">{concept.businessModel.pricing}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">유통 전략</h4>
                <p className="text-gray-600">{concept.businessModel.distribution}</p>
              </div>
            </div>
          </div>
        );
        
      case 'timeline':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">개발 일정</h3>
            <div className="space-y-4">
              {concept.timeline.map((phase, index) => (
                <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg">
                  <div className={`w-4 h-4 rounded-full mr-4 ${
                    phase.status === '완료' ? 'bg-green-500' :
                    phase.status === '진행중' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{phase.phase}</h4>
                    <p className="text-sm text-gray-600">예상 기간: {phase.duration}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    phase.status === '완료' ? 'bg-green-100 text-green-700' :
                    phase.status === '진행중' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {phase.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">전체 개발 기간</h4>
              <p className="text-blue-700">{concept.developmentTime}</p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/85 to-stone-50/25">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button className="flex items-center text-gray-200 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            콘셉트 목록으로 돌아가기
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold mb-4">{concept.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">{concept.category}</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">{concept.priceRange}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold">{concept.rating}</span>
                </div>
              </div>
              <p className="text-gray-100 text-lg max-w-3xl">{concept.description}</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? '좋아요 취소' : '좋아요'}
              </button>
              <button className="flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                <Share2 className="w-5 h-5 mr-2" />
                공유하기
              </button>
              <button className="flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                자료 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="h-16 flex">
        {concept.colors.map((color, index) => (
          <div
            key={index}
            className="flex-1"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">콘셉트 정보</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">타겟 고객</span>
                  <span className="font-medium text-gray-800">{concept.target}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">예상 가격</span>
                  <span className="font-medium text-gray-800">{concept.targetPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">시장 규모</span>
                  <span className="font-medium text-gray-800">{concept.marketSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">개발 기간</span>
                  <span className="font-medium text-gray-800">{concept.developmentTime}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">태그</h4>
                <div className="flex flex-wrap gap-2">
                  {concept.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-gray-600 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  이 콘셉트로 시작하기
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:flex-1">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-lg mb-8">
              <div className="flex flex-wrap border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-gray-800 border-b-2 border-gray-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                {renderTabContent()}
              </div>
            </div>

            {/* Related Concepts */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">관련 콘셉트</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-4"></div>
                    <h4 className="font-bold text-gray-800 mb-2">관련 콘셉트 {item}</h4>
                    <p className="text-gray-600 text-sm mb-4">관련 콘셉트에 대한 간단한 설명이 들어갑니다.</p>
                    <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                      자세히 보기 →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptDetailPage;

