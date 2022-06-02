import { MatTableDataSource } from '@angular/material/table';
import { Soru } from 'src/app/models/Soru';
import { Kayit } from './../../models/katKayit';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiServisService } from './../../services/api-servis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-k-sorulistele',
  templateUrl: './k-sorulistele.component.html',
  styleUrls: ['./k-sorulistele.component.css']
})
export class KSorulisteleComponent implements OnInit {
  kayitlar:Kayit[];
  soruKate:Soru['kategori'];
  soru1:Soru['soru1'];
  secSoru: Soru['soru1'];
  soruId: string;
  dataSource:any;
  constructor(
    public apiServis:ApiServisService,
    public alert:MyAlertService,
    public route:ActivatedRoute,
  ) { }

  ngOnInit()  {
    this.route.params.subscribe(p=> {
      console.log(p);
    })
  }
  //SorKateListele(){
    //this.apiServis.SoruListe().subscribe((d: Soru[])=>{
      //this.secSoru=d;
      //this.dataSource= new MatTableDataSource(this.soru1);
    //})
  //}

}
