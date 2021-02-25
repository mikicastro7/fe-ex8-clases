class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  comunicar() {
    return "Comunicando";
  }
  morir() {
    this.estado = "muerto"
  }

}

class Rey extends Personajes{
  anyosReinado;

  comunicar(){
    return "Vais a morir todos";
  }
}

class Luchador extends Personajes{
  arma;
  destreza;

  set des(destreza){
    if(destreza > 10){
      this.destreza = 10;
    } else if (destreza < 0) {
      this.destreza = 0
    } else {
      this.destreza = destreza;
    }
  }

  comunicar(){
    return "Primero pego y luego pregunto";
  }
}

