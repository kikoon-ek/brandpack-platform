import React, { useState } from 'react';
import { Eye, ExternalLink, Calendar, Tag, TrendingUp, Award, Users, Star } from 'lucide-react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // 카테고리 정의
  const categories = {
    all: '전체',
    basic: '기초화장품',
    color: '색조화장품',
    eco: '친환경',
    premium: '프리미엄',
    export: '수출',
    men: '남성'
  };

  // 포트폴리오 데이터
  const portfolioItems = [
    {
      id: 1,
      name: "PURE GLOW",
      category: "basic",
      description: "민감성 피부를 위한 프리미엄 스킨케어 브랜드",
      year: "2024.03",
      revenue: "150억원",
      roi: "320%",
      tags: ["순한성분", "민감성", "프리미엄"],
      image: "/images/portfolio/pure-glow.jpg",
      status: "런칭 완료"
    },
    {
      id: 2,
      name: "URBAN SHIELD",
      category: "color",
      description: "도시 여성을 위한 멀티 기능 색조 브랜드",
      year: "2024.01",
      revenue: "200억원",
      roi: "280%",
      tags: ["롱래스팅", "멀티", "기능성"],
      image: "/images/portfolio/urban-shield.jpg",
      status: "런칭 완료"
    },
    {
      id: 3,
      name: "ECO BEAUTY",
      category: "eco",
      description: "지속가능한 뷰티를 추구하는 친환경 브랜드",
      year: "2023.11",
      revenue: "100억원",
      roi: "250%",
      tags: ["재활용용기", "비건", "친환경"],
      image: "/images/portfolio/eco-beauty.jpg",
      status: "런칭 완료"
    },
    {
      id: 4,
      name: "LUXURY LINE",
      category: "premium",
      description: "럭셔리 안티에이징 프리미엄 라인",
      year: "2024.02",
      revenue: "300억원",
      roi: "400%",
      tags: ["안티에이징", "럭셔리", "고급"],
      image: "/images/portfolio/luxury-line.jpg",
      status: "런칭 완료"
    },
    {
      id: 5,
      name: "K-BEAUTY GLOBAL",
      category: "export",
      description: "해외 진출 성공 K-뷰티 브랜드",
      year: "2023.09",
      revenue: "500억원",
      roi: "350%",
      tags: ["해외진출", "K-뷰티", "글로벌"],
      image: "/images/portfolio/k-beauty-global.jpg",
      status: "런칭 완료"
    },
    {
      id: 6,
      name: "MEN'S CARE",
      category: "men",
      description: "남성 전용 그루밍 케어 브랜드",
      year: "2024.04",
      revenue: "80억원",
      roi: "290%",
      tags: ["남성전용", "그루밍", "케어"],
      image: "/images/portfolio/mens-care.jpg",
      status: "런칭 완료"
    },
    {
      id: 7,
      name: "NATURAL GLOW",
      category: "basic",
      description: "자연 성분 기반 데일리 스킨케어",
      year: "2023.12",
      revenue: "120억원",
      roi: "270%",
      tags: ["자연성분", "데일리", "순한"],
      image: "/images/portfolio/natural-glow.jpg",
      status: "런칭 완료"
    },
    {
      id: 8,
      name: "COLOR PLAY",
      category: "color",
      description: "젊은 세대를 위한 플레이풀 색조",
      year: "2024.05",
      revenue: "90억원",
      roi: "310%",
      tags: ["젊은층", "플레이풀", "트렌디"],
      image: "/images/portfolio/color-play.jpg",
      status: "런칭 완료"
    },
    {
      id: 9,
      name: "GREEN FUTURE",
      category: "eco",
      description: "제로웨이스트 지향 친환경 뷰티",
      year: "2024.06",
      revenue: "70억원",
      roi: "260%",
      tags: ["제로웨이스트", "리필", "지속가능"],
      image: "/images/portfolio/green-future.jpg",
      status: "런칭 완료"
    }
  ];

  // 필터링된 포트폴리오
  const filteredPortfolios = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl font-bold mb-3">성공 포트폴리오</h1>
          <p className="text-lg text-gray-200 mb-6">
            BrandPack과 함께 성공적으로 런칭한 브랜드들의 실제 사례와 성과를 확인해보세요
          </p>
          
          {/* 성과 지표 */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-200">성공 브랜드</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">1,200억</div>
              <div className="text-sm text-gray-200">누적 매출</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">320%</div>
              <div className="text-sm text-gray-200">평균 ROI</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 카테고리 탭 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(categories).map(([key, name]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-gray-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {name}
              {key !== 'all' && (
                <span className="ml-2 text-sm">
                  ({portfolioItems.filter(item => item.category === key).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 포트폴리오 그리드 */}
        <div className="grid grid-cols-3 gap-8">
          {filteredPortfolios.map((portfolio) => (
            <div 
              key={portfolio.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 overflow-hidden"
              onClick={() => window.open(`/portfolio/${portfolio.id}`, '_blank')}
            >
              {/* 이미지 */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={portfolio.image}
                  alt={portfolio.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    ROI {portfolio.roi}
                  </span>
                </div>
              </div>

              {/* 콘텐츠 */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{portfolio.name}</h3>
                  <span className="text-sm text-gray-500">{portfolio.year}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {portfolio.description}
                </p>

                {/* 성과 지표 */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <TrendingUp size={16} className="text-gray-500" />
                      <span className="text-gray-700">매출: {portfolio.revenue}</span>
                    </div>
                  </div>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2">
                  {portfolio.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 결과가 없을 때 */}
        {filteredPortfolios.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Award size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              해당 카테고리의 포트폴리오가 없습니다
            </h3>
            <p className="text-gray-600">
              다른 카테고리를 선택해보세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;

