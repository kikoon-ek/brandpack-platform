import React, { useState } from 'react';
import { Filter, Eye, ExternalLink, Calendar, Tag, TrendingUp, Award, Users } from 'lucide-react';
import '../App.css';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      name: "RICE BRAN ESSENCE",
      category: "스킨케어",
      status: "런칭 완료",
      launchDate: "2024.03",
      description: "쌀겨 추출물을 활용한 프리미엄 안티에이징 에센스로 자연 성분의 힘을 담았습니다.",
      results: {
        revenue: "월 5,000만원",
        growth: "+250%",
        satisfaction: "4.8/5"
      },
      features: ["쌀겨 추출물", "히알루론산", "나이아신아마이드"],
      targetMarket: "30-50대 여성",
      achievements: ["올리브영 베스트", "뷰티 어워드 수상"],
      image: "/api/placeholder/400/300",
      colors: ["#F5F5DC", "#DEB887", "#D2B48C"]
    },
    {
      id: 2,
      name: "URBAN GLOW FOUNDATION",
      category: "메이크업",
      status: "런칭 완료",
      launchDate: "2024.01",
      description: "도시 생활에 최적화된 롱래스팅 파운데이션으로 하루 종일 완벽한 커버력을 제공합니다.",
      results: {
        revenue: "월 3,200만원",
        growth: "+180%",
        satisfaction: "4.6/5"
      },
      features: ["SPF 30", "12시간 지속", "세미매트 마감"],
      targetMarket: "20-40대 직장인",
      achievements: ["론칭 첫 달 완판", "인플루언서 추천"],
      image: "/api/placeholder/400/300",
      colors: ["#FFB6C1", "#FFA07A", "#FF69B4"]
    },
    {
      id: 3,
      name: "PURE ESSENCE PERFUME",
      category: "향수",
      status: "개발 중",
      launchDate: "2024.07",
      description: "천연 에센셜 오일만을 사용한 럭셔리 향수 컬렉션으로 개인의 개성을 표현합니다.",
      results: {
        revenue: "예상 월 8,000만원",
        growth: "예상 +300%",
        satisfaction: "테스트 4.9/5"
      },
      features: ["천연 에센셜 오일", "지속력 8시간", "유니섹스"],
      targetMarket: "30-50대 남녀",
      achievements: ["크라우드펀딩 300% 달성"],
      image: "/api/placeholder/400/300",
      colors: ["#E6E6FA", "#DDA0DD", "#9370DB"]
    },
    {
      id: 4,
      name: "YOUTH REVIVAL SERUM",
      category: "스킨케어",
      status: "런칭 완료",
      launchDate: "2023.11",
      description: "성숙한 피부를 위한 집중 안티에이징 세럼으로 피부 재생과 탄력 개선에 특화되었습니다.",
      results: {
        revenue: "월 7,500만원",
        growth: "+320%",
        satisfaction: "4.7/5"
      },
      features: ["레티놀", "펩타이드", "콜라겐"],
      targetMarket: "40-60대 여성",
      achievements: ["백화점 입점", "리피트 구매율 85%"],
      image: "/api/placeholder/400/300",
      colors: ["#F0F8FF", "#E0E6F8", "#C6D9F1"]
    },
    {
      id: 5,
      name: "ECO BEAUTY LINE",
      category: "스킨케어",
      status: "런칭 완료",
      launchDate: "2024.02",
      description: "지속가능한 뷰티를 추구하는 친환경 스킨케어 라인으로 제로웨이스트를 실현합니다.",
      results: {
        revenue: "월 2,800만원",
        growth: "+150%",
        satisfaction: "4.5/5"
      },
      features: ["유기농 성분", "재활용 용기", "비건 인증"],
      targetMarket: "20-40대 환경의식 소비자",
      achievements: ["친환경 인증", "MZ세대 선호 브랜드"],
      image: "/api/placeholder/400/300",
      colors: ["#90EE90", "#98FB98", "#00FF7F"]
    },
    {
      id: 6,
      name: "MEN'S GROOMING KIT",
      category: "남성케어",
      status: "개발 중",
      launchDate: "2024.06",
      description: "현대 남성을 위한 올인원 그루밍 키트로 간편하면서도 효과적인 케어를 제공합니다.",
      results: {
        revenue: "예상 월 4,500만원",
        growth: "예상 +200%",
        satisfaction: "테스트 4.4/5"
      },
      features: ["올인원 키트", "휴대용 사이즈", "남성 전용"],
      targetMarket: "25-45세 남성",
      achievements: ["사전 예약 1,000개 돌파"],
      image: "/api/placeholder/400/300",
      colors: ["#2F4F4F", "#708090", "#778899"]
    }
  ];

  const categories = ['all', '스킨케어', '메이크업', '향수', '남성케어'];
  const statuses = ['all', '런칭 완료', '개발 중'];

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case '런칭 완료': return 'bg-green-100 text-green-700';
      case '개발 중': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const totalRevenue = portfolioItems
    .filter(item => item.status === '런칭 완료')
    .reduce((sum, item) => {
      const revenue = parseInt(item.results.revenue.replace(/[^0-9]/g, ''));
      return sum + revenue;
    }, 0);

  const stats = [
    { label: "총 프로젝트", value: portfolioItems.length, icon: Award, color: "text-gray-600" },
    { label: "런칭 완료", value: portfolioItems.filter(item => item.status === '런칭 완료').length, icon: TrendingUp, color: "text-stone-600" },
    { label: "월 총 매출", value: `${(totalRevenue / 10000).toFixed(0)}억원`, icon: TrendingUp, color: "text-slate-600" },
    { label: "평균 만족도", value: "4.6/5", icon: Users, color: "text-gray-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/85 to-stone-50/25">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-stone-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
                포트폴리오
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              BrandPack을 통해 성공적으로 런칭된 브랜드들의 성과와 스토리를 확인해보세요
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '전체 카테고리' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? '전체 상태' : status}
                  </option>
                ))}
              </select>
            </div>
            
            <span className="text-gray-600">
              총 <span className="font-semibold text-gray-800">{filteredItems.length}</span>개 프로젝트
            </span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Color Palette */}
              <div className="h-16 flex">
                {item.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.launchDate}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">핵심 특징</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">성과</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">{item.results.revenue}</div>
                      <div className="text-sm text-gray-600">매출</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.results.growth}</div>
                      <div className="text-sm text-gray-600">성장률</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">{item.results.satisfaction}</div>
                      <div className="text-sm text-gray-600">만족도</div>
                    </div>
                  </div>
                </div>

                {/* Target Market */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">타겟 시장</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {item.targetMarket}
                  </span>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">주요 성과</h4>
                  <div className="space-y-2">
                    {item.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    상세보기
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    사례 연구
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">해당하는 프로젝트가 없습니다</h3>
            <p className="text-gray-500">다른 필터 조건을 시도해보세요.</p>
          </div>
        )}

        {/* Success Metrics */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
              전체 성과 요약
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">247개</div>
              <div className="text-gray-600">총 런칭 브랜드</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-600 mb-2">1,247억원</div>
              <div className="text-gray-600">누적 매출</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">85%</div>
              <div className="text-gray-600">성공률</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">4.7/5</div>
              <div className="text-gray-600">평균 만족도</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
              당신의 브랜드도 성공 스토리에 합류하세요
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            검증된 프로세스와 전문 팀이 당신의 브랜드 성공을 지원합니다
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            브랜드 런칭 상담받기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

