import { Routes } from '@angular/router';
import { Pharmacies } from './pharmacies/pharmacies';
import { AddPharmacie } from './add-pharmacie/add-pharmacie';

export const routes: Routes = [
  { path: 'pharmacies', component: Pharmacies },
  { path: 'add-pharmacie', component: AddPharmacie },
  { path: '', redirectTo: 'pharmacies', pathMatch: 'full' }
];