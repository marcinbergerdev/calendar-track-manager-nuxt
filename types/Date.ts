export interface Date {
   id: number;
   day: number;
   week: string;
   month: number;
   year: number;
}

export interface Month {
   inactive?: boolean;
   id: string;
   day: number;
   weekDayId?: number;
}
