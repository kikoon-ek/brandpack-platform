import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm"
      style={{ zIndex: 9999 }}
    >
      {/* 닫기 버튼 */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {/* 화살표 아이콘 */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* 메인 카피 */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          당신만의 브랜드,<br />
          이제 아이디어에서 제품까지 한 번에.
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          브랜드팩이 제형부터 용기, 브랜딩까지 직접 만들어드립니다.
        </p>
      </div>

      {/* CTA 버튼 */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Brand Pack 문의하기
      </button>

      {/* 장식 요소 */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default FloatingCTA;

