import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/services/storage-service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.init();
  }
}
