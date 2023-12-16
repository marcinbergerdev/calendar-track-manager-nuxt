import { Selected } from "~/types/Date";

export const useMenuVisibility = () =>
   useState("menuVisibility", (): boolean => false);

export const useDateSelectorVisibility = () =>
   useState("dateSelectorVisibility", (): boolean => false);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", (): boolean => false);

export const useMonthAnimationName = () =>
   useState("monthAnimationName", (): "next" | "previous" => "next");

export const useSelectedData = () =>
   useState("selectedData", (): Selected => {
      return { month: 0, year: null };
   });
