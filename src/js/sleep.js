function sleep(milliSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliSeconds);
  });
}

export default sleep;
