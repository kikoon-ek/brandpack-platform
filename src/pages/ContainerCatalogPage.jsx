import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Heart, Eye, ShoppingCart, ChevronUp, ChevronDown } from 'lucide-react';

const ContainerCatalogPage = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('cosmetic');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [capacityRange, setCapacityRange] = useState([1, 500]);
  const [selectedMaterials, setSelectedMaterials] = useState({
    plastic: [],
    metal: [],
    natural: []
  });
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isSubCategoryCollapsed, setIsSubCategoryCollapsed] = useState(false);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 대분류 카테고리
  const mainCategories = {
    cosmetic: '화장품 용기',
    sample: '소용량/샘플 용기',
    accessories: '부자재/캡/펌프 전용관',
    diffuser: '디퓨저/생활/산업용기',
    eco: '친환경 라인',
    pharma: '제약/건기식 용기'
  };

  // 각 대분류별 세부카테고리
  const subCategories = {
    cosmetic: [
      { id: 'all', name: '전체 보기', desc: '모든 화장품 용기' },
      { id: 'skin', name: '스킨/로션/에센스 용기', desc: 'PET, 진공, 펌프, 스포이드형 등' },
      { id: 'cream', name: '크림/밤 용기', desc: '아크릴, 유리, 리필형, 친환경 등' },
      { id: 'color', name: '색조/립/밤스틱', desc: '립글로스, 립밤, 밤스틱, 틴트 등' },
      { id: 'hair', name: '헤어/두피용', desc: '샴푸/에센스 펌프, 스프레이 등' },
      { id: 'sun', name: '선스틱/선밤', desc: '기능성 스틱류, 방수용기 등' },
      { id: 'tube', name: '튜브/다층브로우', desc: '다층, 금속튜브, 알루미늄튜브 등' },
      { id: 'luxury', name: '고급/디자인 용기', desc: '아크릴, 금속 장식, 디자인 포인트용기' }
    ],
    sample: [
      { id: 'all', name: '전체 보기', desc: '모든 소용량/샘플 용기' },
      { id: 'tube', name: '샘플 튜브', desc: '3ml, 5ml 미니 튜브류' },
      { id: 'pump', name: '미니 에센스펌프', desc: '5ml~10ml 펌프/진공/디스펜서' },
      { id: 'spray', name: '미니 스프레이', desc: '휴대용, 트래블용' },
      { id: 'dropper', name: '미니 스포이드/앰플', desc: '유리 바이알, 바이오 드롭 등' }
    ],
    accessories: [
      { id: 'all', name: '전체 보기', desc: '모든 부자재/캡/펌프 전용관' },
      { id: 'basic_cap', name: '일반 캡류', desc: '단캡, 롱캡, 이중캡, 왕관캡 등' },
      { id: 'functional_cap', name: '기능성 캡류', desc: '프레스캡, 원터치캡, 롤온캡, 삼각캡 등' },
      { id: 'pump', name: '펌프류', desc: '샴푸/에센스/오일/버블 펌프 전용' },
      { id: 'dropper', name: '스포이드', desc: '오토 스포이드, 바이알용, 버튼형 등' },
      { id: 'accessories', name: '기타 액세서리', desc: '스파출러, 집게, 계량스푼, 팩볼 등' }
    ],
    diffuser: [
      { id: 'all', name: '전체 보기', desc: '모든 디퓨저/생활/산업용기' },
      { id: 'diffuser', name: '디퓨저 용기', desc: '유리, 알루미늄, 목캡, 방향제 세트' },
      { id: 'oil', name: '오일/산업용 용기', desc: '대용량 오일펌프, 공업용 HDPE 등' },
      { id: 'bottle', name: '물병/음료병', desc: '기능성 드링크 타입, 스파우트 포함 등' },
      { id: 'remover', name: '리무버/버블 용기', desc: '버블펌프, 리무버 병, 거품 분사형 등' }
    ],
    eco: [
      { id: 'all', name: '전체 보기', desc: '모든 친환경 라인' },
      { id: 'pcr', name: 'PCR PET 용기', desc: '재활용 PET, 투명/불투명 버전' },
      { id: 'metal_free', name: '메탈프리 펌프', desc: '재질분리 쉬운 친환경 펌프' },
      { id: 'refill', name: '리필용기', desc: '리필 가능한 내부 용기 포함' },
      { id: 'biodegradable', name: 'PE/PP 생분해 용기', desc: '미생물 분해 가능한 소재 용기 등' }
    ],
    pharma: [
      { id: 'all', name: '전체 보기', desc: '모든 제약/건기식 용기' },
      { id: 'ampoule', name: '앰플/바이알/주사기', desc: '유리/플라스틱 앰플, 바이알, 주사기' },
      { id: 'eye_drop', name: '투약/안약병', desc: '5~50ml 용기, 드롭퍼 타입 등' },
      { id: 'supplement', name: '건강기능식품 용기', desc: '껌통형, 밀폐형, 광구 PET, 스푼 포함형' },
      { id: 'safety', name: '안전캡/계량컵', desc: '스푼, 컵, 드리퍼, 캡 포함형 세트 등' }
    ]
  };

  // 재질 필터 옵션
  const materialOptions = {
    plastic: ['PET', 'PE', 'PP', 'ABS', 'PC', 'PCR', 'ABL', 'PBL', 'HDPE', 'LDPE', 'PET-G', 'SAN', 'ETC', 'OTHER'],
    metal: ['알루미늄', '스틸', '아크릴'],
    natural: ['나무', '실리콘', '나일론', '유리']
  };

  // 기능 필터 옵션
  const featureOptions = [
    '진공 구조', '리필 가능', '미세 분사', '내열 / 내화학', 
    '에어리스 펌프', '휴대용 전용', '친환경 재질'
  ];

  //   // 용기 데이터 (30개)
  const containers = [
    {
      id: 1,
      name: '화장품 튜브 세트',
      category: 'tube',
      mainCategory: 'cosmetic',
      material: 'PE',
      capacity: 30,
      price: 2500,
      rating: 4.8,
      image: '/container-images/container_01_cosmetic_tubes.jpeg',
      features: ['다양한 사이즈', '친환경 재질']
    },
    {
      id: 2,
      name: '펌프 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 120,
      price: 3200,
      rating: 4.6,
      image: '/container-images/container_02_pump_bottle.jpeg',
      features: ['펌프 디스펜서', '투명 재질']
    },
    {
      id: 3,
      name: '화장품 디자인 용기',
      category: 'cream',
      mainCategory: 'cosmetic',
      material: '아크릴',
      capacity: 50,
      price: 4500,
      rating: 4.9,
      image: '/container-images/container_03_cosmetic_design.jpeg',
      features: ['고급 디자인', '리필 가능']
    },
    {
      id: 4,
      name: '광택 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 100,
      price: 2800,
      rating: 4.5,
      image: '/container-images/container_04_glossy_bottle.jpeg',
      features: ['광택 마감', '투명 재질']
    },
    {
      id: 5,
      name: '무광 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 80,
      price: 3000,
      rating: 4.7,
      image: '/container-images/container_05_frosted_bottle.jpeg',
      features: ['무광 마감', '고급스러운 질감']
    },
    {
      id: 6,
      name: '토너 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 200,
      price: 2200,
      rating: 4.4,
      image: '/container-images/container_06_toner_bottle.jpeg',
      features: ['대용량', '스킨케어 전용']
    },
    {
      id: 7,
      name: '펌프 박스 세트',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 150,
      price: 5500,
      rating: 4.8,
      image: '/container-images/container_07_pump_box_mockup.jpeg',
      features: ['박스 포장', '펌프 포함']
    },
    {
      id: 8,
      name: '유리 펌프 보틀',
      category: 'luxury',
      mainCategory: 'cosmetic',
      material: '유리',
      capacity: 100,
      price: 6800,
      rating: 4.9,
      image: '/container-images/container_08_glass_pump_bottle.jpeg',
      features: ['프리미엄 유리', '에어리스 펌프']
    },
    {
      id: 9,
      name: '스킨케어 보틀 세트',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 120,
      price: 4200,
      rating: 4.6,
      image: '/container-images/container_09_skincare_bottles.jpeg',
      features: ['세트 구성', '다양한 용량']
    },
    {
      id: 10,
      name: '에어리스 펌프',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 50,
      price: 4800,
      rating: 4.8,
      image: '/container-images/container_10_airless_pump.jpeg',
      features: ['에어리스 구조', '산화 방지']
    },
    {
      id: 11,
      name: '화이트 보틀 세트',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PE',
      capacity: 100,
      price: 3800,
      rating: 4.5,
      image: '/container-images/container_11_white_bottles.jpeg',
      features: ['화이트 컬러', '미니멀 디자인']
    },
    {
      id: 12,
      name: '보스턴 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 250,
      price: 2600,
      rating: 4.4,
      image: '/container-images/container_12_boston_bottle.jpeg',
      features: ['클래식 디자인', '대용량']
    },
    {
      id: 13,
      name: '크림 돔 보틀',
      category: 'cream',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 30,
      price: 3500,
      rating: 4.7,
      image: '/container-images/container_13_cream_dome_bottle.jpeg',
      features: ['돔 형태', '크림 전용']
    },
    {
      id: 14,
      name: '화장품 용기',
      category: 'cream',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 50,
      price: 2900,
      rating: 4.6,
      image: '/container-images/container_14_cosmetic_jar.jpeg',
      features: ['넓은 입구', '사용 편리']
    },
    {
      id: 15,
      name: '플립탑 보틀',
      category: 'tube',
      mainCategory: 'cosmetic',
      material: 'PE',
      capacity: 200,
      price: 2400,
      rating: 4.3,
      image: '/container-images/container_15_flip_top_bottle.jpeg',
      features: ['플립탑 캡', '원터치 개폐']
    },
    {
      id: 16,
      name: '무광 펌프 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 120,
      price: 3600,
      rating: 4.7,
      image: '/container-images/container_16_matt_pump_bottle.jpeg',
      features: ['무광 마감', '펌프 타입']
    },
    {
      id: 17,
      name: '투명 돔 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 100,
      price: 3200,
      rating: 4.5,
      image: '/container-images/container_17_clear_dome_bottle.jpeg',
      features: ['투명 재질', '돔 형태']
    },
    {
      id: 18,
      name: '화이트 디스펜서',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 300,
      price: 2800,
      rating: 4.4,
      image: '/container-images/container_18_white_dispenser.jpeg',
      features: ['대용량', '디스펜서 타입']
    },
    {
      id: 19,
      name: '비건 클렌저 용기',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 150,
      price: 3400,
      rating: 4.6,
      image: '/container-images/container_19_vegan_cleanser.jpeg',
      features: ['친환경 재질', '클렌저 전용']
    },
    {
      id: 20,
      name: '스킨케어 제품 세트',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 100,
      price: 5200,
      rating: 4.8,
      image: '/container-images/container_20_skincare_products.jpeg',
      features: ['세트 구성', '다양한 타입']
    },
    {
      id: 21,
      name: '화장품 패키징 세트',
      category: 'luxury',
      mainCategory: 'cosmetic',
      material: '아크릴',
      capacity: 50,
      price: 6500,
      rating: 4.9,
      image: '/container-images/container_21_cosmetic_packaging.jpeg',
      features: ['프리미엄 패키징', '고급 재질']
    },
    {
      id: 22,
      name: '드로퍼 보틀',
      category: 'dropper',
      mainCategory: 'sample',
      material: '유리',
      capacity: 30,
      price: 4200,
      rating: 4.7,
      image: '/container-images/container_22_dropper_bottle.jpeg',
      features: ['정밀 투여', '유리 재질']
    },
    {
      id: 23,
      name: '스킨케어 시리즈',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 120,
      price: 4800,
      rating: 4.6,
      image: '/container-images/container_23_skincare_series.jpeg',
      features: ['시리즈 구성', '통일된 디자인']
    },
    {
      id: 24,
      name: '진공 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 80,
      price: 5500,
      rating: 4.8,
      image: '/container-images/container_24_vacuum_bottle.jpeg',
      features: ['진공 구조', '산화 방지']
    },
    {
      id: 25,
      name: '유리 용기',
      category: 'cream',
      mainCategory: 'cosmetic',
      material: '유리',
      capacity: 50,
      price: 4500,
      rating: 4.7,
      image: '/container-images/container_25_glass_jar.jpeg',
      features: ['프리미엄 유리', '고급스러운 디자인']
    },
    {
      id: 26,
      name: '보스턴 투명 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 200,
      price: 2800,
      rating: 4.4,
      image: '/container-images/container_26_boston_clear.jpeg',
      features: ['투명 재질', '클래식 형태']
    },
    {
      id: 27,
      name: '사셰 목업',
      category: 'tube',
      mainCategory: 'sample',
      material: 'PE',
      capacity: 5,
      price: 600,
      rating: 4.3,
      image: '/container-images/container_27_sachet_mockup.jpeg',
      features: ['소용량', '샘플용']
    },
    {
      id: 28,
      name: '에어리스 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 100,
      price: 4800,
      rating: 4.8,
      image: '/container-images/container_28_airless_bottle.jpeg',
      features: ['에어리스 시스템', '고급 기능']
    },
    {
      id: 29,
      name: '실린더 보틀',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PET',
      capacity: 150,
      price: 3200,
      rating: 4.5,
      image: '/container-images/container_29_cylinder_bottle.jpeg',
      features: ['실린더 형태', '플립탑 캡']
    },
    {
      id: 30,
      name: '화장품 컬렉션',
      category: 'luxury',
      mainCategory: 'cosmetic',
      material: '아크릴',
      capacity: 80,
      price: 7200,
      rating: 4.9,
      image: '/container-images/container_30_cosmetic_collection.jpeg',
      features: ['컬렉션 세트', '프리미엄 디자인']
    }
  ];

  // 재질 필터 토글
  const toggleMaterial = (category, material) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [category]: prev[category].includes(material)
        ? prev[category].filter(m => m !== material)
        : [...prev[category], material]
    }));
  };

  // 기능 필터 토글
  const toggleFeature = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  // 용량 범위 업데이트
  const updateCapacityRange = (index, value) => {
    const newRange = [...capacityRange];
    newRange[index] = parseInt(value);
    setCapacityRange(newRange);
  };

  // 필터링된 제품
  const filteredProducts = containers.filter(product => {
    // 대분류 필터
    if (product.mainCategory !== activeMainCategory) return false;
    
    // 세부카테고리 필터
    if (activeSubCategory !== 'all' && product.category !== activeSubCategory) return false;
    
    // 검색어 필터
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // 용량 필터
    if (product.capacity < capacityRange[0] || product.capacity > capacityRange[1]) return false;
    
    // 재질 필터
    const allSelectedMaterials = [
      ...selectedMaterials.plastic,
      ...selectedMaterials.metal,
      ...selectedMaterials.natural
    ];
    if (allSelectedMaterials.length > 0 && !allSelectedMaterials.includes(product.material)) return false;
    
    // 기능 필터
    if (selectedFeatures.length > 0) {
      const hasFeature = selectedFeatures.some(feature => 
        product.features.includes(feature)
      );
      if (!hasFeature) return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">용기 카탈로그</h1>
            <p className="text-gray-600">전문적이고 체계적인 화장품 용기 솔루션을 찾아보세요</p>
          </div>

          {/* 검색창 */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="용기명, 재질, 기능으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* 대분류 탭 */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.entries(mainCategories).map(([key, name]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveMainCategory(key);
                  setActiveSubCategory('all');
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeMainCategory === key
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 모바일에서는 필터를 상단에 배치 */}
        {isMobile && (
          <div className="mb-6 space-y-4">
            {/* 세부카테고리 - 모바일 */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">세부 카테고리</h3>
                <button
                  onClick={() => setIsSubCategoryCollapsed(!isSubCategoryCollapsed)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {isSubCategoryCollapsed ? (
                    <ChevronDown size={20} className="text-gray-600" />
                  ) : (
                    <ChevronUp size={20} className="text-gray-600" />
                  )}
                </button>
              </div>
              
              {!isSubCategoryCollapsed && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subCategories[activeMainCategory]?.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveSubCategory(category.id)}
                      className={`p-3 rounded-lg text-left transition-colors text-sm ${
                        activeSubCategory === category.id
                          ? 'bg-blue-50 border-2 border-blue-200 text-blue-800'
                          : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{category.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 필터 - 모바일 */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">필터</h3>
                <button
                  onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {isFilterCollapsed ? (
                    <ChevronDown size={20} className="text-gray-600" />
                  ) : (
                    <ChevronUp size={20} className="text-gray-600" />
                  )}
                </button>
              </div>

              {!isFilterCollapsed && (
                <div className="space-y-4">
                  {/* 용량 범위 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      용량 범위: {capacityRange[0]}ml - {capacityRange[1]}ml
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="range"
                        min="1"
                        max="500"
                        value={capacityRange[0]}
                        onChange={(e) => setCapacityRange([parseInt(e.target.value), capacityRange[1]])}
                        className="flex-1"
                      />
                      <input
                        type="range"
                        min="1"
                        max="500"
                        value={capacityRange[1]}
                        onChange={(e) => setCapacityRange([capacityRange[0], parseInt(e.target.value)])}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  {/* 재질 필터 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">재질</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['플라스틱', '유리', '금속', '친환경'].map((material) => (
                        <label key={material} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            className="mr-2 rounded"
                            onChange={(e) => {
                              // 재질 필터 로직
                            }}
                          />
                          {material}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 기능 필터 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">기능</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['펌프', '스프레이', '스포이드', '진공', '에어리스'].map((feature) => (
                        <label key={feature} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            className="mr-2 rounded"
                            checked={selectedFeatures.includes(feature)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFeatures([...selectedFeatures, feature]);
                              } else {
                                setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                              }
                            }}
                          />
                          {feature}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 필터 초기화 */}
                  <button
                    onClick={() => {
                      setCapacityRange([1, 500]);
                      setSelectedMaterials({ plastic: [], metal: [], natural: [] });
                      setSelectedFeatures([]);
                    }}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    필터 초기화
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={`${isMobile ? 'block' : 'flex gap-6'}`}>
          {/* 데스크톱에서만 좌측 사이드바 표시 */}
          {!isMobile && (
            <div className="w-80 space-y-6">
            {/* 세부카테고리 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">세부 카테고리</h3>
                <button
                  onClick={() => setIsSubCategoryCollapsed(!isSubCategoryCollapsed)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {isSubCategoryCollapsed ? (
                    <ChevronDown size={20} className="text-gray-600" />
                  ) : (
                    <ChevronUp size={20} className="text-gray-600" />
                  )}
                </button>
              </div>
              
              {!isSubCategoryCollapsed && (
                <div className="space-y-3">
                  {subCategories[activeMainCategory]?.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveSubCategory(category.id)}
                      className={`w-full p-4 rounded-lg text-left transition-colors ${
                        activeSubCategory === category.id
                          ? 'bg-gray-100 border-2 border-gray-300'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="font-medium text-gray-900 mb-1">{category.name}</div>
                      <div className="text-sm text-gray-600">{category.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 통합 필터 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Filter size={20} />
                  필터
                </h2>
                <button
                  onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {isFilterCollapsed ? (
                    <ChevronDown size={20} className="text-gray-600" />
                  ) : (
                    <ChevronUp size={20} className="text-gray-600" />
                  )}
                </button>
              </div>

              {!isFilterCollapsed && (
                <div className="space-y-6">
                  {/* 용량 범위 필터 */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">용량 범위 (ml)</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{capacityRange[0]}ml</span>
                        <span>{capacityRange[1]}ml</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="500"
                          value={capacityRange[0]}
                          onChange={(e) => updateCapacityRange(0, e.target.value)}
                          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <input
                          type="range"
                          min="1"
                          max="500"
                          value={capacityRange[1]}
                          onChange={(e) => updateCapacityRange(1, e.target.value)}
                          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between gap-2 text-xs">
                        <span className="text-center">최소<br/>{capacityRange[0]}</span>
                        <span className="text-center">~</span>
                        <span className="text-center">최대<br/>{capacityRange[1]}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <button className="p-2 bg-gray-100 rounded text-center">소용량 (1-50ml)</button>
                        <button className="p-2 bg-gray-100 rounded text-center">중용량 (50-150ml)</button>
                        <button className="p-2 bg-gray-100 rounded text-center">대용량 (150-300ml)</button>
                        <button className="p-2 bg-gray-100 rounded text-center">전체</button>
                      </div>
                    </div>
                  </div>

                  {/* 재질 필터 */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">재질</h3>
                    
                    {/* 플라스틱류 */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">플라스틱류</h4>
                      <div className="max-h-32 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2">
                          {materialOptions.plastic.map((material) => (
                            <label key={material} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedMaterials.plastic.includes(material)}
                                onChange={() => toggleMaterial('plastic', material)}
                                className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                              />
                              <span className="text-sm text-gray-700">{material}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 금속/고급 */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">금속/고급</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {materialOptions.metal.map((material) => (
                          <label key={material} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedMaterials.metal.includes(material)}
                              onChange={() => toggleMaterial('metal', material)}
                              className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                            />
                            <span className="text-sm text-gray-700">{material}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 자연/친환경 */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">자연/친환경</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {materialOptions.natural.map((material) => (
                          <label key={material} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedMaterials.natural.includes(material)}
                              onChange={() => toggleMaterial('natural', material)}
                              className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                            />
                            <span className="text-sm text-gray-700">{material}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 기능 필터 */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">기능</h3>
                    <div className="max-h-32 overflow-y-auto">
                      <div className="space-y-2">
                        {featureOptions.map((feature) => (
                          <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedFeatures.includes(feature)}
                              onChange={() => toggleFeature(feature)}
                              className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                            />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          )}

          {/* 메인 콘텐츠 */}
          <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
            {/* 결과 헤더 */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  {mainCategories[activeMainCategory]} 전체
                </h2>
                <p className="text-gray-600">총 {filteredProducts.length}개의 제품이 있습니다</p>
              </div>
            </div>

            {/* 제품 그리드 */}
            <div className={`grid gap-6 ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-4'}`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div>재질: {product.material}</div>
                      <div>용량: {product.capacity}ml</div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                        ₩{product.price.toLocaleString()}
                      </span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 제품이 없을 때 */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Filter size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-600">다른 필터 조건을 시도해보세요</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCatalogPage;

