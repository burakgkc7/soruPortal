import { CevapDialogComponent } from './components/dialogs/cevap-dialog/cevap-dialog.component';
import { CevapComponent } from './components/cevap/cevap.component';
import { KSorulisteleComponent } from './components/k-sorulistele/k-sorulistele.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { SoruDialogComponent } from './components/dialogs/soru-dialog/soru-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { SoruComponent } from './components/soru/soru.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MyAlertService } from './services/myAlert.service';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
    SoruComponent,
    MainNavComponent,
    LoginComponent,
    SoruDialogComponent,
    KategoriComponent,
    KSorulisteleComponent,
    CevapComponent,
    CevapDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    AlertDialogComponent,
    ConfirmDialogComponent,
    SoruDialogComponent,
    CevapDialogComponent,
  ],
  providers: [MyAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
