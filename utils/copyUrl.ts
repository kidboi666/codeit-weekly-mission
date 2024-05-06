const copyUrl = async (
  setToast: React.Dispatch<React.SetStateAction<boolean>>,
  folderId: number,
) => {
  try {
    await navigator.clipboard.writeText(
      `https://resilient-tapioca-37feb1.netlify.app/shared/${folderId}`,
    );
  } catch (error) {
    console.error(error);
  }
  setToast(true);
};

export default copyUrl;
