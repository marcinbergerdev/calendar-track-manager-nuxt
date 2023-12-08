export const useMenuVisibility = () =>
   useState("menuVisibility", (): boolean => false);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", (): boolean => false);

export const useMonthAnimationName = () =>
   useState("loadingSpinner", () => "" as "next" | "previous");

export const useWeekDays = () => {
   return useState("weekdays", (): string[] => [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
   ]);
};
