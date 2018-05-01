export class Store {
  constructor(firebase) {
    this.messageRef = firebase.database().ref('messages');
  }

  clearAll() {
    this.messageRef.remove();
  }

  messager() {
    return this.messageRef;
  }

  send(message) {
    this.messageRef.push().set({ message });
  }
}