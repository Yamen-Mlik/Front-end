import { Component } from '@angular/core';
import { Devise } from '../model/devise';
import { DevisesService } from '../services/devise.services.component';

@Component({
  selector: 'app-echangedevice',
  templateUrl: './echangedevice.component.html',
  styleUrls: ['./echangedevice.component.css']
})
export class EchangedeviceComponent {
nomDevise: any;
public resultats: Devise[] = [];
searchTerm: string = '';
onSelectChange() {
  this.getAmount();

}
calculateTauxEchange(): number {
  if (this.deviseCourante && this.deviseCourante.tauxEchange !== undefined) {
    return this.deviseCourante.tauxEchange * this.value;
  }
  return 0; // or handle the case where deviseCourante or deviseCourante.tauxEchange is undefined
}
  devises: Array<Devise> = [];
  deviseCourante: Devise | undefined; // Replace 'Devise' with the actual type of 'deviseCourante'
  value: number = 0
    modeEdition: boolean = false;
select : number =0 ;

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
  getAmount() {
    console.log("Récupérer la liste des devises");
    this.devisesService.getAmount(this.select).subscribe({
      next: data => {
        console.log("Succès GET devises");
        console.log("data");
        console.log(data);
        this.deviseCourante = data;
      },
      error: err => {
        console.log("Erreur GET devises", err);
      }
    });
  }
  rechercher(name: string): void {
    // Utilisation du service pour effectuer la recherche avec le nom de la devise
    this.devisesService.searchDevise(name).subscribe(
      (resultats: Devise[]) => {
        // Succès : Mettez à jour les résultats avec les données reçues
        this.resultats = resultats;
      },
      
      (erreur: any) => {
        // Erreur : Affichez un message d'erreur dans la console
        console.error('Erreur lors de la recherche des devises', erreur);
      }
    );
  }
  
  
}


 

