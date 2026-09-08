/**
 * Expense Analyzer Official Website Controller
 * Handles Preloader, Screenshot Carousel, Tab Switcher, FAQ Accordion, Mobile Nav
 */

// Hide preloader when fonts and page styles are fully rendered
function hidePreloader() {
  const preloader = document.getElementById('app-preloader');
  if (preloader && !preloader.classList.contains('loaded')) {
    preloader.classList.add('loaded');
  }
}

// Fast preloader dismissal
if ('fonts' in document) {
  Promise.all([
    document.fonts.ready,
    new Promise(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve);
    })
  ]).then(hidePreloader);
} else {
  if (document.readyState === 'complete') hidePreloader();
  else window.addEventListener('load', hidePreloader);
}

// Fallback safety timeout (400ms max) to ensure loader disappears fast
setTimeout(hidePreloader, 400);

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCarousel();
  initTabs();
  initFaqAccordion();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* App Screenshot Carousel */
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const slideCount = slides.length;
  let autoPlayTimer = null;

  // Generate Indicators
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('indicator');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      indicatorsContainer.appendChild(dot);
    });
  }

  const indicators = document.querySelectorAll('.indicator');

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    updateCarousel();
    resetAutoPlay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Touch & Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }

  // Auto-Play
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  const carouselSection = document.querySelector('.carousel-container');
  if (carouselSection) {
    carouselSection.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    carouselSection.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

/* Tab Switcher */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetElement = document.getElementById(targetTab);
      if (targetElement) {
        targetElement.classList.add('active');
      }
    });
  });
}

/* FAQ Accordion */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains('open');

      // Close other accordion items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}
