import React, { useState } from 'react';
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

  // 샘플 제품 데이터
  const sampleProducts = [
    {
      id: 1,
      name: '심리실산 세럼',
      category: 'skin',
      mainCategory: 'cosmetic',
      material: 'PE',
      capacity: 200,
      price: 2500,
      rating: 4.8,
      image: '/api/placeholder/300/300',
      features: ['진공 구조', '리필 가능']
    },
    {
      id: 2,
      name: '디퓨저 병',
      category: 'diffuser',
      mainCategory: 'diffuser',
      material: '유리',
      capacity: 10,
      price: 1800,
      rating: 4.6,
      image: '/api/placeholder/300/300',
      features: ['친환경 재질']
    },
    {
      id: 3,
      name: '럭셔리 크림 자',
      category: 'cream',
      mainCategory: 'cosmetic',
      material: '아크릴',
      capacity: 50,
      price: 3200,
      rating: 4.9,
      image: '/api/placeholder/300/300',
      features: ['고급 디자인']
    },
    {
      id: 4,
      name: '샘플 튜브',
      category: 'tube',
      mainCategory: 'sample',
      material: 'PE',
      capacity: 5,
      price: 800,
      rating: 4.5,
      image: '/api/placeholder/300/300',
      features: ['휴대용 전용']
    },
    {
      id: 5,
      name: '에어리스 펌프',
      category: 'pump',
      mainCategory: 'cosmetic',
      material: 'PP',
      capacity: 30,
      price: 2200,
      rating: 4.7,
      image: '/api/placeholder/300/300',
      features: ['에어리스 펌프', '진공 구조']
    },
    {
      id: 6,
      name: 'PCR PET 병',
      category: 'pcr',
      mainCategory: 'eco',
      material: 'PCR',
      capacity: 100,
      price: 1900,
      rating: 4.4,
      image: '/api/placeholder/300/300',
      features: ['친환경 재질', '리필 가능']
    },
    {
      id: 7,
      name: '프레스 캡',
      category: 'functional_cap',
      mainCategory: 'accessories',
      material: 'PP',
      capacity: 0,
      price: 500,
      rating: 4.3,
      image: '/api/placeholder/300/300',
      features: ['기능성']
    },
    {
      id: 8,
      name: '앰플 바이알',
      category: 'ampoule',
      mainCategory: 'pharma',
      material: '유리',
      capacity: 2,
      price: 1200,
      rating: 4.8,
      image: '/api/placeholder/300/300',
      features: ['정밀 용량']
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
  const filteredProducts = sampleProducts.filter(product => {
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
        <div className="flex gap-6">
          {/* 좌측 사이드바 - 세부카테고리 + 필터 */}
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

          {/* 메인 콘텐츠 */}
          <div className="flex-1">
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
            <div className="grid grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div>재질: {product.material}</div>
                      <div>용량: {product.capacity}ml</div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-700">
                        ₩{product.price.toLocaleString()}
                      </span>
                      <div className="flex gap-1">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>

                    <button className="w-full mt-3 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      상세보기
                    </button>
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

