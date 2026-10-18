/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SLIDES_DATA } from './data/slidesContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ModuleDrawer } from './components/ModuleDrawer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { SlideContent } from './components/SlideContent';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSpeakerNotesOpen, setIsSpeakerNotesOpen] = useState(false);

  // 2-Hour Timer state (7200 seconds)
  const [remainingSeconds, setRemainingSeconds] = useState(7200);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // 2H Countdown interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (remainingSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, remainingSeconds]);

  const handleNext = () => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleGoToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      setCurrentSlideIndex(index);
    }
  };

  const handleToggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setRemainingSeconds(7200);
  };

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setIsSpeakerNotesOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullScreen();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsDrawerOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="h-screen w-screen flex flex-col select-none bg-[#f4f8fb] text-slate-900 overflow-hidden font-sans">
      {/* Top Header */}
      <Header
        currentSlide={currentSlide}
        totalSlides={SLIDES_DATA.length}
        remainingSeconds={remainingSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        onResetTimer={handleResetTimer}
        onToggleDrawer={() => setIsDrawerOpen(true)}
        onToggleSpeakerNotes={() => setIsSpeakerNotesOpen((prev) => !prev)}
        onToggleFullScreen={handleToggleFullScreen}
      />

      {/* Main Viewport */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center p-3 sm:p-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/60 via-[#f4f8fb] to-emerald-50/40">
        <div className="w-full h-full max-w-7xl glass-panel rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden">
          <SlideContent slideId={currentSlide.id} onGoToSlide={handleGoToSlide} />
        </div>
      </main>

      {/* Bottom Navigation & Progress */}
      <Footer
        currentIndex={currentSlideIndex}
        totalSlides={SLIDES_DATA.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Drawer */}
      <ModuleDrawer
        isOpen={isDrawerOpen}
        slides={SLIDES_DATA}
        currentIndex={currentSlideIndex}
        onSelectSlide={handleGoToSlide}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isSpeakerNotesOpen}
        slide={currentSlide}
        onClose={() => setIsSpeakerNotesOpen(false)}
      />
    </div>
  );
}
