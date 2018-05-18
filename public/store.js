export class Store {
  constructor(firebase) {
    this.db = firebase.database();
    this.messageRef = this.db.ref('messages');
  }

  clearAll() {
    this.messageRef.remove();
  }

  loadWordSearch(key) {
    if (!key) {
      return;
    }
    return this.db.ref(`wordSearch/${key}`).once('value')
      .then(snapshot => snapshot && snapshot.val());
  }

  messager() {
    return this.messageRef;
  }

  saveWordSearch(key, wordSearchConfig) {
    this.db.ref(`wordSearch/${key}`).set(wordSearchConfig);
  }

  send(message) {
    this.messageRef.push().set({ message });
  }
}