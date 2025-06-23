import React, { useState, useEffect } from 'react';
import { Search, Filter, X, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState('manufacturers');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [showPopularSearches, setShowPopularSearches] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
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
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    manufacturers: {
      productCategory: [],
      productType: [],
      certifications: []
    },
    containers: {
      usage: [],
      product: [],
      material: [],
      capacity: [0, 1000],
      neckSize: [0, 100]
    },
    packaging: {
      product: [],
      postProcessing: [],
      material: []
    }
  });

  // 탭별 필터 옵션
  const filterOptions = {
    manufacturers: {
      productCategory: ['스킨케어', '클렌징', '메이크업', '립 메이크업/케어', '아이 메이크업/케어', '헤어케어', '바디케어', '팩/시트 제품', '비누', '네일/페디', '향수/아로마', '기능성'],
      productType: ['일반 화장품', '의약외품', '동물용 의약외품', '건강기능식품', '생활용품'],
      certifications: ['ISO', 'CGMP', 'VEGAN', '할랄', 'KGMP']
    },
    containers: {
      usage: ['스킨케어', '메이크업'],
      product: ['Acc', 'Applicator', 'Bottle', 'Cap', 'Glass', 'Jar', 'Makeup', 'Pump', 'Spray', 'Tube', 'Stick'],
      material: ['나무', '스틸', '유리', '초자', '나일론', '실리콘', '아크릴', '알루미늄', 'ABL', 'ABS', 'ETC', 'HDPE', 'LDPE', 'OTHER', 'PBL', 'PC', 'PCR', 'PE', 'PET', 'PET-G', 'PP', 'SAN']
    },
    packaging: {
      product: ['단상자', '인박스', '아웃박스', '싸바리', '표지바리', '접지상자', '틴케이스', '블리스터', 'PET, PP', 'MDF', '나무상자', '라벨, 스티커', '수축필름', '트레이', '쇼핑백', 'etc'],
      postProcessing: ['UV실크', '플라스틱 코팅', '레이저', '가공중착', '열전사'],
      material: ['보통지', '고급지', '수입지', '골판지']
    }
  };

  // 업체 데이터
  const partnersData = {
    manufacturers: [
      {
        id: 1,
        name: '코스맥스',
        location: '서울',
        specialty: '스킨케어',
        rating: 4.8,
        projects: '150+',
        productCategory: ['스킨케어', '클렌징'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP'],
        products: ['하이드로 크림', '콜라겐 세럼', '비타민C 토너', '클렌징 폼']
      },
      {
        id: 2,
        name: '한국콜마',
        location: '경기 남부',
        specialty: '메이크업',
        rating: 4.7,
        projects: '200+',
        productCategory: ['메이크업', '립 메이크업/케어'],
        productType: ['일반 화장품'],
        equipment: ['립스틱믹서', '마스카라 자동충전기'],
        certifications: ['ISO', 'CGMP'],
        products: ['매트 립스틱', '쿠션 파운데이션', '마스카라', '아이섀도우']
      },
      {
        id: 3,
        name: '웰코스',
        location: '충청도',
        specialty: '향수',
        rating: 4.6,
        projects: '80+',
        productCategory: ['향수/아로마', '스킨케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '샴푸믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['플로럴 퍼퓸', '시카 크림', '아로마 오일', '바디 로션']
      },
      {
        id: 4,
        name: '바이오스펙트럼',
        location: '경기 북부',
        specialty: '의약외품',
        rating: 4.5,
        projects: '150+',
        productCategory: ['스킨케어', '기능성'],
        productType: ['의약외품'],
        equipment: ['크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'KGMP'],
        products: ['약용 크림', '트러블 케어 세럼', '선크림', '미백 에센스']
      },
      {
        id: 5,
        name: '(주)디마엘',
        location: '서울',
        specialty: '스킨케어',
        rating: 4.9,
        projects: '300+',
        productCategory: ['스킨케어', '클렌징'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['블루밍셀 시카 크림', '블루밍셀 하이드로 크림', '딥 클렌징 오일', '수분 토너']
      },
      {
        id: 6,
        name: '(주)웰코스텍',
        location: '경기 남부',
        specialty: '프리미엄 스킨케어',
        rating: 4.8,
        projects: '250+',
        productCategory: ['스킨케어', '기능성'],
        productType: ['일반 화장품', '의약외품'],
        equipment: ['호모믹서', '크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['셀러피 에어리페어 크림', '피에이치드롭 밤라그린 크림', '안티에이징 세럼', '나이아신 에센스']
      },
      {
        id: 7,
        name: '(주)리본화장품',
        location: '인천',
        specialty: '자연주의 화장품',
        rating: 4.7,
        projects: '180+',
        productCategory: ['스킨케어', '바디케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['리포보 REP 크림', '천연 바디 로션', '허브 토너', '오가닉 세럼']
      },
      {
        id: 8,
        name: '(주)웰에이드생활건강',
        location: '경기 북부',
        specialty: '생활건강',
        rating: 4.6,
        projects: '220+',
        productCategory: ['스킨케어', '바디케어'],
        productType: ['일반 화장품', '생활용품'],
        equipment: ['호모믹서', '크림 자동충전기', '샴푸믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['보뚜와 세라마이드 크림', '핸드크림', '바디워시', '샴푸']
      },
      {
        id: 9,
        name: '(주)뷰티맥스',
        location: '서울',
        specialty: '색조화장품',
        rating: 4.8,
        projects: '280+',
        productCategory: ['메이크업', '립 메이크업/케어'],
        productType: ['일반 화장품'],
        equipment: ['립스틱믹서', '아이섀도우믹서', '파운데이션믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['글로시 립스틱', '매트 립스틱', '리퀴드 파운데이션', '컨실러']
      },
      {
        id: 10,
        name: '(주)나우코스',
        location: '경기 남부',
        specialty: '천연화장품',
        rating: 4.7,
        projects: '160+',
        productCategory: ['스킨케어', '헤어케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '샴푸믹서'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['천연 크림', '허브 샴푸', '아르간 오일', '로즈워터 토너']
      },
      {
        id: 11,
        name: '(주)원진코스메틱',
        location: '충청도',
        specialty: '기능성화장품',
        rating: 4.6,
        projects: '190+',
        productCategory: ['기능성', '스킨케어'],
        productType: ['의약외품', '일반 화장품'],
        equipment: ['크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'KGMP'],
        products: ['미백 크림', '주름개선 세럼', '선크림', '트러블 패치']
      },
      {
        id: 12,
        name: '(주)일진코스메틱',
        location: '서울',
        specialty: '프리미엄 메이크업',
        rating: 4.9,
        projects: '320+',
        productCategory: ['메이크업', '아이 메이크업/케어'],
        productType: ['일반 화장품'],
        equipment: ['립스틱믹서', '아이섀도우믹서', '마스카라 자동충전기'],
        certifications: ['ISO', 'CGMP'],
        products: ['프리미엄 립스틱', '아이섀도우 팔레트', '마스카라', '아이라이너']
      },
      {
        id: 13,
        name: '(주)엘엔뷰',
        location: '경기 북부',
        specialty: '스킨케어',
        rating: 4.5,
        projects: '140+',
        productCategory: ['스킨케어', '팩/시트 제품'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP'],
        products: ['수분 크림', '마스크팩', '에센스', '아이크림']
      },
      {
        id: 14,
        name: '(주)진코스텍',
        location: '인천',
        specialty: '남성화장품',
        rating: 4.7,
        projects: '170+',
        productCategory: ['스킨케어', '헤어케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '샴푸믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['남성 크림', '헤어 왁스', '애프터 쉐이브', '남성 토너']
      },
      {
        id: 15,
        name: '에스엘코스메틱',
        location: '경기 남부',
        specialty: '자연주의',
        rating: 4.6,
        projects: '200+',
        productCategory: ['스킨케어', '바디케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['오가닉 크림', '바디 오일', '천연 비누', '허브 로션']
      },
      {
        id: 16,
        name: '(주)코리아코스팩',
        location: '충청도',
        specialty: '패키징 전문',
        rating: 4.8,
        projects: '350+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['프리미엄 크림', '럭셔리 립스틱', '세럼', '에센스']
      },
      {
        id: 17,
        name: '(주)코스나인',
        location: '서울',
        specialty: 'K-뷰티',
        rating: 4.7,
        projects: '240+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['K-뷰티 크림', '글로우 세럼', '틴트', '하이라이터']
      },
      {
        id: 18,
        name: '(주)동방코스메틱',
        location: '경기 북부',
        specialty: '전통화장품',
        rating: 4.5,
        projects: '130+',
        productCategory: ['스킨케어', '헤어케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '샴푸믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['한방 크림', '인삼 세럼', '한방 샴푸', '전통 토너']
      },
      {
        id: 19,
        name: '(주)글로벌뷰티',
        location: '인천',
        specialty: '수출전문',
        rating: 4.8,
        projects: '290+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP', '할랄'],
        products: ['글로벌 크림', '익스포트 세럼', '인터내셔널 립스틱', '월드와이드 토너']
      },
      {
        id: 20,
        name: '(주)퓨어뷰티',
        location: '경기 남부',
        specialty: '순수화장품',
        rating: 4.6,
        projects: '180+',
        productCategory: ['스킨케어', '클렌징'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['퓨어 크림', '순수 세럼', '마일드 클렌저', '센시티브 토너']
      },
      {
        id: 21,
        name: '(주)프리미엄코스',
        location: '서울',
        specialty: '고급화장품',
        rating: 4.9,
        projects: '400+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['럭셔리 크림', '프리미엄 세럼', '하이엔드 립스틱', '골드 에센스']
      },
      {
        id: 22,
        name: '(주)네이처코스',
        location: '충청도',
        specialty: '자연화장품',
        rating: 4.7,
        projects: '210+',
        productCategory: ['스킨케어', '바디케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['네이처 크림', '식물 세럼', '천연 바디로션', '허브 에센스']
      },
      {
        id: 23,
        name: '(주)이노뷰티',
        location: '경기 북부',
        specialty: '혁신화장품',
        rating: 4.8,
        projects: '260+',
        productCategory: ['기능성', '스킨케어'],
        productType: ['의약외품', '일반 화장품'],
        equipment: ['크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'KGMP'],
        products: ['이노베이션 크림', '첨단 세럼', '스마트 에센스', '바이오 토너']
      },
      {
        id: 24,
        name: '(주)클린뷰티',
        location: '인천',
        specialty: '클린뷰티',
        rating: 4.6,
        projects: '150+',
        productCategory: ['스킨케어', '클렌징'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['클린 크림', '퓨리파잉 세럼', '딥클렌징 폼', '마일드 토너']
      },
      {
        id: 25,
        name: '(주)스킨랩',
        location: '경기 남부',
        specialty: '스킨케어 연구',
        rating: 4.7,
        projects: '190+',
        productCategory: ['스킨케어', '기능성'],
        productType: ['일반 화장품', '의약외품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP'],
        products: ['랩 크림', '리서치 세럼', '사이언스 에센스', '포뮬라 토너']
      },
      {
        id: 26,
        name: '(주)뷰티테크',
        location: '서울',
        specialty: '뷰티테크',
        rating: 4.8,
        projects: '280+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['테크 크림', '스마트 세럼', 'AI 립스틱', '디지털 에센스']
      },
      {
        id: 27,
        name: '(주)그린코스',
        location: '충청도',
        specialty: '친환경화장품',
        rating: 4.6,
        projects: '170+',
        productCategory: ['스킨케어', '바디케어'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기'],
        certifications: ['ISO', 'CGMP', 'VEGAN'],
        products: ['그린 크림', '에코 세럼', '친환경 로션', '바이오 토너']
      },
      {
        id: 28,
        name: '(주)럭셔리뷰티',
        location: '경기 북부',
        specialty: '럭셔리',
        rating: 4.9,
        projects: '350+',
        productCategory: ['스킨케어', '메이크업'],
        productType: ['일반 화장품'],
        equipment: ['호모믹서', '크림 자동충전기', '립스틱믹서'],
        certifications: ['ISO', 'CGMP'],
        products: ['럭셔리 크림', '프리미엄 세럼', '하이엔드 립스틱', '골드 에센스']
      },
      {
        id: 29,
        name: '(주)헬스뷰티',
        location: '인천',
        specialty: '건강화장품',
        rating: 4.7,
        projects: '220+',
        productCategory: ['기능성', '스킨케어'],
        productType: ['의약외품', '건강기능식품'],
        equipment: ['크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'KGMP'],
        products: ['헬스 크림', '기능성 세럼', '건강 에센스', '웰니스 토너']
      },
      {
        id: 30,
        name: '(주)퓨처뷰티',
        location: '경기 남부',
        specialty: '미래화장품',
        rating: 4.8,
        projects: '300+',
        productCategory: ['스킨케어', '기능성'],
        productType: ['일반 화장품', '의약외품'],
        equipment: ['호모믹서', '크림 자동충전기', '고온 자동충전기'],
        certifications: ['ISO', 'CGMP', 'KGMP'],
        products: ['퓨처 크림', '넥스트 세럼', '미래 에센스', '어드밴스 토너']
      }
    ],
    containers: [
      {
        id: 1,
        name: '대한용기',
        location: '서울',
        specialty: '플라스틱 용기',
        rating: 4.6,
        projects: '300+',
        usage: ['스킨케어', '메이크업'],
        product: ['Bottle', 'Jar', 'Cap'],
        material: ['PP', 'PE', 'PET'],
        capacity: 250,
        neckSize: 24
      },
      {
        id: 2,
        name: '글로벌패키징',
        location: '경기 남부',
        specialty: '유리 용기',
        rating: 4.5,
        projects: '180+',
        usage: ['스킨케어'],
        product: ['Glass', 'Bottle', 'Jar'],
        material: ['유리', '초자', '알루미늄'],
        capacity: 100,
        neckSize: 18
      },
      {
        id: 3,
        name: '(주)코스모용기',
        location: '인천',
        specialty: '펌프 용기',
        rating: 4.7,
        projects: '220+',
        usage: ['스킨케어', '헤어케어'],
        product: ['Pump', 'Bottle', 'Spray'],
        material: ['PP', 'ABS', 'PET'],
        capacity: 300,
        neckSize: 28
      },
      {
        id: 4,
        name: '한국용기산업',
        location: '경기 북부',
        specialty: '화장품 용기',
        rating: 4.4,
        projects: '190+',
        usage: ['메이크업', '스킨케어'],
        product: ['Jar', 'Compact', 'Tube'],
        material: ['ABS', 'PC', 'PMMA'],
        capacity: 50,
        neckSize: 20
      },
      {
        id: 5,
        name: '프리미엄용기',
        location: '서울',
        specialty: '고급 용기',
        rating: 4.8,
        projects: '280+',
        usage: ['스킨케어', '향수'],
        product: ['Glass', 'Bottle', 'Cap'],
        material: ['유리', '알루미늄', '스틸'],
        capacity: 150,
        neckSize: 24
      },
      {
        id: 6,
        name: '에코용기',
        location: '충청도',
        specialty: '친환경 용기',
        rating: 4.6,
        projects: '160+',
        usage: ['스킨케어', '바디케어'],
        product: ['Bottle', 'Jar', 'Tube'],
        material: ['PCR', 'PLA', '바이오PE'],
        capacity: 200,
        neckSize: 22
      },
      {
        id: 7,
        name: '스마트용기',
        location: '경기 남부',
        specialty: '에어리스 용기',
        rating: 4.7,
        projects: '210+',
        usage: ['스킨케어'],
        product: ['Airless', 'Pump', 'Bottle'],
        material: ['PP', 'PET', 'ABS'],
        capacity: 30,
        neckSize: 15
      },
      {
        id: 8,
        name: '메탈용기',
        location: '기타',
        specialty: '금속 용기',
        rating: 4.5,
        projects: '170+',
        usage: ['메이크업', '향수'],
        product: ['Metal', 'Can', 'Tube'],
        material: ['알루미늄', '스틸', '주석'],
        capacity: 100,
        neckSize: 20
      },
      {
        id: 9,
        name: '플렉시용기',
        location: '서울',
        specialty: '튜브 용기',
        rating: 4.6,
        projects: '240+',
        usage: ['스킨케어', '바디케어'],
        product: ['Tube', 'Squeeze', 'Flip'],
        material: ['PE', 'ABL', 'PBL'],
        capacity: 120,
        neckSize: 19
      },
      {
        id: 10,
        name: '크리스탈용기',
        location: '인천',
        specialty: '크리스탈 용기',
        rating: 4.8,
        projects: '200+',
        usage: ['스킨케어', '메이크업'],
        product: ['Glass', 'Crystal', 'Jar'],
        material: ['크리스탈', '유리', '아크릴'],
        capacity: 80,
        neckSize: 18
      },
      {
        id: 11,
        name: '바이오용기',
        location: '경기 북부',
        specialty: '생분해 용기',
        rating: 4.5,
        projects: '130+',
        usage: ['스킨케어', '바디케어'],
        product: ['Bottle', 'Jar', 'Tube'],
        material: ['PLA', '전분', '셀룰로오스'],
        capacity: 180,
        neckSize: 24
      },
      {
        id: 12,
        name: '럭셔리용기',
        location: '서울',
        specialty: '럭셔리 용기',
        rating: 4.9,
        projects: '320+',
        usage: ['스킨케어', '메이크업'],
        product: ['Glass', 'Metal', 'Acrylic'],
        material: ['유리', '금', '은'],
        capacity: 50,
        neckSize: 20
      },
      {
        id: 13,
        name: '테크용기',
        location: '경기 남부',
        specialty: '스마트 용기',
        rating: 4.7,
        projects: '190+',
        usage: ['스킨케어'],
        product: ['Smart', 'Sensor', 'Digital'],
        material: ['PP', 'ABS', '센서'],
        capacity: 100,
        neckSize: 22
      },
      {
        id: 14,
        name: '미니용기',
        location: '충청도',
        specialty: '소용량 용기',
        rating: 4.4,
        projects: '150+',
        usage: ['메이크업', '샘플'],
        product: ['Mini', 'Sample', 'Travel'],
        material: ['PP', 'PE', 'PS'],
        capacity: 15,
        neckSize: 13
      },
      {
        id: 15,
        name: '대용량용기',
        location: '기타',
        specialty: '대용량 용기',
        rating: 4.6,
        projects: '180+',
        usage: ['바디케어', '헤어케어'],
        product: ['Large', 'Bulk', 'Refill'],
        material: ['HDPE', 'PP', 'PET'],
        capacity: 500,
        neckSize: 38
      },
      {
        id: 16,
        name: '컬러용기',
        location: '인천',
        specialty: '컬러 용기',
        rating: 4.5,
        projects: '160+',
        usage: ['메이크업', '스킨케어'],
        product: ['Color', 'Tinted', 'Opaque'],
        material: ['PP', 'PE', 'ABS'],
        capacity: 120,
        neckSize: 20
      },
      {
        id: 17,
        name: '투명용기',
        location: '서울',
        specialty: '투명 용기',
        rating: 4.7,
        projects: '210+',
        usage: ['스킨케어', '메이크업'],
        product: ['Clear', 'Transparent', 'See-through'],
        material: ['PET', '유리', 'PC'],
        capacity: 200,
        neckSize: 24
      },
      {
        id: 18,
        name: '안전용기',
        location: '경기 북부',
        specialty: '안전 용기',
        rating: 4.8,
        projects: '230+',
        usage: ['의약품', '기능성'],
        product: ['Safety', 'Child-proof', 'Tamper'],
        material: ['PP', 'HDPE', 'PET'],
        capacity: 100,
        neckSize: 28
      },
      {
        id: 19,
        name: '디자인용기',
        location: '경기 남부',
        specialty: '디자인 용기',
        rating: 4.6,
        projects: '190+',
        usage: ['스킨케어', '메이크업'],
        product: ['Design', 'Unique', 'Custom'],
        material: ['아크릴', 'PC', 'ABS'],
        capacity: 80,
        neckSize: 18
      },
      {
        id: 20,
        name: '이노베이션용기',
        location: '충청도',
        specialty: '혁신 용기',
        rating: 4.9,
        projects: '250+',
        usage: ['스킨케어', '메이크업'],
        product: ['Innovation', 'Patent', 'New-tech'],
        material: ['신소재', 'PP', 'PET'],
        capacity: 150,
        neckSize: 22
      }
    ],
    packaging: [
      {
        id: 1,
        name: '패키지원',
        location: '서울',
        specialty: '고급 패키지',
        rating: 4.7,
        projects: '250+',
        product: ['단상자', '인박스', '라벨, 스티커'],
        postProcessing: ['UV실크', '플라스틱 코팅'],
        material: ['고급지', '수입지']
      },
      {
        id: 2,
        name: '디자인박스',
        location: '경기 북부',
        specialty: '친환경 패키지',
        rating: 4.4,
        projects: '150+',
        product: ['아웃박스', '접지상자', '쇼핑백'],
        postProcessing: ['레이저', '열전사'],
        material: ['보통지', '골판지']
      },
      {
        id: 3,
        name: '(주)프리미엄팩',
        location: '인천',
        specialty: '럭셔리 패키지',
        rating: 4.8,
        projects: '300+',
        product: ['고급상자', '선물포장', '브랜딩'],
        postProcessing: ['금박', '은박', '엠보싱'],
        material: ['아트지', '펄지', '벨벳']
      },
      {
        id: 4,
        name: '에코패키지',
        location: '경기 남부',
        specialty: '친환경 포장',
        rating: 4.6,
        projects: '180+',
        product: ['재활용박스', '생분해포장', '종이백'],
        postProcessing: ['수성코팅', '친환경인쇄'],
        material: ['재생지', '크라프트지', '대나무']
      },
      {
        id: 5,
        name: '스마트패키징',
        location: '서울',
        specialty: 'QR 패키지',
        rating: 4.7,
        projects: '220+',
        product: ['스마트박스', 'QR라벨', 'NFC태그'],
        postProcessing: ['디지털인쇄', 'QR코드'],
        material: ['스마트지', '전자태그']
      },
      {
        id: 6,
        name: '컬러박스',
        location: '충청도',
        specialty: '컬러 인쇄',
        rating: 4.5,
        projects: '190+',
        product: ['컬러박스', '인쇄물', '브로셔'],
        postProcessing: ['4도인쇄', '특색인쇄'],
        material: ['코팅지', '무광지', '유광지']
      },
      {
        id: 7,
        name: '미니패키지',
        location: '기타',
        specialty: '소형 포장',
        rating: 4.4,
        projects: '160+',
        product: ['미니박스', '샘플포장', '여행용'],
        postProcessing: ['미니인쇄', '소형가공'],
        material: ['얇은지', '경량지']
      },
      {
        id: 8,
        name: '대형패키지',
        location: '인천',
        specialty: '대형 포장',
        rating: 4.6,
        projects: '200+',
        product: ['대형박스', '물류포장', '산업포장'],
        postProcessing: ['강화코팅', '방수처리'],
        material: ['골판지', '하드보드', '플라스틱']
      },
      {
        id: 9,
        name: '투명패키지',
        location: '경기 북부',
        specialty: '투명 포장',
        rating: 4.7,
        projects: '170+',
        product: ['투명박스', '아크릴케이스', '블리스터'],
        postProcessing: ['투명코팅', '클리어'],
        material: ['PET', '아크릴', 'PVC']
      },
      {
        id: 10,
        name: '안전패키지',
        location: '서울',
        specialty: '안전 포장',
        rating: 4.8,
        projects: '240+',
        product: ['안전박스', '충격방지', '밀봉포장'],
        postProcessing: ['방수코팅', '충격흡수'],
        material: ['에어캡', '폼', '보호재']
      },
      {
        id: 11,
        name: '아트패키지',
        location: '경기 남부',
        specialty: '아트 패키지',
        rating: 4.9,
        projects: '280+',
        product: ['아트박스', '디자인포장', '예술품'],
        postProcessing: ['아트인쇄', '수제가공'],
        material: ['아트지', '캔버스', '특수지']
      },
      {
        id: 12,
        name: '테크패키지',
        location: '충청도',
        specialty: '기술 포장',
        rating: 4.6,
        projects: '190+',
        product: ['하이테크박스', '전자포장', 'IT포장'],
        postProcessing: ['정밀가공', '기술인쇄'],
        material: ['정전기방지', '전도성', '차폐재']
      },
      {
        id: 13,
        name: '플렉시패키지',
        location: '기타',
        specialty: '유연 포장',
        rating: 4.5,
        projects: '150+',
        product: ['파우치', '플렉시블', '소프트팩'],
        postProcessing: ['열접착', '초음파'],
        material: ['필름', '알루미늄', '복합재']
      },
      {
        id: 14,
        name: '메탈패키지',
        location: '인천',
        specialty: '금속 포장',
        rating: 4.7,
        projects: '210+',
        product: ['메탈박스', '틴케이스', '알루미늄'],
        postProcessing: ['금속가공', '양극처리'],
        material: ['알루미늄', '스틸', '주석']
      },
      {
        id: 15,
        name: '바이오패키지',
        location: '경기 북부',
        specialty: '생분해 포장',
        rating: 4.6,
        projects: '180+',
        product: ['바이오박스', '생분해포장', '친환경'],
        postProcessing: ['생분해코팅', '천연가공'],
        material: ['생분해플라스틱', '전분', '셀룰로오스']
      },
      {
        id: 16,
        name: '커스텀패키지',
        location: '서울',
        specialty: '맞춤 포장',
        rating: 4.8,
        projects: '260+',
        product: ['맞춤박스', '개인화', '브랜딩'],
        postProcessing: ['맞춤인쇄', '개인화가공'],
        material: ['다양한소재', '특수지', '맞춤재료']
      },
      {
        id: 17,
        name: '스피드패키지',
        location: '경기 남부',
        specialty: '신속 포장',
        rating: 4.5,
        projects: '200+',
        product: ['급속포장', '당일배송', '빠른제작'],
        postProcessing: ['고속인쇄', '빠른가공'],
        material: ['표준지', '기본재료']
      },
      {
        id: 18,
        name: '글로벌패키지',
        location: '충청도',
        specialty: '수출 포장',
        rating: 4.7,
        projects: '230+',
        product: ['수출박스', '국제포장', '해외배송'],
        postProcessing: ['국제기준', '수출인증'],
        material: ['수출용지', '국제표준']
      },
      {
        id: 19,
        name: '이벤트패키지',
        location: '기타',
        specialty: '이벤트 포장',
        rating: 4.6,
        projects: '170+',
        product: ['이벤트박스', '기념품', '프로모션'],
        postProcessing: ['이벤트인쇄', '기념가공'],
        material: ['이벤트지', '기념재료']
      },
      {
        id: 20,
        name: '퓨처패키지',
        location: '인천',
        specialty: '미래형 포장',
        rating: 4.9,
        projects: '290+',
        product: ['미래박스', '혁신포장', '신기술'],
        postProcessing: ['미래기술', '혁신가공'],
        material: ['신소재', '미래재료', '혁신소재']
      }
    ]
  };

  // 현재 탭의 필터 옵션과 선택된 필터
  const currentFilterOptions = filterOptions[activeTab] || {};
  const currentSelectedFilters = selectedFilters[activeTab] || {};

  // 필터 토글 함수
  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [filterType]: prev[activeTab][filterType].includes(value)
          ? prev[activeTab][filterType].filter(item => item !== value)
          : [...prev[activeTab][filterType], value]
      }
    }));
  };

  // 슬라이더 값 업데이트
  const updateSliderFilter = (filterType, values) => {
    setSelectedFilters(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [filterType]: values
      }
    }));
  };

  // 필터 초기화
  const resetFilters = () => {
    setSelectedFilters(prev => ({
      ...prev,
      [activeTab]: Object.keys(currentFilterOptions).reduce((acc, key) => {
        if (key === 'capacity') {
          acc[key] = [0, 1000];
        } else if (key === 'neckSize') {
          acc[key] = [0, 100];
        } else {
          acc[key] = [];
        }
        return acc;
      }, {})
    }));
  };

  // 선택된 필터 개수 계산
  const getTotalSelectedFilters = () => {
    return Object.entries(currentSelectedFilters).reduce((total, [key, filters]) => {
      if (key === 'capacity' || key === 'neckSize') {
        const [min, max] = filters || [0, key === 'capacity' ? 1000 : 100];
        return total + (min > 0 || max < (key === 'capacity' ? 1000 : 100) ? 1 : 0);
      }
      return total + (filters?.length || 0);
    }, 0);
  };

  // 모든 선택된 필터를 배열로 변환
  const getAllSelectedFilters = () => {
    const allFilters = [];
    Object.entries(currentSelectedFilters).forEach(([filterType, filters]) => {
      if (filterType === 'capacity' || filterType === 'neckSize') {
        const [min, max] = filters || [0, filterType === 'capacity' ? 1000 : 100];
        if (min > 0 || max < (filterType === 'capacity' ? 1000 : 100)) {
          allFilters.push({ 
            type: filterType, 
            value: `${min}-${max}${filterType === 'capacity' ? 'ml' : 'Ø'}` 
          });
        }
      } else if (filters && Array.isArray(filters)) {
        filters.forEach(filter => {
          allFilters.push({ type: filterType, value: filter });
        });
      }
    });
    return allFilters;
  };

  // 제품 데이터베이스
  const products = [
    {
      id: 1,
      name: '블루밍셀 시카 크림',
      manufacturer: '(주)디마엘',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '시카', '블루밍셀']
    },
    {
      id: 2,
      name: '블루밍셀 하이드로 크림',
      manufacturer: '(주)디마엘',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '하이드로', '블루밍셀']
    },
    {
      id: 3,
      name: '셀러피 에어리페어 크림',
      manufacturer: '(주)웰코스텍',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '셀러피', '에어리페어']
    },
    {
      id: 4,
      name: '피에이치드롭 밤라그린 크림',
      manufacturer: '(주)웰코스텍',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '밤라그린', '피에이치드롭']
    },
    {
      id: 5,
      name: '리포보 REP 크림',
      manufacturer: '(주)리본화장품',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '리포보', 'REP']
    },
    {
      id: 6,
      name: '보뚜와 세라마이드 크림',
      manufacturer: '(주)웰에이드생활건강',
      category: '크림/밤',
      image: '/api/placeholder/100/100',
      type: '기초',
      equipment: ['크림 자동충전기'],
      keywords: ['크림', '보뚜와', '세라마이드']
    }
  ];

  // 검색된 제품 필터링
  const searchedProducts = products.filter(product => 
    searchTerm && product.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // 검색 모드 확인
  const isProductSearch = searchTerm && searchedProducts.length > 0;
  const removeFilter = (filterType, value) => {
    if (filterType === 'capacity') {
      updateSliderFilter('capacity', [0, 1000]);
    } else if (filterType === 'neckSize') {
      updateSliderFilter('neckSize', [0, 100]);
    } else {
      toggleFilter(filterType, value);
    }
  };

  // 필터링된 파트너 목록
  const filteredPartners = partnersData[activeTab]?.filter(partner => {
    // 제품명으로 검색 (제조사 필터링)
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = partner.name.toLowerCase().includes(searchLower);
      const specialtyMatch = partner.specialty.toLowerCase().includes(searchLower);
      const productMatch = partner.products?.some(product => 
        product.toLowerCase().includes(searchLower)
      );
      
      if (!nameMatch && !specialtyMatch && !productMatch) {
        return false;
      }
    }

    // 지역 필터링
    if (selectedRegion && partner.location !== selectedRegion) {
      return false;
    }

    // 기타 필터링
    return Object.entries(currentSelectedFilters).every(([filterType, selectedValues]) => {
      if (!selectedValues || selectedValues.length === 0) return true;
      
      // 슬라이더 필터 처리 (용량, 넥파이)
      if (filterType === 'capacity' || filterType === 'neckSize') {
        const [min, max] = selectedValues;
        const partnerValue = partner[filterType];
        if (min === 0 && max === (filterType === 'capacity' ? 1000 : 100)) return true;
        return partnerValue >= min && partnerValue <= max;
      }
      
      // 일반 체크박스 필터 처리
      return selectedValues.some(value => partner[filterType]?.includes(value));
    });
  }) || [];

  // 탭별 업체 수
  const getTabCount = (tabId) => {
    return partnersData[tabId]?.length || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 그레이 톤 헤더 */}
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

        {/* 데스크톱에서만 기존 레이아웃 표시 */}
        {!isMobile && (
          <>
            {/* 탭과 검색/필터 영역 */}
            <div className="space-y-6">
          {/* 통합된 탭, 검색창, 지역 필터 */}
          <div className="flex items-center space-x-4">
            {/* 연결된 탭 네비게이션 */}
            <div className="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
              {[
                { id: 'manufacturers', label: '제조사' },
                { id: 'containers', label: '용기사' },
                { id: 'packaging', label: '패키지사' }
              ].map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  } ${index > 0 ? 'border-l border-gray-200' : ''}`}
                >
                  {tab.label} ({getTabCount(tab.id)})
                </button>
              ))}
            </div>

            {/* 확장 가능한 검색창 */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="업체명 또는 업종분야 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowPopularSearches(true)}
                onBlur={() => setTimeout(() => setShowPopularSearches(false), 200)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
                
                {/* 확장된 인기검색어 드롭다운 */}
                {showPopularSearches && !searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium text-gray-900">최근 검색어</h3>
                        <button className="text-xs text-gray-500 hover:text-gray-700">전체 삭제</button>
                      </div>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {['(주)동방코스메틱', '크림', '용기'].map((term, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                            {term} <X className="ml-1 h-3 w-3 cursor-pointer hover:text-gray-900" />
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium text-gray-900">인기 검색어</h3>
                        <span className="text-xs text-gray-500">6월 23일 기준</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          '(주)동방코스메틱',
                          '(주)뷰티맥스',
                          '(주)나우코스',
                          '(주)원진코스메틱',
                          '(주)일진코스메틱',
                          '(주)엘엔뷰',
                          '(주)진코스텍',
                          '에스엘코스메틱',
                          '(주)코리아코스팩',
                          '(주)코스나인'
                        ].map((term, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchTerm(term);
                              setShowPopularSearches(false);
                            }}
                            className="flex items-center text-left p-3 hover:bg-gray-50 rounded-lg text-sm transition-colors"
                          >
                            <span className="text-blue-500 font-medium mr-3 w-6">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="text-gray-700">{term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 제품 검색 결과 드롭다운 */}
                {searchTerm && searchedProducts.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-6">
                      {/* 상단 필터 섹션 */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">필터</h3>
                        <div className="space-y-4">
                          {/* 크림 자동충전기 생산설비 */}
                          <div>
                            <h4 className="font-medium text-blue-600 mb-2">크림 자동충전기</h4>
                            <span className="text-sm text-gray-600">생산설비</span>
                          </div>
                          
                          {/* 크림/밤 제품분류 */}
                          <div>
                            <h4 className="font-medium text-blue-600 mb-2">크림/밤</h4>
                              <span className="text-sm text-gray-600">제품분류 &gt; 기초</span>                         </div>
                        </div>
                      </div>

                      {/* 제품 목록 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">제품</h3>
                        <div className="space-y-3">
                          {searchedProducts.map(product => (
                            <div key={product.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-gray-500">이미지</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">
                                  {product.name.split(searchTerm).map((part, index, array) => (
                                    <span key={index}>
                                      {part}
                                      {index < array.length - 1 && (
                                        <span className="text-blue-600 font-semibold">{searchTerm}</span>
                                      )}
                                    </span>
                                  ))}
                                </h4>
                                <p className="text-sm text-gray-600">{product.manufacturer}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            {/* 지역 필터 */}
            <select 
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[120px]"
            >
              <option value="">전체 지역</option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="경기 북부">경기 북부</option>
              <option value="경기 남부">경기 남부</option>
              <option value="충청도">충청도</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>

        {/* 업체 수 표시 */}
        <div className="mb-6">
          <p className="text-gray-600">총 {filteredPartners.length}개의 업체가 있습니다</p>
        </div>

        <div className="flex gap-8">
          {/* 필터 사이드바 */}
          {showFilters && (
            <div className="w-80 space-y-6">
              {/* 검색 필터 제목 */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">검색 필터</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* 적용된 필터 */}
              {getTotalSelectedFilters() > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-900">
                      적용된 필터 {getTotalSelectedFilters()}
                    </h3>
                    <button
                      onClick={resetFilters}
                      className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
                    >
                      <RotateCcw size={14} />
                      전체 해제
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {getAllSelectedFilters().map((filter, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {filter.value}
                        <button
                          onClick={() => removeFilter(filter.type, filter.value)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 통합 필터 박스 */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-medium text-gray-900 mb-4">필터</h3>
                
                {/* 필터 영역 */}
                <div className="space-y-6">
                  {/* 탭별 필터 렌더링 */}
                  {Object.entries(currentFilterOptions).map(([filterType, options], index) => {
                    // 생산설비 필터 제외
                    if (filterType === 'equipment') return null;
                    
                    // 용기사에서 용도 필터 다음에 슬라이더 삽입
                    const isUsageFilter = filterType === 'usage' && activeTab === 'containers';
                    
                    return (
                      <React.Fragment key={filterType}>
                        {/* 기본 필터 */}
                        <div className="border-b border-gray-100 pb-4 last:border-b-0">
                          <h4 className="font-medium text-gray-900 mb-3">
                            {filterType === 'productCategory' ? '제품 카테고리' :
                             filterType === 'productType' ? '제품 유형' :
                             filterType === 'certifications' ? '인증 현황' :
                             filterType === 'usage' ? '용도' :
                             filterType === 'product' ? '제품' :
                             filterType === 'material' ? '재질' :
                             filterType === 'postProcessing' ? '후가공' : filterType} 
                            {(currentSelectedFilters[filterType]?.length || 0) > 0 && (
                              <span className="ml-2 text-sm text-blue-600">
                                ({currentSelectedFilters[filterType]?.length || 0})
                              </span>
                            )}
                          </h4>
                          
                          {/* 개별 필터에 스크롤 적용 */}
                          <div className="max-h-32 overflow-y-auto">
                            <div className="grid grid-cols-2 gap-2">
                              {options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={(currentSelectedFilters[filterType] || []).includes(option)}
                                    onChange={() => toggleFilter(filterType, option)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="text-sm text-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 용도 필터 다음에 슬라이더 삽입 */}
                        {isUsageFilter && (
                          <>
                            {/* 용량 슬라이더 */}
                            <div className="border-b border-gray-100 pb-4">
                              <h4 className="font-medium text-gray-900 mb-3">용량</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between text-sm text-gray-600">
                                  <span>{currentSelectedFilters.capacity?.[0] || 0}ml</span>
                                  <span>{currentSelectedFilters.capacity?.[1] || 1000}ml</span>
                                </div>
                                <div className="relative">
                                  <div 
                                    className="absolute h-2 bg-blue-500 rounded"
                                    style={{
                                      left: `${((currentSelectedFilters.capacity?.[0] || 0) / 1000) * 100}%`,
                                      width: `${(((currentSelectedFilters.capacity?.[1] || 1000) - (currentSelectedFilters.capacity?.[0] || 0)) / 1000) * 100}%`,
                                      zIndex: 1
                                    }}
                                  />
                                  <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="10"
                                    value={currentSelectedFilters.capacity?.[0] || 0}
                                    onChange={(e) => {
                                      const newMin = parseInt(e.target.value);
                                      const currentMax = currentSelectedFilters.capacity?.[1] || 1000;
                                      updateSliderFilter('capacity', [newMin, Math.max(newMin, currentMax)]);
                                    }}
                                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb-blue"
                                    style={{ zIndex: 3 }}
                                  />
                                  <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="10"
                                    value={currentSelectedFilters.capacity?.[1] || 1000}
                                    onChange={(e) => {
                                      const newMax = parseInt(e.target.value);
                                      const currentMin = currentSelectedFilters.capacity?.[0] || 0;
                                      updateSliderFilter('capacity', [Math.min(currentMin, newMax), newMax]);
                                    }}
                                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb-red"
                                    style={{ zIndex: 4 }}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* 넥파이 슬라이더 */}
                            <div className="border-b border-gray-100 pb-4">
                              <h4 className="font-medium text-gray-900 mb-3">넥파이</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between text-sm text-gray-600">
                                  <span>{currentSelectedFilters.neckSize?.[0] || 0}Ø</span>
                                  <span>{currentSelectedFilters.neckSize?.[1] || 100}Ø</span>
                                </div>
                                <div className="relative">
                                  <div 
                                    className="absolute h-2 bg-blue-500 rounded"
                                    style={{
                                      left: `${((currentSelectedFilters.neckSize?.[0] || 0) / 100) * 100}%`,
                                      width: `${(((currentSelectedFilters.neckSize?.[1] || 100) - (currentSelectedFilters.neckSize?.[0] || 0)) / 100) * 100}%`,
                                      zIndex: 1
                                    }}
                                  />
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={currentSelectedFilters.neckSize?.[0] || 0}
                                    onChange={(e) => {
                                      const newMin = parseInt(e.target.value);
                                      const currentMax = currentSelectedFilters.neckSize?.[1] || 100;
                                      updateSliderFilter('neckSize', [newMin, Math.max(newMin, currentMax)]);
                                    }}
                                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb-blue"
                                    style={{ zIndex: 3 }}
                                  />
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={currentSelectedFilters.neckSize?.[1] || 100}
                                    onChange={(e) => {
                                      const newMax = parseInt(e.target.value);
                                      const currentMin = currentSelectedFilters.neckSize?.[0] || 0;
                                      updateSliderFilter('neckSize', [Math.min(currentMin, newMax), newMax]);
                                    }}
                                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb-red"
                                    style={{ zIndex: 4 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 메인 콘텐츠 */}
          <div className="flex-1">
            {/* 필터 숨김 상태일 때 필터 보기 버튼 */}
            {!showFilters && (
              <div className="mb-6">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Filter size={16} />
                  필터 보기
                </button>
              </div>
            )}

            {/* 제품 검색 모드 */}
            {false ? (
              <div className="space-y-6">
                {/* 상단 필터 섹션 */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">필터</h3>
                  <div className="space-y-4">
                    {/* 크림 자동충전기 생산설비 */}
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">크림 자동충전기</h4>
                      <span className="text-sm text-gray-600">생산설비</span>
                    </div>
                    
                    {/* 크림/밤 제품분류 */}
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">크림/밤</h4>
                      <span className="text-sm text-gray-600">제품분류 &gt; 기초</span>
                    </div>
                  </div>
                </div>

                {/* 제품 목록 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">제품</h3>
                  <div className="space-y-3">
                    {searchedProducts.map(product => (
                      <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-gray-500">이미지</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {product.name.split(searchTerm).map((part, index, array) => (
                              <span key={index}>
                                {part}
                                {index < array.length - 1 && (
                                  <span className="text-blue-600 font-semibold">{searchTerm}</span>
                                )}
                              </span>
                            ))}
                          </h4>
                          <p className="text-sm text-gray-600">{product.manufacturer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* 기존 파트너 목록 */
              <>
                <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : showFilters ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3 lg:grid-cols-4'}`}>
                  {filteredPartners.map(partner => (
                    <div 
                      key={partner.id} 
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => {
                        setSelectedPartner(partner);
                        setShowDetailModal(true);
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600">{partner.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p><span className="font-medium">위치:</span> {partner.location}</p>
                        <p><span className="font-medium">전문분야:</span> {partner.specialty}</p>
                      </div>

                      {/* 탭별 업체 정보 */}
                      <div className="space-y-2 text-xs mb-4">
                        {activeTab === 'manufacturers' && (
                          <>
                            <div>
                              <span className="font-medium text-gray-700">제품 카테고리</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.productCategory?.map((category, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                    {category}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">제품 유형</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.productType?.map((type, index) => (
                                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">주요 생산 설비</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.equipment?.slice(0, 2).map((equip, index) => (
                                  <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                                    {equip}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">인증 현황</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.certifications?.map((cert, index) => (
                                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                        
                        {activeTab === 'containers' && (
                          <>
                            <div>
                              <span className="font-medium text-gray-700">제품 카테고리</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.usage?.map((usage, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                    {usage}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">제품 유형</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.product?.map((prod, index) => (
                                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                                    {prod}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">용량: </span>
                              <span className="text-gray-600">{partner.capacity}ml</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">넥파이: </span>
                              <span className="text-gray-600">{partner.neckSize}Ø</span>
                            </div>
                          </>
                        )}
                        
                        {activeTab === 'packaging' && (
                          <>
                            <div>
                              <span className="font-medium text-gray-700">제품 카테고리</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.product?.map((prod, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                    {prod}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">후가공</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.postProcessing?.map((process, index) => (
                                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                                    {process}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">재질</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.material?.map((mat, index) => (
                                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                    {mat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
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
              </>
            )}
          </div>
        </div>
            </>
          )}

        {/* 모바일에서만 파트너 목록 표시 */}
        {isMobile && (
          <div className="space-y-6">
            <div className={`grid gap-6 grid-cols-1`}>
              {filteredPartners.map(partner => (
                <div 
                  key={partner.id} 
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedPartner(partner);
                    setShowDetailModal(true);
                  }}
                >
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
        )}
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

              {/* 제조사 상세 정보 */}
              {activeTab === 'manufacturers' && (
                <>
                  {/* 제품 카테고리 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">제품 카테고리</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.productCategory?.map((category, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 생산 설비 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">생산 설비</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.equipment?.map((equip, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 인증 현황 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">인증 현황</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.certifications?.map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 제품 포트폴리오 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">제품 포트폴리오</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedPartner.products?.map((product, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">제품 이미지</span>
                          </div>
                          <h4 className="font-medium text-gray-900">{product}</h4>
                          <p className="text-sm text-gray-600 mt-1">고품질 화장품</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* 용기사 상세 정보 */}
              {activeTab === 'containers' && (
                <>
                  {/* 용도 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">용도</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.usage?.map((use, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 제품 유형 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">제품 유형</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.product?.map((prod, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 재질 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">재질</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.material?.map((mat, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 용량 및 넥사이즈 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">용량</h3>
                      <p className="text-2xl font-bold text-blue-600">{selectedPartner.capacity}ml</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">넥사이즈</h3>
                      <p className="text-2xl font-bold text-green-600">{selectedPartner.neckSize}mm</p>
                    </div>
                  </div>
                </>
              )}

              {/* 패키지사 상세 정보 */}
              {activeTab === 'packaging' && (
                <>
                  {/* 제품 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">제품</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.product?.map((prod, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 후가공 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">후가공</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.postProcessing?.map((process, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 재질 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">재질</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.material?.map((mat, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* 회사 소개 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">회사 소개</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPartner.name}은(는) {selectedPartner.specialty} 분야의 전문 업체로, 
                    고품질의 제품과 서비스를 제공하고 있습니다. 
                    {selectedPartner.projects} 이상의 프로젝트를 성공적으로 완료하며 
                    업계에서 신뢰받는 파트너로 자리잡고 있습니다.
                  </p>
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

