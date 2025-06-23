import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, TrendingUp, Award, Users, Target, BarChart3, Star, CheckCircle } from 'lucide-react';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  // 포트폴리오 데이터 (실제로는 API에서 가져올 데이터)
  const portfolioData = {
    1: {
      name: "PURE GLOW",
      category: "기초화장품",
      description: "민감성 피부를 위한 프리미엄 스킨케어 브랜드",
      year: "2024.03",
      revenue: "150억원",
      roi: "320%",
      tags: ["순한성분", "민감성", "프리미엄"],
      image: "/images/portfolio/pure-glow.jpg",
      status: "런칭 완료",
      
      // 상세 정보
      overview: "PURE GLOW는 민감성 피부를 가진 소비자들을 위해 개발된 프리미엄 스킨케어 브랜드입니다. 자연 유래 성분과 과학적 연구를 바탕으로 한 제품으로 시장에서 큰 성공을 거두었습니다.",
      
      challenges: [
        "민감성 피부 시장의 높은 진입 장벽",
        "기존 브랜드들과의 차별화 필요",
        "안전성과 효과성의 균형"
      ],
      
      solutions: [
        "천연 성분 기반의 독자적인 포뮬러 개발",
        "피부과 전문의와의 협업을 통한 임상 테스트",
        "프리미엄 패키징과 브랜딩 전략"
      ],
      
      results: {
        revenue: "150억원",
        growth: "320%",
        marketShare: "15%",
        customerSatisfaction: "4.8/5",
        repeatPurchase: "85%",
        brandAwareness: "45%"
      },
      
      timeline: [
        { date: "2023.06", event: "프로젝트 시작 및 시장 조사" },
        { date: "2023.09", event: "제품 개발 및 포뮬러 완성" },
        { date: "2023.12", event: "패키징 디자인 및 브랜딩" },
        { date: "2024.02", event: "임상 테스트 및 안전성 검증" },
        { date: "2024.03", event: "공식 런칭 및 마케팅 캠페인" },
        { date: "2024.06", event: "목표 매출 150% 달성" }
      ],
      
      products: [
        { name: "퓨어 글로우 에센스", price: "45,000원", description: "고농축 세럼으로 깊은 보습과 진정 효과" },
        { name: "퓨어 글로우 크림", price: "38,000원", description: "24시간 지속되는 보습 크림" },
        { name: "퓨어 글로우 토너", price: "28,000원", description: "pH 밸런스를 맞춰주는 순한 토너" }
      ]
    }
    // 다른 포트폴리오 데이터들...
  };

  const portfolio = portfolioData[id] || portfolioData[1]; // 기본값으로 첫 번째 데이터 사용

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{portfolio.name}</h1>
              <p className="text-gray-600 mt-2">{portfolio.category} • {portfolio.year}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">ROI {portfolio.roi}</div>
              <div className="text-gray-600">매출 {portfolio.revenue}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 프로젝트 개요 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
              <div className="mb-6">
                <img
                  src={portfolio.image}
                  alt={portfolio.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">{portfolio.overview}</p>
            </div>

            {/* 도전과제 및 솔루션 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="text-red-500" size={20} />
                  도전과제
                </h3>
                <ul className="space-y-3">
                  {portfolio.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  솔루션
                </h3>
                <ul className="space-y-3">
                  {portfolio.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 타임라인 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-blue-500" size={20} />
                프로젝트 타임라인
              </h3>
              <div className="space-y-4">
                {portfolio.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 text-sm text-gray-600 font-medium">
                      {item.date}
                    </div>
                    <div className="flex-shrink-0 w-3 h-3 bg-gray-400 rounded-full mt-1"></div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 제품 라인업 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">제품 라인업</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolio.products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                    <div className="text-lg font-bold text-gray-700 mb-2">{product.price}</div>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 성과 지표 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="text-green-500" size={20} />
                주요 성과
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">매출</span>
                  <span className="font-bold text-gray-900">{portfolio.results.revenue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">성장률</span>
                  <span className="font-bold text-green-600">{portfolio.results.growth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">시장 점유율</span>
                  <span className="font-bold text-gray-900">{portfolio.results.marketShare}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">고객 만족도</span>
                  <span className="font-bold text-yellow-600 flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    {portfolio.results.customerSatisfaction}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">재구매율</span>
                  <span className="font-bold text-gray-900">{portfolio.results.repeatPurchase}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">브랜드 인지도</span>
                  <span className="font-bold text-gray-900">{portfolio.results.brandAwareness}</span>
                </div>
              </div>
            </div>

            {/* 프로젝트 정보 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">프로젝트 정보</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm">카테고리</span>
                  <div className="font-medium text-gray-900">{portfolio.category}</div>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">런칭일</span>
                  <div className="font-medium text-gray-900">{portfolio.year}</div>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">상태</span>
                  <div className="font-medium text-green-600">{portfolio.status}</div>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">태그</span>
                  <div className="flex flex-wrap gap-1 mt-1">
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
            </div>

            {/* 문의하기 */}
            <div className="bg-gray-600 text-white rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold mb-2">비슷한 프로젝트가 필요하신가요?</h3>
              <p className="text-gray-200 text-sm mb-4">
                전문가와 상담하고 맞춤형 솔루션을 받아보세요
              </p>
              <button className="w-full bg-white text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                무료 상담 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;

