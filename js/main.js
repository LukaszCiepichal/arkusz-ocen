const button = document.querySelector("button");
const uczniowie = document.querySelectorAll("#uczniowie>div[id^='uczen']");
let dodanePunktyZaDodatkowe = false;
const obliczSrednia = () => {
  for (let i = 0; i < uczniowie.length; i++) {
    let przedmioty = uczniowie[i].querySelectorAll("input[type=number]");
    let zajeciaDodatkowe = uczniowie[i].querySelector(".zajecia-dodatkowe");

    // zajecia dodatkowe
    if (zajeciaDodatkowe.value && !dodanePunktyZaDodatkowe) {
      let zajeciaDodatkoweSplit = zajeciaDodatkowe.value.split(",");
      for (let k = 0; k < zajeciaDodatkoweSplit.length; k++) {
        let przedmiotDodatkowyOcena = uczniowie[i].querySelector("." + zajeciaDodatkoweSplit[k].trim()).value
        if (przedmiotDodatkowyOcena < 6) {
          let OcenaUp = Number(uczniowie[i].querySelector("." + zajeciaDodatkoweSplit[k].trim()).value) + 0.5
          uczniowie[i].querySelector("." + zajeciaDodatkoweSplit[k].trim()).value = OcenaUp
        }
      }
    }

    // srednia
    let srednia = 0;
    for (let j = 0; j < przedmioty.length; j++) {
      srednia += Number(przedmioty[j].value);
      if (przedmioty[j].value == 1) {
        uczniowie[i].classList.add('red')
      }
    }
    srednia = srednia / przedmioty.length;
    uczniowie[i].querySelector(".srednia").innerText = srednia.toFixed(2);

    //koloruj
    if (Number(uczniowie[i].querySelector(".srednia").innerText) > 4.75) {
      uczniowie[i].classList.add('green')
    }
  }

  //nie dodawaj kolejnych punktów za dodatkowe przedmioty
  dodanePunktyZaDodatkowe = true;
}


button.addEventListener("click", obliczSrednia);