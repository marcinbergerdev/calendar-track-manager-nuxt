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
   id: string;
   day: number;
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
