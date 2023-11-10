import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { AddReservationComponent } from './gestion-reservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './gestion-reservation/show-reservation/show-reservation.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './gestion-reservation/update-reservation/update-reservation.component';

const routes: Routes = [
  {
    path:'addch',component: AddChambreComponent
  },
  {
    path:'allch',component: ShowChambreComponent
  },
  {path:'detailCh/:idChambre',component: DetailChambreComponent},
  {path:'updateCh/:idChambre',component: UpdateChambreComponent},
  {path:'addRes',component:AddReservationComponent},
  {path:'allres',component:ShowReservationComponent},
  {path:'detailRes/:idReservation',component:DetailReservationComponent},
  {path:'updateRes/:idReservation',component:UpdateReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
