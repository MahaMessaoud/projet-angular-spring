import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './manageChambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './manageChambre/show-chambre/show-chambre.component';
import { DetailChambreComponent } from './manageChambre/detail-chambre/detail-chambre.component';
import { UpdateChambreComponent } from './manageChambre/update-chambre/update-chambre.component';
import { AddReservationComponent } from './manageReservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './manageReservation/show-reservation/show-reservation.component';
import { DetailReservationComponent } from './manageReservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './manageReservation/update-reservation/update-reservation.component';

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
