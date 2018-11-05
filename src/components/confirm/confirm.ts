import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {HomePage} from "../../pages/home/home";

/**
 * Generated class for the ConfirmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmComponent {

  address;
  btcAmount;

  constructor(public navParam: NavParams,
              public navCtrl: NavController) {
    this.address = this.navParam.get("address");
    this.btcAmount = this.navParam.get("btcAmount");
  }

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }

}
