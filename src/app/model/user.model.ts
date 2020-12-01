export class User{
        id: number;
	  login: string;
	  password: string;
	  nom: string;
	  prenom: string;
	  mail: string;
	  tel: string;
          accepted: boolean;
          absences: any;
          conges: any;
          reclamations: any;
          roles: string;
          soldeConge : number;

constructor (id: number, login: string, password: string, nom: string, 
             prenom: string, mail: string, tel: string,accepted: boolean, 
             absences: any, conges: any, reclamations: any, roles: string,soldeConge : number) {

            this.id = id;
            this.login = login;
            this.password =password;
            this.nom =nom;
            this.prenom =prenom;
            this.mail =mail;
            this.tel =tel;
            this.accepted =accepted;
            this.absences = absences;
            this.conges = conges;
            this.reclamations = reclamations;      
            this.roles = roles; 
            this.soldeConge =soldeConge;

}
    
}