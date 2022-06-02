import { CevapDialogComponent } from './../dialogs/cevap-dialog/cevap-dialog.component';
import { Soru } from 'src/app/models/Soru';
import { ActivatedRoute } from '@angular/router';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { Cevap } from './../../models/Cevap';
import { SoruDialogComponent } from './../dialogs/soru-dialog/soru-dialog.component';
import { MyAlertService } from './../../services/myAlert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiServisService } from './../../services/api-servis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevap',
  templateUrl: './cevap.component.html',
  styleUrls: ['./cevap.component.css']
})
export class CevapComponent implements OnInit {
  secSoru: Soru;
  displayedColumns = ['cevap1'];
  dataSource: any;
  dialogRef:MatDialogRef<CevapDialogComponent>;
  cevap: Cevap[];
  soruId: string;
  constructor(
    public apiServis:ApiServisService,
    public matDialog:MatDialog,
    public alert:MyAlertService,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.CevapListele();
    this.SoruGetir();
    this.route.params.subscribe((p: any) => {
      if (p) {
        this.soruId = p.soruId;
        this.SoruGetir();
        
      }
    });
  }
  CevapListele(){
    this.apiServis.CevapListe().subscribe((d: Cevap[])=>{
      this.cevap=d;
      this.dataSource= new MatTableDataSource(this.cevap);
    })
  }
  Ekle(){
    var yeniKayit:Cevap=new Cevap();
    this.dialogRef = this.matDialog.open(CevapDialogComponent, {
      width: '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    
      this.dialogRef.afterClosed().subscribe(d=>{
      if (d) {
        this.apiServis.CevapEkle(d).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if(s.islem) {
            this.CevapListele();
          }
        })
      }
      });    
  }
  SoruGetir() {
    this.apiServis.SorubyId(this.soruId).subscribe(d => {
      this.secSoru = d;
    });
  }
  
}
