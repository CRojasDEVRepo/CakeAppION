import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../shared/services/storage-service/storage.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private storageService: StorageService, 
    private navCtrl: NavController) { }

  ngOnInit() {
    this.validateSession();
  }

  private async validateSession(){
    const token = await this.storageService.get('token');
    this.redirect(token ? '/home' : '/signin')
  }

  private redirect (path: string){
    this.navCtrl.navigateRoot(path)
  }

}
