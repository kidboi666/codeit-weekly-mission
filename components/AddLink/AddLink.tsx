import * as S from "./AddLink.styled";
import LinkIcon from "../../assets/icons/link.svg";
import { useCallback, useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";

const AddLink: React.FC = () => {
  const [isModalTrigger, setIsModalTrigger] = useState(false);
  const [isInterSecting, setInterSecting] = useState(false);
  const targetRef = useRef(null);

  const changeTrigger = useCallback(() => {
    setIsModalTrigger((prevBoolean) => !prevBoolean);
  }, []);

  const callback = (entries: any) => {
    if (entries[0].isIntersecting) {
      setInterSecting(false);
    } else {
      setInterSecting(true);
    }
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
            <S.IconImg src={LinkIcon} alt={""} />
            <S.StyledInput placeholder='링크를 추가해 보세요' />
            <S.StyledButton variant={"default"} type={"button"} text={"추가하기"} onClick={changeTrigger} />
          </S.FormBox>
        </S.FormContainer>
        {isModalTrigger && <Modal variant={"addLink"} closeModal={setIsModalTrigger} />}
      </S.InnerBox>
    </S.AddLinkLayout>
  );
};

export default AddLink;
