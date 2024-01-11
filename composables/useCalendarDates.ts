import { EventElement } from "@/types/Date";
import {
   getDatabase,
   ref,
   onValue,
   push,
   set,
   remove,
   update,
} from "firebase/database";

export const getUserEventsFetch = (id: number, year: number) => {
   return new Promise((resolve, reject) => {
      const userId = useCookie("userUidStatus");

      const db = getDatabase();
      const starCountRef = ref(db, `users/${userId.value}/calendar/${year}/${id}`);

      onValue(
         starCountRef,
         (snapshot) => {
            const data = snapshot.val();
            resolve(data);
         },
         (error) => {
            reject(error);
         }
      );
   });
};

export const writeUserEventsFetch = async (
   dayId: number,
   year: number,
   event: EventElement
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();
   const eventList = ref(db, `users/${userId.value}/calendar/${year}/${dayId}`);
   const newEventList = push(eventList);

   set(newEventList, {
      title: event.title,
      time: event.time,
      note: event.note,
      isCompleted: event.isCompleted,
      isNotification: event.isNotification,
   });
};

export const setNewEventDataFetch = async (
   dayId: number,
   year: number,
   eventId: string,
   event: EventElement
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();

   update(
      ref(db, `users/${userId.value}/calendar/${year}/${dayId}/${eventId}`),
      {
         title: event.title,
         time: event.time,
         note: event.note,
         isNotification: event.isNotification,
      }
   );
};

export const deleteUserEventFetch = async (
   dayId: number,
   year: number,
   eventId: string
) => {
   const userId = useCookie("userUidStatus");
   const db = getDatabase();

   remove(
      ref(db, `users/${userId.value}/calendar/${year}/${dayId}/${eventId}`)
   );
};
