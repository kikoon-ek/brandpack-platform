import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Bot, Building, DollarSign, Calendar, ExternalLink, User, Clock, Eye } from 'lucide-react';

const ContentPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(true);
  const [selectedSupportType, setSelectedSupportType] = useState('화장품 지원사업');
  const [isSupportExpanded, setIsSupportExpanded] = useState(true);

  const categories = [
    { id: 'all', name: '전체', icon: '📚' },
    { id: 'trend', name: '트렌드 분석', icon: '📊' },
    { id: 'guide', name: '실무 가이드', icon: '📖' },
    { id: 'makeup', name: '메이크업 팁', icon: '💄' },
    { id: 'skincare', name: '스킨케어', icon: '🧴' },
    { id: 'ingredient', name: '성분 분석', icon: '🔬' },
    { id: 'review', name: '제품 리뷰', icon: '⭐' },
    { id: 'seasonal', name: '계절별 팁', icon: '🌸' },
    { id: 'diy', name: 'DIY 뷰티', icon: '🏠' }
  ];

  const supportPrograms = [
    {
      id: 1,
      title: 'K-뷰티 글로벌 진출 지원사업',
      organization: '중소벤처기업부',
      amount: '최대 5억원',
      deadline: '2024.07.31',
      status: '접수중',
      description: 'K-뷰티 브랜드의 해외 진출을 위한 마케팅, 유통, 인증 지원'
    },
    {
      id: 2,
      title: '화장품 R&D 혁신 지원사업',
      organization: '산업통상자원부',
      amount: '최대 3억원',
      deadline: '2024.08.15',
      status: '접수중',
      description: '혁신적인 화장품 기술 개발 및 상용화 지원'
    },
    {
      id: 3,
      title: '친환경 화장품 개발 지원사업',
      organization: '환경부',
      amount: '최대 2억원',
      deadline: '2024.09.30',
      status: '접수중',
      description: '지속가능한 친환경 화장품 개발 및 인증 지원'
    }
  ];

  const contentItems = [
    {
      id: 1,
      title: '2024 K-뷰티 트렌드 완벽 가이드',
      category: '트렌드 분석',
      author: '뷰티 에디터',
      readTime: '15분',
      views: 8524,
      publishDate: '2024-12-20',
      description: '2024년 가장 핫한 K-뷰티 트렌드와 글로벌 시장 동향을 심층 분석합니다.',
      image: '/images/cosmetics/N2IYFVfkjLDB.jpg',
      tags: ['K-뷰티', '트렌드', '글로벌']
    },
    {
      id: 2,
      title: '완벽한 스킨케어 루틴 10단계',
      category: '실무 가이드',
      author: '스킨케어 전문가',
      readTime: '20분',
      views: 12340,
      publishDate: '2024-12-18',
      description: '한국식 10단계 스킨케어 루틴의 모든 것을 상세히 알려드립니다.',
      image: '/images/cosmetics/zyvbFMXDGBmc.jpg',
      tags: ['스킨케어', '루틴', '가이드']
    },
    {
      id: 3,
      title: '립스틱 컬러 매칭 완벽 가이드',
      category: '메이크업 팁',
      author: '메이크업 아티스트',
      readTime: '12분',
      views: 9876,
      publishDate: '2024-12-15',
      description: '퍼스널 컬러에 맞는 완벽한 립스틱 선택법과 활용 팁을 공개합니다.',
      image: '/images/cosmetics/fvO53KLDUyd5.png',
      tags: ['립스틱', '컬러매칭', '메이크업']
    },
    {
      id: 4,
      title: '민감성 피부를 위한 화장품 성분 분석',
      category: '성분 분석',
      author: '화장품 연구원',
      readTime: '18분',
      views: 7654,
      publishDate: '2024-12-12',
      description: '민감성 피부에 안전한 화장품 성분과 피해야 할 성분들을 자세히 분석합니다.',
      image: '/images/cosmetics/BRswTZrbJkq9.png',
      tags: ['민감성피부', '성분', '안전']
    },
    {
      id: 5,
      title: '아이섀도 팔레트 활용법 마스터',
      category: '메이크업 팁',
      author: '뷰티 인플루언서',
      readTime: '14분',
      views: 11234,
      publishDate: '2024-12-10',
      description: '하나의 아이섀도 팔레트로 다양한 룩을 연출하는 전문가 노하우를 공개합니다.',
      image: '/images/cosmetics/C4UC9YEIqfCe.jpg',
      tags: ['아이섀도', '팔레트', '메이크업']
    },
    {
      id: 6,
      title: '여름철 무너지지 않는 베이스 메이크업',
      category: '계절별 팁',
      author: '메이크업 전문가',
      readTime: '16분',
      views: 8901,
      publishDate: '2024-12-08',
      description: '습하고 더운 여름철에도 완벽하게 지속되는 베이스 메이크업 비법을 알려드립니다.',
      image: '/images/cosmetics/Cmp5r4I61uUt.jpg',
      tags: ['베이스메이크업', '여름', '지속력']
    },
    {
      id: 7,
      title: '안티에이징 스킨케어 완벽 가이드',
      category: '스킨케어',
      author: '피부과 전문의',
      readTime: '22분',
      views: 15678,
      publishDate: '2024-12-05',
      description: '나이별 맞춤 안티에이징 케어법과 효과적인 성분들을 전문의가 직접 설명합니다.',
      image: '/images/cosmetics/s1RjDBMIXGS6.jpg',
      tags: ['안티에이징', '스킨케어', '전문의']
    },
    {
      id: 8,
      title: '블러셔 위치별 얼굴형 보정법',
      category: '메이크업 팁',
      author: '페이스 컨투어링 전문가',
      readTime: '10분',
      views: 6789,
      publishDate: '2024-12-03',
      description: '얼굴형별 최적의 블러셔 위치와 컨투어링 기법을 상세히 알려드립니다.',
      image: '/images/cosmetics/yHKFODZ6rzM1.jpg',
      tags: ['블러셔', '얼굴형', '컨투어링']
    },
    {
      id: 9,
      title: '드럭스토어 화장품 숨은 명품 찾기',
      category: '제품 리뷰',
      author: '뷰티 리뷰어',
      readTime: '13분',
      views: 9432,
      publishDate: '2024-12-01',
      description: '저렴한 가격에 만날 수 있는 드럭스토어 화장품 중 진짜 명품급 제품들을 소개합니다.',
      image: '/images/cosmetics/P3bBITJ6IQ0r.jpg',
      tags: ['드럭스토어', '가성비', '리뷰']
    },
    {
      id: 10,
      title: '파운데이션 선택의 모든 것',
      category: '제품 가이드',
      author: '메이크업 아티스트',
      readTime: '17분',
      views: 10987,
      publishDate: '2024-11-28',
      description: '피부타입별, 커버리지별 완벽한 파운데이션 선택법과 발라주는 기법을 알려드립니다.',
      image: '/images/cosmetics/2yNK5FKxfyD7.jpg',
      tags: ['파운데이션', '베이스', '선택법']
    },
    {
      id: 11,
      title: '홈케어 DIY 페이스 마스크 레시피',
      category: 'DIY 뷰티',
      author: '천연 화장품 연구가',
      readTime: '11분',
      views: 7123,
      publishDate: '2024-11-25',
      description: '집에서 쉽게 만들 수 있는 천연 재료 페이스 마스크 레시피와 효능을 소개합니다.',
      image: '/images/cosmetics/VXu2duIn6d78.jpg',
      tags: ['DIY', '천연', '마스크']
    },
    {
      id: 12,
      title: '브러시 관리와 세정법 완벽 가이드',
      category: '도구 관리',
      author: '메이크업 도구 전문가',
      readTime: '9분',
      views: 5678,
      publishDate: '2024-11-22',
      description: '메이크업 브러시의 올바른 세정법과 관리법으로 브러시 수명을 늘려보세요.',
      image: '/images/cosmetics/RNd2fLfyWdRY.jpg',
      tags: ['브러시', '관리', '세정']
    },
    {
      id: 13,
      title: '겨울철 건조한 피부 집중 케어',
      category: '계절별 팁',
      author: '스킨케어 전문가',
      readTime: '19분',
      views: 13456,
      publishDate: '2024-11-20',
      description: '건조한 겨울철 피부를 위한 집중 보습 케어법과 추천 제품들을 소개합니다.',
      image: '/images/cosmetics/WTNI5WfUbkdR.jpg',
      tags: ['겨울케어', '보습', '건조피부']
    },
    {
      id: 14,
      title: '아이라이너 스타일별 그리는 법',
      category: '메이크업 팁',
      author: '아이 메이크업 전문가',
      readTime: '12분',
      views: 8765,
      publishDate: '2024-11-18',
      description: '눈매별 최적의 아이라이너 스타일과 깔끔하게 그리는 전문가 팁을 공개합니다.',
      image: '/images/cosmetics/ige6M7LQZPuR.jpg',
      tags: ['아이라이너', '눈매', '그리기']
    },
    {
      id: 15,
      title: '세럼 레이어링 순서와 조합법',
      category: '스킨케어',
      author: '화장품 성분 전문가',
      readTime: '15분',
      views: 11890,
      publishDate: '2024-11-15',
      description: '여러 세럼을 효과적으로 레이어링하는 순서와 성분별 조합 가이드를 제공합니다.',
      image: '/images/cosmetics/DdtqX7ZZtcTM.jpg',
      tags: ['세럼', '레이어링', '성분']
    },
    {
      id: 16,
      title: '컨실러 활용법 A to Z',
      category: '메이크업 팁',
      author: '베이스 메이크업 전문가',
      readTime: '14분',
      views: 9234,
      publishDate: '2024-11-12',
      description: '다크서클, 잡티, 홍조까지 완벽하게 커버하는 컨실러 활용법을 알려드립니다.',
      image: '/images/cosmetics/F9XJtCrEaS71.jpg',
      tags: ['컨실러', '커버', '베이스']
    },
    {
      id: 17,
      title: '향수 레이어링과 지속력 높이는 법',
      category: '향수 가이드',
      author: '향수 소믈리에',
      readTime: '13분',
      views: 6543,
      publishDate: '2024-11-10',
      description: '향수의 지속력을 높이고 나만의 시그니처 향을 만드는 레이어링 기법을 소개합니다.',
      image: '/images/cosmetics/uAGHOmLv4lCY.jpg',
      tags: ['향수', '레이어링', '지속력']
    },
    {
      id: 18,
      title: '민감성 피부를 위한 클렌징 가이드',
      category: '스킨케어',
      author: '피부과 전문의',
      readTime: '16분',
      views: 10234,
      publishDate: '2024-11-08',
      description: '민감성 피부도 안심하고 사용할 수 있는 올바른 클렌징 방법과 제품 선택법입니다.',
      image: '/images/cosmetics/zxYYLc581N9m.jpg',
      tags: ['민감성피부', '클렌징', '순함']
    },
    {
      id: 19,
      title: '메이크업 픽서 완벽 활용법',
      category: '메이크업 팁',
      author: '메이크업 아티스트',
      readTime: '11분',
      views: 7890,
      publishDate: '2024-11-05',
      description: '메이크업의 지속력을 극대화하는 픽서 사용법과 타이밍을 상세히 알려드립니다.',
      image: '/images/cosmetics/JHSnR52EBchc.jpg',
      tags: ['픽서', '지속력', '메이크업']
    },
    {
      id: 20,
      title: '올인원 메이크업 키트 활용 가이드',
      category: '제품 가이드',
      author: '뷰티 에디터',
      readTime: '18분',
      views: 12567,
      publishDate: '2024-11-03',
      description: '하나의 키트로 다양한 룩을 연출하는 올인원 메이크업 키트 완벽 활용법을 소개합니다.',
      image: '/images/cosmetics/9BBXgL6NC1ms.jpg',
      tags: ['올인원', '키트', '활용법']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="content-layout gap-8">
          {/* 좌측 필터 영역 */}
          <div className="content-sidebar">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">필터</h3>
                <button 
                  className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* 검색 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">검색</label>
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-600"
                      onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    >
                      {isSearchExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                  {isSearchExpanded && (
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="제목, 내용, 태그 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </div>

                {/* 카테고리 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700">카테고리</label>
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-600"
                      onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
                    >
                      {isCategoryExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                  {isCategoryExpanded && (
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                            selectedCategory === category.name
                              ? 'bg-purple-100 text-purple-700 border border-purple-200'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-lg">{category.icon}</span>
                          <span className="text-sm font-medium">{category.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 우측 메인 콘텐츠 영역 */}
          <div className="content-main">
            {/* 정부지원사업 정보 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">정부지원사업 정보</h2>
                      <p className="text-sm text-gray-600">AI가 실시간으로 수집한 최신 지원사업 정보</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      실시간 업데이트
                    </span>
                  </div>
                  <button 
                    className="p-2 text-gray-400 hover:text-gray-600"
                    onClick={() => setIsSupportExpanded(!isSupportExpanded)}
                  >
                    {isSupportExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isSupportExpanded && (
              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <button 
                    onClick={() => setSelectedSupportType('화장품 지원사업')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedSupportType === '화장품 지원사업'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    화장품 지원사업
                  </button>
                  <button 
                    onClick={() => setSelectedSupportType('건강기능식품 지원사업')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedSupportType === '건강기능식품 지원사업'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    건강기능식품 지원사업
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {supportPrograms.map((program) => (
                    <div key={program.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{program.title}</h3>
                        <span className="px-2 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
                          {program.status}
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span>{program.organization}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          <span>{program.amount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>마감: {program.deadline}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{program.description}</p>
                      
                      <button className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-3 h-3" />
                        자세히 보기
                      </button>
                    </div>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* 콘텐츠 목록 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">콘텐츠 (20개)</h2>
                  <div className="text-sm text-gray-500">20 / 20개 표시 중</div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {contentItems.map((item) => (
                    <div key={item.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                      {/* 4:3 비율 이미지 영역 */}
                      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                        <img 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          src={item.image}
                        />
                        
                        {/* 호버 시 나타나는 설명 오버레이 */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <p className="text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                        
                        {/* 카테고리 배지 */}
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* 콘텐츠 정보 */}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.views.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">{item.publishDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 커스텀 CSS */}
      <style jsx>{`
        .content-layout {
          display: flex;
          flex-direction: column;
        }
        
        .content-sidebar {
          width: 100%;
        }
        
        .content-main {
          width: 100%;
        }
        
        @media (min-width: 1024px) {
          .content-layout {
            flex-direction: row;
          }
          
          .content-sidebar {
            width: 260px;
            flex-shrink: 0;
          }
          
          .content-main {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentPage;

