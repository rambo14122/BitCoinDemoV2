import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SettingProvider} from "../../providers/setting/setting";
import {Clipboard} from '@ionic-native/clipboard';
import {QrComponent} from "../../components/qr/qr";
import {ConfirmComponent} from "../../components/confirm/confirm";

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  btcAmount;
  cnyAmount;
  convertRate = 1000;
  address = "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX";


  constructor(public navCtrl: NavController,
              public clipboard: Clipboard,
              public setting: SettingProvider,
              public modalCtrl: ModalController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  updateBtc() {
    this.cnyAmount = parseFloat(this.cnyAmount);
    this.btcAmount = this.cnyAmount / this.convertRate;
  }

  updateCny() {
    this.btcAmount = parseFloat(this.btcAmount);
    this.cnyAmount = this.convertRate * this.btcAmount;
  }

  copyToClipBoard(data) {
    this.clipboard.copy('Hello world');
    this.setting.presentToast("Copied:" + data);
  }

  presentContactModal() {
    let contactModal = this.modalCtrl.create(QrComponent,
      {address: this.address},
      {showBackdrop: true, enableBackdropDismiss: false});
    contactModal.present();
  }

  confirm() {
    let contactModal = this.modalCtrl.create(ConfirmComponent,
      {address: this.address, btcAmount: this.btcAmount},
      {showBackdrop: true, enableBackdropDismiss: false});
    contactModal.present();
  }


}
