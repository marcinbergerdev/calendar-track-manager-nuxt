export const useMenuVisibility = () =>
   useState("menuVisibility", () => false as boolean);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", () => false as boolean);
