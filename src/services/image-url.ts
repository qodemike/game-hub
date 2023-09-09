const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  return url.split(target).join(`${target}crop/600/400/`);
};

export default getCroppedImageUrl;
