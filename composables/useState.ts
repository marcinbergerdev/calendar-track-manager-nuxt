export const useMenuVisibility = () =>
   useState("menuVisibility", (): boolean => false);

export const useDateSelectorVisibility = () =>
   useState("dateSelectorVisibility", (): boolean => false);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", (): boolean => false);

export const useMonthAnimationName = () =>
   useState("monthAnimationName", (): "next" | "" | "previous" => "");
