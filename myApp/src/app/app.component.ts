import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  mode: any;
  hasBackdrop: any;
  showFiller: any;

  constructor(){}

  ngOnInit(): void {}

  sendToLogIn(){}

}