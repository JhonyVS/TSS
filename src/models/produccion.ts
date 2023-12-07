

export class Produccion {


    public getProduccionDiaria(prob:number): number{

        var res = Math.floor(Math.random()*(5+1)+50);
        if(prob> 0.10 && prob<=0.25){
            res = Math.floor(Math.random()*(5+1)+55);
        }else if(prob> 0.25 && prob<=0.55){
            res = Math.floor(Math.random()*(5+1)+60);
        }else if(prob> 0.55 && prob<=0.90){
            res = Math.floor(Math.random()*(5+1)+65);
        }else if(prob> 0.90 && prob<=0.98){
            res = Math.floor(Math.random()*(5+1)+75);
        }else if(prob>0.98){
            res = Math.floor(Math.random()*(5+1)+80);
        }
        return res;
    }

    public getToneladasCamion(prob:number): number{
        
        var res = (Math.random()*(5+1)+40)/10;
        if(prob>0.30 && prob<=0.70){
            res = (Math.random()*(5+1)+45)/10;
        }else if(prob>0.70 && prob<=0.90){
            res = (Math.random()*(5+1)+50)/10;
        }else if(prob>0.90){
            res = (Math.random()*(5+1)+55)/10;
        }
        return res;

    }
}
