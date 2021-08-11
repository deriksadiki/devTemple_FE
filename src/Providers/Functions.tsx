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
  let tmp = localStorage.getItem("searchFilter");
  let filters = tmp?.length ? JSON.parse(tmp) : [];
  var arr_lower = filters.map((item: any) => item.toLowerCase());
  let devsArray = new Array();
  if (arr_lower?.length > 0) {
    db.ref("dt_users").once("value", (users) => {
      if (users?.val()) {
        let devs = users.val();
        let keys = Object.keys(devs);
        for (var x = 0; x < keys.length; x++) {
          let stack = new Array();
          stack = devs[keys[x]].stack;
          const results = stack?.filter((skills: any) => {
            if (skills?.lang) {
              return arr_lower.indexOf(skills?.lang.toLowerCase()) > -1;
            }
          });
          if (results?.length > 0) {
            devsArray.push(devs[keys[x]]);
          }
        }
        resolve(devsArray);
        //localStorage.setItem("searchFilter", JSON.stringify([]));
      } else {
        reject("no users");
      }
    });
  }
});
