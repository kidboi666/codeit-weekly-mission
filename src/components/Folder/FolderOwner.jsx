import { useEffect, useState } from 'react';
import { getMockFolderRequest } from '../../api';
import useAsync from '../../hooks/useAsync';
import * as S from './FolderOwner.style';

function FolderOwner() {
  const { requestFunction: getUserFolder } = useAsync(getMockFolderRequest);
  const [owner, setOwner] = useState([]);
  const [star, setStar] = useState('');

  const getOwner = async () => {
    const result = await getUserFolder();
    if (!result) return;

    const {
      folder: { owner, name },
    } = result;
    setOwner(owner);
    setStar(name);
  };

  useEffect(() => {
    getOwner();
  }, []);

  return (
    <S.OwnerLayoutList>
      <li>
        <S.OwnerImg src={owner.profileImageSource} alt="프로필 이미지" />
      </li>
      <li>
        <S.OwnerName>{owner.name}</S.OwnerName>
      </li>
      <li>
        <S.Star>{star}</S.Star>
      </li>
    </S.OwnerLayoutList>
  );
}

export default FolderOwner;
