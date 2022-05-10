// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
    input: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]')
};

refs.startBtn.disabled = true

const nowDate = new Date().getDate();

let finishTime = null;

let deltaTime = null;

let timerIntervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getDate() - nowDate < 0) {
          window.alert('Please choose a date in the future')
      } else { refs.startBtn.disabled = false };
     finishTime = selectedDates[0].getTime();  
    }
};

flatpickr(refs.input, options);


refs.startBtn.addEventListener('click', () => timerIntervalId = setInterval(setTimer, 1000));



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};

function setTimer() {
    const nowTime = new Date().getTime();
    deltaTime = finishTime - nowTime;
    if (deltaTime >= 0) {
        const days = convertMs(deltaTime).days;
        const hours = convertMs(deltaTime).hours;
        const minutes = convertMs(deltaTime).minutes;
        const seconds = convertMs(deltaTime).seconds;

        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
    }
}


