import { Event } from "@/types/Date";
import { getDatabase, ref, onValue, push } from "firebase/database";

export const getEvents = (id: number, year: number) => {
   return new Promise((resolve, reject) => {
      const userId = useCookie("userUidStatus");

      const db = getDatabase();
      const starCountRef = ref(
         db,
         `users/${userId.value}/calendar/${year}/${id}`
      );

      onValue(
         starCountRef,
         (snapshot) => {
            const data = snapshot.val();
            resolve(data);
         },
         (error) => {
            reject({
               name: error.name,
               message: "Something goes wrong, try later!",
               isError: true,
            });
         }
      );
   });
};

export const writeUserData = async (year: number, event: Event) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();
   await push(ref(db, `users/${userId.value}/calendar/${year}/${event.id}`), {
      id: event.id,
      day: event.day,
      title: event.title,
      time: event.time,
      note: event.note,
      isCompleted: event.isCompleted,
      isNotification: event.isNotification,
   });
};
