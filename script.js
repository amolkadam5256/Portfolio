
// progress bar js script 


document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 500); // Delay for animation effect
    });
});




// incriment project count in about page 


let counterValue = 0;

function startIncrement() {
    const counterElement = document.getElementById("counter");

    const interval = setInterval(() => {
        if (counterValue >= 30) {
            clearInterval(interval);
        } else {
            counterValue++;
            counterElement.textContent = counterValue;
        }
    }, 200); // Adjust this for faster/slower increments
}

// Start the increment as soon as the page loads
window.onload = startIncrement;



// Get the header element
const header = document.getElementById("stickyHeader");

// Get the offset position of the header
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove the sticky class when you leave the scroll position
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};




function myFunction(x) {
    x.classList.toggle("change");

    const navLinks = document.getElementById('navLinks');
    var container = document.getElementById('navLinks');
            if (container.style.display === 'flex') {
                container.style.display = 'none';
            } else {
                container.style.display = 'flex';
            }
  }



 // top scroll btn


 // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





document.querySelectorAll('.count').forEach(function(element) {
    const target = +element.getAttribute('data-target');
    let count = 0;
    const duration = 3000; // 3 seconds
    const stepTime = Math.abs(Math.floor(duration / target));
    
    const updateCount = setInterval(() => {
        count++;
        element.textContent = count;
        if (count === target) {
            clearInterval(updateCount);
        }
    }, stepTime);
});
