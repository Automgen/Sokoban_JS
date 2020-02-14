class Niveau {

    constructor(num) {
        this.num = num;
        this.joueur = null;
        let modelGrille = Niveau.lireFichierTexte(`./niveaux/niveau${this.num}`);
        this.grille = [];
        for (let i = 0; i < modelGrille.length; i++) {
            let ligne = [];
            for (let j = 0; j < modelGrille[i].length; j++) {
                switch (modelGrille[i][j]) {
                    case ('b'):
                        ligne.push(new Brique(j, i));
                        break;

                    case ('c'):
                        ligne.push(new Caisse(j, i));
                        break;

                    case ('d'):
                        ligne.push(new Drapeau(j, i));
                        break;

                    case('j'):
                        this.joueur = new Joueur(j, i);
                        ligne.push(null);
                        break;

                    default:
                        ligne.push(null);
                        break;
                }
            }
            this.grille.push(ligne);
        }
    }

    static lireFichierTexte(fichier) {
        //On lance la requête pour récupérer le fichier
        let fichierBrut = new XMLHttpRequest();
        let grille = undefined;
        fichierBrut.open("GET", fichier, false);
        //On utilise une fonction sur l'événement "onreadystate"
        fichierBrut.onreadystatechange = function () {
            if(fichierBrut.readyState === 4) {
                //On contrôle bien quand le statut est égal à 0
                if(fichierBrut.status === 200 || fichierBrut.status == 0) {
                    //On peut récupérer puis traiter le texte du fichier
                    let texteComplet = fichierBrut.responseText;
                    grille = Niveau.stringToTab(texteComplet);
                }
            }
        }
        fichierBrut.send(null);
        return grille
    }


    static stringToTab(str) {
        let res = [];
        let lignes = str.split("\n");
        for (let i = 0; i < lignes.length; i++) {
            let ligne = [];
            for (let j = 0; j < lignes[i].length; j++) {
                let curChar = lignes[i].charAt(j);
                if(curChar !== ':'){
                    ligne.push(curChar);
                }
            }
            res.push(ligne);
        }
        return res;
    }

}