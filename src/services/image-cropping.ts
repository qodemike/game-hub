import noImage from "../assets/image_missing.jpg"

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  return url.split(target).join(`${target}crop/600/400/`);
};

export default getCroppedImageUrl;
