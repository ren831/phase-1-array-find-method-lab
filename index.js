function superbowlWin(record) {
  const winObject = record.find((object) => object.result === "W");
  if (winObject) {
    return winObject.year;
  } else {
    return undefined;
  }
}
