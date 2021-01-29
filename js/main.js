var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  };
  
  if (text) {
    newElement.textContent = text;
  };
};

const elSteps = $$_('.step')
const elProgress = $_('.progress')
const elBtnPrev = $_('.btn-prev')
const elBtnNext = $_('.btn-next')

let currentProgress = 1

elBtnNext.addEventListener('click', () => {
  currentProgress++
  
  if(currentProgress > elSteps.length) {
    currentProgress = elSteps.length
  }

  update ()
})

elBtnPrev.addEventListener('click', () => {
  currentProgress--
  
  if(currentProgress < 1) {
    currentProgress = 1
  }
  
  update()
})

function update () {
  elSteps.forEach( (step, i) => {
    if (i < currentProgress) {
      step.classList.add('active')
    }
    else {
      step.classList.remove('active')
    }
  })

  stepCount = $$_('.active').length

  elProgress.style.width = ((stepCount - 1) / (elSteps.length - 1) * 100) + '%'
  console.log(((stepCount - 1) / (elSteps.length - 1) * 100) + '%')

  if(currentProgress === 1) {
    elBtnPrev.disabled = true
  } else if (currentProgress === elSteps.length) {
    elBtnNext.disabled = true
  } else {
    elBtnNext.disabled = false
    elBtnPrev.disabled = false
  }
  
}







