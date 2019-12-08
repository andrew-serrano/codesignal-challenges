function caesarBoxCipherEncoding(s) {
  let r = s.length ** 0.5;
  let m = "";
  for (let i = 0; i < r; i++) {
    for (let j = i; j < s.length; j += r) {
      m += s[j];
    }
  }
  return m;
}