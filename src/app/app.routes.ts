import { Routes } from '@angular/router';
import { Pharmacies } from './pharmacies/pharmacies';
import { AddPharmacie } from './add-pharmacie/add-pharmacie';
import { UpdatePharmacie } from './update-pharmacie/update-pharmacie';

export const routes: Routes = [
  { path: 'pharmacies', component: Pharmacies },
  { path: 'add-pharmacie', component: AddPharmacie },
  { path: 'updatePharmacie/:id', component: UpdatePharmacie },
  { path: '', redirectTo: 'pharmacies', pathMatch: 'full' }
];