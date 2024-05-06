import { FolderLink } from "@/pages/api/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const initialState: FolderLink[] = [];

export const getLink = {
  type: "GET_LINK",
};

export const getLinkList = {
  type: "GET_LINK_LIST",
};

const reducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case "GET_LINK":
      return;
    default:
      return state;
  }
};

export default reducer;
