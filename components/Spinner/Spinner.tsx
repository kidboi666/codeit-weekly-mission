import Image from "next/image";
import spinnerImg from "@/assets/icons/spinner.svg";
import * as S from "./Spinner.styled";

const Spinner = () => {
  return (
    <S.Spinner>
      <Image src={spinnerImg} alt='로딩 중....' />
    </S.Spinner>
  );
};

export default Spinner;
