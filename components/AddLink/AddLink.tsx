import * as S from "./AddLink.styled";
import LinkIcon from "../../assets/icons/link.svg";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postLink } from "@/redux/actions/link";
import { openModal } from "@/redux/reducers/modal";

const AddLink: React.FC = () => {
  const [isInterSecting, setInterSecting] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const targetRef = useRef(null);
  const { accessToken } = useAppSelector((state) => state.auth);
  const { selectedFolderId } = useAppSelector((state) => state.folder);
  const dispatch = useAppDispatch();

  const callback = (entries: any) => {
    setInterSecting(!entries[0].isIntersecting);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (linkUrl) {
      dispatch(postLink({ url: linkUrl, accessToken: accessToken, folderId: selectedFolderId }));
    }
    setLinkUrl("");
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <S.AddLinkLayout ref={targetRef}>
      <S.InnerBox $isInterSecting={isInterSecting}>
        <S.FormContainer $isInterSecting={isInterSecting}>
          <S.FormBox onSubmit={onSubmit}>
            <S.IconImgBox>
              <Image src={LinkIcon} alt={""} />
            </S.IconImgBox>
            <Input
              value={linkUrl}
              onChange={onChangeInputValue}
              placeholder='링크를 추가해 보세요'
              variant={"addLink"}
            />
            <Button variant={"addLink"} text={"추가하기"} type={"submit"} />
          </S.FormBox>
        </S.FormContainer>
      </S.InnerBox>
    </S.AddLinkLayout>
  );
};

export default AddLink;
