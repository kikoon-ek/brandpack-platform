import React from 'react';

const AIChatPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'blue', fontSize: '32px' }}>AI 채팅 페이지 테스트</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        이 페이지가 보인다면 React 컴포넌트가 정상적으로 로드되고 있습니다.
      </p>
      <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px',
          width: '300px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3>AI 전문가 선택</h3>
          <button style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px',
            marginTop: '10px'
          }}>
            화장품법 AI
          </button>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px',
          flex: 1,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3>채팅 영역</h3>
          <p>여기에 채팅 메시지가 표시됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;

