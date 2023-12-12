import { Component, OnInit } from '@angular/core';
import { Devise } from '../model/devise';
import { NgForm } from '@angular/forms';
import { DevisesService } from '../services/devise.services.component';

@Component({
  selector: 'app-ajout-devise',
  templateUrl: './ajout-devise.component.html',
  styleUrls: ['./ajout-devise.component.css']
})
export class AjoutDeviseComponent implements OnInit {
  devises: Array<Devise> = [];
  nouvelleDevise = new Devise();

  constructor(private devisesService: DevisesService) {}

  ngOnInit(): void {
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

  validerFormulaire(form: NgForm) {
    console.log(form.value);
    this.ajouterDevises(form.value);
    form.reset();
  }


  
  ajouterDevises(nouveau: Devise) {
    console.log('nouveau');
      //ajouter dans le BackEnd  
      this.devisesService.addDevise(nouveau)
      .subscribe(
        {
          next: newDevise=> {
            console.log("Succès POST");
            console.log("Ajout d'un nouveau Devise:"+nouveau.nomDevise);            
          },
          error: err=> {
            console.log("Erreur POST");
          }
        }
        )    
  }
  
}