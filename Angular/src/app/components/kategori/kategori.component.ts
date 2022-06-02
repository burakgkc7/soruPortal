import { SoruDialogComponent } from './../dialogs/soru-dialog/soru-dialog.component';
import { MyAlertService } from './../../services/myAlert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiServisService } from './../../services/api-servis.service';
import { Kategori } from './../../models/Kategori';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  kategoriler:Kategori[];
  secSoru: string;
  soruId: string ;
  displayedColumns = ['kategori1','sorular'];
  dataSource: any;
  dialogRef:MatDialogRef<SoruDialogComponent>;
  constructor(
    public apiServis:ApiServisService,
    public matDialog:MatDialog,
    public alert:MyAlertService,
  ) { 
    
  }

  ngOnInit() {
    this.KategoriListele();
  }

  Filtrele(e: any){
    var deger= e.target.value;
    this.dataSource.filter=deger.trim().toLowerCase();
  }
  
  KategoriListele(){
    this.apiServis.KategoriListe().subscribe((d: Kategori[])=>{
      this.kategoriler=d;
      this.dataSource= new MatTableDataSource(this.kategoriler);
    })
  }
}
