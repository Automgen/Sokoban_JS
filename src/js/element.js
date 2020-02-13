class Element {

    /**
     * @param x : int coordonnée x
     * @param y : int coordonnée y
     * @param id : String type d'élément
     * @param str : String chemin relatif vers la source du sprite
     */
    constructor(x,y,id,str){
        this.coordX = x;
        this.coordY = y;
        this.id = id;
        this.sprite = document.getElementById(this.id);
        this.setSrc(str);
        this.placer();
    }

    setSrc(str){
        this.sprite.src = str;
    }

    placer() {
        this.sprite.style.left = `${51+(this.coordX)*20}px`;
        this.sprite.style.top = `${51+(this.coordY)*20}px`;
    }

}