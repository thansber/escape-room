export class WordSearch {
  constructor(puzzle) {
    this.puzzle = puzzle.querySelector('tbody');
    this.size = 14;
    this.buildRows();
  }

  buildColumns() {
    return this.looper().map(i => {
      const column = document.createElement('td');
      const input = document.createElement('input');
      input.maxLength = 1;
      column.appendChild(input);
      return column.outerHTML;
    });
  }

  buildRows() {
    this.looper().forEach(() => {
      const row = document.createElement('tr');
      row.innerHTML = this.buildColumns().join('');
      this.puzzle.appendChild(row);
    });
  }

  clear() {
    this.inputs().forEach(input => input.value = '');
  }

  configToInputs(config) {
    if (!config) {
      return;
    }
    const inputs = this.inputs();
    config.split('').forEach((letter, i) => inputs[i].value = letter !== ' ' ? letter : '');
  }

  inputs() {
    return Array.from(document.querySelectorAll('input')).filter(input => input.type === 'text');
  }

  inputsToConfig() {
    return this.inputs().map(input => input.value ? input.value : ' ').join('');
  }

  looper(num) {
    return Array.from(Array(this.size));
  }

  nextInput(e) {
    const column = e.target.parentNode;
    let nextColumn = column.nextSibling;
    if (!nextColumn) {
      nextColumn = column.parentNode.nextSibling.children[0];
    }
    nextColumn.children[0].focus();
  }

  populate() {
    this.inputs().forEach(input => {
      if (!input.value) {
        input.value = this.randomLetter();
      }
    });
  }

  randomLetter() {
    return String.fromCharCode(this.randomNumber(0, 25) + 65);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  states() {
    return [
      'Arkansas',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'New Hampshire',
      'New Jersey',
      'North Dakota',
      'Ohio',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'West Virginia'
    ];
  }

  statesLeft() {
    const used = this.usedStates();
    const leftover = this.states()
      .filter(state => used.indexOf(state) < 0)
      .map(s => s.replace(' ', ''));
    leftover.sort((a, b) => a.length - b.length);
    console.log(leftover.map(s => `${s} (${s.length})`));
  }

  usedStates() {
    return [
      'Alabama', // wonder R
      'Alaska', // wonder R
      'Arizona', // wonder R
      'California', // wonder D
      'Idaho', // wonder E
      'Kentucky', // wonder W
      'Massachusetts', // wonder N
      'Nebraska', // wonder E
      'Nevada', // wonder W
      'New Mexico', // wonder D
      'New York', // wonder W
      'North Carolina', // wonder R
      'Oklahoma', // wonder D
      'Oregon', // wonder R
      'Pennsylvania', // wonder N
      'Tennessee', // wonder N
      'Virginia', // wonder W
      'Washington', // wonder E
      'Wisconsin', // wonder D
      'Wyoming' // wonder E
    ];
  }

}