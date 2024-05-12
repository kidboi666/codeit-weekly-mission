const copyToClipboard = async (folderId: number) => {
  try {
    await navigator.clipboard.writeText(
      `https://codeit-weekly-mission-ixwi1zlh6-kidboi666s-projects.vercel.app/shared/${folderId}`,
    );
  } catch (error) {
    console.error(error);
  }
};

export default copyToClipboard;
