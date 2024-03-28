import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  km='';
  DT=0;
  VE=0;
  VM=0;

  constructor() {}


  Calcular(){
    this.DT=parseFloat(this.km)*3.50;
    if (this.DT < 150) {
      this.VE=(this.DT)*0.25;
      this.VM=(this.DT)*0.75;
    }else {
      this.VE=(this.DT)*0.2;
      this.VM=(this.DT)*0.8;
    }

    }
  }

