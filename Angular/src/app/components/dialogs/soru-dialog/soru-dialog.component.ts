import { MatTableDataSource } from '@angular/material/table';
import { Soru } from './../../../models/Soru';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServisService } from './../../../services/api-servis.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-soru-dialog',
  templateUrl: './soru-dialog.component.html',
  styleUrls: ['./soru-dialog.component.css']
})
export class SoruDialogComponent implements OnInit {
  dialogBaslik: string;
  islem:string;
  frm:FormGroup;
  yeniKayit: Soru;
  constructor(
    public apiServis:ApiServisService,
    public matDialog:MatDialog,
    public frmBuild:FormBuilder,
    public dialogRef:MatDialogRef<SoruDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.islem=data.islem;
    this.yeniKayit=data.kayit;
    if (this.islem=='ekle'){
      this.dialogBaslik = "Soru Ekle";
    }
    this.frm = this.FormOlustur();
    
  }

  ngOnInit() {
  }

  FormOlustur(){
    return this.frmBuild.group({
      soru1:[this.yeniKayit.soru1]
    })
  }

}
