# BrandPack Platform - 설치 및 실행 가이드

## 📋 시스템 요구사항
- Node.js 18.0 이상
- npm 또는 yarn 패키지 매니저
- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)

## 🚀 설치 및 실행 방법

### 1. 압축 파일 압축 해제
```bash
# Windows (PowerShell 또는 CMD)
tar -xzf brandpack-platform.tar.gz

# macOS/Linux
tar -xzf brandpack-platform.tar.gz
```

### 2. 프로젝트 폴더로 이동
```bash
cd brandpack-platform
```

### 3. 의존성 패키지 설치
```bash
npm install
```

### 4. 개발 서버 실행
```bash
npm run dev
```

### 5. 브라우저에서 확인
- 터미널에 표시된 주소로 접속 (보통 http://localhost:5173 또는 http://localhost:5174)
- 또는 브라우저에서 직접 http://localhost:5173 입력

## 🎯 주요 기능 테스트 방법

### 파트너 페이지 테스트
1. 상단 메뉴에서 "파트너" 클릭
2. 제조사(30개), 용기사(20개), 패키지사(20개) 탭 전환 테스트
3. 검색창에 "크림" 입력하여 제품 검색 기능 테스트
4. 업체 카드 클릭하여 상세화면 모달 테스트
5. 왼쪽 필터 사이드바로 필터링 기능 테스트

### 검색 기능 테스트
- **업체명 검색**: "코스맥스", "한국콜마" 등
- **제품명 검색**: "크림", "세럼", "립스틱" 등
- **전문분야 검색**: "스킨케어", "메이크업" 등

### 필터 기능 테스트
- **제조사**: 제품 카테고리, 생산 설비, 인증 현황
- **용기사**: 용도, 제품 유형, 재질, 용량, 넥사이즈
- **패키지사**: 제품, 후가공, 재질

## 🛠️ 문제 해결

### Node.js가 설치되지 않은 경우
1. https://nodejs.org 에서 LTS 버전 다운로드
2. 설치 후 터미널에서 `node --version` 으로 확인

### 포트 충돌 시
```bash
# 다른 포트로 실행
npm run dev -- --port 3000
```

### 의존성 설치 오류 시
```bash
# 캐시 정리 후 재설치
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📱 반응형 테스트
- 브라우저 개발자 도구(F12)에서 모바일 뷰 테스트
- 다양한 화면 크기에서 레이아웃 확인

## 🎨 주요 구현 기능
- ✅ 통합된 탭 + 검색창 + 지역 필터 레이아웃
- ✅ 제품명으로 제조사 검색 기능
- ✅ 업체 카드 클릭 시 상세화면 모달
- ✅ 반투명 배경 + 블러 효과
- ✅ 인기검색어 드롭다운
- ✅ 완전한 필터링 시스템
- ✅ 70개 업체 데이터 (제조사 30개, 용기사 20개, 패키지사 20개)

## 📞 지원
문제가 발생하면 개발자에게 문의하세요.

---
**개발 완료일**: 2025년 6월 22일
**기술 스택**: React + Vite + Tailwind CSS + Lucide Icons

