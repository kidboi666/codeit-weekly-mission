import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { getLinkList } from "@/redux/actions/link";
import { useEffect, useState } from "react";
import { Card } from "@/components";
import FolderPage from ".";
import { Link } from "@/services/types";

interface FolderLinkListProps {
  linkStorage: Link[];
}

const FolderLinkList = ({ linkStorage }: FolderLinkListProps) => {
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const handleFetchLinkList = async () => {
    dispatch(getLinkList({ userId: userId, folderId: Number(folderId) }));
  };

  useEffect(() => {
    handleFetchLinkList();
  }, [router]);

  return (
    <>
      {linkStorage?.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </>
  );
};

export default FolderLinkList;
