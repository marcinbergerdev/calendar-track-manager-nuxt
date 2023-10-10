// import {
//    getAuth,
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    onAuthStateChanged,
// } from "firebase/auth";

// export const createUserAccount = async (email: string, password: string) => {
//    const auth = getAuth();

//    await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//          const user = userCredential.user;
//       })
//       .catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          console.log(error);
//       });
// };

// export const signInUser = async (email: string, password: string) => {
//    const auth = getAuth();

//    await signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//          const user = userCredential.user;
//       })
//       .catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          console.log(error);
//       });
// };

// export const userUpdateStatus = () => {
//    const auth = getAuth();

//    onAuthStateChanged(auth, (user) => {
//       if (user) {
//          console.log(user);
//       } else {
//          console.log(user);
//       }
//    });
// };

// export const signOutUser = () => {
//    const auth = getAuth();
//    auth.signOut();
// };
