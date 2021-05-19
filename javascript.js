function fChangeImage(iImage) {
  if (iImage.src.includes("_on.png")) {
    iImage.src = iImage.src.replace("_on", "_off"); }
  else if (iImage.src.includes("_off.png")) {
    iImage.src = iImage.src.replace("_off", "_on"); }
};
