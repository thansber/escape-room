export class Store {
  constructor(firebase) {
    this.db = firebase.database();
    this.commanderRef = this.db.ref('commands');
    this.messageRef = this.db.ref('messages');
  }

  clearAll() {
    this.commanderRef.remove();
    this.messageRef.remove();
  }

  command(command) {
    this.commander().push().set({ command })
  }

  commander() {
    return this.commanderRef;
  }

  loadWordSearch(key) {
    if (!key) {
      return Promise.resolve();
    }
    return this.db.ref(`wordSearch/${key}`).once('value')
      .then(snapshot => snapshot && snapshot.val());
  }

  messager() {
    return this.messageRef;
  }

  saveWordSearch(key, wordSearchConfig) {
    if (!key) {
      console.log('no key provided when saving word search');
      debugger;
    }
    this.db.ref(`wordSearch/${key}`).set(wordSearchConfig);
  }

  send(message) {
    this.messager().push().set({ message });
  }
}