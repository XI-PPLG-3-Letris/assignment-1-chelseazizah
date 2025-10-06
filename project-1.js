/* program kalkulator sederhana
req : 
  - menggunakan variabel es6
  - menggunakan arrow function
  - menggunakan operator => +,-,*,/,**,%
  */
  
  let a =20;
  let b =2;
  
  const pertambahan = () => {
    let c = a + b;
    return c
  }
  
  const pengurangan = () => {
    let c = a - b;
    return c
  }
  
const perkalian = () => {
    let c = a * b;
    return c
  }
  
const pembagian = () => {
    let c = a / b;
    return c
  }
  
const perpangkatan = () => {
    let c = a ** b;
    return c
  }
  
const sisabagi = () => {
    let c = a % b;
    return c
  }
  
console.log(`hasil dari ${a} + ${b} = ${pertambahan()}`);
console.log(`hasil dari ${a} - ${b} = ${pengurangan()}`);
console.log(`hasil dari ${a} * ${b} = ${perkalian()}`);
console.log(`hasil dari ${a} / ${b} = ${pembagian()}`);
console.log(`hasil dari ${a} ** ${b} = ${perpangkatan()}`);
console.log(`hasil dari ${a} % ${b} = ${sisabagi()}`);