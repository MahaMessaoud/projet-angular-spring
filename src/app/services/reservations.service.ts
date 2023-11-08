import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservations } from '../model/Reservations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private url: String = 'http://localhost:8082';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };

  constructor(private http: HttpClient) {}
  getAllReservations() {
    return this.http.get('http://localhost:8082/allReservation');
  }
  addReservation(reservation: any) {
    return this.http.post(this.url + '/addReservation', reservation);  }
  deleteReservation(reser:Reservations):Observable<Reservations>{
    return this.http.delete<Reservations>('http://localhost:8082/deleteRes/'+reser.idReservation );
  }

  getReservationById(id: any) {
    return this.http.get('http://localhost:8082/reservationbyId/' + id);
   }

  updateReservation(id: number, reservation: Reservations): Observable<Reservations> {
    return this.http.put<Reservations>( 'http://localhost:8082/updateRes/' + id, reservation);
  }
}
