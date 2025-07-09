document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("goContact").addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("contact");
    const offset = 80; // Tinggi navbar tetap
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 200); // delay agar DOM benar-benar siap
    }
  }
});