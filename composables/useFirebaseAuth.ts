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
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(error);
      });
};

export const userUpdateStatus = () => {
   const auth = getAuth();
   const userStatus = useUserLogStatus();

   onAuthStateChanged(auth, (user) => {
      if (user) {
         userStatus.value = true;
         console.log(user.uid);
         console.log(userStatus.value);
      } else {
         console.log("nie działa");
      }
   });
};

export const signOutUser = () => {
   const userStatus = useUserLogStatus();
   const auth = getAuth();
   auth.signOut();
   userStatus.value = false;
   console.log(userStatus.value);
};
