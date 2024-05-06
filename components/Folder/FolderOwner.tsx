import { useEffect, useState } from "react";
import { getMockFolderRequest } from "../../pages/api";
import useAsync from "../../hooks/useAsync";
import * as S from "./FolderOwner.styled";
import { Owner } from "../../pages/api/types";

const FolderOwner: React.FC = () => {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [owner, setOwner] = useState<Owner | null>(null);
  const [star, setStar] = useState("");

  const getOwner = async () => {
    const { folder } = await getUserFolder();
    if (!folder) return null;
    const { owner, name } = folder;

    setOwner(owner);
    setStar(name);
  };

  useEffect(() => {
    getOwner();
  }, []);

  return (
    <S.OwnerLayoutList>
      <li>
        <S.OwnerImg src={owner?.profileImageSource} alt='프로필 이미지' />
      </li>
      <li>
        <S.OwnerName>{owner?.name}</S.OwnerName>
      </li>
      <li>
        <S.Star>{star}</S.Star>
      </li>
    </S.OwnerLayoutList>
  );
};

export default FolderOwner;
