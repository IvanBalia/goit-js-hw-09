import Notiflix from 'notiflix';
import { createPromise } from './createPromise';


const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitBtn : document.querySelector('button[type="submit"]')
}

let firstDelay = null;
let stepDelay = null;
let amount = null;
let intervalId = 0;


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


refs.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let counter = 0;

    setTimeout(() => {
        
        intervalId = setInterval(() => {
            if (counter < amount) {
                counter += 1;
                console.log(counter);
                createPromise(counter, stepDelay * counter + firstDelay * 1).then(({ position, delay }) => {
                    Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
                })
                    .catch(({ position, delay }) => {
                        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
                    })
            }
        }, stepDelay)
    }
    ,firstDelay)
})