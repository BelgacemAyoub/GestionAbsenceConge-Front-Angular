import { User } from './user.model';

export class Absence{

  id: number;
  dateDebut: Date;
  dateFin: Date;
  user: User;


constructor (id: number, dateDebut: Date, dateFin: Date, user: User) {

        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin =dateFin;
        this.user =user;        
}

}