/* =========================================================
   Shepherd — script.js
   Nav scroll state, mobile toggle, parallax, reveal-on-scroll
   ========================================================= */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----- Sticky nav opacity on scroll ----- */
  const nav = document.querySelector(".nav");
  const onScrollNav = () => {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScrollNav();

  /* ----- Mobile nav toggle ----- */
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close on link tap
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- Parallax ----- */
  // Applies translateY based on element's offset relative to viewport center.
  // Uses transform (GPU-accelerated) and requestAnimationFrame to stay smooth.
  const parallaxTargets = Array.from(
    document.querySelectorAll("[data-parallax]")
  );

  let ticking = false;
  const updateParallax = () => {
    const vh = window.innerHeight;
    parallaxTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // distance of element center from viewport center, normalized -1..1
      const center = rect.top + rect.height / 2 - vh / 2;
      const speed = parseFloat(el.dataset.parallax) || 0.25;
      const offset = -center * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
    ticking = false;
  };

  const onScroll = () => {
    onScrollNav();
    if (prefersReducedMotion || parallaxTargets.length === 0) return;
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateParallax, { passive: true });
  if (!prefersReducedMotion) updateParallax();

  /* ----- Reveal on scroll ----- */
  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ----- Mark active nav link based on current page ----- */
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === here || (here === "" && href === "index.html")) {
      a.classList.add("is-active");
    }
  });

  /* ----- Contact form (front-end only) ----- */
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector("[data-form-status]");
      const btn = form.querySelector("button[type=submit]");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Transmitting…";
      }
      setTimeout(() => {
        if (status) {
          status.textContent =
            "Signal received. A member of the Shepherd team will be in contact.";
          status.hidden = false;
        }
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Send Transmission";
        }
      }, 600);
    });
  }
})();
