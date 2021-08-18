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

export const getUserDetails = new Promise((resolve, reject) => {
  let user = auth.currentUser;
  db.ref("dt_recruiters/" + user?.uid)
    .once("value", (data) => {
      resolve(data.val());
    })
    .catch((error) => {
      resolve(error);
    });
});

export const SignupPartOne = (
  email: string,
  password: string,
  surname: string,
  firstname: string,
  contact: string
) =>
  new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = auth.currentUser;
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        var dateTime = date + " " + time;
        db.ref("dt_recruiters/" + user?.uid)
          .set({
            email: email,
            password: password,
            reg_date: dateTime,
            surname: surname,
            firstname: firstname,
            contact: contact,
            partTwoState: false,
          })
          .then(() => {
            resolve("saved");
          })
          .catch((error) => {
            reject(error.message);
          });
      })
      .catch((error) => {
        reject(error.message);
      });
  });

export const SignupPartTwo = (
  c_name: string,
  c_address: string,
  c_reg: string,
  c_website: string,
  c_linkdin: string
) =>
  new Promise((resolve, reject) => {
    let user = auth.currentUser;
    db.ref("dt_recruiters/" + user?.uid)
      .update({
        company_name: c_name,
        company_address: c_address,
        company_registration: c_reg,
        company_website: c_website,
        linkdin: c_linkdin,
        partTwoState: true,
      })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
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
