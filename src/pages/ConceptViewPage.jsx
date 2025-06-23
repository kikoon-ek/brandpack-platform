import React, { useState } from 'react';
import { Search, Filter, Eye, Heart, Star, Tag, Users, TrendingUp, ArrowRight, X } from 'lucide-react';
import '../App.css';

const ConceptViewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTarget, setSelectedTarget] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [showFloatingCTA, setShowFloatingCTA] = useState(true);

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
      image: "/cosmetic-images/cosmetic_01_shampoo_conditioner.jpeg"
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
      image: "/cosmetic-images/cosmetic_03_benefit_pink.jpeg"
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
      image: "/cosmetic-images/cosmetic_08_pink_perfume.jpeg"
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
      image: "/cosmetic-images/cosmetic_11_natural_skincare.jpeg"
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
      image: "/cosmetic-images/cosmetic_07_natural_products.jpeg"
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
      image: "/cosmetic-images/cosmetic_20_kefir_bottles.jpeg"
    },
    {
      id: 7,
      name: "HOLIDAY GLOW",
      category: "메이크업",
      target: "20-30대 여성",
      priceRange: "프리미엄",
      description: "특별한 날을 위한 홀리데이 한정판 메이크업 컬렉션으로 화려하고 우아한 룩을 연출할 수 있습니다.",
      keyIngredients: ["골드 파우더", "시머 펄", "롱래스팅 포뮬러"],
      targetPrice: "35,000-65,000원",
      marketSize: "900억원",
      competition: "높음",
      uniqueness: "홀리데이 한정 패키징",
      developmentTime: "4-6개월",
      rating: 4.7,
      likes: 245,
      views: 3890,
      tags: ["홀리데이", "한정판", "글리터"],
      image: "/cosmetic-images/cosmetic_02_red_gift_set.jpeg"
    },
    {
      id: 8,
      name: "BIRTHDAY BLISS",
      category: "스킨케어",
      target: "20-40대 여성",
      priceRange: "중급",
      description: "생일을 축하하는 특별한 스킨케어 세트로 피부에 선물 같은 케어를 제공합니다.",
      keyIngredients: ["로즈 추출물", "콜라겐", "비타민 E"],
      targetPrice: "28,000-48,000원",
      marketSize: "700억원",
      competition: "중간",
      uniqueness: "생일 테마 패키징",
      developmentTime: "5-7개월",
      rating: 4.6,
      likes: 189,
      views: 2670,
      tags: ["생일", "로즈", "보습"],
      image: "/cosmetic-images/cosmetic_06_birthday_cake.jpeg"
    },
    {
      id: 9,
      name: "INNISFREE ATHLETIC",
      category: "스킨케어",
      target: "20-35대 활동적인 여성",
      priceRange: "중급",
      description: "운동하는 여성을 위한 액티브 스킨케어 라인으로 땀과 피지를 효과적으로 관리합니다.",
      keyIngredients: ["제주 녹차", "미네랄 워터", "세바시틱 애씨드"],
      targetPrice: "22,000-42,000원",
      marketSize: "650억원",
      competition: "중간",
      uniqueness: "운동 후 케어 특화",
      developmentTime: "6-8개월",
      rating: 4.5,
      likes: 167,
      views: 2340,
      tags: ["액티브", "제주", "운동"],
      image: "/cosmetic-images/cosmetic_09_amorepacific_innisfree.jpeg"
    },
    {
      id: 10,
      name: "BELIF CELEBRATION",
      category: "스킨케어",
      target: "25-45대 여성",
      priceRange: "프리미엄",
      description: "특별한 순간을 기념하는 벨리프의 셀레브레이션 에디션으로 럭셔리한 케어를 제공합니다.",
      keyIngredients: ["허브 복합체", "아쿠아밤", "나폴리탄 애프리콧"],
      targetPrice: "45,000-85,000원",
      marketSize: "1,100억원",
      competition: "높음",
      uniqueness: "허브 전문 브랜드",
      developmentTime: "8-10개월",
      rating: 4.8,
      likes: 298,
      views: 4120,
      tags: ["허브", "럭셔리", "셀레브레이션"],
      image: "/cosmetic-images/cosmetic_10_belif_birthday.jpeg"
    },
    {
      id: 11,
      name: "WANDERLUST BODY",
      category: "바디케어",
      target: "20-40대 여성",
      priceRange: "중급",
      description: "여행을 꿈꾸는 이들을 위한 바디케어 라인으로 이국적인 향과 보습력을 제공합니다.",
      keyIngredients: ["시어버터", "코코넛 오일", "바닐라 추출물"],
      targetPrice: "18,000-35,000원",
      marketSize: "550억원",
      competition: "중간",
      uniqueness: "여행 테마 향수",
      developmentTime: "4-6개월",
      rating: 4.4,
      likes: 156,
      views: 2180,
      tags: ["바디케어", "여행", "보습"],
      image: "/cosmetic-images/cosmetic_12_mermade_shower_gel.jpeg"
    },
    {
      id: 12,
      name: "COLORFUL DREAMS",
      category: "메이크업",
      target: "18-28대 여성",
      priceRange: "중급",
      description: "젊고 활기찬 컬러로 가득한 메이크업 컬렉션으로 개성 있는 룩을 연출할 수 있습니다.",
      keyIngredients: ["비건 피그먼트", "하이드로겔", "비타민 C"],
      targetPrice: "12,000-28,000원",
      marketSize: "750억원",
      competition: "높음",
      uniqueness: "비건 컬러 코스메틱",
      developmentTime: "3-5개월",
      rating: 4.3,
      likes: 234,
      views: 3450,
      tags: ["컬러풀", "비건", "젊음"],
      image: "/cosmetic-images/cosmetic_13_colorful_photography.jpeg"
    },
    {
      id: 13,
      name: "NATURAL ESSENCE",
      category: "스킨케어",
      target: "30-50대 여성",
      priceRange: "프리미엄",
      description: "자연에서 추출한 순수한 성분으로 만든 에센스 라인으로 깊은 영양과 수분을 제공합니다.",
      keyIngredients: ["아르간 오일", "로즈힙 오일", "카모마일"],
      targetPrice: "55,000-95,000원",
      marketSize: "1,300억원",
      competition: "중간",
      uniqueness: "100% 자연 추출물",
      developmentTime: "9-12개월",
      rating: 4.9,
      likes: 187,
      views: 2890,
      tags: ["자연", "에센스", "영양"],
      image: "/cosmetic-images/cosmetic_14_natural_oil.jpeg"
    },
    {
      id: 14,
      name: "BEACH PROTECTION",
      category: "선케어",
      target: "20-40대 남녀",
      priceRange: "중급",
      description: "해변에서의 완벽한 자외선 차단과 수분 공급을 위한 선케어 전문 라인입니다.",
      keyIngredients: ["징크 옥사이드", "알로에 베라", "히알루론산"],
      targetPrice: "25,000-45,000원",
      marketSize: "800억원",
      competition: "높음",
      uniqueness: "워터프루프 포뮬러",
      developmentTime: "5-7개월",
      rating: 4.6,
      likes: 198,
      views: 3120,
      tags: ["선케어", "워터프루프", "보호"],
      image: "/cosmetic-images/cosmetic_15_beach_sunscreen.jpeg"
    },
    {
      id: 15,
      name: "DRUNK ELEPHANT GLOW",
      category: "스킨케어",
      target: "25-40대 여성",
      priceRange: "프리미엄",
      description: "과학적으로 검증된 성분으로 건강한 피부 글로우를 만들어주는 고기능성 스킨케어입니다.",
      keyIngredients: ["비타민 C", "레티놀", "펩타이드"],
      targetPrice: "65,000-120,000원",
      marketSize: "1,500억원",
      competition: "높음",
      uniqueness: "과학적 성분 조합",
      developmentTime: "10-14개월",
      rating: 4.8,
      likes: 312,
      views: 4890,
      tags: ["과학적", "글로우", "고기능"],
      image: "/cosmetic-images/cosmetic_19_drunk_elephant.jpeg"
    },
    {
      id: 16,
      name: "COLORFUL SKINCARE",
      category: "스킨케어",
      target: "20-35대 여성",
      priceRange: "중급",
      description: "컬러풀한 패키징과 재미있는 텍스처로 스킨케어를 즐겁게 만드는 브랜드입니다.",
      keyIngredients: ["과일 추출물", "AHA/BHA", "나이아신아마이드"],
      targetPrice: "20,000-40,000원",
      marketSize: "680억원",
      competition: "중간",
      uniqueness: "재미있는 텍스처",
      developmentTime: "4-6개월",
      rating: 4.4,
      likes: 223,
      views: 3340,
      tags: ["컬러풀", "재미", "과일"],
      image: "/cosmetic-images/cosmetic_17_colorful_skincare.jpeg"
    },
    {
      id: 17,
      name: "BABY GENTLE CARE",
      category: "베이비케어",
      target: "영유아 및 부모",
      priceRange: "중급",
      description: "민감한 아기 피부를 위한 순하고 안전한 베이비 케어 제품 라인입니다.",
      keyIngredients: ["카모마일", "시어버터", "오트밀"],
      targetPrice: "15,000-30,000원",
      marketSize: "450억원",
      competition: "중간",
      uniqueness: "EWG 그린 등급",
      developmentTime: "6-9개월",
      rating: 4.7,
      likes: 145,
      views: 2100,
      tags: ["베이비", "순함", "안전"],
      image: "/cosmetic-images/cosmetic_18_baby_oil.jpeg"
    },
    {
      id: 18,
      name: "LIPSTICK COLLECTION",
      category: "메이크업",
      target: "20-45대 여성",
      priceRange: "중급",
      description: "다양한 컬러와 피니시로 구성된 립스틱 컬렉션으로 모든 상황에 맞는 립 메이크업을 제공합니다.",
      keyIngredients: ["비타민 E", "호호바 오일", "컬러 피그먼트"],
      targetPrice: "18,000-35,000원",
      marketSize: "950억원",
      competition: "높음",
      uniqueness: "다양한 피니시 옵션",
      developmentTime: "3-5개월",
      rating: 4.5,
      likes: 267,
      views: 3780,
      tags: ["립스틱", "컬러", "다양성"],
      image: "/cosmetic-images/cosmetic_05_lipstick_display.jpeg"
    },
    {
      id: 19,
      name: "TRIBE LIFESTYLE",
      category: "라이프스타일",
      target: "25-40대 남녀",
      priceRange: "프리미엄",
      description: "라이프스타일 브랜드로서 뷰티와 웰니스를 아우르는 토털 케어 솔루션을 제공합니다.",
      keyIngredients: ["아답토겐", "프로바이오틱스", "슈퍼푸드"],
      targetPrice: "40,000-80,000원",
      marketSize: "1,200억원",
      competition: "중간",
      uniqueness: "웰니스 통합 솔루션",
      developmentTime: "8-12개월",
      rating: 4.6,
      likes: 198,
      views: 3210,
      tags: ["라이프스타일", "웰니스", "토털케어"],
      image: "/cosmetic-images/cosmetic_04_tribe_collection.png"
    },
    {
      id: 20,
      name: "KEFIR PROBIOTIC",
      category: "스킨케어",
      target: "25-45대 여성",
      priceRange: "프리미엄",
      description: "프로바이오틱스 케피어 성분을 활용한 혁신적인 스킨케어로 피부 마이크로바이옴을 케어합니다.",
      keyIngredients: ["케피어 추출물", "프로바이오틱스", "프리바이오틱스"],
      targetPrice: "50,000-90,000원",
      marketSize: "1,100억원",
      competition: "낮음",
      uniqueness: "마이크로바이옴 케어",
      developmentTime: "12-18개월",
      rating: 4.9,
      likes: 156,
      views: 2450,
      tags: ["프로바이오틱스", "마이크로바이옴", "혁신"],
      image: "/cosmetic-images/cosmetic_20_kefir_bottles.jpeg"
    }
  ];

  const categories = ['all', '스킨케어', '메이크업', '향수', '남성케어', '바디케어', '선케어', '베이비케어', '라이프스타일'];
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
                  {/* 메인 이미지 카드 */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div 
                      className="h-64 relative bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${concept.image})`
                      }}
                    >
                      {/* 호버 시 나타나는 정보 오버레이 */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6">
                        {/* 우측 상단 화살표 아이콘 */}
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        </div>

                        {/* 가운데 제품 설명 */}
                        <div className="text-center text-white max-w-xs">
                          <p className="text-sm leading-relaxed">{concept.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* 이미지 아래 기본 정보 */}
                    <div className="p-4">
                      {/* 제품명과 런칭 가능여부 */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{concept.name}</h3>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600 font-medium">런칭 가능</span>
                        </div>
                      </div>

                      {/* 태그들 */}
                      <div className="flex flex-wrap gap-1">
                        {concept.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
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

      {/* 플로팅 CTA */}
      {showFloatingCTA && (
        <div 
          className="md:block fixed bottom-24 left-6 bg-transparent p-4 max-w-xs"
          style={{ zIndex: 9999 }}
        >
          {/* 닫기 버튼 */}
          <button 
            onClick={() => setShowFloatingCTA(false)}
            className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 메인 카피 */}
          <div className="text-left mb-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
              당신만의 브랜드,<br />
              이제 아이디어에서 제품까지 한 번에.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              브랜드팩이 제형부터 용기,<br />
              브랜딩까지 직접 만들어드립니다.
            </p>
          </div>

          {/* CTA 버튼 */}
          <button className="w-full bg-gray-400 text-white font-medium py-3 px-4 rounded-md hover:bg-gray-500 transition-colors text-sm">
            Brand Pack 문의하기
          </button>
        </div>
      )}
    </div>
  );
};

export default ConceptViewPage;

