// Les éléments « .reveler » apparaissent quand ils entrent à l'écran (pages Studio AUXO et projets)
const aReveler = document.querySelectorAll('.reveler');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver(
    (entrees) =>
      entrees.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vu');
          obs.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  aReveler.forEach((el) => obs.observe(el));
} else aReveler.forEach((el) => el.classList.add('vu'));
