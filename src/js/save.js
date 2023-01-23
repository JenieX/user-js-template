function save(blobURL, fileName) {
  return new Promise((resolve) => {
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    link.dispatchEvent(new MouseEvent('click'));
    window.setTimeout(() => window.URL.revokeObjectURL(blobURL), 1000);
    resolve();
  });
}

export default save;
