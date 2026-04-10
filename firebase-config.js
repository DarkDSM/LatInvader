// firebase-config.js
// REMPLACE PAR TES IDENTIFIANTS FIREBASE (depuis la console)
const firebaseConfig = {
  apiKey: "AIzaSyAF93x4QkcX2lnxx1048dArSZotlvJCNuM",
  authDomain: "actu-litinvader.firebaseapp.com",
  projectId: "actu-litinvader",
  storageBucket: "actu-litinvader.firebasestorage.app",
  messagingSenderId: "89573670562",
  appId: "1:89573670562:web:2184e727c579c79d6621fb",
  measurementId: "G-QH0G1Q26W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
