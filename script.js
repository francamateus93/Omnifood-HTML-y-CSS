// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});


// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Form data and Modal

// Get form
const form = document.querySelector('.cta-form');
const modal = document.getElementById('thank-you-modal');
const closeModal = document.querySelector('.close');
const signupButton = document.getElementById('signup-button');

// Colect data
const handleSignup = () => {

  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const source = document.getElementById('select-where').value;

  // console.log('Full Name:', fullName);
  // console.log('Email:', email);
  // console.log('Source:', source);

  // Open modal
  modal.style.display = 'block';
  form.reset();
};

signupButton.addEventListener('click', handleSignup);

// Closing modal
closeModal.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
}
