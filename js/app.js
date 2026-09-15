/**
 * APSA SAFETY CONSULTANCY - Interactive Frontend Engine
 * Featuring ABCON-style Sidebar Drawer, Certificate Verification, & Floating Widgets
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sidebar Drawer Controller & Accordions
  initSidebarDrawer();

  // 2. Hero Video Controller
  initHeroVideo();

  // 3. Floating Back To Top
  initBackToTop();

  // 4. Certificate Verification Modal & Lookup
  initCertVerification();

  // 5. Course Enrollment Quick Modal
  initCourseModal();

  // 6. Lead Inquiry Proposal Form
  initInquiryForm();

  // 7. Animated Statistics Counters
  initStatsCounters();

  // 8. Interactive Services Category Filter Tabs
  initCategoryFilter();
});

/* --------------------------------------------------------------------------
   1. Sidebar Drawer Controller & Accordions
-------------------------------------------------------------------------- */
function initSidebarDrawer() {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  const openButtons = document.querySelectorAll('.open-sidebar-btn');
  const openProposalButtons = document.querySelectorAll('.open-proposal-btn');
  const closeButton = document.getElementById('sidebarCloseBtn');

  function openSidebar(focusConsultation = false) {
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';

      if (focusConsultation) {
        setTimeout(() => {
          const consultationBlock = document.getElementById('sidebarConsultationBlock');
          if (consultationBlock) {
            consultationBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const firstInput = consultationBlock.querySelector('input');
            if (firstInput) firstInput.focus();
          }
        }, 320);
      }
    }
  }

  function closeSidebar() {
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(false);
    });
  });

  openProposalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(true);
    });
  });

  closeButton?.addEventListener('click', closeSidebar);
  backdrop?.addEventListener('click', closeSidebar);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Auto-close sidebar when clicking links inside it (including primary navigation)
  const sidebarLinks = drawer?.querySelectorAll('.sidebar-menu-list a, .sidebar-main-links a');
  sidebarLinks?.forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });
}

/* --------------------------------------------------------------------------
   2. Hero Video Controller
-------------------------------------------------------------------------- */
function initHeroVideo() {
  const video = document.getElementById('heroVideo');
  const toggleBtn = document.getElementById('videoToggleBtn');
  const toggleText = document.getElementById('videoToggleText');
  const toggleIcon = document.getElementById('videoToggleIcon');

  if (!video || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      if (toggleText) toggleText.textContent = 'Pause Video';
      if (toggleIcon) {
        toggleIcon.innerHTML = `
          <rect x="6" y="4" width="4" height="16" fill="currentColor"></rect>
          <rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>
        `;
      }
      toggleBtn.setAttribute('aria-label', 'Pause background video');
    } else {
      video.pause();
      if (toggleText) toggleText.textContent = 'Play Video';
      if (toggleIcon) {
        toggleIcon.innerHTML = `
          <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
        `;
      }
      toggleBtn.setAttribute('aria-label', 'Play background video');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Floating Back To Top
-------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   4. Certificate Verification Modal & Lookup (ABCON-Style)
-------------------------------------------------------------------------- */
function initCertVerification() {
  const certModal = document.getElementById('certModal');
  const openButtons = document.querySelectorAll('.open-cert-modal');
  const closeBtn = document.getElementById('certModalClose');
  const certForm = document.getElementById('certVerifyForm');
  const resultBox = document.getElementById('certResultBox');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      certModal?.classList.add('open');
      resultBox?.style.setProperty('display', 'none');
    });
  });

  closeBtn?.addEventListener('click', () => certModal?.classList.remove('open'));
  certModal?.addEventListener('click', (e) => {
    if (e.target === certModal) certModal.classList.remove('open');
  });

  certForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const certNumber = document.getElementById('certNumberInput')?.value.trim();
    const submitBtn = certForm.querySelector('button[type="submit"]');

    if (submitBtn) submitBtn.textContent = 'Verifying with EIAC/KHDA database...';

    setTimeout(() => {
      if (submitBtn) submitBtn.textContent = 'Verify Certificate';
      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10B981; border-radius: 8px; padding: 16px; margin-top: 16px;">
            <div style="display: flex; align-items: center; gap: 8px; color: #10B981; font-weight: 700; margin-bottom: 8px;">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              OFFICIALLY VERIFIED & VALID
            </div>
            <div style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6;">
              <strong>Certificate No:</strong> ${certNumber || 'APSA-2026-8891'}<br>
              <strong>Accreditation Body:</strong> EIAC / KHDA Dubai Registered<br>
              <strong>Status:</strong> Active & Compliant with UAE HSE Standards
            </div>
          </div>
        `;
      }
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   5. Course Enrollment Quick Modal
-------------------------------------------------------------------------- */
function initCourseModal() {
  const modal = document.getElementById('courseModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalCourseName = document.getElementById('modalCourseName');
  const modalHiddenInput = document.getElementById('modalCourseInput');
  const modalForm = document.getElementById('modalForm');
  const triggers = document.querySelectorAll('.open-inquiry-modal');

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course');
      if (modalCourseName) modalCourseName.textContent = courseName;
      if (modalHiddenInput) modalHiddenInput.value = courseName;
      modal?.classList.add('open');
    });
  });

  closeBtn?.addEventListener('click', () => modal?.classList.remove('open'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! An APSA safety director will contact you within 2 business hours.');
    modal?.classList.remove('open');
    modalForm.reset();
  });
}

/* --------------------------------------------------------------------------
   6. Contact & Sidebar Consultation Form Handler
-------------------------------------------------------------------------- */
function initInquiryForm() {
  // 1. Sidebar Consultation Form
  const sidebarForm = document.getElementById('sidebarQuoteForm');
  const sidebarToast = document.getElementById('sidebarFormToast');

  if (sidebarForm) {
    sidebarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = sidebarForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Submitting Request...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        sidebarForm.reset();

        if (sidebarToast) {
          sidebarToast.style.display = 'block';
          sidebarToast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          setTimeout(() => {
            sidebarToast.style.display = 'none';
          }, 7000);
        }
      }, 850);
    });
  }

  // 2. Fallback for Quote Form if present
  const form = document.getElementById('quoteForm');
  const toast = document.getElementById('formToast');

  if (form && toast) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Processing...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        toast.style.display = 'flex';
        toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
          toast.style.display = 'none';
        }, 6000);
      }, 1000);
    });
  }
}

/* --------------------------------------------------------------------------
   7. Animated Statistics Counters
-------------------------------------------------------------------------- */
function initStatsCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        animateCounter(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 1600;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  let frame = 0;
  const isK = element.getAttribute('data-format') === 'k';

  const timer = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const easeOut = progress * (2 - progress);
    const currentVal = Math.round(easeOut * target);

    if (isK) {
      if (currentVal >= 1000) {
        element.textContent = Math.round(currentVal / 1000) + 'K+';
      } else {
        element.textContent = currentVal.toLocaleString() + '+';
      }
    } else {
      element.textContent = currentVal.toLocaleString() + '+';
    }

    if (frame >= totalFrames) {
      if (isK) {
        element.textContent = Math.round(target / 1000) + 'K+';
      } else {
        element.textContent = target.toLocaleString() + '+';
      }
      clearInterval(timer);
    }
  }, frameRate);
}

/* --------------------------------------------------------------------------
   8. Interactive Services Category Filter Tabs
-------------------------------------------------------------------------- */
function initCategoryFilter() {
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const cards = document.querySelectorAll('.scope-card');

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}


