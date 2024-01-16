export type CurrentDay = {
   day: number;
   name: string;
};

export type Date = {
   id: number;
   day: number;
   week: string;
   month: number;
   year: number;
};

export type Day = {
   id: number;
   day: number;
   year: number;
   weekdayId: number;
   isActive: boolean;
   isCurrent: boolean;
};

export type Extracted = {
   monthId: number;
   day: string;
   name: string;
   month: string;
   year: string;
};

export type Selected = {
   month: number;
   year: number | null;
};

export type Events = {
   [key: string]: EventElement;
};
export type EventsList = [string, EventElement];


export type EventElement = {
   eventId?: string;
   title: string;
   time: string;
   note: string;
   isCompleted?: boolean;
   isNotification: boolean;
};

export type SelectedDay = {
   eventId?: string;
   dayId?: number;
   id?: number;
   day?: number;
   year?: number;
   title?: string;
   time?: string;
   note?: string;
   isCompleted?: boolean;
   isNotification?: boolean;
};
