export function validarInputNumeroCharKeyInput(evento) {
  return (evento.charCode >= 48 && evento.charCode <= 57)
    || evento.keyCode === 37
    || evento.keyCode === 39
    || evento.keyCode === 27
    || evento.keyCode === 8
    || evento.keyCode === 9
    || evento.keyCode === 13
    || evento.keyCode === 18
    || evento.keyCode === 17
    || evento.keyCode === 35
    || evento.keyCode === 36
    || evento.keyCode === 67
    || evento.keyCode === 86
    || evento.keyCode === 67
    || evento.keyCode === 46
    || evento.charCode === 118
    || evento.charCode === 120
    || evento.charCode === 99;
}
