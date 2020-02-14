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
    document.body.addEventListener('keydown', gererClavier);
}

function resetNiveau() {
    N.clearGrille();
    N = new Niveau(N.num);
    J = N.joueur;
    numNivCur = N.num;
}

// variables
let numNivCur;
let N = null;
let J = null;

// lancement
go()
document.getElementById("rec").onclick = resetNiveau;