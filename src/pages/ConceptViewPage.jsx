import React, { useState } from 'react';
import { Search, Filter, Eye, Heart, Star, Tag, Users, TrendingUp } from 'lucide-react';
import '../App.css';

const ConceptViewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTarget, setSelectedTarget] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const concepts = [
    {
      id: 1,
      name: "RICE BRAN 2",
      category: "스킨케어",
      target: "20-30대 여성",
      priceRange: "프리미엄",
      description: "베이비 케어를 위한 전문 케어 라인으로 혁신적인 성분과 기술을 결합한 프리미엄 화장품 콘셉트입니다.",
      keyIngredients: ["쌀겨 추출물", "히알루론산", "나이아신아마이드"],
      targetPrice: "25,000-45,000원",
      marketSize: "1,200억원",
      competition: "중간",
      uniqueness: "쌀겨 성분의 독창적 활용",
      developmentTime: "6-8개월",
      rating: 4.8,
      likes: 156,
      views: 2340,
      tags: ["자연성분", "안티에이징", "보습"],
      colors: ["#F5F5DC", "#DEB887", "#D2B48C"]
    },
    {
      id: 2,
      name: "URBAN GLOW",
      category: "메이크업",
      target: "20-40대 직장인",
      priceRange: "중급",
      description: "도시 생활에 최적화된 멀티 기능성 메이크업 라인으로 바쁜 일상 속에서도 완벽한 메이크업을 연출할 수 있습니다.",
      keyIngredients: ["비타민 C", "SPF 30", "롱래스팅 폴리머"],
      targetPrice: "15,000-35,000원",
      marketSize: "800억원",
      competition: "높음",
      uniqueness: "올인원 멀티 기능성",
      developmentTime: "4-6개월",
      rating: 4.6,
      likes: 203,
      views: 3120,
      tags: ["멀티기능", "롱래스팅", "SPF"],
      colors: ["#FFB6C1", "#FFA07A", "#FF69B4"]
    },
    {
      id: 3,
      name: "PURE ESSENCE",
      category: "향수",
      target: "30-50대 남녀",
      priceRange: "럭셔리",
      description: "자연에서 영감을 받은 순수한 향수 컬렉션으로 개인의 개성과 감성을 표현하는 시그니처 향수입니다.",
      keyIngredients: ["천연 에센셜 오일", "머스크", "우디 노트"],
      targetPrice: "80,000-150,000원",
      marketSize: "500억원",
      competition: "낮음",
      uniqueness: "천연 성분 100% 사용",
      developmentTime: "8-12개월",
      rating: 4.9,
      likes: 89,
      views: 1560,
      tags: ["천연향료", "럭셔리", "유니섹스"],
      colors: ["#E6E6FA", "#DDA0DD", "#9370DB"]
    },
    {
      id: 4,
      name: "YOUTH REVIVAL",
      category: "스킨케어",
      target: "40-60대 여성",
      priceRange: "프리미엄",
      description: "성숙한 피부를 위한 집중 안티에이징 케어 라인으로 피부 재생과 탄력 개선에 특화된 고기능성 제품입니다.",
      keyIngredients: ["레티놀", "펩타이드", "콜라겐"],
      targetPrice: "50,000-120,000원",
      marketSize: "2,000억원",
      competition: "높음",
      uniqueness: "3단계 집중 케어 시스템",
      developmentTime: "10-12개월",
      rating: 4.7,
      likes: 134,
      views: 2890,
      tags: ["안티에이징", "집중케어", "고기능성"],
      colors: ["#F0F8FF", "#E0E6F8", "#C6D9F1"]
    },
    {
      id: 5,
      name: "ECO BEAUTY",
      category: "스킨케어",
      target: "20-40대 환경의식 소비자",
      priceRange: "중급",
      description: "지속가능한 뷰티를 추구하는 친환경 스킨케어 브랜드로 제로웨이스트와 비건 인증을 받은 제품들로 구성됩니다.",
      keyIngredients: ["유기농 식물 추출물", "재활용 용기", "비건 성분"],
      targetPrice: "20,000-40,000원",
      marketSize: "600억원",
      competition: "중간",
      uniqueness: "완전한 친환경 패키징",
      developmentTime: "6-8개월",
      rating: 4.5,
      likes: 178,
      views: 2150,
      tags: ["친환경", "비건", "제로웨이스트"],
      colors: ["#90EE90", "#98FB98", "#00FF7F"]
    },
    {
      id: 6,
      name: "MEN'S GROOMING",
      category: "남성케어",
      target: "25-45대 남성",
      priceRange: "중급",
      description: "현대 남성을 위한 전문 그루밍 라인으로 간편하면서도 효과적인 남성 전용 케어 제품을 제공합니다.",
      keyIngredients: ["카페인", "멘톨", "살리실산"],
      targetPrice: "18,000-35,000원",
      marketSize: "400억원",
      competition: "중간",
      uniqueness: "남성 피부 특성 맞춤",
      developmentTime: "5-7개월",
      rating: 4.4,
      likes: 92,
      views: 1780,
      tags: ["남성전용", "그루밍", "간편케어"],
      colors: ["#2F4F4F", "#708090", "#778899"]
    }
  ];

  const categories = ['all', '스킨케어', '메이크업', '향수', '남성케어'];
  const targets = ['all', '20-30대 여성', '20-40대 직장인', '30-50대 남녀', '40-60대 여성', '20-40대 환경의식 소비자', '25-45대 남성'];
  const priceRanges = ['all', '중급', '프리미엄', '럭셔리'];

  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concept.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory;
    const matchesTarget = selectedTarget === 'all' || concept.target === selectedTarget;
    const matchesPriceRange = selectedPriceRange === 'all' || concept.priceRange === selectedPriceRange;
    
    return matchesSearch && matchesCategory && matchesTarget && matchesPriceRange;
  });

  const getCompetitionColor = (competition) => {
    switch (competition) {
      case '낮음': return 'text-green-600 bg-green-100';
      case '중간': return 'text-yellow-600 bg-yellow-100';
      case '높음': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* 좌측 사이드바 - 검색 및 필터 */}
          <div className="w-56 space-y-6">
            {/* 검색 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">검색</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="콘셉트명 또는 설명 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* 카테고리 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">카테고리</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '전체 카테고리' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* 타겟 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">타겟</h3>
              <select
                value={selectedTarget}
                onChange={(e) => setSelectedTarget(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="all">전체 타겟</option>
                {targets.slice(1).map(target => (
                  <option key={target} value={target}>{target}</option>
                ))}
              </select>
            </div>

            {/* 가격대 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">가격대</h3>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="all">전체 가격대</option>
                {priceRanges.slice(1).map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* 필터 초기화 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedTarget('all');
                  setSelectedPriceRange('all');
                }}
                className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                필터 초기화
              </button>
            </div>
          </div>

          {/* 우측 메인 영역 - 제품 그리드 */}
          <div className="flex-1">
            {/* 결과 개수 */}
            <div className="mb-6">
              <p className="text-gray-600">
                총 <span className="font-semibold text-gray-800">{filteredConcepts.length}</span>개 콘셉트
              </p>
            </div>

            {/* 콘셉트 그리드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConcepts.map((concept) => (
                <div key={concept.id} className="relative group cursor-pointer">
                  {/* 메인 이미지 카드 - 순수 이미지만 표시 */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div 
                      className="h-80 relative"
                      style={{
                        background: `linear-gradient(135deg, ${concept.colors[0]}, ${concept.colors[1]}, ${concept.colors[2]})`
                      }}
                    >
                      {/* 기본 상태에서는 아무것도 표시하지 않음 - 순수 이미지만 */}
                    </div>
                  </div>

                  {/* 호버 시 나타나는 정보 오버레이 */}
                  <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                    <div className="text-white space-y-4">
                      {/* 제품명 */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-1">{concept.name}</h3>
                        <p className="text-white/90 text-sm">{concept.category}</p>
                      </div>

                      {/* 설명 */}
                      <div className="mb-4">
                        <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{concept.description}</p>
                      </div>

                      {/* 주요 정보 */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/70">타겟</span>
                          <span className="text-white font-medium">{concept.target}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">예상 가격</span>
                          <span className="text-white font-medium">{concept.targetPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">시장 규모</span>
                          <span className="text-white font-medium">{concept.marketSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">개발 기간</span>
                          <span className="text-white font-medium">{concept.developmentTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">경쟁 강도</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            concept.competition === '낮음' ? 'bg-green-500 text-white' :
                            concept.competition === '중간' ? 'bg-yellow-500 text-white' :
                            'bg-red-500 text-white'
                          }`}>
                            {concept.competition}
                          </span>
                        </div>
                      </div>

                      {/* 태그 */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {concept.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* 통계만 표시 (자세히 보기 버튼 제거) */}
                      <div className="flex items-center justify-center pt-4 border-t border-white/20">
                        <div className="flex items-center gap-4 text-sm text-white/80">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{concept.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{concept.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{concept.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredConcepts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-500">다른 검색어나 필터를 시도해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptViewPage;

