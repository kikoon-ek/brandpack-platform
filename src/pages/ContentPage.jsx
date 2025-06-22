import React, { useState } from 'react';
import { Search, Filter, Calendar, User, Eye, Heart, Share2, BookOpen, TrendingUp, Award } from 'lucide-react';
import '../App.css';

const ContentPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "2024 K-뷰티 글로벌 트렌드 분석",
      category: "시장 분석",
      type: "리포트",
      author: "BrandPack 리서치팀",
      publishDate: "2024.03.15",
      readTime: "12분",
      views: 2340,
      likes: 156,
      summary: "K-뷰티의 글로벌 시장 동향과 2024년 주요 트렌드를 심층 분석한 종합 리포트입니다.",
      content: "한국 화장품의 글로벌 진출이 가속화되면서 K-뷰티는 이제 세계적인 트렌드를 주도하고 있습니다. 특히 스킨케어 분야에서의 혁신적인 성분 개발과 독창적인 제품 컨셉이 해외 소비자들의 큰 관심을 받고 있습니다.",
      tags: ["K-뷰티", "글로벌", "트렌드", "시장분석"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "화장품 수출 인증 완벽 가이드",
      category: "법규/인증",
      type: "가이드",
      author: "법무팀",
      publishDate: "2024.03.10",
      readTime: "8분",
      views: 1890,
      likes: 203,
      summary: "해외 수출을 위한 각국별 화장품 인증 절차와 필요 서류를 상세히 정리한 실무 가이드입니다.",
      content: "화장품 해외 수출 시 가장 중요한 것은 각국의 법규와 인증 요구사항을 정확히 파악하는 것입니다. 이 가이드에서는 주요 수출국별 인증 절차와 준비해야 할 서류들을 단계별로 설명합니다.",
      tags: ["수출", "인증", "법규", "가이드"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "친환경 패키징의 미래",
      category: "패키징",
      type: "아티클",
      author: "디자인팀",
      publishDate: "2024.03.08",
      readTime: "6분",
      views: 1560,
      likes: 89,
      summary: "지속가능한 뷰티 산업을 위한 친환경 패키징 솔루션과 최신 기술 동향을 소개합니다.",
      content: "환경에 대한 관심이 높아지면서 화장품 업계에서도 친환경 패키징에 대한 수요가 급증하고 있습니다. 재활용 가능한 소재부터 생분해성 포장재까지, 다양한 친환경 솔루션들을 살펴봅니다.",
      tags: ["친환경", "패키징", "지속가능성", "트렌드"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "성공적인 브랜드 런칭 전략",
      category: "브랜딩",
      type: "케이스 스터디",
      author: "마케팅팀",
      publishDate: "2024.03.05",
      readTime: "15분",
      views: 2890,
      likes: 234,
      summary: "실제 성공 사례를 통해 살펴보는 화장품 브랜드 런칭의 핵심 전략과 실행 방법입니다.",
      content: "새로운 화장품 브랜드의 성공적인 런칭을 위해서는 체계적인 전략과 실행이 필요합니다. 타겟 고객 분석부터 마케팅 전략까지, 성공 사례를 통해 핵심 포인트들을 분석해봅니다.",
      tags: ["브랜딩", "런칭", "마케팅", "전략"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "AI가 바꾸는 화장품 개발",
      category: "기술/혁신",
      type: "아티클",
      author: "R&D팀",
      publishDate: "2024.03.01",
      readTime: "10분",
      views: 2150,
      likes: 178,
      summary: "인공지능 기술이 화장품 연구개발에 미치는 영향과 미래 전망을 분석합니다.",
      content: "AI 기술의 발전으로 화장품 개발 과정이 혁신적으로 변화하고 있습니다. 성분 분석부터 제품 테스트까지, AI가 어떻게 화장품 산업을 변화시키고 있는지 살펴봅니다.",
      tags: ["AI", "기술", "혁신", "R&D"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "글로벌 화장품 시장 진출 성공 사례",
      category: "글로벌",
      type: "케이스 스터디",
      author: "글로벌사업팀",
      publishDate: "2024.02.28",
      readTime: "12분",
      views: 1780,
      likes: 145,
      summary: "해외 시장 진출에 성공한 국내 화장품 브랜드들의 전략과 노하우를 분석합니다.",
      content: "국내 화장품 브랜드들의 해외 진출이 활발해지고 있습니다. 성공적인 글로벌 진출을 위한 전략과 현지화 방법, 그리고 실제 성공 사례들을 통해 인사이트를 얻어보세요.",
      tags: ["글로벌", "해외진출", "성공사례", "전략"],
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ['all', '시장 분석', '법규/인증', '패키징', '브랜딩', '기술/혁신', '글로벌'];
  const types = ['all', '리포트', '가이드', '아티클', '케이스 스터디'];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredContent = contentItems.slice(0, 3);
  const popularTags = ['K-뷰티', '글로벌', '친환경', '브랜딩', 'AI', '인증', '트렌드', '마케팅'];

  const stats = [
    { label: "전체 콘텐츠", value: "500+", icon: BookOpen, color: "text-gray-600" },
    { label: "월간 조회수", value: "50만+", icon: Eye, color: "text-stone-600" },
    { label: "구독자", value: "12,000+", icon: User, color: "text-slate-600" },
    { label: "평균 평점", value: "4.8/5", icon: Award, color: "text-gray-700" }
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
                콘텐츠 허브
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              화장품 산업의 최신 트렌드와 전문 지식을 제공하는 콘텐츠 플랫폼
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">필터</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="제목, 내용 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? '전체 카테고리' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">콘텐츠 유형</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? '전체 유형' : type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Popular Tags */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">인기 태그</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:flex-1">
            {/* Featured Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">추천 콘텐츠</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredContent.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                        <span className="text-sm">콘텐츠 이미지</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{item.category}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{item.type}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{item.readTime}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {item.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {item.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content List */}
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">전체 콘텐츠</h2>
              <span className="text-gray-600">
                총 <span className="font-semibold text-gray-800">{filteredContent.length}</span>개 콘텐츠
              </span>
            </div>

            <div className="space-y-6">
              {filteredContent.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="w-48 flex-shrink-0">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-400 text-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                          <span className="text-xs">이미지</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{item.category}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{item.type}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.summary}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {item.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.publishDate}
                          </div>
                          <span>{item.readTime}</span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {item.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {item.likes}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-stone-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                              읽기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredContent.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-500">다른 검색 조건을 시도해보세요.</p>
              </div>
            )}

            {/* Pagination */}
            {filteredContent.length > 0 && (
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

      {/* Newsletter Subscription */}
      <div className="py-16 bg-gradient-to-r from-gray-600 via-stone-600 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            최신 콘텐츠를 놓치지 마세요
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            화장품 산업의 최신 트렌드와 인사이트를 이메일로 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;

