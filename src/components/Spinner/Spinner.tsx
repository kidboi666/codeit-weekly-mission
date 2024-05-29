import * as S from "./Spinner.styled";
import { useAppSelector } from "@/src/hooks/useApp";
import { API_MSG } from "@/src/constants/strings";
import spinner from "@/public/icons/spinner.svg";
import Image from "next/image";

const Spinner = () => {
  const folderStatus = useAppSelector((state) => state.folder.status);
  const linkStatus = useAppSelector((state) => state.link.status);
  const authStatus = useAppSelector((state) => state.auth.status);
  const paperStatus = useAppSelector((state) => state.paper.status);

  const turningPoint =
    folderStatus !== API_MSG.PEN &&
    linkStatus !== API_MSG.PEN &&
    authStatus !== API_MSG.PEN &&
    paperStatus !== API_MSG.PEN;
  if (turningPoint) return;

  return (
    <S.SpinnerLayout>
      <S.SpinnerBox>
        <S.Spinner>
          <Image src={spinner} alt='로딩 중....' />
        </S.Spinner>
      </S.SpinnerBox>
    </S.SpinnerLayout>
  );
};

export default Spinner;
