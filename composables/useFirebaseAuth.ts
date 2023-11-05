import { useResponseData } from "./useState";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
} from "firebase/auth";

export const createUserAccount = async (email: string, password: string) => {
   const auth = getAuth();
   const userResponse = useResponseData();

   await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;
         userResponse.value = {
            isModal: true,
            title: "Success!",
            content: "Your account is created.",
            confirm: true,
         };
      })
      .catch((error) => {
         userResponse.value = {
            isModal: true,
            title: error.code,
            content: error.message,
            confirm: false,
         };
      });
};

export const signInUser = async (email: string, password: string) => {
   const auth = getAuth();
   const userResponse = useResponseData();

   await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;
      })
      .catch((error) => {
         userResponse.value = {
            isModal: true,
            title: error.code,
            content: error.message,
            confirm: false,
         };
      });
};

export const userUpdateStatus = () => {
   const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
      if (user) {
         // console.log(user);
      } else {
         // console.log('error');
      }
   });
};

export const signOutUser = () => {
   const auth = getAuth();
   const userUidStatus = useCookie("userUidStatus");
   userUidStatus.value = "false";
   auth.signOut();
};
