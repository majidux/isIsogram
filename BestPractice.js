function isIsogram(str) {
  return !str || str.length === new Set(str.toLowerCase()).size;
}
