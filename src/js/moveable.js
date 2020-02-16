class Moveable extends Element{

    constructor(x,y,id,str) {
        super(x,y,id,str);
    }

    mouvement(dx,dy) {
        if(0 <= this.coordX + dx && this.coordX + dx < 20 && 0 <= this.coordY + dy && this.coordY < 20){
            this.coordY += dy;
            this.coordX += dx;
            this.placer();
        }
    }

}