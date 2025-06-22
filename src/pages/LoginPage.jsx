import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Phone, Building, ArrowRight, CheckCircle } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    company: '',
    companyType: 'brand'
  });

  // URL 파라미터 확인해서 회원가입 탭 자동 활성화
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'signup') {
      setIsLogin(false);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const companyTypes = [
    {
      id: 'manufacturer',
      name: '제조사',
      description: '화장품 제조 전문 기업',
      icon: '🏭',
      color: 'blue'
    },
    {
      id: 'container',
      name: '용기사',
      description: '화장품 용기 제조 및 공급',
      icon: '📦',
      color: 'green'
    },
    {
      id: 'packaging',
      name: '패키지사',
      description: '브랜드 및 패키지 디자인',
      icon: '🎨',
      color: 'purple'
    },
    {
      id: 'brand',
      name: '브랜드사',
      description: '화장품 브랜드 런칭',
      icon: '🏷️',
      color: 'orange'
    }
  ];

  const memberBenefits = [
    {
      type: '제조사',
      description: '화장품 제조 및 OEM/ODM 서비스를 제공하는 기업',
      icon: '🏭'
    },
    {
      type: '용기사',
      description: '화장품 용기, 포장재 제조 및 공급 전문 기업',
      icon: '📦'
    },
    {
      type: '패키지사',
      description: '브랜드 디자인, 패키지 디자인 전문 기업',
      icon: '🎨'
    },
    {
      type: '브랜드사',
      description: '화장품 브랜드 기획, 런칭, 유통을 하는 기업',
      icon: '🏷️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex pt-16">
      {/* Left Side - Login/Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                  isLogin 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                로그인
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                회원가입
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? '로그인' : '회원가입'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'BrandPack에 오신 것을 환영합니다' 
                  : 'BrandPack과 함께 브랜드를 시작하세요'
                }
              </p>
            </div>

            {/* Company Type Selection (회원가입 시에만) */}
            {!isLogin && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  회원 유형 선택 *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {companyTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        formData.companyType === type.id
                          ? 'border-gray-500 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="companyType"
                        value={type.id}
                        checked={formData.companyType === type.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          type.color === 'blue' ? 'bg-blue-100' :
                          type.color === 'green' ? 'bg-green-100' :
                          type.color === 'purple' ? 'bg-purple-100' :
                          'bg-orange-100'
                        }`}>
                          <span className="text-lg">{type.icon}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{type.name}</div>
                          <div className="text-xs text-gray-500">{type.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Social Login */}
            <div className="mb-8">
              <p className="text-center text-sm text-gray-600 mb-4">
                {isLogin ? '간편 로그인' : '간편 로그인'}
              </p>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center px-4 py-3 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors">
                  <span className="text-sm font-medium">카카오톡</span>
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <span className="text-sm font-medium">네이버</span>
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-medium">구글</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">또는</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (회원가입 시에만) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호 확인
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="비밀번호를 다시 입력하세요"
                      required={!isLogin}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Additional Fields for Signup */}
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="회사명"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        담당자명
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="담당자명"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="연락처"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Remember Me / Forgot Password (로그인 시에만) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      로그인 상태 유지
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    비밀번호 찾기
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-gray-600 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                {isLogin ? '로그인' : '회원가입'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>

            {/* Terms (회원가입 시에만) */}
            {!isLogin && (
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  회원가입 시 이용약관 및 개인정보처리방침에 동의하는 것으로 간주됩니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-600 to-stone-700 items-center justify-center p-8">
        <div className="text-white max-w-md">
          <h2 className="text-3xl font-bold mb-8">
            {isLogin ? 'BrandPack과 함께하세요' : '회원 유형별 혜택'}
          </h2>
          
          {isLogin ? (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">원스톱 브랜드 런칭</h3>
                  <p className="text-gray-300">
                    콘셉트부터 제조, 유통까지 모든 과정을 한 곳에서
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI 상담 서비스</h3>
                  <p className="text-gray-300">
                    24시간 전문 AI가 브랜드 런칭을 도와드립니다
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">검증된 파트너 네트워크</h3>
                  <p className="text-gray-300">
                    200+ 검증된 제조사와 직접 연결
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.type}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <div className="text-4xl font-bold mb-2">1,247+</div>
            <div className="text-gray-300">성공적인 브랜드 런칭</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

