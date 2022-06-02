import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>; 
  constructor(
    public alert:MyAlertService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  AlertAc(p:boolean){
    
    var s:Sonuc=new Sonuc();
    s.islem=p;
    s.mesaj="Bu bir alert mesajı";
    
    this.alert.AlertUygula(s);
  }


  ConfirmAc(){
    this.confirmDialogRef=this.matDialog.open(ConfirmDialogComponent, {width:'300px'});
    this.confirmDialogRef.componentInstance.dialogMesaj="Kayıt silinecektir onaylıyor musunuz";
  }
}
