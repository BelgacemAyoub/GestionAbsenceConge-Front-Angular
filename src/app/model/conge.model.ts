import { Data } from '@angular/router';
import { User } from './user.model';

export class Conge{

    constructor(
        public id : number,
        public dateDebut:  Data,
        public dateFin : Data,
        public raison : string,
        public confirmation : boolean,
        public payer : boolean,
        public user  : User

     ){}

}
