import { Cevap } from './../models/Cevap';
import { Kategori } from './../models/Kategori';
import { Soru } from './../models/Soru';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sonuc } from '../models/Sonuc';

@Injectable({
  providedIn: 'root'
})
export class ApiServisService {
  apiUrl="http://localhost:33055/api/"
  
  constructor(
    public http:HttpClient
  ) { }
  
  SorubyId(soruId:string){
    return this.http.get<Soru>(this.apiUrl+"sorubyid/"+soruId);
  }

  SoruListe(){
    return this.http.get<Soru[]>(this.apiUrl+"soruliste");
  }

  SoruEkle(soru:Soru){
    return this.http.post<Sonuc>(this.apiUrl+"soruekle", soru);
  }
  
  SoruDuzenle(soru:Soru){
    return this.http.put("soruduzenle", soru);
  }

  SoruSil(soruId:string){
    return this.http.delete(this.apiUrl+"sorusil/"+soruId);
  }
  
  KategoribyId(kategoriId:string){
    return this.http.get<Kategori[]>(this.apiUrl+"kategoribyid/"+kategoriId);
  }

  KategoriListe(){
    return this.http.get<Kategori[]>(this.apiUrl+"kategoriliste");
  }

  KategoriEkle(kat:Kategori){
    return this.http.post(this.apiUrl+"kategoriekle", kat);
  }
  
  KategoriSil(kategoriId:string){
    return this.http.delete(this.apiUrl+"kategorisil/"+kategoriId);
  }

  CevapbyId(cevapId:string){
    return this.http.get(this.apiUrl+"cevapbyid/"+cevapId);
  }

  CevapListe(){
    return this.http.get<Cevap[]>(this.apiUrl+"cevapliste");
  }

  CevapEkle(cevap:Cevap){
    return this.http.post<Sonuc>(this.apiUrl+"cevapekle", cevap);
  }
  
  CevapDuzenle(cevap:Cevap){
    return this.http.put("cevapduzenle", cevap);
  }

  CevapSil(cevapId:string){
    return this.http.delete(this.apiUrl+"cevapsil/"+cevapId);
  }

  /*   Oturum İşlemleri Başla  */
  tokenAl(kadi: string, parola: string) {
    var data = "username=" + kadi + "&password=" + parola + "&grant_type=password";
    var reqHeader = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    return this.http.post(this.apiUrl + "/token", data, { headers: reqHeader });
  }
  oturumKontrol() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }



  /*   Oturum İşlemleri Bitiş  */
}
