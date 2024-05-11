import * as S from "./Spinner.styled";
import { useAppSelector } from "@/hooks/useApp";
import { API_MSG } from "@/constants/strings";

const Spinner = () => {
  const folderStatus = useAppSelector((state) => state.folder.status);
  const linkStatus = useAppSelector((state) => state.link.status);
  const authStatus = useAppSelector((state) => state.auth.status);

  const turningPoint = folderStatus !== API_MSG.PEN && linkStatus !== API_MSG.PEN && authStatus !== API_MSG.PEN;
  if (turningPoint) return;

  return (
    <S.SpinnerLayout>
      <S.Spinner>
        <p>😀</p>
        {/* <Image src={spinnerImg} alt='로딩 중....' /> */}
      </S.Spinner>
    </S.SpinnerLayout>
  );
};

export default Spinner;
