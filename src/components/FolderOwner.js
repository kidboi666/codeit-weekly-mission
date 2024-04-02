import { useEffect, useState } from 'react';
import { getMockFolder } from '../api';
import useAsync from '../hooks/useAsync';
import './FolderOwner.css';

function FolderOwner() {
  const [, , getUserFolder] = useAsync(getMockFolder);
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
    <ul className="owner_wrap">
      <li className="owner_img_wrap">
        <img src={owner.profileImageSource} className="owner_img" alt="프로필 이미지" />
      </li>
      <li className="owner_name">
        <p>{owner.name}</p>
      </li>
      <li className="star">{star}</li>
    </ul>
  );
}

export default FolderOwner;
