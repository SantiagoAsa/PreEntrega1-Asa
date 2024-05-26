const PIEDRA = 1
const PAPEL = 2
const TIJERA = 3
const RIVAL = '💻'
let respuesta;

function mano(jugador, eleccion) {
    if (eleccion == PIEDRA) {
        alert(jugador + ' elige PIEDRA 🗿');
    } else if (eleccion == PAPEL) {
        alert(jugador + ' elige PAPEL 🧻');
    } else if (eleccion == TIJERA) {
        alert(jugador + ' elige TIJERA ✂');
    }
}

alert('Hermoso día para jugar "Piedra, papel o tijera", verdad? 😎... \nEl primero que llega a 3 puntos gana. \nComencemos!');
let nombre = prompt('Antes que nada, vamos a conocernos.  Cómo te llamás?');
alert('Se viene un duelo de titanes!... 💥 ' + nombre + ' vs. ' + RIVAL + ' 💥 ');

do {
    let ganadas = 0
    let perdidas = 0
    
    do {
        let jugada_usuario = Number(prompt(nombre + ' elige con números: \n1- Piedra 🗿 \n2- Papel 🧻 \n3- Tijera ✂'));

        while (jugada_usuario !== 1 && jugada_usuario !== 2 && jugada_usuario !== 3) {
            alert('Por favor, ingresa 1, 2 o 3.');
        jugada_usuario = Number(prompt(nombre + ' elige con números: \n1- Piedra 🗿 \n2- Papel 🧻 \n3- Tijera ✂'));
        }
        
        mano(nombre, jugada_usuario);

        alert('Veamos que elige el 💻... ⏳');

        let jugada_pc = Math.floor(Math.random() * 3) + 1;
    
        mano(RIVAL, jugada_pc);

        if (jugada_usuario == jugada_pc) {
            alert('Esto es un EMPATE! 🤝');
        } else if ((jugada_usuario == TIJERA && jugada_pc == PIEDRA) || (jugada_usuario == PIEDRA && jugada_pc == PAPEL) || (jugada_usuario == PAPEL && jugada_pc == TIJERA)) {
            alert('Lo siento, PERDISTE! 👎');
            perdidas++;
        } else {
            alert('Sos crack, GANASTE! 🙌');
            ganadas++;
        }   alert('\nPerdidas: ' + perdidas + ' \nGanadas: ' + ganadas);

    
        if (ganadas === 3) {
            alert('FELICITACIONES ' + nombre + ' ! Sos imbatible en 🗿🧻✂!');
        }   else if (perdidas === 3) {
            alert('QUE MALA SUERTE ' + nombre + ' ! Parece que el 💻 te tiene de hijo.');
        }

    } while (ganadas !== 3 && perdidas !== 3);

    respuesta = confirm('Querés seguir jugando?');

} while (respuesta);

alert("Gracias por jugar, hasta la próxima! 👋");

