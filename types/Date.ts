export type CurrentDay = {
   day: string;
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
   isActive: boolean;
   isCurrent: boolean;
   id: string;
   day: string;
   weekdayId: number;
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
