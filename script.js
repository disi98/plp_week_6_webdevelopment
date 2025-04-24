document.addEventListener('DOMContentLoaded', () => {
  // Mystery button click & double-click
  const mysteryBtn = document.getElementById('mystery-btn');
  mysteryBtn.addEventListener('click', () => {
    mysteryBtn.textContent = 'Secret Menu Unlocked!';
    mysteryBtn.style.backgroundColor = '#b58451';
  });
  mysteryBtn.addEventListener('dblclick', () => {
    alert('Enjoy 20% off on your next visit!');
  });

  // Slideshow setup
  const slides = [
    'https://images.pexels.com/photos/4148373/pexels-photo-4148373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  ];
  let slideIndex = 0;
  const slideImg = document.querySelector('.slideshow img');
  document.getElementById('prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
  });
  document.getElementById('next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
  });
  function showSlide() {
    slideImg.classList.remove('active');
    setTimeout(() => {
      slideImg.src = slides[slideIndex];
      slideImg.classList.add('active');
    }, 200);
  }
  showSlide();

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
    });
  });

  // Keypress detection
  const keyReveal = document.getElementById('key-reveal');
  document.addEventListener('keydown', (e) => {
    keyReveal.textContent = e.key;
    keyReveal.classList.add('fade');
    setTimeout(() => keyReveal.classList.remove('fade'), 500);
  });

  // Form validation and real-time feedback
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const formSuccess = document.getElementById('form-success');

  function validateName() {
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Name is required';
      return false;
    }
    nameError.textContent = '';
    return true;
  }
  function validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Email is required';
      return false;
    } else if (!re.test(emailInput.value)) {
      emailError.textContent = 'Invalid email format';
      return false;
    }
    emailError.textContent = '';
    return true;
  }
  function validatePassword() {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters';
      return false;
    }
    passwordError.textContent = '';
    return true;
  }

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = validateName() & validateEmail() & validatePassword();
    if (valid) {
      formSuccess.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    } else {
      formSuccess.textContent = '';
    }
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
});