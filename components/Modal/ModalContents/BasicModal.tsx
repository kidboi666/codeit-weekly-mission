import { useAppSelector } from "@/hooks/useApp";

const BasicModal = () => {
  const { title, text } = useAppSelector((state) => state.modal.contents);
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};

export default BasicModal;
