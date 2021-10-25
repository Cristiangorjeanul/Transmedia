document.addEventListener('DOMContentLoaded', function () {

  //Menu toggle burger button
  let menuButton = document.getElementById('burger-menu');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('fa-bars');
    menuButton.classList.toggle('fa-times');
  });

  //Header Slide show
  const photos = document.querySelectorAll(".my-website-screen-shoot");
  let currentSlide = 0;
  const slideTimer = 3500;

  const changeSlides = () => {
    photos.forEach((photo) => photo.style.opacity = 0)

    if (currentSlide !== photos.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    photos[currentSlide].style.opacity = 1;
  };
  setInterval(changeSlides, slideTimer);

  //Greetings
  var date = new Date();
  var hour = date.getHours();
  var initialGreeting;
  var finalGreeting;

  if (hour < 5) {
    initialGreeting = "Hello!";
    finalGreeting = "Good night!";
  }
  if (hour < 10) {
    initialGreeting = "Good morning!";
    finalGreeting = "Have a nice morning!";
  }
  else if (hour < 18) {
    initialGreeting = 'Good afternoon!';
    finalGreeting = "Have a nice afternoon!";
  }
  else if (hour < 24) {
    initialGreeting = "Good evening!";
    finalGreeting = "Have a nice evening!";
  }

  document.querySelector("#initial-greeting").innerHTML = "<br>" + initialGreeting + "<br>";
  document.querySelector("#final-greeting").innerHTML = "Bye!<br>" + finalGreeting + "<br>";

  //My apps message
  CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
  });

  //Button
  var button = document.querySelector('#buttonLike');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('#buttonLike span').innerText = counter;
    counter++;
  });

  //Experience timeline section
  const items = document.querySelectorAll('#timeline li');

  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () =>
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });

  // Events
  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);







});