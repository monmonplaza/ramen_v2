import React from "react";
import { StoreReducer } from "./StoreReducer";
const initVal = {
  error: false,
  info: false,
  success: false,
  validate: false,
  message: "",
  isSave: false,
  isConfirm: false,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isAdd: false,
  isEdit: false,
  isView: false,
  isSearch: false,
  isReset: false,
  isSuspend: false,
  isAnimating: true,
  startIndex: 0,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  isAccountUpdated: false,
  isShowMobileNav: false,

  isUploadFile: false,
  credentials: {},
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };