import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PaymentPage} from './payment';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PaymentPage),
  ],
})
export class PaymentPageModule {
}
