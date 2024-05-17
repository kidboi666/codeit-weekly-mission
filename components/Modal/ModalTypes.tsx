import AddFolder from "@/components/Modal/ModalContents/AddFolder";
import ChangeName from "@/components/Modal/ModalContents/ChangeName";
import ShareFolder from "@/components/Modal/ModalContents/ShareFolder";
import AddLinkToFolder from "@/components/Modal/ModalContents/AddLinkToFolder";
import DeleteFolder from "@/components/Modal/ModalContents/DeleteFolder";
import DeleteLink from "@/components/Modal/ModalContents/DeleteLink";

export const MODAL_TYPES = {
  changeName: {
    type: "changeName",
    title: "폴더 이름 변경",
    text: "변경하기",
    variant: "default",
  },
  addFolder: {
    type: "addFolder",
    title: "폴더 추가",
    text: "추가하기",
    variant: "default",
  },
  addLinkToFolder: {
    type: "addLinkToFolder",
    title: "폴더에 추가",
    text: "추가하기",
    variant: "default",
  },
  shareFolder: {
    type: "shareFolder",
    title: "폴더 공유",
    text: "",
  },
  deleteFolder: {
    type: "deleteFolder",
    title: "폴더 삭제",
    text: "삭제하기",
    variant: "deleteFolder",
  },
  deleteLink: {
    type: "deleteLink",
    title: "링크 삭제",
    text: "삭제하기",
    variant: "deleteLink",
  },
};

export const MODAL_COMPONENTS = [
  {
    contents: MODAL_TYPES.addFolder,
    component: <AddFolder />,
  },
  {
    contents: MODAL_TYPES.changeName,
    component: <ChangeName />,
  },
  {
    contents: MODAL_TYPES.shareFolder,
    component: <ShareFolder />,
  },
  {
    contents: MODAL_TYPES.deleteFolder,
    component: <DeleteFolder />,
  },
  {
    contents: MODAL_TYPES.addLinkToFolder,
    component: <AddLinkToFolder />,
  },
  {
    contents: MODAL_TYPES.deleteLink,
    component: <DeleteLink />,
  },
];
