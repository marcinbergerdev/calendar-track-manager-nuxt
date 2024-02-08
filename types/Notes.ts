export type Task = {
   id?: number;
   name: string;
};

export type NoteResponse = {
   [key: string]: Note;
};

export type ConvertedNotesList = [string, Note][];

export type NoteSelected = {
   noteId: string;
   title: string;
   content: string | Task[];
   color: string;
   noteType: string;
   isChecked: boolean;
};

export type Note = {
   id: number,
   option: string;
   title: string;
   content: string | Task[];
   color: string;
   isChecked: boolean;
};
