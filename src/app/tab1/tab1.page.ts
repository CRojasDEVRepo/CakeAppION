import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public textScan: string = '';

  constructor(private barcodeScanner: BarcodeScanner) {}

  public launchCamera(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.textScan = barcodeData.text;
    }).catch(error => {
      this.textScan = error;
    })    
  }
}
