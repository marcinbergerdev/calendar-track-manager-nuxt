import { Events, EventElement } from "@/types/Date";
import {
   getDatabase,
   ref,
   onValue,
   push,
   set,
   remove,
   update,
} from "firebase/database";

export const getUserEventsFetch = (year: number, id: number) => {
   return new Promise<Events>((resolve, reject) => {
      const userId = useCookie("userUidStatus");

      const db = getDatabase();

      const selectedEvents = ref(
         db,
         `users/${userId.value}/calendar/${year}/${id}`
      );

      onValue(
         selectedEvents,
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

export const getUserListOfSavedEventsInSelectedYear = (year: number) => {
   return new Promise<Events>((resolve, reject) => {
      const userId = useCookie("userUidStatus");

      const db = getDatabase();

      const selectedEvents = ref(db, `users/${userId.value}/calendar/${year}`);

      onValue(
         selectedEvents,
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

export const saveUserEventsFetch = async (
   dayId: number,
   year: number,
   event: EventElement
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();
   const eventList = ref(db, `users/${userId.value}/calendar/${year}/${dayId}`);
   const newEventList = push(eventList);

   return await set(newEventList, {
      title: event.title,
      time: event.time,
      note: event.note,
      isCompleted: event.isCompleted,
      isNotification: event.isNotification,
   });
};

export const editNewEventDataFetch = async (
   dayId: number,
   year: number,
   eventId: string,
   event: EventElement
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();

   await update(
      ref(db, `users/${userId.value}/calendar/${year}/${dayId}/${eventId}`),
      {
         title: event.title,
         time: event.time,
         note: event.note,
         isNotification: event.isNotification,
      }
   );
};

export const toggleCompletionEventFetch = async (
   dayId: number,
   year: number,
   eventId: string,
   isChecked: boolean,
   isNotification: boolean
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();

   return await update(
      ref(db, `users/${userId.value}/calendar/${year}/${dayId}/${eventId}`),
      {
         isCompleted: isChecked,
         isNotification: !isNotification || false,
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

   return await remove(
      ref(db, `users/${userId.value}/calendar/${year}/${dayId}/${eventId}`)
   );
};
