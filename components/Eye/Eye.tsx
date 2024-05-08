import Image from "next/image";
import eyeOff from "@/assets/icons/eye-off.svg";
import eyeOn from "@/assets/icons/eye-on.svg";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";

const Eye = () => {
  const [value, toggle] = useToggle();
  const [selected, setSelected] = useState(eyeOff);

  const onChangeImg = () => {
    if (value) return setSelected(eyeOn);
    if (!value) return setSelected(eyeOff);
  };

  useEffect(() => {
    onChangeImg();
  }, [value]);

  return <Image src={selected} onClick={() => toggle()} alt='비밀번호 표시 아이콘' id='password_eyes' />;
};

export default Eye;
