import {NgModule} from '@angular/core';
import {QrComponent} from './qr/qr';
import {ConfirmComponent} from './confirm/confirm';
import {QRCodeModule} from "angularx-qrcode";
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [QrComponent,
    ConfirmComponent],
  imports: [QRCodeModule,
    IonicModule],
  exports: [QrComponent,
    ConfirmComponent]
})
export class ComponentsModule {
}
