import { db } from "./FirebaseConfig";
import { auth } from "./FirebaseConfig";

export const signInUser = (email: any, password: any) =>
  new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error.message);
      });
  });

export const checkAuthState = new Promise((resolve, reject) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
});
