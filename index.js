const navToggle = document.getElementById('navToggle');
  const tabs = document.getElementById('tabs');
  navToggle.addEventListener('click', () => {
    const open = tabs.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  tabs.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => tabs.classList.remove('open')));

  const sections = ['home','about','skills','projects','resume','testimonials','services'].map(id => document.getElementById(id));
  const tabEls = document.querySelectorAll('.tab');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        tabEls.forEach(t => t.classList.toggle('active', t.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => s && spy.observe(s));

  const revealEls = document.querySelectorAll('.reveal:not(.in)');
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => reveal.observe(el));
