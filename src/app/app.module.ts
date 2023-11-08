import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReservationComponent } from './manageReservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './manageReservation/show-reservation/show-reservation.component';
import { DetailReservationComponent } from './manageReservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './manageReservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './manageReservation/delete-reservation/delete-reservation.component';
import { AddChambreComponent } from './manageChambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './manageChambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './manageChambre/update-chambre/update-chambre.component';
import { DeleteChambreComponent } from './manageChambre/delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './manageChambre/detail-chambre/detail-chambre.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReservationComponent,
    ShowReservationComponent,
    DetailReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    AddChambreComponent,
    ShowChambreComponent,
    UpdateChambreComponent,
    DeleteChambreComponent,
    DetailChambreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
