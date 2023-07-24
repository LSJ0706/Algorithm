function solution(code) {
    var mode = 0;
  var ret = "";

  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] != 1) {
        if (i % 2 === 0) {
          ret += code[i];
        }
      } else {
        mode = 1;
      }
    } else {
      if (code[i] != 1) {
        if (i % 2 != 0) {
          ret += code[i];
        }
      } else {
        mode = 0;
      }
    }
  }
  return ret === "" ? "EMPTY" : ret;
}