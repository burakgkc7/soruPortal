import { Cevap } from './../../../models/Cevap';
import { ApiServisService } from './../../../services/api-servis.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cevap-dialog',
  templateUrl: './cevap-dialog.component.html',
  styleUrls: ['./cevap-dialog.component.css']
})
export class CevapDialogComponent implements OnInit {
  dialogBaslik: string;
  islem:string;
  frm:FormGroup;
  yeniKayit: Cevap;
  constructor(
    public apiServis:ApiServisService,
    public matDialog:MatDialog,
    public frmBuild:FormBuilder,
    public dialogRef:MatDialogRef<CevapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.islem=data.islem;
    this.yeniKayit=data.kayit;
    if (this.islem=='ekle'){
      this.dialogBaslik = "Cevap Ekle";
    }
    this.frm = this.FormOlustur();
    
  }
  ngOnInit() {
  }
  FormOlustur(){
    return this.frmBuild.group({
      cevap1:[this.yeniKayit.cevap1]
    })
  }
}
