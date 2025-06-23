import React, { useState, useEffect } from 'react';
import { Search, Filter, X, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import '../App.css';

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState('manufacturers');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showPopularSearches, setShowPopularSearches] = useState(false);
  const [isProductSearch, setIsProductSearch] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  
  // 모바일 반응형 상태
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(true);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 필터 상태 관리
  const [selectedFilters, setSelectedFilters] = useState({
    manufacturers: {},
    containers: {},
    packaging: {}
  });

  // 현재 탭의 선택된 필터
  const currentSelectedFilters = selectedFilters[activeTab] || {};

  // 파트너 데이터
  const partnersData = {
    manufacturers: [
      {
        id: 1,
        name: "(주)동방코스메틱",
        location: "서울",
        specialty: "기초화장품 전문 제조",
        rating: 4.8,
        projects: "150+",
        productCategory: ["크림", "로션", "세럼"],
        productType: ["기초", "색조"],
        equipment: ["크림 자동충전기", "로션 충전기"],
        certifications: ["ISO 9001", "GMP"]
      },
      {
        id: 2,
        name: "(주)뷰티맥스",
        location: "경기 북부",
        specialty: "색조화장품 전문",
        rating: 4.6,
        projects: "120+",
        productCategory: ["파운데이션", "립스틱", "아이섀도"],
        productType: ["색조", "기능성"],
        equipment: ["파우더 프레스", "립스틱 몰딩기"],
        certifications: ["FDA", "CE"]
      }
    ],
    containers: [
      {
        id: 1,
        name: "(주)코리아용기",
        location: "인천",
        specialty: "화장품 용기 전문",
        rating: 4.7,
        projects: "200+",
        usage: ["크림", "로션"],
        product: ["병", "튜브"],
        material: ["플라스틱", "유리"],
        capacity: 50,
        neckSize: 24
      }
    ],
    packaging: [
      {
        id: 1,
        name: "(주)패키지플러스",
        location: "경기 남부",
        specialty: "화장품 패키징",
        rating: 4.5,
        projects: "100+",
        product: ["박스", "라벨"],
        postProcessing: ["인쇄", "코팅"],
        material: ["종이", "플라스틱"]
      }
    ]
  };

  // 필터 옵션 생성
  const getFilterOptions = (tab) => {
    const partners = partnersData[tab] || [];
    const options = {};

    partners.forEach(partner => {
      Object.keys(partner).forEach(key => {
        if (Array.isArray(partner[key]) && !['id', 'name', 'location', 'specialty', 'rating', 'projects'].includes(key)) {
          if (!options[key]) options[key] = new Set();
          partner[key].forEach(item => options[key].add(item));
        }
      });
    });

    Object.keys(options).forEach(key => {
      options[key] = Array.from(options[key]);
    });

    return options;
  };

  const currentFilterOptions = getFilterOptions(activeTab);

  // 필터 토글
  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [filterType]: prev[activeTab]?.[filterType]?.includes(value)
          ? prev[activeTab][filterType].filter(item => item !== value)
          : [...(prev[activeTab]?.[filterType] || []), value]
      }
    }));
  };

  // 필터 초기화
  const resetFilters = () => {
    setSelectedFilters(prev => ({
      ...prev,
      [activeTab]: {}
    }));
    setSelectedRegion('');
  };

  // 선택된 필터 개수
  const getTotalSelectedFilters = () => {
    const filters = currentSelectedFilters;
    return Object.values(filters).reduce((total, filterArray) => {
      return total + (Array.isArray(filterArray) ? filterArray.length : 0);
    }, 0) + (selectedRegion ? 1 : 0);
  };

  // 필터링된 파트너 목록
  const filteredPartners = (partnersData[activeTab] || []).filter(partner => {
    // 검색어 필터
    if (searchTerm && !partner.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !partner.specialty.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // 지역 필터
    if (selectedRegion && partner.location !== selectedRegion) {
      return false;
    }

    // 동적 필터
    for (const [filterType, selectedValues] of Object.entries(currentSelectedFilters)) {
      if (selectedValues.length > 0) {
        const partnerValues = partner[filterType];
        if (!partnerValues || !Array.isArray(partnerValues)) continue;
        
        const hasMatch = selectedValues.some(value => partnerValues.includes(value));
        if (!hasMatch) return false;
      }
    }

    return true;
  });

  // 탭별 개수
  const getTabCount = (tab) => {
    return partnersData[tab]?.length || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">파트너 찾기</h1>
          <p className="text-xl text-gray-200">신뢰할 수 있는 제조공장, 용기사, 패키지사를 찾아보세요</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 모바일에서만 상단 필터 표시 */}
        {isMobile && (
          <div className="mb-6 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Filter size={20} />
                필터
              </h3>
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                {isFilterExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>

            {/* 탭 네비게이션 */}
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'manufacturers', label: '제조사' },
                  { id: 'containers', label: '용기사' },
                  { id: 'packaging', label: '패키지사' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 검색창 */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="업체명 또는 업종분야 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {isFilterExpanded && (
              <div className="space-y-4">
                {/* 지역 필터 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">전체 지역</option>
                    <option value="서울">서울</option>
                    <option value="경기 북부">경기 북부</option>
                    <option value="경기 남부">경기 남부</option>
                    <option value="인천">인천</option>
                    <option value="충청도">충청도</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                {/* 필터 초기화 */}
                <button
                  onClick={resetFilters}
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} />
                  필터 초기화
                </button>
              </div>
            )}
          </div>
        )}

        <div className={`${isMobile ? 'block' : 'flex gap-6'}`}>
          {/* 데스크톱에서만 좌측 사이드바 표시 */}
          {!isMobile && (
            <div className="w-80 space-y-6">
              {/* 탭 네비게이션 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'manufacturers', label: '제조사' },
                    { id: 'containers', label: '용기사' },
                    { id: 'packaging', label: '패키지사' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label} ({getTabCount(tab.id)})
                    </button>
                  ))}
                </div>
              </div>

              {/* 검색창 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="업체명 또는 업종분야 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* 필터 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Filter size={20} />
                    필터 {getTotalSelectedFilters() > 0 && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {getTotalSelectedFilters()}
                      </span>
                    )}
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* 지역 필터 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">지역</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                      <option value="">전체 지역</option>
                      <option value="서울">서울</option>
                      <option value="경기 북부">경기 북부</option>
                      <option value="경기 남부">경기 남부</option>
                      <option value="인천">인천</option>
                      <option value="충청도">충청도</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  {/* 필터 초기화 */}
                  <button
                    onClick={resetFilters}
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={16} />
                    필터 초기화
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 메인 영역 - 파트너 목록 */}
          <div className={`${isMobile ? 'w-full' : 'flex-1'}`}>
            {/* 파트너 목록 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {activeTab === 'manufacturers' ? '제조사' : 
                 activeTab === 'containers' ? '용기사' : '패키지사'} 목록 ({filteredPartners.length}개)
              </h2>
            </div>

            <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'}`}>
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                     onClick={() => {
                       setSelectedPartner(partner);
                       setShowDetailModal(true);
                     }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-gray-600">{partner.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <span className="text-sm font-medium text-gray-700 mr-1">★</span>
                        <span className="text-sm font-medium text-gray-700">{partner.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{partner.projects}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">전문분야</p>
                    <p className="text-sm text-gray-600">{partner.specialty}</p>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-700">완료 프로젝트</span>
                    <div className="text-2xl font-bold text-gray-900">{partner.projects}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 검색 결과 없음 */}
            {filteredPartners.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">검색 조건에 맞는 업체가 없습니다.</p>
                <p className="text-gray-400 mt-2">다른 검색어나 필터를 시도해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 상세화면 모달 */}
      {showDetailModal && selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedPartner.name}</h2>
                <p className="text-gray-600">{selectedPartner.specialty}</p>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="p-6 space-y-8">
              {/* 기본 정보 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">기본 정보</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium text-gray-700">업체명:</span> {selectedPartner.name}</p>
                    <p><span className="font-medium text-gray-700">위치:</span> {selectedPartner.location}</p>
                    <p><span className="font-medium text-gray-700">전문분야:</span> {selectedPartner.specialty}</p>
                    <p><span className="font-medium text-gray-700">평점:</span> 
                      <span className="text-yellow-400 ml-1">★</span> {selectedPartner.rating}
                    </p>
                    <p><span className="font-medium text-gray-700">완료 프로젝트:</span> {selectedPartner.projects}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">연락처 정보</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium text-gray-700">전화번호:</span> 02-1234-5678</p>
                    <p><span className="font-medium text-gray-700">이메일:</span> contact@{selectedPartner.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</p>
                    <p><span className="font-medium text-gray-700">주소:</span> {selectedPartner.location} 소재</p>
                    <p><span className="font-medium text-gray-700">설립년도:</span> 2010년</p>
                    <p><span className="font-medium text-gray-700">직원 수:</span> 50-100명</p>
                  </div>
                </div>
              </div>

              {/* 문의하기 버튼 */}
              <div className="flex justify-center pt-6 border-t border-gray-200">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;

