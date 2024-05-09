import * as S from "./AddLink.styled";
import LinkIcon from "../../assets/icons/link.svg";
import { useCallback, useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Button from "../Button/Button";
import Input from "../Input/Input";

const AddLink: React.FC = () => {
  const [isModalTrigger, setIsModalTrigger] = useState(false);
  const [isInterSecting, setInterSecting] = useState(false);
  const targetRef = useRef(null);

  const changeTrigger = useCallback(() => {
    setIsModalTrigger((prevBoolean) => !prevBoolean);
  }, []);

  const callback = (entries: any) => {
    setInterSecting(!entries[0].isIntersecting);
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
          <S.FormBox>
            <S.IconImgBox>
              <Image src={LinkIcon} alt={""} />
            </S.IconImgBox>
            <Input placeholder='링크를 추가해 보세요' variant={"addLink"} />
            <Button variant={"addLink"} text={"추가하기"} onClick={changeTrigger} />
          </S.FormBox>
        </S.FormContainer>
        {isModalTrigger && <Modal variant={"addLink"} closeModal={setIsModalTrigger} />}
      </S.InnerBox>
    </S.AddLinkLayout>
  );
};

export default AddLink;
