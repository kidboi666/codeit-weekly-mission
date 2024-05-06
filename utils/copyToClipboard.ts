const copyToClipboard = async (setToast: React.Dispatch<React.SetStateAction<boolean>>, folderId: number) => {
  try {
    await navigator.clipboard.writeText(`${window.location.href}${folderId}`);
  } catch (error) {
    console.error(error);
  }
  setToast(true);
};

export default copyToClipboard;
