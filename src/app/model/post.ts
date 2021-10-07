export class Post
{
    titre : string;
    description : string;
    categorie : string;
    date:Date;
    constructor ( titre : string,  description : string, categorie : string, date : Date)
  {
    this.titre = titre;
    this.description = description;
    this.categorie = categorie;
    this.date =date;
    
  }

}