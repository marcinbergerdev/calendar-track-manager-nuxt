export const useMenuVisibility = () =>
   useState("menuVisibility", (): boolean => false);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", (): boolean => false);

export const useMonthAnimationName = () =>
   useState("loadingSpinner", () => "" as "next" | "previous");
