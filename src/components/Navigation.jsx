import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/', description: '메인 페이지' },
    { name: '파트너', path: '/partners', description: '파트너 찾기' },
    { name: '용기', path: '/containers', description: '용기 및 패키징' },
    { name: '콘셉트', path: '/concepts', description: '브랜드 콘셉트' },
    { name: '프로젝트', path: '/projects', description: '프로젝트 관리' },
    { name: '글로벌 비즈니스', path: '/global-business', description: '해외 진출' },
    { name: 'AI 어시스턴트', path: '/ai-assistant', description: 'AI 상담 서비스' },
    { name: '포트폴리오', path: '/portfolio', description: '성공 사례' },
    { name: '콘텐츠', path: '/content', description: '업계 인사이트' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-stone-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BP</span>
            </div>
            <span className="text-xl font-bold text-gray-800">BrandPack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-gray-600 to-stone-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">계정</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    로그인
                  </Link>
                  <Link
                    to="/login?tab=signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    회원가입
                  </Link>
                  {/* 로그인 상태일 때만 표시 */}
                  {false && ( // 현재는 비로그인 상태로 가정
                    <>
                      <div className="border-t border-gray-200 my-2"></div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        마이페이지
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        설정
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-gray-600 to-stone-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                  </div>
                </Link>
              ))}
              
              <div className="border-t border-gray-200 mt-4 pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  로그인 / 회원가입
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;

