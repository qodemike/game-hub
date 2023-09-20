const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  return url.split(target).join(`${target}crop/600/400/`);
};

export default getCroppedImageUrl;
