import React, { useState } from 'react';
import { Globe, TrendingUp, Users, Award, MapPin, ArrowRight, CheckCircle, Star } from 'lucide-react';
import '../App.css';

const GlobalBusinessPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const globalStats = [
    { label: "진출 국가", value: "15+", icon: Globe, color: "text-gray-600" },
    { label: "해외 매출", value: "120억원", icon: TrendingUp, color: "text-stone-600" },
    { label: "글로벌 파트너", value: "50+", icon: Users, color: "text-slate-600" },
    { label: "수출 인증", value: "25+", icon: Award, color: "text-gray-700" }
  ];

  const regions = [
    {
      id: 'asia',
      name: '아시아',
      countries: ['일본', '중국', '태국', '베트남', '싱가포르'],
      marketSize: '2,500억원',
      growth: '+15%',
      opportunities: [
        { level: 'high', title: 'K-뷰티 열풍', description: '한국 화장품에 대한 높은 관심도' },
        { level: 'medium', title: '온라인 시장 확대', description: '이커머스 플랫폼 성장' },
        { level: 'high', title: '프리미엄 시장', description: '고급 제품에 대한 수요 증가' }
      ],
      requirements: ['FDA 승인', 'HALAL 인증', '현지 언어 라벨링'],
      timeline: '3-6개월'
    },
    {
      id: 'europe',
      name: '유럽',
      countries: ['독일', '프랑스', '이탈리아', '영국', '스페인'],
      marketSize: '1,800억원',
      growth: '+8%',
      opportunities: [
        { level: 'high', title: '친환경 트렌드', description: '지속가능한 뷰티 제품 선호' },
        { level: 'medium', title: '안티에이징', description: '성숙한 소비자층의 니즈' },
        { level: 'medium', title: '럭셔리 시장', description: '프리미엄 브랜드 선호도' }
      ],
      requirements: ['CE 마킹', 'CPNP 등록', 'REACH 규정 준수'],
      timeline: '6-9개월'
    },
    {
      id: 'americas',
      name: '아메리카',
      countries: ['미국', '캐나다', '브라질', '멕시코', '칠레'],
      marketSize: '3,200억원',
      growth: '+12%',
      opportunities: [
        { level: 'high', title: '다양성 중시', description: '다양한 피부톤 대응 제품' },
        { level: 'high', title: '클린 뷰티', description: '천연 성분 선호도 증가' },
        { level: 'medium', title: '남성 시장', description: '남성 화장품 시장 확대' }
      ],
      requirements: ['FDA 등록', 'Health Canada 승인', 'ANVISA 인증'],
      timeline: '4-8개월'
    }
  ];

  const services = [
    {
      title: "시장 조사 및 분석",
      description: "타겟 시장의 트렌드, 경쟁사, 소비자 니즈를 심층 분석하여 진출 전략을 수립합니다.",
      features: ["시장 규모 분석", "경쟁사 벤치마킹", "소비자 조사", "트렌드 분석"],
      icon: TrendingUp
    },
    {
      title: "법규 및 인증 컨설팅",
      description: "각 국가별 화장품 관련 법규를 분석하고 필요한 인증 절차를 지원합니다.",
      features: ["법규 분석", "인증 신청", "라벨링 가이드", "규제 대응"],
      icon: Award
    },
    {
      title: "현지 파트너 매칭",
      description: "신뢰할 수 있는 현지 유통업체, 리테일러와의 파트너십을 중개합니다.",
      features: ["유통업체 매칭", "리테일러 연결", "계약 지원", "관계 관리"],
      icon: Users
    },
    {
      title: "물류 및 배송",
      description: "효율적인 글로벌 물류 네트워크를 통해 안전하고 빠른 배송을 지원합니다.",
      features: ["국제 배송", "창고 관리", "통관 지원", "배송 추적"],
      icon: Globe
    }
  ];

  const successStories = [
    {
      brand: "RICE BRAN",
      region: "일본",
      achievement: "런칭 6개월 만에 월 매출 2억원 달성",
      challenge: "까다로운 일본 시장 진출",
      solution: "현지 트렌드에 맞춘 제품 개발 및 마케팅",
      result: "주요 드럭스토어 체인 입점 성공"
    },
    {
      brand: "NATURAL GLOW",
      region: "독일",
      achievement: "친환경 인증 획득 후 매출 300% 증가",
      challenge: "엄격한 EU 화장품 규제",
      solution: "REACH 규정 준수 및 친환경 포장재 적용",
      result: "유럽 전역 온라인 판매 확대"
    },
    {
      brand: "PURE ESSENCE",
      region: "미국",
      achievement: "아마존 베스트셀러 1위 달성",
      challenge: "경쟁이 치열한 미국 시장",
      solution: "인플루언서 마케팅 및 브랜드 스토리텔링",
      result: "전국 백화점 입점 및 브랜드 인지도 확산"
    }
  ];

  const filteredRegions = selectedRegion === 'all' ? regions : regions.filter(r => r.id === selectedRegion);

  const getOpportunityColor = (level) => {
    switch (level) {
      case 'high': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/85 to-stone-50/25">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-stone-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
                글로벌 비즈니스
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              해외 시장 진출 원스톱 솔루션으로 전 세계 고객에게 당신의 브랜드를 선보이세요
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
              글로벌 진출 상담받기
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
                글로벌 진출 서비스
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              체계적인 프로세스로 성공적인 해외 진출을 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-gray-500 to-stone-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  자세히 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Markets */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
                지역별 시장 기회
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              각 지역의 시장 특성과 기회를 분석해보세요
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedRegion('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedRegion === 'all'
                    ? 'bg-gradient-to-r from-gray-600 to-stone-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                전체
              </button>
              {regions.map(region => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedRegion === region.id
                      ? 'bg-gradient-to-r from-gray-600 to-stone-700 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRegions.map(region => (
              <div key={region.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{region.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-600">{region.marketSize}</div>
                    <div className="text-sm text-green-600 font-medium">{region.growth}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">주요 국가</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">시장 기회</h4>
                  <div className="space-y-2">
                    {region.opportunities.map((opp, index) => (
                      <div key={index} className="flex items-start">
                        <span className={`px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5 ${getOpportunityColor(opp.level)}`}>
                          {opp.level === 'high' ? '높음' : opp.level === 'medium' ? '보통' : '낮음'}
                        </span>
                        <div>
                          <div className="font-medium text-gray-800 text-sm">{opp.title}</div>
                          <div className="text-gray-600 text-xs">{opp.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">필수 요구사항</h4>
                  <div className="space-y-1">
                    {region.requirements.map((req, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500">예상 진출 기간</div>
                    <div className="font-semibold text-gray-700">{region.timeline}</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-stone-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    상담받기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
                글로벌 성공 사례
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              BrandPack과 함께 해외 시장에서 성공한 브랜드들의 이야기
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{story.brand}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.region}
                  </div>
                </div>

                <div className="text-lg font-semibold text-gray-700 mb-6">
                  {story.achievement}
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">도전과제</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">솔루션</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">결과</h4>
                    <p className="text-gray-600 text-sm">{story.result}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">성공 사례</span>
                  </div>
                  <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            지금 바로 글로벌 진출을 시작하세요
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            전문가와의 무료 상담을 통해 당신의 브랜드에 맞는 글로벌 전략을 수립해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              무료 상담 신청
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              성공 사례 더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBusinessPage;

