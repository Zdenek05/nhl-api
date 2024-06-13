import { Injectable } from '@angular/core';
import { HockeyPlayer } from '../models/hockey.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HockeyService {

  hockey?: HockeyPlayer

  constructor(private http: HttpClient) { 

  }
  index$() {
    return this.http.get<HockeyPlayer[]>(environment.apiUrl + "/search/player?culture=en-us&limit=100&q=*&active=true")
  }
}
