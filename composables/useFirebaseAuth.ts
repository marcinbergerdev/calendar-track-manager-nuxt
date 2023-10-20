import { useUserLogStatus } from "./useState";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
} from "firebase/auth";

export const createUserAccount = async (email: string, password: string) => {
   const auth = getAuth();

   await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         console.log(user);
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(error);
      });
};

export const signInUser = async (email: string, password: string) => {
   const auth = getAuth();

   await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         console.log(user);
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(error);
      });
};

export const userUpdateStatus = () => {
   const auth = getAuth();
   
   onAuthStateChanged(auth, (user) => {
      const userStatus = useUserLogStatus();

      if (user) {
         userStatus.value = user.uid;
         return;
      }

      // console.log(userStatus.value);
   });
};

export const signOutUser = () => {
   const userStatus = useUserLogStatus();
   const auth = getAuth();
   auth.signOut();
   userStatus.value = false;
   console.log("log out");
};
