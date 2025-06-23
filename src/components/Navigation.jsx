import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { name: '파트너', path: '/partners' },
    { name: '용기', path: '/containers' },
    { name: '콘셉트', path: '/concepts' },
    { name: '프로젝트', path: '/projects' },
    { name: '글로벌 비즈니스', path: '/global-business' },
    { name: 'AI 어시스턴트', path: '/ai-assistant' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '콘텐츠', path: '/content' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const styles = {
    nav: {
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      width: '100%'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      flex: '0 0 auto'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(to right, #4b5563, #57534e)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    centerSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1',
      gap: '4px',
      margin: '0 32px'
    },
    menuLink: {
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.3s',
      color: '#374151'
    },
    activeMenuLink: {
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.3s',
      backgroundColor: '#4b5563',
      color: 'white'
    },
    rightSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '16px',
      flex: '0 0 auto',
      minWidth: 'fit-content'
    },
    userButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      color: '#374151',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      position: 'relative'
    },
    mobileButton: {
      display: isMobile ? 'block' : 'none',
      padding: '8px',
      borderRadius: '8px',
      color: '#374151',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px'
    },
    dropdown: {
      position: 'absolute',
      right: 0,
      top: '100%',
      marginTop: '8px',
      width: '192px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      padding: '8px 0',
      zIndex: 50
    },
    dropdownLink: {
      display: 'block',
      padding: '8px 16px',
      fontSize: '14px',
      color: '#374151',
      textDecoration: 'none'
    },
    mobileMenu: {
      position: 'fixed',
      top: '64px',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 60,
      maxHeight: 'calc(100vh - 64px)',
      overflowY: 'auto'
    },
    mobileMenuItems: {
      padding: '24px 0'
    },
    mobileMenuItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px 24px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#374151',
      textDecoration: 'none',
      borderBottom: '1px solid #f3f4f6',
      gap: '12px'
    },
    activeMobileMenuItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px 24px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#2563eb',
      textDecoration: 'none',
      borderBottom: '1px solid #f3f4f6',
      backgroundColor: '#eff6ff',
      gap: '12px'
    },
    mobileFooter: {
      padding: '16px 24px',
      borderTop: '1px solid #e5e7eb'
    },
    mobileLoginButton: {
      display: 'block',
      width: '100%',
      padding: '12px',
      backgroundColor: '#6b7280',
      color: 'white',
      textAlign: 'center',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '500'
    },
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 40
    }
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          <div style={styles.header}>
            
            {/* 좌측: 브랜드 로고 */}
            <Link to="/" style={styles.logo}>
              <div style={styles.logoIcon}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>BP</span>
              </div>
              <span style={styles.logoText}>BrandPack</span>
            </Link>

            {/* 중앙: 메뉴들 (PC에서만) */}
            <div style={styles.centerSection}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={isActive(item.path) ? styles.activeMenuLink : styles.menuLink}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 우측: 계정 메뉴 (PC에서만) */}
            <div style={styles.rightSection}>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  style={styles.userButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontSize: '18px' }}>👤</span>
                  <span>계정</span>
                  <span style={{ fontSize: '12px' }}>▼</span>
                </button>

                {isUserMenuOpen && !isMobile && (
                  <div style={styles.dropdown}>
                    <Link
                      to="/login"
                      style={styles.dropdownLink}
                      onClick={() => setIsUserMenuOpen(false)}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      로그인
                    </Link>
                    <Link
                      to="/login?tab=signup"
                      style={styles.dropdownLink}
                      onClick={() => setIsUserMenuOpen(false)}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      회원가입
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* 모바일: 햄버거 버튼 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={styles.mobileButton}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - 상단에서 아래로 슬라이드 */}
      {isMobile && isOpen && (
        <div style={styles.mobileMenu}>
          {/* Menu Items */}
          <div style={styles.mobileMenuItems}>
            {navItems.map((item) => {
              const getIcon = (name) => {
                switch(name) {
                  case '파트너': return '👥';
                  case '용기': return '📦';
                  case '콘셉트': return '💡';
                  case '프로젝트': return '🚀';
                  case '글로벌 비즈니스': return '🌍';
                  case 'AI 어시스턴트': return '🤖';
                  case '포트폴리오': return '📁';
                  case '콘텐츠': return '📝';
                  default: return '📋';
                }
              };

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={isActive(item.path) ? styles.activeMobileMenuItem : styles.mobileMenuItem}
                >
                  <span style={{ fontSize: '20px' }}>{getIcon(item.name)}</span>
                  <div>
                    <div>{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>
                      {item.name === '파트너' && '제조공장 및 업체 찾기'}
                      {item.name === '용기' && '다양한 용기 카탈로그'}
                      {item.name === '콘셉트' && '완성된 브랜드 기획안'}
                      {item.name === '프로젝트' && '진행 중인 프로젝트'}
                      {item.name === '글로벌 비즈니스' && '해외 시장 진출'}
                      {item.name === 'AI 어시스턴트' && '24/7 전문 상담'}
                      {item.name === '포트폴리오' && '성공 사례 모음'}
                      {item.name === '콘텐츠' && '업계 소식 및 트렌드'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Footer */}
          <div style={styles.mobileFooter}>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              style={styles.mobileLoginButton}
            >
              로그인
            </Link>
          </div>
        </div>
      )}

      {/* Overlays */}
      {isUserMenuOpen && (
        <div
          style={styles.overlay}
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
      
      {isOpen && isMobile && (
        <div
          style={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

