import kakaoIcon from "../../assets/icons/kakao_icon.svg";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import linkIcon from "../../assets/icons/link.svg";
import copyUrl from "../../utils/copyUrl";
import Toast from "../Toast/Toast";
import * as S from "./ModalContents.styled";
import { FolderList } from "../../api/types";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface ShareProps {
  isToast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  folderId: number;
}

interface DeleteProps {
  variant: string;
  text?: string;
}

interface LinkFolderProps extends DeleteProps {
  folderList?: FolderList[];
}

interface ChangeNameProps extends DeleteProps {
  currentFolder?: string;
}

interface AddFolderProps extends DeleteProps {}
interface AddLinkProps extends DeleteProps {}

export const Share: React.FC<ShareProps> = ({ isToast, setToast, folderId }) => {
  return (
    <>
      <S.ShareContainer>
        <div>
          <img src={kakaoIcon} alt={kakaoIcon} />
          <p>카카오톡</p>
        </div>
        <div>
          <img src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={() => copyUrl(setToast, folderId)}>
          <img src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
      {isToast && (
        <S.ToastContainer>
          <Toast setToast={setToast} />
        </S.ToastContainer>
      )}
    </>
  );
};

export const LinkFolder: React.FC<LinkFolderProps> = ({ folderList, variant, text }) => {
  return (
    <>
      <S.FolderList>
        {folderList?.map((folder) => (
          <S.FolderListItem key={folder.id}>
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
          </S.FolderListItem>
        ))}
      </S.FolderList>
      <Button variant={variant} text={text} />
    </>
  );
};

export const Delete: React.FC<DeleteProps> = ({ variant, text }) => {
  return <Button variant={variant} text={text} />;
};

export const ChangeName: React.FC<ChangeNameProps> = ({ variant, text, currentFolder }) => {
  return (
    <>
      <Input placeholder={currentFolder} />
      <Button variant={variant} text={text} />
    </>
  );
};

export const AddFolder: React.FC<AddFolderProps> = ({ variant, text }) => {
  return (
    <>
      <Input placeholder={"생성할 폴더 이름"} />
      <Button variant={variant} text={text} />
    </>
  );
};

export const AddLink: React.FC<AddLinkProps> = ({ variant, text }) => {
  return <Button variant={variant} text={text} />;
};
