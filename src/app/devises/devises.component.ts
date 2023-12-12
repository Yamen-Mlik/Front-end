import { Component, OnInit } from '@angular/core';
import { Devise } from '../model/devise';
import { NgForm } from '@angular/forms';
import { DevisesService } from '../services/devise.services.component';

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {
  devises: Array<Devise> = [];
  deviseCourante = new Devise();
  modeEdition: boolean = false;

  constructor(private devisesService: DevisesService) {}

  ngOnInit(): void {
    console.log("Initialisation du composant...");
    this.consulterDevises();
  }

  consulterDevises() {
    console.log("Récupérer la liste des devises");
    this.devisesService.getDevises().subscribe({
      next: data => {
        console.log("Succès GET devises");
        this.devises = data;
      },
      error: err => {
        console.log("Erreur GET devises", err);
      }
    });
  }

      
  supprimerDevise(d: Devise)
   {
    //Afficher une boite de dialogue pour confirmer la suppression
     let reponse:boolean =confirm("Voulez vous supprimer le devise :"+d.nomDevise+" ?");
     if (reponse==true)
     {
        console.log("Suppression confirmée..." );
        let index: number = this.devises.indexOf(d);
        console.log("indice du devise à supprimer: "+index);
        if (index !== -1) 
        {

          //supprimer dans le BackEnd  
          this.devisesService.deleteDevise(d.id).subscribe(
            {
              next: () => {
                console.log("Succès DELETE");
                // Supprimer dans la partie Front End  (dans le tableau produits)
                this.devises.splice(index, 1);
                console.log("Suppressio du produit:"+d.nomDevise);            
              },
              error: ()=> {
                console.log("Erreur DELETE");
              }
            }
            )     
          
        }
     }
     else
     {
      console.log("Suppression annulée..." );     
     } 
  }
  editerDevise(d: Devise)
  {
     this.deviseCourante.id=d.id;
     this.deviseCourante.nomDevise=d.nomDevise;
     this.deviseCourante.tauxEchange=d.tauxEchange;
     this.modeEdition=true;
 }

  validerFormulaire(form: NgForm) 
  {
    console.log(form.value);

      //flag pour distinguer entre le mode AJOUT et le mode EDIT
      let nouveau:boolean=true;
      let index=0;
      do{
       let d=this.devises[index];
        console.log(
          d.nomDevise + ': ' +
          d.tauxEchange);
  
            if (d.id==form.value.id)
            {
              //rendre le mode à EDIT
              nouveau=false;
              console.log('ancien');
              
              let reponse:boolean =confirm("devise  existant. Confirmez vous la mise à jour de :"+d.nomDevise+" ?");
              if (reponse==true)
                {
                    this.mettreAJourDevise(form.value , d);
                    this.modeEdition=false;                                   
                }
                else
                {
                  console.log("Mise à jour annulée");
                }              
              
              //Arrêter la boucle
              return;
            }
            else{
              //continuer à boucler
              index++;
            }           
      }
      while(nouveau && index<this.devises.length);
  }

  mettreAJourDevise(nouveau: Devise, ancien:Devise) {
    //mettre à jour dans le BackEnd  
    this.devisesService.updateDevise(ancien.id,nouveau)
    .subscribe(
      {
        next: ()=> {
          console.log("Succès PUT");
          //mettre à jour le produit aussi dans le tableau "produits" (FrontEnd)
          ancien.nomDevise=nouveau.nomDevise;
          ancien.tauxEchange=nouveau.tauxEchange;
            console.log('Mise à jour du Devise:'+ancien.nomDevise);
        },
        error: ()=> {
          console.log("Erreur PUT");
        }
      }
      )    
  }


}