import { Selected } from "~/types/Date";

export const useMenuVisibility = () =>
   useState<boolean>("menuVisibility", () => false);

export const useDateSelectorVisibility = () =>
   useState<boolean>("dateSelectorVisibility", () => false);

export const useLoadingSpinner = () =>
   useState<boolean>("loadingSpinner", () => false);

export const useEditorVisibility = () =>
   useState<boolean>("editorVisibility", () => false);

export const useSelectedDayId = () =>
   useState<string | boolean>("selectedDayId", () => false);

export const useMonthAnimationName = () =>
   useState<"next" | "previous">("monthAnimationName", () => "next");

export const useSelectedData = () =>
   useState<Selected>("selectedData", () => {
      return { month: 0, year: null };
   });
