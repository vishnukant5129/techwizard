import { useState, useEffect } from 'react';
import IntroScreen from './sections/IntroScreen';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import ThemeSection from './sections/ThemeSection';
import StatsSection from './sections/StatsSection';
import EventsSection from './sections/EventsSection';
import MentorsSection from './sections/MentorsSection';
import Footer from './sections/Footer';
import StarBackground from './components/StarBackground';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Workshop from "./sections/workshop";
import Competition from './sections/Competition';
import Robotics from './eventSpecs/robotics/Robotics.jsx';
import Devfest from './eventSpecs/devfest/Devfest.jsx';
import Codefest from './eventSpecs/codefest/Codefest.jsx';
import Biofest from './eventSpecs/biofest/Biofest.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page, event = null) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scanline Overlay */}
      <div className="scanlines" />

      {/* Intro Screen */}
      {showIntro && <IntroScreen />}

      {/* Pages */}
      {!showIntro && (
        <>
          {currentPage === 'home' && (
            <>
              <StarBackground />
              <Navbar onNavigate={handleNavigate} />
              <main>
                <HeroSection onNavigate={handleNavigate} />
                <ThemeSection />
                {/* <StatsSection /> */}
                <EventsSection onNavigate={handleNavigate} />
                {/* <MentorsSection /> */}
                <Workshop />
                <Competition />
              </main>
              <Footer />
            </>
          )}
          {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
          {currentPage === 'register' && <RegisterPage onNavigate={handleNavigate} />}
          {currentPage === 'robotics' && <Robotics onNavigate={handleNavigate} />}
          {currentPage === 'devfest' && <Devfest onNavigate={handleNavigate} />}
          {currentPage === 'codefest' && <Codefest onNavigate={handleNavigate} />}
          {currentPage === 'biofest' && <Biofest onNavigate={handleNavigate} />}
        </>
      )}
    </div>
  );
}

export default App;

