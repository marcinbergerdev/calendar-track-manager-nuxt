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

export interface Event {
   [key: string]: EventElement;
}

export type EventElement = {
   eventId?: string;
   title: string;
   time: string;
   note: string;
   isCompleted?: boolean;
   isNotification: boolean;
};

export type SelectedDay = {
   id: number;
   year: number;
};

export type Error = {
   name: string,
   message: string,
   isError: boolean
};


