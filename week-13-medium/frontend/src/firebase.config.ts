// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcVwAIBV280hdmyMz5ZVKS8c3EOVgRy84',
  authDomain: 'test1-47eee.firebaseapp.com',
  projectId: 'test1-47eee',
  storageBucket: 'test1-47eee.appspot.com',
  messagingSenderId: '837545256705',
  appId: '1:837545256705:web:068b32bbf81824178ddd00',
  measurementId: 'G-PJG45HEEE8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export default storage
