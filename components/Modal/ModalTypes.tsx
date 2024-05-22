import AddFolder from "@/components/Modal/ModalContents/AddFolder";
import ChangeName from "@/components/Modal/ModalContents/ChangeName";
import ShareFolder from "@/components/Modal/ModalContents/ShareFolder";
import AddLinkToFolder from "@/components/Modal/ModalContents/AddLinkToFolder";
import DeleteFolder from "@/components/Modal/ModalContents/DeleteFolder";
import DeleteLink from "@/components/Modal/ModalContents/DeleteLink";
import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  text?: string;
  variant?: string;
}

type ModalType = "changeName" | "addFolder" | "addLinkToFolder" | "shareFolder" | "deleteFolder" | "deleteLink";

export const MODAL_COMPONENTS: Map<ModalType, ReactNode> = new Map<ModalType, ReactNode>([
  ["changeName", <ChangeName key='changeName' title='폴더 이름 변경' text='변경하기' variant='default' />],
  ["addFolder", <AddFolder key='addFolder' title='폴더 추가' text='추가하기' variant='default' />],
  ["addLinkToFolder", <AddLinkToFolder key='addLink' title='폴더에 추가' text='추가하기' variant='default' />],
  ["shareFolder", <ShareFolder key='shareFolder' title='폴더 공유' />],
  ["deleteFolder", <DeleteFolder key='deleteFolder' title='폴더 삭제' text='삭제하기' variant='deleteFolder' />],
  ["deleteLink", <DeleteLink key='deleteLink' title='링크 삭제' text='삭제하기' variant='deleteLink' />],
]);
