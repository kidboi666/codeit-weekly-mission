import * as S from "./AddLink.styled";
import LinkIcon from "../../assets/icons/link.svg";
import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { openModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";

interface AddLinkProps {
  className?: string;
}

const AddLink = ({ className }: AddLinkProps) => {
  const [linkUrl, setLinkUrl] = useState("");
  const { data } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.length === 0) return dispatch(openToast("firstAction"));
    if (linkUrl) {
      dispatch(openModal({ type: "addLinkToFolder", props: { linkUrl, setLinkUrl } }));
      return;
    }
    dispatch(openToast("nothingValue"));
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  return (
    <S.AddLinkLayout className={className}>
      <S.FormBox onSubmit={onSubmit}>
        <S.InnerBox>
          <S.IconImgBox>
            <Image src={LinkIcon} alt='' />
          </S.IconImgBox>
          <Input value={linkUrl} onChange={onChangeInputValue} placeholder='링크를 추가해 보세요' variant='addLink' />
          <Button variant='addLink' text='추가하기' type='submit' />
        </S.InnerBox>
      </S.FormBox>
    </S.AddLinkLayout>
  );
};

export default AddLink;
