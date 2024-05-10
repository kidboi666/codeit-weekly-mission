const copyToClipboard = async (folderId: number) => {
  try {
    await navigator.clipboard.writeText(`${window.location.href}${folderId}`);
  } catch (error) {
    console.error(error);
  }
};

export default copyToClipboard;
