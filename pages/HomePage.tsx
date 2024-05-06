import Link from "next/link";
import * as S from "./HomePage.styled";

export default function Homepage() {
  return (
    <S.HomepageLayout>
      <Link href='/folder'>
        <S.StyledButton variant={"default"} text={"folder page"} />
      </Link>
      <Link href='/shared'>
        <S.StyledButton variant={"default"} text={"shared page"} />
      </Link>
    </S.HomepageLayout>
  );
}
