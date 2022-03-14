import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {




  constructor(public service: SeducService, private router: Router) {
    this.service.loggedIn = true;
  }

  ngOnInit(): void {
  }



}
