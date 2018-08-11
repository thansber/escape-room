export class Timer {

  constructor(elem) {
    this.paused = false;
    this.timerElem = elem;
    this.time = moment.duration(1, 'hour');
  }

  pauseToggle() {
    this.paused = !this.paused;
  }

  show() {
    this.timerElem.classList.toggle('shown');
  }

  start() {
    this.timerId = setInterval(() => {
      if (!this.paused) {
        this.time.subtract(1, 'second');
        this.update();
      }
    }, 1000);
  }

  update() {
    this.timerElem.innerHTML = `${this.time.format()}`
  }
}