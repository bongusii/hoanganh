// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// QUAN TRỌNG: HÃY THAY THẾ BẰNG CẤU HÌNH FIREBASE CỦA BẠN
const firebaseConfig = {
    apiKey: "AIzaSyCvot0nKpv9aVtYD-YKfKmFk2cR9jpeiBw",
    authDomain: "anh-porfolio.firebaseapp.com",
    projectId: "anh-porfolio",
    storageBucket: "anh-porfolio.firebasestorage.app",
    messagingSenderId: "798914641810",
    appId: "1:798914641810:web:1eb4a5a377a3c9eb758b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export a reference to the projects collection
export const projectsCollectionRef = collection(db, "projects");
