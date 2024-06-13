import { Component } from '@angular/core';
import { HockeyPlayer } from '../models/hockey.model';
import { HockeyService } from '../services/hockey.service';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  private playersOrigin: HockeyPlayer[] = []
  players$: Observable<HockeyPlayer[]>

  constructor(private hockeyService: HockeyService) {

    this.players$ = this.hockeyService.index$()
    .pipe(tap(players => {
      this.playersOrigin = players
    }))
  }

  searchHockey(event: CustomEvent) {
    const value = event.detail.value.toLowerCase()

    const filteredPlayers = this.playersOrigin.filter(player => {
      return player.name.toLowerCase().includes(value);
    })
    this.players$ = of(filteredPlayers);
  }

  transferHockey(hockey:HockeyPlayer){
    this.hockeyService.hockey = hockey
  }
}
