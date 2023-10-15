// check if user is logged in
export const useUserLogStatus = () =>
   useState("userLogStatus", () => false as boolean | string);

export const useMenuVisibility = () =>
   useState("menuVisibility", () => false as boolean);
