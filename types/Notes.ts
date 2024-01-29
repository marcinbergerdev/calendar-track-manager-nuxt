export type Task = {
   id?: number;
   name: string;
};


export type NoteResponse = {
  [key: string]: Note
}

export type Note = {
   option: string;
   title: string;
   content: string | Task[];
   color: string;
   isChecked: boolean;
};


