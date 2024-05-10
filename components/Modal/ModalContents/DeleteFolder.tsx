import Button from "@/components/Button/Button";
import { useAppSelector } from "@/hooks/useApp";

const DeleteFolder: React.FC = () => {
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  return <Button variant={variant} text={text} width={"100%"} />;
};

export default DeleteFolder;
