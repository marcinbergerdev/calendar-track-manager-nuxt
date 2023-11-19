export const useMenuVisibility = () =>
   useState("menuVisibility", () => false as boolean);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", () => false as boolean);

export const useWeekDays = () => {
   return useState(
      "weekdays",
      () =>
         [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
         ] as string[]
   );
};

export const useMonthNames = () => {
   return useState(
      "monthNames",
      () =>
         [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
         ] as string[]
   );
};
