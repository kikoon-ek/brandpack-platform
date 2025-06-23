import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Users, 
  Search, 
  Calculator, 
  FileText, 
  Bell, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  Shield,
  Award
} from 'lucide-react';

const GlobalBusinessPage = () => {
  const [activeTab, setActiveTab] = useState('tools');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTool, setExpandedTool] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [calculatorData, setCalculatorData] = useState({
    productPrice: '',
    targetCountry: 'japan',
    hsCode: '',
    searchQuery: '',
    tariffResult: null
  });
  const [counters, setCounters] = useState({
    exports: 0,
    partners: 0,
    countries: 0,
    success: 0
  });

  // 실시간 카운터 애니메이션
  useEffect(() => {
    const targets = { exports: 46, partners: 155, countries: 22, success: 87 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => i === interval));
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // 관세 계산 함수
  const calculateTariff = (price, country) => {
    const rates = {
      japan: { tariff: 0.085, vat: 0.10 },
      usa: { tariff: 0.12, vat: 0.08 },
      china: { tariff: 0.15, vat: 0.13 },
      europe: { tariff: 0.10, vat: 0.20 }
    };
    
    const rate = rates[country] || rates.japan;
    const tariffAmount = Math.floor(price * rate.tariff);
    const vatAmount = Math.floor(tariffAmount * rate.vat);
    const clearanceFee = 5000; // 통관수수료
    const total = tariffAmount + vatAmount + clearanceFee;
    
    return {
      tariff: tariffAmount,
      vat: vatAmount,
      clearanceFee: clearanceFee,
      total: total
    };
  };

  // HS코드 검색 함수
  const searchHSCode = (query) => {
    const hsCodeData = {
      '화장품': '3304.99.00',
      '립스틱': '3304.10.00',
      '파운데이션': '3304.20.00',
      '아이섀도': '3304.30.00',
      '마스카라': '3304.20.00',
      '스킨케어': '3304.99.00',
      '선크림': '3304.99.00',
      '향수': '3303.00.00'
    };
    
    const found = Object.keys(hsCodeData).find(key => 
      key.includes(query) || query.includes(key)
    );
    
    return found ? hsCodeData[found] : '3304.99.00';
  };

  // 도구 확장/축소 함수
  const toggleTool = (toolId) => {
    setExpandedTool(expandedTool === toolId ? null : toolId);
  };

  // 리뷰 데이터
  const reviewsData = [
    {
      text: "브랜드팩 덕분에 일본 진출 성공!",
      author: "뷰티브랜드 A사",
      rating: 5,
      country: "🇯🇵"
    },
    {
      text: "전문적인 컨설팅으로 유럽 시장 개척",
      author: "코스메틱 B사",
      rating: 5,
      country: "🇪🇺"
    },
    {
      text: "AI 도구가 정말 정확해요!",
      author: "스킨케어 C사",
      rating: 4,
      country: "🇺🇸"
    }
  ];

  // 리뷰 자동 슬라이더
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toolsData = [
    {
      id: 'hs-classifier',
      title: 'HS코드 AI 분류기',
      description: '제품명 입력으로 정확한 HS코드와 관세율을 자동 분류',
      icon: Search,
      category: 'ai',
      features: ['AI 기반 자동 분류', '실시간 관세율 조회'],
      demo: true
    },
    {
      id: 'tariff-calculator',
      title: '관세 계산기',
      description: '실시간 환율 반영 관세 자동 계산',
      icon: Calculator,
      category: 'calculation',
      features: ['실시간 환율 반영', '국가별 관세율'],
      demo: true
    },
    {
      id: 'labeling-ai',
      title: '라벨링 AI 검토',
      description: '수출국 규정에 맞는 라벨링 자동 검토',
      icon: CheckCircle,
      category: 'ai',
      features: ['규정 자동 검토', '개선사항 제안'],
      demo: false
    },
    {
      id: 'export-calculator',
      title: '수출 비용 계산기',
      description: '포장부터 배송까지 전체 비용 계산',
      icon: Calculator,
      category: 'calculation',
      features: ['전체 비용 계산', '수익률 분석'],
      demo: false
    },
    {
      id: 'packaging-template',
      title: '포장 라벨 템플릿',
      description: '국가별 포장 라벨 템플릿 제공',
      icon: FileText,
      category: 'template',
      features: ['국가별 템플릿', '자동 생성'],
      demo: false
    },
    {
      id: 'document-template',
      title: '수출서류 템플릿',
      description: '필수 수출서류 템플릿과 작성 가이드',
      icon: FileText,
      category: 'template',
      features: ['필수 서류 템플릿', '작성 가이드'],
      demo: false
    },
    {
      id: 'market-analysis',
      title: '시장 분석 AI',
      description: 'AI 기반 타겟 시장 분석과 진출 전략',
      icon: TrendingUp,
      category: 'ai',
      features: ['시장 트렌드 분석', '진출 전략 제안'],
      demo: false
    },
    {
      id: 'certification-check',
      title: '인증 체크리스트',
      description: '국가별 필수 인증 체크리스트',
      icon: Shield,
      category: 'template',
      features: ['필수 인증 목록', '진행 상황 추적'],
      demo: false
    },
    {
      id: 'exchange-alert',
      title: '환율 알림 설정',
      description: '목표 환율 도달 시 실시간 알림',
      icon: Bell,
      category: 'notification',
      features: ['실시간 알림', '목표 환율 설정'],
      demo: false
    }
  ];

  const servicesData = [
    {
      id: 'distributor-matching',
      title: '유통업체 매칭 & 제안',
      description: '현지 유통업체 발굴부터 계약까지 전문 매칭 서비스',
      price: '문의하기',
      successRate: '94%',
      timeline: '2-3주',
      features: ['현지 유통업체 발굴', '계약 협상 대행', '법무 검토', '사후 관리'],
      popular: true
    },
    {
      id: 'export-management',
      title: '수출 대행 관리',
      description: '서류 작성부터 통관까지 수출 전 과정 대행',
      price: '문의하기',
      successRate: '98%',
      timeline: '1-2주',
      features: ['서류 작성 대행', '통관 처리', '배송 관리', '실시간 추적'],
      popular: false
    },
    {
      id: 'certification-support',
      title: '인증 취득 지원',
      description: '현지 인증 취득을 위한 전문 컨설팅',
      price: '문의하기',
      successRate: '91%',
      timeline: '4-6주',
      features: ['인증 컨설팅', '서류 준비', '심사 대응', '사후 관리'],
      popular: false
    },
    {
      id: 'market-entry',
      title: '시장 진출 컨설팅',
      description: '타겟 시장 분석부터 진출 전략까지',
      price: '문의하기',
      successRate: '89%',
      timeline: '3-4주',
      features: ['시장 조사', '경쟁사 분석', '진출 전략', '실행 계획'],
      popular: false
    },
    {
      id: 'legal-support',
      title: '법무 지원 서비스',
      description: '현지 법규 검토와 계약서 작성 지원',
      price: '문의하기',
      successRate: '96%',
      timeline: '1-2주',
      features: ['법규 검토', '계약서 작성', '분쟁 대응', '법무 자문'],
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: '전체 도구', count: toolsData.length },
    { id: 'calculation', name: '계산 도구', count: toolsData.filter(t => t.category === 'calculation').length },
    { id: 'ai', name: 'AI 도구', count: toolsData.filter(t => t.category === 'ai').length },
    { id: 'template', name: '템플릿', count: toolsData.filter(t => t.category === 'template').length },
    { id: 'notification', name: '알림 설정', count: toolsData.filter(t => t.category === 'notification').length }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? toolsData 
    : toolsData.filter(tool => tool.category === selectedCategory);

  return (
    <div className="global-business-page">
      {/* 커스텀 CSS 스타일 */}
      <style jsx>{`
        .global-business-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .header-section {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          padding: 1.5rem 0 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .header-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .header-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }

        .header-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-subtitle {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .header-description {
          font-size: 0.875rem;
          opacity: 0.7;
          max-width: 500px;
          margin: 0 auto;
        }

        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }

        .stats-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .stats-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .stats-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stats-grid {
          display: flex;
          gap: 3rem;
        }

        .reviews-section {
          margin-left: auto;
          text-align: right;
        }

        .reviews-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .reviews-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .review-item {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .review-text {
          font-size: 0.875rem;
          color: #374151;
          font-style: italic;
        }

        .review-author {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .review-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: flex-end;
        }

        .stars {
          color: #f59e0b;
          font-size: 0.875rem;
        }

        .rating-text {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 600;
        }

        .review-dots {
          display: flex;
          gap: 0.25rem;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }

        .review-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .review-dot.active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .review-dot:hover {
          background: #6b7280;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .tabs-section {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .tabs-container {
          background: #f1f5f9;
          padding: 0.25rem;
          border-radius: 0.75rem;
          display: flex;
          gap: 0.25rem;
        }

        .tab-button {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .tab-button.active {
          background: #3b82f6;
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .tab-button:not(.active) {
          color: #64748b;
        }

        .tab-button:not(.active):hover {
          background: white;
          color: #1f2937;
        }

        .tab-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.125rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
        }

        .content-section {
          display: flex;
          gap: 2rem;
          min-height: 600px;
        }

        .sidebar {
          width: 280px;
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .sidebar-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category-button {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 500;
        }

        .category-button.active {
          background: #3b82f6;
          color: white;
        }

        .category-button:not(.active) {
          color: #64748b;
        }

        .category-button:not(.active):hover {
          background: #f8fafc;
          color: #1f2937;
        }

        .category-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.125rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .main-content {
          flex: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .section-description {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .tool-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          position: relative;
          overflow: hidden;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .tool-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .tool-icon {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .tool-info {
          flex: 1;
        }

        .tool-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .tool-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .tool-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .feature-tag {
          background: #f0f9ff;
          color: #0369a1;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid #bae6fd;
        }

        .demo-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .popular-badge {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          transform: rotate(12deg);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, #64748b 0%, #475569 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .service-timeline {
          text-align: right;
        }

        .timeline-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .timeline-value {
          font-weight: 600;
          color: #1f2937;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.75rem;
        }

        .service-description {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .price-section {
          background: #f8fafc;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .price-current {
          font-size: 1.25rem;
          font-weight: 700;
          color: #3b82f6;
        }

        .price-original {
          font-size: 0.875rem;
          color: #9ca3af;
          text-decoration: line-through;
        }

        .success-rate {
          color: #10b981;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .industry-average {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #374151;
        }

        .feature-check {
          color: #10b981;
          flex-shrink: 0;
        }

        .action-button {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .tool-demo {
          margin-top: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .demo-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .demo-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .demo-input, .demo-select {
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          background: white;
        }

        .demo-input:focus, .demo-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .demo-button {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .demo-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .result-display {
          margin-top: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 1px solid #0ea5e9;
          border-radius: 0.5rem;
          font-size: 0.875rem;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .result-row:last-child {
          margin-bottom: 0;
        }

        .result-row.total {
          font-weight: 700;
          font-size: 1rem;
          padding-top: 0.5rem;
          border-top: 1px solid #0ea5e9;
          color: #0369a1;
        }

        @media (max-width: 768px) {
          .header-title {
            font-size: 2rem;
          }
          
          .main-container {
            padding: 1rem;
          }
          
          .content-section {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
          }
          
          .stats-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            width: 100%;
          }
          
          .tools-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 헤더 섹션 */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-icon">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="header-title">글로벌 비즈니스</h1>
          <p className="header-subtitle">
            화장품 해외 진출, 브랜드팩이 <strong>A to Z 대행</strong>해드립니다
          </p>
          <p className="header-description">
            AI 기반 스마트 도구와 전문가 네트워크로 성공적인 글로벌 진출을 지원합니다
          </p>
        </div>
      </div>

      <div className="main-container">
        {/* 실시간 현황 */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stats-title">
              📊 실시간 현황
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#3b82f6' }}>
                  {counters.exports}
                  <div className="pulse-dot"></div>
                </div>
                <div className="stat-label">이번 달 수출</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#10b981' }}>
                  {counters.partners}
                </div>
                <div className="stat-label">글로벌 파트너</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#8b5cf6' }}>
                  {counters.countries}
                </div>
                <div className="stat-label">진출 국가</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" style={{ color: '#f59e0b' }}>
                  {counters.success}%
                </div>
                <div className="stat-label">성공률</div>
              </div>
            </div>
            
            <div className="reviews-section">
              <div className="reviews-title">
                ⭐ 고객 후기
              </div>
              <div className="reviews-content">
                <div className="review-item">
                  <span className="review-text">"{reviewsData[currentReview].text}"</span>
                  <span className="review-author">- {reviewsData[currentReview].author} {reviewsData[currentReview].country}</span>
                </div>
                <div className="review-rating">
                  <span className="stars">{'★'.repeat(reviewsData[currentReview].rating)}{'☆'.repeat(5-reviewsData[currentReview].rating)}</span>
                  <span className="rating-text">4.8/5.0</span>
                </div>
                <div className="review-dots">
                  {reviewsData.map((_, index) => (
                    <span 
                      key={index}
                      className={`review-dot ${index === currentReview ? 'active' : ''}`}
                      onClick={() => setCurrentReview(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="tabs-section">
          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <Zap className="w-4 h-4" />
              <span>셀프 도구</span>
              <span className="tab-badge">9</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              <Users className="w-4 h-4" />
              <span>대행 서비스</span>
              <span className="tab-badge">5</span>
            </button>
          </div>
        </div>

        {/* 콘텐츠 섹션 */}
        <div className="content-section">
          {activeTab === 'tools' && (
            <>
              {/* 사이드바 */}
              <div className="sidebar">
                <div className="sidebar-title">
                  🔍 카테고리
                </div>
                <div className="category-list">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 메인 콘텐츠 */}
              <div className="main-content">
                <div className="section-header">
                  <div className="section-title">
                    🛠️ 스마트 셀프 도구
                  </div>
                  <div className="section-description">
                    AI 기반 도구로 수출 준비를 더 쉽고 정확하게 해보세요
                  </div>
                </div>

                <div className="tools-grid">
                  {filteredTools.map(tool => {
                    const Icon = tool.icon;
                    return (
                      <div key={tool.id} className="tool-card">
                        {tool.demo && (
                          <div className="demo-badge">체험 가능</div>
                        )}
                        
                        <div className="tool-header">
                          <div className="tool-icon">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="tool-info">
                            <div className="tool-title">{tool.title}</div>
                            <div className="tool-description">{tool.description}</div>
                          </div>
                        </div>

                        <div className="tool-features">
                          {tool.features.map((feature, index) => (
                            <div key={index} className="feature-tag">
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* 도구 기능 인터페이스 - 항상 표시 */}
                        {tool.demo && (
                          <div className="tool-demo">
                            {tool.id === 'hs-classifier' && (
                              <div className="demo-content">
                                <h4>HS코드 AI 분류기</h4>
                                <input
                                  type="text"
                                  placeholder="제품명을 입력하세요 (예: 립스틱)"
                                  value={calculatorData.searchQuery}
                                  onChange={(e) => setCalculatorData({...calculatorData, searchQuery: e.target.value})}
                                  className="demo-input"
                                />
                                <button 
                                  className="demo-button"
                                  onClick={() => {
                                    const hsCode = searchHSCode(calculatorData.searchQuery);
                                    setCalculatorData({...calculatorData, hsCode: hsCode});
                                  }}
                                >
                                  분류하기
                                </button>
                                {calculatorData.hsCode && (
                                  <div className="result-display">
                                    <strong>분류 결과:</strong> {calculatorData.searchQuery} → HS코드: {calculatorData.hsCode}
                                  </div>
                                )}
                              </div>
                            )}

                            {tool.id === 'tariff-calculator' && (
                              <div className="demo-content">
                                <h4>관세 계산기</h4>
                                <input
                                  type="number"
                                  placeholder="제품 가격 (원)"
                                  value={calculatorData.productPrice}
                                  onChange={(e) => setCalculatorData({...calculatorData, productPrice: e.target.value})}
                                  className="demo-input"
                                />
                                <select
                                  value={calculatorData.targetCountry}
                                  onChange={(e) => setCalculatorData({...calculatorData, targetCountry: e.target.value})}
                                  className="demo-select"
                                >
                                  <option value="japan">일본</option>
                                  <option value="usa">미국</option>
                                  <option value="china">중국</option>
                                  <option value="europe">유럽</option>
                                </select>
                                <button 
                                  className="demo-button"
                                  onClick={() => {
                                    if (calculatorData.productPrice) {
                                      const result = calculateTariff(calculatorData.productPrice, calculatorData.targetCountry);
                                      setCalculatorData({...calculatorData, tariffResult: result});
                                    }
                                  }}
                                >
                                  계산하기
                                </button>
                                {calculatorData.tariffResult && (
                                  <div className="result-display">
                                    <div className="result-row">
                                      <span>관세:</span>
                                      <span>{calculatorData.tariffResult.tariff.toLocaleString()}원</span>
                                    </div>
                                    <div className="result-row">
                                      <span>부가세:</span>
                                      <span>{calculatorData.tariffResult.vat.toLocaleString()}원</span>
                                    </div>
                                    <div className="result-row">
                                      <span>통관수수료:</span>
                                      <span>{calculatorData.tariffResult.clearanceFee.toLocaleString()}원</span>
                                    </div>
                                    <div className="result-row total">
                                      <span>총 관세비용:</span>
                                      <span>{calculatorData.tariffResult.total.toLocaleString()}원</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {activeTab === 'services' && (
            <div className="main-content">
              <div className="section-header">
                <div className="section-title">
                  💼 전문 대행 서비스
                </div>
                <div className="section-description">
                  전문가가 직접 수행하는 맞춤형 글로벌 진출 서비스
                </div>
              </div>

              <div className="services-grid">
                {servicesData.map(service => (
                  <div key={service.id} className="service-card">
                    {service.popular && (
                      <div className="popular-badge">🔥 인기</div>
                    )}
                    
                    <div className="service-header">
                      <div className="service-icon">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="service-timeline">
                        <div className="timeline-label">예상 소요시간</div>
                        <div className="timeline-value">{service.timeline}</div>
                      </div>
                    </div>

                    <div className="service-title">{service.title}</div>
                    <div className="service-description">{service.description}</div>

                    <div className="price-section">
                      <div className="price-row">
                        <span className="price-current">{service.price}</span>
                      </div>
                      <div className="price-row">
                        <span className="success-rate">성공률 {service.successRate}</span>
                        <span className="industry-average">업계 평균 대비 +15%</span>
                      </div>
                    </div>

                    <div className="features-list">
                      {service.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <CheckCircle className="w-4 h-4 feature-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="action-button"
                      onClick={() => {
                        alert(`${service.title} 상담 신청이 접수되었습니다!\n\n담당자가 24시간 내에 연락드리겠습니다.\n\n서비스: ${service.title}\n예상 소요시간: ${service.timeline}\n\n맞춤형 견적을 제공해드리겠습니다.`);
                      }}
                    >
                      <span>상담 신청</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalBusinessPage;

