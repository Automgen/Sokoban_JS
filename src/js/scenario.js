function gererClavier(event) {
    let k = event.keyCode;
    switch (k) {
        case 37 : // touche gauche
            J.mouvement(-1, 0);
            break;

        case 38 : // touche haut
            J.mouvement(0, -1);
            break;

        case 39 : // touche droite
            J.mouvement(1, 0);
            break;

        case 40 : //touche bas
            J.mouvement(0, 1);
            break;

        default :
            break;
    }
    if(G.allBoxesPaced()){
        document.body.removeEventListener('keydown', gererClavier);
    }
}

function go() {
    numNivCur = 1;
    N = new Niveau(numNivCur);
    J = N.joueur;
}

// variables
let numNivCur;
let N = null;
let J = null;