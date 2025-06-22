import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import '../App.css';

const ContainerCatalogPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('popular');

  const containers = [
    {
      id: 1,
      name: "프리미엄 글래스 세럼병",
      category: "세럼/앰플",
      material: "유리",
      capacity: "30ml",
      price: 2500,
      minOrder: 1000,
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/300",
      colors: ["투명", "앰버", "코발트"],
      features: ["UV 차단", "고급스러운 디자인", "정밀 드로퍼"],
      supplier: "코스모스",
      leadTime: "14일"
    },
    {
      id: 2,
      name: "에어리스 펌프 용기",
      category: "크림/로션",
      material: "플라스틱",
      capacity: "50ml",
      price: 1800,
      minOrder: 500,
      rating: 4.6,
      reviews: 89,
      image: "/api/placeholder/300/300",
      colors: ["화이트", "블랙", "실버"],
      features: ["에어리스 시스템", "위생적", "마지막까지 사용"],
      supplier: "삼화용기",
      leadTime: "10일"
    },
    {
      id: 3,
      name: "럭셔리 크림 자",
      category: "크림/로션",
      material: "유리",
      capacity: "50ml",
      price: 3200,
      minOrder: 800,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/300",
      colors: ["투명", "프로스트", "골드"],
      features: ["프리미엄 소재", "무게감", "고급 마감"],
      supplier: "프리미엄팩",
      leadTime: "21일"
    },
    {
      id: 4,
      name: "미스트 스프레이 병",
      category: "미스트/토너",
      material: "플라스틱",
      capacity: "100ml",
      price: 1200,
      minOrder: 1000,
      rating: 4.4,
      reviews: 67,
      image: "/api/placeholder/300/300",
      colors: ["투명", "화이트", "핑크"],
      features: ["미세 분사", "휴대용", "경량"],
      supplier: "삼화용기",
      leadTime: "7일"
    },
    {
      id: 5,
      name: "아크릴 컴팩트",
      category: "메이크업",
      material: "아크릴",
      capacity: "10g",
      price: 2800,
      minOrder: 500,
      rating: 4.7,
      reviews: 93,
      image: "/api/placeholder/300/300",
      colors: ["투명", "블랙", "로즈골드"],
      features: ["투명도", "내구성", "세련된 디자인"],
      supplier: "코스모스",
      leadTime: "14일"
    },
    {
      id: 6,
      name: "립스틱 케이스",
      category: "메이크업",
      material: "플라스틱",
      capacity: "3.5g",
      price: 1500,
      minOrder: 1000,
      rating: 4.5,
      reviews: 78,
      image: "/api/placeholder/300/300",
      colors: ["블랙", "실버", "골드"],
      features: ["매끄러운 작동", "자석 잠금", "컴팩트"],
      supplier: "삼화용기",
      leadTime: "10일"
    }
  ];

  const categories = ['all', '세럼/앰플', '크림/로션', '미스트/토너', '메이크업'];
  const materials = ['all', '유리', '플라스틱', '아크릴'];

  const filteredContainers = containers.filter(container => {
    const matchesSearch = container.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         container.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || container.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'all' || container.material === selectedMaterial;
    const matchesPrice = container.price >= priceRange[0] && container.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
  });

  const sortedContainers = [...filteredContainers].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/85 to-stone-50/25">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-700 via-stone-700 to-slate-700 bg-clip-text text-transparent">
              용기 카탈로그
            </span>
          </h1>
          <p className="text-xl text-gray-100">
            1,500+ 다양한 화장품 용기를 실시간으로 검색하고 주문하세요
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">필터</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="용기명 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? '전체 카테고리' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">소재</label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  {materials.map(material => (
                    <option key={material} value={material}>
                      {material === 'all' ? '전체 소재' : material}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  가격 범위: {priceRange[0].toLocaleString()}원 - {priceRange[1].toLocaleString()}원
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gradient-to-r from-gray-400 to-stone-400 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                필터 초기화
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <span className="text-gray-600">
                  총 <span className="font-semibold text-gray-800">{sortedContainers.length}</span>개 제품
                </span>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              >
                <option value="popular">인기순</option>
                <option value="price-low">가격 낮은순</option>
                <option value="price-high">가격 높은순</option>
                <option value="rating">평점순</option>
              </select>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {sortedContainers.map(container => (
                <div key={container.id} className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <div className={`bg-gray-100 rounded-t-lg ${viewMode === 'list' ? 'rounded-l-lg rounded-tr-none h-full' : 'aspect-square'} flex items-center justify-center`}>
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                        <span className="text-sm">제품 이미지</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">{container.name}</h3>
                        <p className="text-sm text-gray-600">{container.category} • {container.capacity}</p>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">{container.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({container.reviews})</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {container.colors.map((color, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {color}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>소재: {container.material}</div>
                        <div>최소주문: {container.minOrder.toLocaleString()}개</div>
                        <div>납기: {container.leadTime}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-gray-800">
                          {container.price.toLocaleString()}원
                        </div>
                        <div className="text-sm text-gray-500">개당 가격</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          주문
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedContainers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-500">다른 검색 조건을 시도해보세요.</p>
              </div>
            )}

            {/* Pagination */}
            {sortedContainers.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    이전
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-gray-600 to-stone-700 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    다음
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCatalogPage;

