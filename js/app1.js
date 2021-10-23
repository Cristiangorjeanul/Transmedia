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
  const slideTimer = 2937;

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

  // Time bottom line
  var today = new Date();
  document.getElementById('time').innerHTML = today;

  //Clock 
  function showTime() {

    'use strict';

    var now = new Date(),

      hours = now.getHours(),

      minutes = now.getMinutes(),

      seconds = now.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById('clock').textContent = hours + " : " + minutes;

  }

  window.onload = function () {

    'use strict';

    setInterval(showTime, 500);

  };

  //Relaxation area
  //Click on all the numbers game
  //Timer initialization
  var timer = 0
  document.getElementById('timer').innerHTML = '0' + 0 + ':' + 0 + 0
  //Count numbers from 1 to 50 in ascending order
  var now = 1
  document.getElementById('next').innerHTML = now

  document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }

  let changeValue = newValue => {
    now = newValue;

    if (now < 51) {
      document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }
    }

    if (now == 2)
      timer = new Date().getTime()

    if (now == 51) {
      timer = 0
      now = ' '
      document.getElementById('next').innerHTML = now
      document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }
      document.getElementById(String(50)).onclick = null
    }

    if (now > 1)
      document.getElementById(String(now - 1)).onclick = null
  }

  //Timer settings
  var interval = setInterval(function () {
    if (timer == 0) return;
    var temp = new Date(new Date().getTime() - timer);

    minutes = temp.getMinutes(),

      seconds = temp.getSeconds();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById('timer').innerHTML = minutes + ':' +
      seconds;
  }, 1000);

  //Reset game button
  function resetGame() {
    now = 1
    document.getElementById('next').innerHTML = now
    document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }

    timer = 0
    document.getElementById('timer').innerHTML = '0' + 0 + ':' + 0 + 0

  }
  document.getElementById("resetGame").addEventListener("click", resetGame);


  //Balloons game
  const balloons = document.querySelectorAll('.balloon');
  const scoreBoard = document.querySelector('.score');
  const newGame = document.querySelector('#newGame');
  const blackBalloon = document.querySelectorAll('.blackBalloon');
  let lastBalloon;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomBalloon(balloons) {
    const idx = Math.floor(Math.random() * balloons.length);
    const balloon = balloons[idx];
    if (balloon === lastBalloon) {
      return randomBalloon(balloons);
    }
    lastBalloon = balloon;
    return balloon;
  }

  function flyingBalloon() {
    const time = randomTime(500, 1000);
    const balloon = randomBalloon(balloons);
    balloon.classList.add('up');
    setTimeout(() => {
      balloon.classList.remove('up');
      if (!timeUp) flyingBalloon();
    }, time);
  }

  function start() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    flyingBalloon();
    newGame.style.display = 'none';
    setTimeout(() => {
      timeUp = true;
      newGame.style.display = 'block';

    }, 18000)
  }

  document.getElementById("newGame").addEventListener("click", start);

  function clickedBalloon(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function hideBalloon(e) {
    if (!e.isTrusted) return;
    this.style.display = 'none';
    setTimeout(() => {
      this.style.display = 'block';
    }, 1000)

  }

  blackBalloon.forEach(mole => mole.addEventListener('click', clickedBalloon));
  blackBalloon.forEach(mole => mole.addEventListener('click', hideBalloon));



});