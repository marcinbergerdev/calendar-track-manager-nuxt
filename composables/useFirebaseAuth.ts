import { useModal } from "~/store/useModal";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
} from "firebase/auth";

export const createUserAccount = async (email: string, password: string) => {
   const auth = getAuth();
   const authResponse = useModal();

   await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;

         authResponse.isModal = true;
         authResponse.setModalValue({
            title: "Success!",
            content: "Your account is created.",
            confirm: true,
         });
      })
      .catch((error) => {
         authResponse.isModal = true;
         authResponse.setModalValue({
            title: error.code,
            content: error.message,
            confirm: false,
         });
      });
};

export const signInUser = async (email: string, password: string) => {
   const auth = getAuth();
   const authResponse = useModal();

   await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;
      })
      .catch((error) => {
         authResponse.isModal = true;
         authResponse.setModalValue({
            title: error.code,
            content: error.message,
            confirm: false,
         });
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
