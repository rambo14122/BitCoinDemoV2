import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RequestProvider} from '../providers/request/request';
import {SettingProvider} from '../providers/setting/setting';
import {ComponentsModule} from "../components/components.module";
import {Clipboard} from '@ionic-native/clipboard';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {QRCodeModule} from 'angularx-qrcode';
import {QrComponent} from "../components/qr/qr";
import {ConfirmComponent} from "../components/confirm/confirm";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    QRCodeModule,
    ComponentsModule],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QrComponent,
    ConfirmComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
    SettingProvider,
    Clipboard,
    BarcodeScanner
  ]
})
export class AppModule {
}
