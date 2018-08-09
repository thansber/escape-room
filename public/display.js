export class Display {
  constructor(output) {
    this.output = output;
  }

  clearOutput() {
    this.output.innerHTML = '';
  }

  hideMessage() {
    Rx.Observable.of(this.output.classList.add('hiding'))
      .delay(3000)
      .do(() => this.clearOutput())
      .subscribe();
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
    this.output.appendChild(elem);
    return elem;
  }

  showMessage(msg) {
    const elems = msg.split('').map(ch => this.letterElement(ch));

    Rx.Observable.interval(100)
      .map(i => elems[i])
      .do(elem => elem.classList.add('showing'))
      .take(msg.length)
      .subscribe();
  }
}

