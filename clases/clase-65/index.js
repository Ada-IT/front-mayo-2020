const burlarse = (str) => {
  const vocales = ["a", "e", "o", "u"];

  for (let i = 0; str.length > i; i++) {
    if (vocales.includes(str[i])) {
      str = str.replace(str[i], "i");
    }
  }

  return str;
};

// con expresiones regulares
const burlarse2 = (str) => {
    str = str.replace(/[a]/gi, "i")
    str = str.replace(/[e]/gi, "i")
    str = str.replace(/[o]/gi, "i")
    str = str.replace(/[u]/gi, "i")

    return str
}
const rta = burlarse("programar es dificil");
const rta2 = burlarse2("programar es dificil");

console.log(rta);
console.log(rta2);

