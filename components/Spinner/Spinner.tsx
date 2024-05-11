import Image from "next/image";
import spinnerImg from "@/assets/icons/spinner.svg";
import * as S from "./Spinner.styled";
import { useAppSelector } from "@/hooks/useApp";
import { API_MSG } from "@/constants/strings";
import { useEffect } from "react";

const Spinner = () => {
  const folderStatus = useAppSelector((state) => state.folder.status);
  const linkStatus = useAppSelector((state) => state.link.status);
  const authStatus = useAppSelector((state) => state.auth.status);

  const turningPoint = folderStatus !== API_MSG.PEN && linkStatus !== API_MSG.PEN && authStatus !== API_MSG.PEN;
  if (turningPoint) return;

  // useEffect(() => {}, [folderStatus, linkStatus, authStatus]);

  return (
    <S.SpinnerLayout>
      <S.Spinner>
        <Image src={spinnerImg} alt='로딩 중....' />
      </S.Spinner>
    </S.SpinnerLayout>
  );
};

export default Spinner;
