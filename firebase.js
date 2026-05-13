import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

apiKey:"AIzaSyCgFF76kpKMUbpqCJ1cq71WELVHZ5dS_Rk",

authDomain:"school-system-54307.firebaseapp.com",

projectId:"school-system-54307",

storageBucket:"school-system-54307.appspot.com",

messagingSenderId:"646293166289",

appId:"1:646293166289:web:de21d597a098e89ef34df0"

};

/* INITIALIZE */

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

const storage =
getStorage(app);

const provider =
new GoogleAuthProvider();

/* EXPORTS */

export {
auth,
db,
storage,
provider
};