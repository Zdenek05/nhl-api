import { Component, OnInit } from '@angular/core';
import { HockeyPlayer } from 'src/app/models/hockey.model';
import { HockeyService } from 'src/app/services/hockey.service';

@Component({
  selector: 'app-hockey-detail',
  templateUrl: './hockey-detail.page.html',
  styleUrls: ['./hockey-detail.page.scss'],
})
export class HockeyDetailPage {

  hockey: HockeyPlayer

  constructor(private hockeyService: HockeyService) { this.hockey = this.hockeyService.hockey! }

}
