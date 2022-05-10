import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitBtn : document.querySelector('button[type="submit"]')
}

let firstDelay = null;
let stepDelay = null;
let amount = null;
let stepInterval = null;


refs.delayInput.addEventListener('input', (event) => {
  event.preventDefault();
  firstDelay = event.currentTarget.value;
});

refs.stepInput.addEventListener('input', (event) => {
  event.preventDefault();
  stepDelay = event.currentTarget.value;
});

refs.amountInput.addEventListener('input', (event) => {
  event.preventDefault();
  amount = event.currentTarget.value;
});


refs.submitBtn.addEventListener('click',
  (event) => {
    event.preventDefault();
    const firstDelayTimer = setTimeout(() => {
      for (let i = 0; i < amount; i += 1) {
        const delay = firstDelay*1 + stepDelay * i;
        const position = i + 1;
        createPromise(position, delay)
      }
    },firstDelay)
}
);




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
   const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
   });
  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};


console.log(amount);
console.log(stepDelay);
console.log(firstDelay);

