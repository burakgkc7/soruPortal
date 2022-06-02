import { Kategori } from './../../models/Kategori';
import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { SoruDialogComponent } from './../dialogs/soru-dialog/soru-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiServisService } from './../../services/api-servis.service';
import { Component, OnInit } from '@angular/core';
import { Soru } from 'src/app/models/Soru';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.css']
})
export class SoruComponent implements OnInit {
  soruKate:Soru['kategori'];
  sorular: Soru[];
  kategori:Kategori[];
  displayedColumns = ['soru1','detay',];
  dataSource: any;
  dialogRef:MatDialogRef<SoruDialogComponent>;
  constructor(
    public apiServis:ApiServisService,
    public matDialog:MatDialog,
    public alert:MyAlertService,
  ) { }

  ngOnInit() {
    this.SoruListele();
  }

  SoruListele(){
    this.apiServis.SoruListe().subscribe((d: Soru[])=>{
      this.sorular=d;
      this.dataSource= new MatTableDataSource(this.sorular);
    })
  }
 
  Filtrele(e: any){
    var deger= e.target.value;
    this.dataSource.filter=deger.trim().toLowerCase();
  }
  

  Ekle(){
    var yeniKayit:Soru=new Soru();
    this.dialogRef = this.matDialog.open(SoruDialogComponent, {
      width: '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    
      this.dialogRef.afterClosed().subscribe(d=>{
      if (d) {
        this.apiServis.SoruEkle(d).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if(s.islem) {
            this.SoruListele();
          }
        })
      }
      });    
  }
}
