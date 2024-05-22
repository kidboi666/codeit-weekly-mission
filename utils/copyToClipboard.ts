const copyToClipboard = async (folderId: number) => {
  try {
    await navigator.clipboard.writeText(`https://codeit-weekly-mission.vercel.app/shared/${folderId}`);
  } catch (error) {
    console.error(error);
  }
};

export default copyToClipboard;
