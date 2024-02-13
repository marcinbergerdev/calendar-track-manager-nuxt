import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   updatePassword,
   deleteUser,
} from "firebase/auth";
import { useModal } from "~/store/useModal";

export const createUserAccount = async (email: string, password: string) => {
   const auth = getAuth();
   const modal = useModal();

   await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;

         modal.isModal = true;
         modal.setValues({
            title: "Success!",
            content: "Your account is created.",
            confirm: true,
         });
      })
      .catch((error) => {
         modal.isModal = true;
         modal.setValues({
            title: error.code,
            content: error.message,
            confirm: false,
         });
      });
};

export const signInUser = async (email: string, password: string) => {
   const auth = getAuth();
   const modal = useModal();

   await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const userUidStatus = useCookie("userUidStatus");
         userUidStatus.value = user.uid;
      })
      .catch((error) => {
         modal.isModal = true;
         modal.setValues({
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

export const changeUserPassword = async (newPassword: string) => {
   const auth = getAuth();
   const user = auth.currentUser;
   const modal = useModal();

   if (!!user) {
      if (user.email === "test@test.com") {
         alert("Warning! - Only for test!");
         return;
      }

      await updatePassword(user, newPassword)
         .then(() => {
            modal.setValues({
               title: "Success!",
               content: "Successfully changed the password",
               confirm: true,
            });
            modal.isModal = true;
         })
         .catch((error) => {
            return error;
         });
   }
};

export const deleteUserAccount = async () => {
   const auth = getAuth();
   const user = auth.currentUser;
   const userUidStatus = useCookie("userUidStatus");

   if (!!user) {
      if (user.email === "test@test.com") {
         alert("Warning! - Only for test!");
         return;
      }

      await deleteUser(user)
         .then(() => {
            userUidStatus.value = "false";
            navigateTo("/login");
         })
         .catch((error) => {
            return error;
         });
   }
};

export const signOutUser = () => {
   const auth = getAuth();
   const userUidStatus = useCookie("userUidStatus");
   userUidStatus.value = "false";
   auth.signOut();
};
