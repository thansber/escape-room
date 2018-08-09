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
    return [];
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
      'Arkansas', // alice L
      'California', // wonder D
      'Colorado', // alice A
      'Connecticut', // alice A
      'Delaware', // land N
      'Florida', // alice E
      'Georgia', // alice C
      'Hawaii', // alice E
      'Idaho', // wonder E
      'Indiana', // wonder O
      'Illinois', // land D
      'Iowa', // land D
      'Kansas', // alice E
      'Kentucky', // wonder W
      'Louisiana', // alice L
      'Maine', // land A
      'Maryland', // land A
      'Massachusetts', // wonder N
      'Michigan', // wonder O
      'Minnesota', // alice C
      'Mississippi', // wonder O
      'Missouri', // land A
      'Montana', // alice C
      'Nebraska', // wonder E
      'Nevada', // wonder W
      'New Hampshire', // land N
      'New Jersey', // land D
      'New Mexico', // wonder D
      'New York', // wonder W
      'North Carolina', // wonder R
      'North Dakota', // wonder O
      'Oklahoma', // wonder D
      'Ohio', // land D
      'Oregon', // wonder R
      'Pennsylvania', // wonder N
      'Rhode Island', // alice A
      'South Carolina', // land D
      'South Dakota', // alice E
      'Tennessee', // wonder N
      'Texas', // land A
      'Utah', // land D
      'Vermont', // alice A
      'Virginia', // wonder W
      'Washington', // wonder E
      'West Virginia', // land N
      'Wisconsin', // wonder D
      'Wyoming' // wonder E
    ];
  }

}