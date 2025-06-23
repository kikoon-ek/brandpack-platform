import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import ContainerCatalogPage from './pages/ContainerCatalogPage';
import ConceptViewPage from './pages/ConceptViewPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import ProjectPage from './pages/ProjectPage';
import GlobalBusinessPage from './pages/GlobalBusinessPage';
import AIRecommendationPage from './pages/AIRecommendationPage';
import AIChatPage from './pages/AIChatPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import ContentPage from './pages/ContentPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/containers" element={<ContainerCatalogPage />} />
          <Route path="/concepts" element={<ConceptViewPage />} />
          <Route path="/concepts/:id" element={<ConceptDetailPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/global-business" element={<GlobalBusinessPage />} />
          <Route path="/ai-assistant" element={<AIRecommendationPage />} />
          <Route path="/ai-chat" element={<AIChatPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;

