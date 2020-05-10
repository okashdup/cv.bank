function about() {
    document.querySelector('#about').style.display = 'block';
    document.querySelector('#resume').style.display = 'none';
    document.querySelector('#portfolio').style.display = 'none';
    document.querySelector('#news').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function resume() {
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#resume').style.display = 'block';
    document.querySelector('#portfolio').style.display = 'none';
    document.querySelector('#news').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function portfolio() {
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#resume').style.display = 'none';
    document.querySelector('#portfolio').style.display = 'block';
    document.querySelector('#news').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function news() {
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#resume').style.display = 'none';
    document.querySelector('#portfolio').style.display = 'none';
    document.querySelector('#news').style.display = 'block';
    document.querySelector('#contact').style.display = 'none';
}

function contact() {
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#resume').style.display = 'none';
    document.querySelector('#portfolio').style.display = 'none';
    document.querySelector('#news').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
}

document.querySelector('#about-btn').addEventListener('click', function () {
    about();
});

document.querySelector('#resume-btn').addEventListener('click', function () {
    resume();
});

document.querySelector('#portfolio-btn').addEventListener('click', function () {
    portfolio();
});

document.querySelector('#news-btn').addEventListener('click', function () {
    news();
});

document.querySelector('#contact-btn').addEventListener('click', function () {
    contact();
});

// Make the DIV element draggable:
var dragItem = document.querySelector("#item");
    var container = document.querySelector("#container");

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }