import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DevisesComponent } from './devises/devises.component';
import { AjoutDeviseComponent } from './ajout-devise/ajout-devise.component';
import { EchangedeviceComponent } from './echangedevice/echangedevice.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'devises', component: DevisesComponent },
  { path: 'ajouterDevises', component: AjoutDeviseComponent },
  { path: 'exchangeDevise', component: EchangedeviceComponent },
  { path: '', redirectTo: 'exchangeDevise', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
