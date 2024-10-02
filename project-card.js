


// siide js 

// siide js 


const slideTransforms = ['translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)', 'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 'translate3d(-50%, -50%, 9rem)', 'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)'];

const slides = document.querySelectorAll('.slide-iteam');

slides.forEach((slide, index) => {
  const slideTransform = slideTransforms[index];

  slide.style.transform = slideTransform;
});

let debounceTimeOut;

const navigateTo = (bool) => {
    clearTimeout(debounceTimeOut);
    
    debounceTimeOut = setTimeout(() => {
      if (bool) {
            slideTransforms.unshift(slideTransforms.pop());
          } else {
            slideTransforms.push(slideTransforms.shift());
          }

        slides.forEach((slide, index) => {
          slide.style.transform = slideTransforms[index];
        });
    }, 500);
}

document.getElementById('prev-slide').addEventListener('click', () => navigateTo(false));
document.getElementById('nxt-slide').addEventListener('click', () => navigateTo(true));


//  project card




function mydots_1() {
  var x = document.getElementById("backside-1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function closebtns_1() {
  var x = document.getElementById("backside-1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; 
  }
}


function mydots_2() {
  var x = document.getElementById("backside-2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function closebtns_2() {
  var x = document.getElementById("backside-2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; 
  }
}


function mydots_3() {
  var x = document.getElementById("backside-3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function closebtns_3() {
  var x = document.getElementById("backside-3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; 
  }
}

