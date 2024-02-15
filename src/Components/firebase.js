import {initializeApp} from 'firebase/app'

import {getAuth} from 'firebase/auth'


const firebaseConfig = {

    apiKey: "AIzaSyA-nNCwJkV8os6D9N9xM4RvAjOt8fr4Z8M",

    authDomain: "cinema-elx.firebaseapp.com",

    projectId: "cinema-elx",

    storageBucket: "cinema-elx.appspot.com",

    messagingSenderId: "955330446526",

    appId: "1:955330446526:web:7f618127b2abfdf7d30aef",

  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)