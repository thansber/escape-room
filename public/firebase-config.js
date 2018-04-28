export class FirebaseConfig {
  constructor() {
    const config = {
      apiKey: "AIzaSyDlGAhAMStkI8RsDN62RQBw6i34WuvDM_8",
      authDomain: "escape-room-communicator.firebaseapp.com",
      databaseURL: "https://escape-room-communicator.firebaseio.com",
      projectId: "escape-room-communicator",
      storageBucket: "",
      messagingSenderId: "977757545036"
    };
    firebase.initializeApp(config);
  }
}