# BrandPack Platform - 화장품 브랜드 종합 플랫폼

## 📋 프로젝트 개요

BrandPack Platform은 화장품 브랜드를 위한 종합 비즈니스 플랫폼입니다. 파트너 관리, 용기 카탈로그, 콘셉트 개발, 프로젝트 관리, 글로벌 비즈니스, AI 어시스턴트, 포트폴리오, 콘텐츠 관리 등 화장품 브랜드 운영에 필요한 모든 기능을 제공합니다.

## 🌐 라이브 데모

**배포 URL**: https://oxyjchax.manus.space

### 📱 전체 페이지 목록
- [홈페이지](https://oxyjchax.manus.space/#/) - 메인 랜딩 페이지
- [파트너](https://oxyjchax.manus.space/#/partners) - 파트너사 관리
- [용기](https://oxyjchax.manus.space/#/containers) - 용기 카탈로그
- [콘셉트](https://oxyjchax.manus.space/#/concepts) - 콘셉트 개발
- [프로젝트](https://oxyjchax.manus.space/#/projects) - 프로젝트 관리
- [글로벌 비즈니스](https://oxyjchax.manus.space/#/global-business) - 해외 진출
- [AI 어시스턴트](https://oxyjchax.manus.space/#/ai-assistant) - AI 상담
- [포트폴리오](https://oxyjchax.manus.space/#/portfolio) - 성공 사례
- [콘텐츠](https://oxyjchax.manus.space/#/content) - 화장품 전문 콘텐츠
- [로그인](https://oxyjchax.manus.space/#/login) - 사용자 인증

## 🎯 주요 기능

### 1. 📄 홈페이지 (HomePage.jsx)
- **브랜드 소개**: BrandPack 플랫폼 개요
- **주요 서비스**: 핵심 기능 소개
- **CTA 버튼**: 각 서비스로의 빠른 접근

### 2. 🤝 파트너 페이지 (PartnersPage.jsx)
- **파트너사 목록**: 협력 업체 관리
- **파트너십 정보**: 협력 조건 및 혜택
- **신규 파트너 등록**: 파트너 신청 프로세스

### 3. 📦 용기 카탈로그 (ContainerCatalogPage.jsx)
- **용기 종류**: 다양한 화장품 용기 카탈로그
- **필터링**: 용량, 재질, 형태별 검색
- **상세 정보**: 용기 스펙 및 가격 정보

### 4. 💡 콘셉트 페이지 (ConceptViewPage.jsx)
- **콘셉트 갤러리**: 화장품 콘셉트 아이디어
- **트렌드 분석**: 최신 뷰티 트렌드
- **콘셉트 개발**: 맞춤형 콘셉트 제안

### 5. 🚀 프로젝트 페이지 (ProjectPage.jsx)
- **프로젝트 관리**: 진행 중인 프로젝트 현황
- **일정 관리**: 프로젝트 타임라인
- **팀 협업**: 프로젝트 팀원 관리

### 6. 🌍 글로벌 비즈니스 (GlobalBusinessPage.jsx)
- **해외 진출**: 글로벌 시장 진출 지원
- **수출 정보**: 국가별 규제 및 인증 정보
- **글로벌 파트너**: 해외 협력사 네트워크

### 7. 🤖 AI 어시스턴트 (NewAIAssistantPage.jsx)
- **전문가 선택**: 다양한 화장품 분야 전문가
- **실시간 채팅**: AI와의 대화형 상담
- **반응형 레이아웃**: PC 좌우 배치, 모바일 세로 배치
- **전문 분야**: 스킨케어, 메이크업, 성분 분석, 마케팅 등

### 8. 🏆 포트폴리오 (PortfolioPage.jsx)
- **성공 사례**: 완료된 프로젝트 쇼케이스
- **포트폴리오 갤러리**: 시각적 프로젝트 소개
- **클라이언트 후기**: 고객 만족도 및 리뷰

### 9. 📚 콘텐츠 페이지 (ContentPage.jsx) ⭐ **메인 기능**
- **화장품 전문 콘텐츠 20개** 제공
- **반응형 레이아웃**: PC 좌우 배치, 모바일 세로 배치
- **2열 그리드**: 한 줄에 2개씩 4:3 비율 카드
- **호버 효과**: 마우스 오버 시 설명 오버레이
- **필터링**: 카테고리별 콘텐츠 분류
- **접기/펼치기**: 검색, 카테고리, 정부지원사업 영역
- **정부지원사업**: 1줄에 3개 가로 배치

### 10. 🔐 로그인 페이지 (LoginPage.jsx)
- **사용자 인증**: 로그인/회원가입
- **보안**: 안전한 사용자 인증 시스템
- **권한 관리**: 사용자별 접근 권한

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM (Hash Router)
- **State Management**: React Hooks
- **UI Components**: Custom UI Component Library

## 📁 프로젝트 구조

```
brandpack-platform-updated/
├── public/
│   ├── images/
│   │   ├── cosmetics/          # 화장품 이미지 (120개, 34MB)
│   │   └── portfolio/          # 포트폴리오 이미지
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # 네비게이션 바
│   │   ├── ChatBot.jsx         # 채팅봇
│   │   ├── FloatingCTA.jsx     # 플로팅 CTA
│   │   └── ui/                 # UI 컴포넌트 라이브러리
│   ├── pages/
│   │   ├── HomePage.jsx        # 홈페이지
│   │   ├── PartnersPage.jsx    # 파트너 페이지
│   │   ├── ContainerCatalogPage.jsx  # 용기 카탈로그
│   │   ├── ConceptViewPage.jsx # 콘셉트 페이지
│   │   ├── ConceptDetailPage.jsx # 콘셉트 상세
│   │   ├── ProjectPage.jsx     # 프로젝트 페이지
│   │   ├── GlobalBusinessPage.jsx # 글로벌 비즈니스
│   │   ├── NewAIAssistantPage.jsx # AI 어시스턴트
│   │   ├── AIChatPage.jsx      # AI 채팅
│   │   ├── PortfolioPage.jsx   # 포트폴리오
│   │   ├── PortfolioDetailPage.jsx # 포트폴리오 상세
│   │   ├── ContentPage.jsx     # 콘텐츠 페이지 (메인)
│   │   └── LoginPage.jsx       # 로그인
│   ├── hooks/
│   │   └── use-mobile.js       # 모바일 감지 훅
│   ├── lib/
│   │   └── utils.js            # 유틸리티 함수
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   ├── main.jsx               # 엔트리 포인트
│   ├── App.css                # 글로벌 스타일
│   └── index.css              # Tailwind CSS
├── dist/                      # 빌드 결과물
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 콘텐츠 카테고리

### 📚 화장품 전문 콘텐츠 (20개)
- 📊 **트렌드 분석**: K-뷰티 글로벌 트렌드
- 📖 **실무 가이드**: 스킨케어 루틴, 사용법
- 💄 **메이크업 팁**: 컬러매칭, 아이섀도 활용
- 🧴 **스킨케어**: 안티에이징, 세럼 레이어링
- 🔬 **성분 분석**: 민감성 피부, 화장품 성분
- ⭐ **제품 리뷰**: 드럭스토어 명품, 제품 가이드
- 🌸 **계절별 팁**: 여름/겨울 케어법
- 🏠 **DIY 뷰티**: 홈케어 마스크 레시피

### 📝 샘플 콘텐츠 목록
1. **2024 K-뷰티 트렌드 완벽 가이드** - 트렌드 분석
2. **완벽한 스킨케어 루틴 10단계** - 실무 가이드
3. **립스틱 컬러 매칭 완벽 가이드** - 메이크업 팁
4. **민감성 피부를 위한 화장품 성분 분석** - 성분 분석
5. **아이섀도 팔레트 활용법 마스터** - 메이크업 팁
6. **여름철 무너지지 않는 베이스 메이크업** - 계절별 팁
7. **안티에이징 스킨케어 완벽 가이드** - 스킨케어
8. **블러셔 위치별 얼굴형 보정법** - 메이크업 팁
9. **드럭스토어 화장품 숨은 명품 찾기** - 제품 리뷰
10. **파운데이션 선택의 모든 것** - 제품 가이드
... (총 20개)

## 📱 반응형 디자인

### 🖥️ PC (1024px 이상)
- **네비게이션**: 상단 고정 메뉴
- **콘텐츠 페이지**: 좌측 필터 (260px) + 우측 콘텐츠
- **정부지원사업**: 1줄에 3개 배치
- **콘텐츠 카드**: 1줄에 2개 배치 (4:3 비율)
- **AI 어시스턴트**: 좌측 전문가 선택 + 우측 채팅

### 📱 모바일 (1024px 미만)
- **네비게이션**: 햄버거 메뉴
- **콘텐츠 페이지**: 세로 배치 (필터 → 지원사업 → 콘텐츠)
- **터치 최적화**: 버튼 크기 및 간격 조정
- **AI 어시스턴트**: 세로 배치 (전문가 → 채팅)

## 🚀 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/kikoon-ek/brandpack-platform.git
cd brandpack-platform

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📊 이미지 에셋

### 🖼️ 화장품 이미지 (120개, 34MB)
- **출처**: Pinterest, 화장품 전문 사이트
- **형식**: JPG, PNG
- **해상도**: 다양한 크기 (최대 4055x2381)
- **용도**: 콘텐츠 카드 썸네일

### 🏆 포트폴리오 이미지
- **프로젝트 사례**: 9개 포트폴리오 이미지
- **브랜드 쇼케이스**: 완료된 프로젝트 시각화

## 🎯 주요 개선사항

### ✨ 레이아웃 최적화
- **필터 영역**: 18% 축소 (320px → 260px)
- **콘텐츠 영역**: 확장으로 가독성 향상
- **반응형 그리드**: 2열/3열 자동 조정

### 🎨 호버 효과
- **기본 상태**: 이미지 표시
- **호버 시**: 검은 오버레이 + 설명 텍스트
- **부드러운 애니메이션**: CSS transition 활용

### 🔧 접기/펼치기 기능
- **검색 영역**: 토글 가능
- **카테고리 영역**: 토글 가능
- **정부지원사업**: 전체 영역 토글

### 💻 커스텀 CSS
Tailwind CSS의 반응형 클래스 대신 커스텀 CSS 사용:
```css
.content-layout {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .content-layout {
    flex-direction: row;
  }
}

.content-sidebar {
  width: 260px;
  flex-shrink: 0;
}

.content-main {
  flex: 1;
}
```

## 🔧 해결된 기술적 이슈

### 1. **Tailwind 반응형 문제**
- **문제**: `flex-col lg:flex-row` 클래스가 작동하지 않음
- **해결**: 커스텀 CSS 미디어 쿼리 사용

### 2. **이미지 표시 문제**
- **문제**: 호버 오버레이가 항상 표시됨
- **해결**: CSS 투명도 조건부 설정

### 3. **접기/펼치기 기능**
- **문제**: JavaScript 상태 관리 미작동
- **해결**: React useState와 조건부 렌더링 구현

### 4. **레이아웃 비율**
- **문제**: 필터 영역이 너무 넓음
- **해결**: 사용자 피드백 반영하여 18% 축소

## 📈 성능 최적화

- **이미지 최적화**: WebP 형식 지원
- **코드 분할**: React.lazy를 통한 동적 로딩
- **CSS 최적화**: Tailwind CSS 퍼지 설정
- **번들 크기**: Vite 빌드 최적화

## 🔐 보안 기능

- **사용자 인증**: 로그인/로그아웃 시스템
- **권한 관리**: 페이지별 접근 제어
- **데이터 보호**: 민감 정보 암호화

## 📞 문의 및 지원

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**마지막 업데이트**: 2024년 6월 23일  
**버전**: 2.0.0 (Cosmetics Platform)  
**개발환경**: React 18 + Vite + Tailwind CSS  
**배포**: https://oxyjchax.manus.space

