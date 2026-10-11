const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ----------------------------------
   Lucide icons
---------------------------------- */

if (window.lucide) {
  window.lucide.createIcons();
}


/* ----------------------------------
   Reveal on scroll
---------------------------------- */

const revealElements =
  document.querySelectorAll(".reveal");

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (prefersReducedMotion) {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

} else {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("visible");

            observerInstance
              .unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
      }
    );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

}


/* ----------------------------------
   Cursor glow
---------------------------------- */

const cursorGlow =
  document.querySelector(".cursor-glow");

const finePointer =
  window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;


if (
  cursorGlow &&
  finePointer &&
  !prefersReducedMotion
) {

  let mouseX = 0;
  let mouseY = 0;

  let glowX = 0;
  let glowY = 0;


  window.addEventListener(
    "pointermove",
    (event) => {

      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorGlow.style.opacity = "1";

    }
  );


  document.addEventListener(
    "mouseleave",
    () => {

      cursorGlow.style.opacity = "0";

    }
  );


  function animateGlow() {

    glowX +=
      (mouseX - glowX) * 0.12;

    glowY +=
      (mouseY - glowY) * 0.12;


    cursorGlow.style.left =
      `${glowX}px`;

    cursorGlow.style.top =
      `${glowY}px`;


    requestAnimationFrame(
      animateGlow
    );

  }


  animateGlow();

}


/* ----------------------------------
   Card spotlight
---------------------------------- */

const interactiveCards =
  document.querySelectorAll(
    ".interactive-card"
  );


interactiveCards.forEach((card) => {

  card.addEventListener(
    "pointermove",
    (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      card.style.setProperty(
        "--spot-x",
        `${x}px`
      );

      card.style.setProperty(
        "--spot-y",
        `${y}px`
      );

    }
  );

});


/* ----------------------------------
   Subtle 3D tilt
---------------------------------- */

if (
  finePointer &&
  !prefersReducedMotion
) {

  const tiltCards =
    document.querySelectorAll(
      ".tilt-card"
    );


  tiltCards.forEach((card) => {

    card.addEventListener(
      "pointermove",
      (event) => {

        const rect =
          card.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const centerX =
          rect.width / 2;


        const centerY =
          rect.height / 2;


        const rotateX =
          ((y - centerY) /
            centerY) *
          -2.5;


        const rotateY =
          ((x - centerX) /
            centerX) *
          2.5;


        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-4px)
        `;

      }
    );


    card.addEventListener(
      "pointerleave",
      () => {

        card.style.transform = `
          perspective(900px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0)
        `;

      }
    );

  });

}
