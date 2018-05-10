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

  inputs() {
    return Array.from(document.querySelectorAll('input'));
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
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ];
  }

}