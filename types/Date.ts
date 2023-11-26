export interface CurrentDay {
   day: string;
   name: string;
}

export interface Date {
   id: number;
   day: number;
   week: string;
   month: number;
   year: number;
}

export interface Day {
   isActive: boolean;
   id: string;
   day: number;
   weekDayId: number;
}

export interface Extracted {
   day: string;
   name: string;
   month: string;
   year: string;
}
