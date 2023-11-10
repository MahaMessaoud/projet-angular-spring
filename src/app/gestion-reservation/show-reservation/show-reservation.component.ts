import { ReservationsService } from 'src/app/services/reservations.service';
import { Reservations } from '../../model/Reservations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.scss']
})
export class ShowReservationComponent implements OnInit{
reservations:any[]=[];
constructor(private sReservation:ReservationsService,private router:Router){}
ngOnInit(): void {
  this.sReservation.getAllReservations().subscribe((data:any)=>{
    console.log(data);
    this.reservations=data;
  });
}
addReservation() {
  this.router.navigate(['addRes']); // Naviguer vers la page d'ajout
}
showDetails(idReservation: any) {
  this.router.navigate(['/detailRes', idReservation]);}

deleteReservation(resv: Reservations) {
  this.sReservation.deleteReservation(resv).subscribe((data) => {
    console.log(data);
  }); }
editReservation(idReservation: any) {
  this.router.navigate(['/updateRes', idReservation]);}

}
