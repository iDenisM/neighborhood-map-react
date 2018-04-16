import * as firebase from 'firebase'

const config = {
        apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_APP_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_APP_DATABSE,
        projectId: process.env.REACT_APP_FIREBASE_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_APP_SENDER_ID
      },
      base = firebase.initializeApp(config)

export { base }
