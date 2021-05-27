import { Component, OnInit } from '@angular/core';
import { FingerprintSigninControl } from '../util/fingerprint-signin-control'

@Component({
  selector: 'app-lector-huella',
  templateUrl: './lector-huella.component.html',
  styleUrls: ['./lector-huella.component.css']
})
export class LectorHuellaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let test: FingerprintSigninControl = new FingerprintSigninControl();
    test.init();
    test.start();
  }

}
