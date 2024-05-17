import Image from "next/image";
import eyeOff from "@/assets/icons/eye-off.svg";
import eyeOn from "@/assets/icons/eye-on.svg";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";

interface EyeProps {
  onClick: () => void;
}

const Eye = ({ onClick }: EyeProps) => {
  const [value, toggle] = useToggle();

  const onClickHandler = () => {
    toggle();
    onClick();
  };

  return <Image src={value ? eyeOn : eyeOff} onClick={onClickHandler} alt='비밀번호 표시 아이콘' />;
};

export default Eye;
