/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesContent';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ModuleDrawer } from './components/ModuleDrawer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { SlideContent } from './components/SlideContent';
import { FocusCardModal } from './components/FocusCardModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSpeakerNotesOpen, setIsSpeakerNotesOpen] = useState(false);

  // 2-Hour Timer state (7200 seconds)
  const [remainingSeconds, setRemainingSeconds] = useState(7200);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Fullscreen Card Focus Modal State
  const [focusModal, setFocusModal] = useState<{
    isOpen: boolean;
    cardIndex: number;
    cardsHtml: string[];
  }>({
    isOpen: false,
    cardIndex: 0,
    cardsHtml: []
  });

  const slideViewportRef = useRef<HTMLDivElement>(null);
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

  // Close focus modal when slide changes
  useEffect(() => {
    setFocusModal((prev) => ({ ...prev, isOpen: false }));
  }, [currentSlideIndex]);

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

  // Card Focus Click Handler on the slide viewport
  const handleViewportClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // Do not trigger card focus if user clicked an interactive control (buttons, links, inputs)
    if (target.closest('button') || target.closest('a') || target.closest('input')) {
      return;
    }

    const clickedCard = target.closest('.glass-card, .hydra-brand-card, [data-card]') as HTMLElement | null;
    if (!clickedCard || !slideViewportRef.current) return;

    // Collect all cards on the active slide
    const allCards = Array.from(
      slideViewportRef.current.querySelectorAll('.glass-card, .hydra-brand-card, [data-card]')
    ) as HTMLElement[];

    if (allCards.length === 0) return;

    const clickedIndex = allCards.indexOf(clickedCard);
    const validIndex = clickedIndex >= 0 ? clickedIndex : 0;
    const cardsHtml = allCards.map((c) => c.innerHTML);

    setFocusModal({
      isOpen: true,
      cardIndex: validIndex,
      cardsHtml
    });
  };

  const handleNextCard = () => {
    setFocusModal((prev) => {
      if (prev.cardsHtml.length <= 1) return prev;
      const nextIdx = (prev.cardIndex + 1) % prev.cardsHtml.length;
      return { ...prev, cardIndex: nextIdx };
    });
  };

  const handlePrevCard = () => {
    setFocusModal((prev) => {
      if (prev.cardsHtml.length <= 1) return prev;
      const prevIdx =
        prev.cardIndex === 0 ? prev.cardsHtml.length - 1 : prev.cardIndex - 1;
      return { ...prev, cardIndex: prevIdx };
    });
  };

  const handleCloseFocusModal = () => {
    setFocusModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Global Keyboard navigation (when focus modal is NOT open)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If focus card modal is open, let FocusCardModal handle Escape and Left/Right
      if (focusModal.isOpen) return;

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
  }, [currentSlideIndex, focusModal.isOpen]);

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

      {/* Main Viewport with Card Click-to-Focus delegation */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center p-3 sm:p-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/60 via-[#f4f8fb] to-emerald-50/40">
        <div
          ref={slideViewportRef}
          onClick={handleViewportClick}
          className="w-full h-full max-w-7xl glass-panel rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden"
        >
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

      {/* Fullscreen Focus Card Modal */}
      <FocusCardModal
        isOpen={focusModal.isOpen}
        cardHtml={focusModal.cardsHtml[focusModal.cardIndex] || ''}
        cardIndex={focusModal.cardIndex}
        totalCards={focusModal.cardsHtml.length}
        slideTitle={currentSlide.title}
        moduleName={currentSlide.module}
        onNextCard={handleNextCard}
        onPrevCard={handlePrevCard}
        onClose={handleCloseFocusModal}
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
