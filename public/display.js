export class Display {
  constructor(output) {
    this.output = output;
  }

  buildMessage(msg) {
    return msg.split('').map(ch => this.letterElement(ch));
  }

  clearOutput() {
    console.log('clearing');
    this.output.innerHTML = '';
  }

  hideMessage() {
    return Rx.Observable.of(this.output.classList.add('hiding'))
      .delay(2000)
      .do(() => this.clearOutput())
      .do(() => this.output.classList.remove('hiding'));
  }

  hideMessageNow() {
    this.hideMessage().subscribe();
  }

  letterElement(ch) {
    let elem;

    if (ch === '\n') {
      elem = document.createElement('br');
    } else {
      elem = document.createElement('span');
      elem.innerHTML = ch;
      if (ch === ' ') {
        elem.classList.add('space');
      }
    }
    console.log('adding message elem');
    this.output.appendChild(elem);
    return elem;
  }

  showMessage(msg) {
    this.hideMessage()
      .map(() => this.buildMessage(msg))
      .switchMap(elems =>
        Rx.Observable.interval(100)
        .map(i => elems[i])
        .do(elem => elem.classList.add('showing'))
        .take(msg.length)
      )
      .subscribe()
  }

  updateTimer(time, timer) {
    timer.innerHTML = `${time.format()}`
  }
}

