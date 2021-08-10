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

export const getAllDevs = new Promise((resolve, reject) => {
  db.ref("dt_users").on("value", (users) => {
    if (users?.val()) {
      resolve(users.val());
    } else {
      reject("no users");
    }
  });
});
