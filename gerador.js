// Este gerador gera senhas a partir dos seguintes requisitos:
// 10 caracteres
// 1 deles deve ser uma caracter especial
// 3 devem ser numeros
// 6 letras, onde duas delas serão maíusculas
class passwordGenerator {
  constructor() {
    //Definindo quais caracteres serão aceitos para a senha
    this.chars = "abcdefghijklmnopqrstuvwxyz";
    this.nums = "123456789";
    this.specialChars = "!@#$%&*";
    //Separando as strings com os caracteres em arrays
    this.arrChars = this.chars.split("");
    this.arrNums = this.nums.split("");
    this.arrSpecialChars = this.specialChars.split("");
    //Variável que contém a senha
    this.password = "";
  }
  getSpecialChar() {
    let iSpecialChars = Math.floor(Math.random() * this.arrSpecialChars.length);
    return (this.password += this.arrSpecialChars[iSpecialChars]);
  }
  getNums() {
    for (let i = 0; i <= 2; i++) {
      let iNums = Math.floor(Math.random() * this.arrNums.length);
      this.password += this.arrNums[iNums];
    }
    return this.password;
  }
  getChars() {
    for (let i = 0; i <= 5; i++) {
      let iChars = Math.floor(Math.random() * this.arrChars.length);
      let char =
        i < 2 ? this.arrChars[iChars].toUpperCase() : this.arrChars[iChars];
      this.password += char;
    }
    return this.password;
  }
  getPassword() {
    // Esvazia a váriavel para caso o método seja chamado novamente pela mesma instancia
    this.password = "";
    //
    this.getSpecialChar();
    this.getNums();
    this.getChars();
    let arrPw = this.password.split("");
    for (let i = arrPw.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrPw[i], arrPw[j]] = [arrPw[j], arrPw[i]];
    }
    this.password = arrPw.join("");
    return this.password;
  }
}
// Trecho de código para mostrar a senha em index.html
let pw = new passwordGenerator();
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("pw").innerHTML = pw.getPassword();
});
