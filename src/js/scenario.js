function gererClavier(event) {
    let k = event.keyCode;
    let jX = J.coordX;
    let jY = J.coordY;;
    let caseJ;
    switch (k) {


        case 37 : // touche gauche
            caseJ = N.grille[jY][jX-1]
            if((caseJ !== null && !caseJ.isBrique()) || caseJ === null){
                J.mouvement(-1, 0);
            }
            break;

        case 38 : // touche haut
            caseJ = N.grille[jY-1][jX];
            if((caseJ !== null && !caseJ.isBrique()) || caseJ === null){
                J.mouvement(0, -1);
            }
            break;

        case 39 : // touche droite
            caseJ = N.grille[jY][jX+1];
            if((caseJ !== null && !caseJ.isBrique()) || caseJ === null){
                J.mouvement(1, 0);
            }
            break;

        case 40 : //touche bas
            caseJ = N.grille[jY+1][jX];
            if((caseJ !== null && !caseJ.isBrique()) || caseJ === null){
                J.mouvement(0, 1);
            }
            break;

        default :
            break;
    }
    if(N.allBoxesPlaced()){
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

function nextNiveau(){
    numNivCur = N.num;
    N.clearGrille();
    N = new Niveau(++numNivCur);
    J = N.joueur;
}

// variables
let numNivCur;
let N = null;
let J = null;

// lancement
go()
document.getElementById("rec").onclick = resetNiveau;