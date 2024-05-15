import Image from "next/image";
import eyeOff from "@/assets/icons/eye-off.svg";
import eyeOn from "@/assets/icons/eye-on.svg";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";

interface EyeProps {
  onClick: () => void;
}

const Eye: React.FC<EyeProps> = ({ onClick }) => {
  const [value, toggle] = useToggle();
  const [selected, setSelected] = useState(eyeOff);

  const onChangeImg = () => {
    if (value) return setSelected(eyeOn);
    if (!value) return setSelected(eyeOff);
  };

  const onClickHandler = () => {
    toggle();
    onClick();
  };

  useEffect(() => {
    onChangeImg();
  }, [value]);

  return <Image src={selected} onClick={onClickHandler} alt='비밀번호 표시 아이콘' />;
};

export default Eye;
