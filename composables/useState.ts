export const useMenuVisibility = () =>
   useState("menuVisibility", () => false as boolean);

export const useLoadingSpinner = () =>
   useState("loadingSpinner", () => false as boolean);

export const useResponseData = () =>
   useState("responseData", () => {
      return { isModal: false, title: "", content: "", confirm: false };
   });
