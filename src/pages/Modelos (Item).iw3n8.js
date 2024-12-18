$w.onReady(() => {
  const items = $w("#dynamicDataset").getCurrentItem()
  const modelUrl = items.url;
  const galleryImages = items.mediaGallery;

  $w("#viewer3d").postMessage(modelUrl);
  $w('#btnDownload').link = items.download;
  $w('#btnDownload').target = "_blank";
  $w('#gallery').items = galleryImages;
});