import {
   getDatabase,
   ref,
   onValue,
   push,
   set,
   remove,
   update,
} from "firebase/database";
import { NoteResponse, Task } from "@/types/Notes";

export const getUserNotesFetch = async () => {
   return await new Promise<NoteResponse[]>((resolve, reject) => {
      const userId = useCookie("userUidStatus");

      const db = getDatabase();

      const selectedEvents = ref(
         db,
         `users/${userId.value}/notes`
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

export const saveUserNotesMessageFetch = async (
   toggleOptions: string,
   noteTitle: string,
   colorVariant: string,
   noteContent: string | Task[]
) => {
   const userId = useCookie("userUidStatus");

   const db = getDatabase();
   const eventList = ref(db, `users/${userId.value}/notes`);
   const newEventList = push(eventList);

   return await set(newEventList, {
      option: toggleOptions,
      title: noteTitle,
      color: colorVariant,
      content: noteContent,
      isChecked: false,
   });
};

export const deleteUserNoteFetch = async (noteId: string) => {
   const userId = useCookie("userUidStatus");
   const db = getDatabase();

   return await remove(
      ref(db, `users/${userId.value}/notes/${noteId}`)
   );
};
