
import { Sonuc3 } from './../../models/sonuc3';
import { Aidat } from '../../models/aidat';
import { Sonuc2 } from './../../models/sonuc2';
import { Yonetici } from '../../models/yonetici';
import { Sonuc } from './../../models/sonuc';
import { Daire } from '../../models/daire';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './yoneticiler.component.html',
  styleUrls: ['./yoneticiler.component.scss']
})
export class YoneticilerComponent implements OnInit {
  daireler;
  yoneticiler;
  aidatlar;
  secAidat:  Aidat = new  Aidat();
  secDaire: Daire = new Daire();
  secYonetici: Yonetici = new Yonetici();
  sonuc: Sonuc = new Sonuc();
  sonuc2: Sonuc2 = new Sonuc2();
  sonuc3: Sonuc3 = new Sonuc3();
  ekleduzenle: boolean = false;
  ekleduzenle2: boolean = false;
  ekleduzenle3: boolean = false;
  detay: boolean = false;
  detay2: boolean = false;
  detay3: boolean = false;
  silme: boolean = false;
  silme2: boolean = false;
  silme3: boolean = false;
  Yoneticiler: { key2: string; YoneticiAdi: string; Sitesi: string; islem2: boolean; }[];

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.DaireListele();
    this.YoneticiListele();
    this. AidatListele();
  }
  YoneticiListele() {
    this.fbServis.YoneticiListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key2: c.payload.key, ...c.payload.val() })

          )
          )
    ).subscribe(data => {
      this.yoneticiler = data;
    })
  }

  AidatListele() {
    this.fbServis. AidatListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key3: c.payload.key, ...c.payload.val() })

          )
          )
    ).subscribe(data => {
      this.aidatlar = data;
    })
  }

  DaireListele() {
    this.fbServis.DaireListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.daireler = data;
    });
  }

  Kaydet() {
    var tarih = new Date();
    if (this.secDaire.key == null) {
      this.secDaire.kayTarih = tarih.getTime().toString();
      this.secDaire.duzTarih = tarih.getTime().toString();
      this.secDaire.islem = false;
      this.fbServis.DaireEkle(this.secDaire).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Daire Eklendi";
      });
     
    } else {
      this.secDaire.duzTarih = tarih.getTime().toString();
      this.secDaire.islem = false;
      this.secYonetici.islem2 = false;
      this.fbServis.DaireDuzenle(this.secDaire).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Daire Güncellendi";
      });
      
    }
  }

 Kaydet2() {
   if (this.secYonetici.key2 == null){
     this.secYonetici.islem2 = false;
     this.fbServis.YoneticiEkle(this.secYonetici).then(d => {
       this.sonuc2.islem2 = true;
       this.sonuc2.mesaj2 = "Yönetici Eklendi";
     })
   } else {
    this.fbServis.YoneticiDuzenle(this.secYonetici).then(d => {
      this.sonuc2.islem2 = true;
      this.sonuc2.mesaj2 = "Yönetici Güncellendi";
    });
  
   }
 }

 Kaydet3() {
  if (this.secAidat.key3 == null){
    this.secAidat.islem3 = false;
    this.fbServis. AidatEkle(this.secAidat).then(d => {
      this.sonuc3.islem3 = true;
      this.sonuc3.mesaj3 = " Aidat Eklendi";
    })
  } else {
   this.fbServis. AidatDuzenle(this.secAidat).then(d => {
     this.sonuc3.islem3 = true;
     this.sonuc3.mesaj3 = " Aidat Güncellendi";
   });
 
  }
}


  DaireSec(k: Daire) {
    Object.assign(this.secDaire, k);

  }

  YoneticiSec(k: Yonetici) {
    Object.assign(this.secYonetici, k);

  }

  AidatSec(k:  Aidat) {
    Object.assign(this.secAidat, k);

  }

  Sil() {

    this.fbServis.DaireSil(this.secDaire.key).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Daire Silindi";
      this.silme = false;
    });
  }
  

  Sil2() {
    this.fbServis.YoneticiSil(this.secYonetici.key2).then(d => {
      this.sonuc2.islem2 = true;
      this.sonuc2.mesaj2 = "Yönetici Silindi";
      this.silme2 = false;
    });
  }

  Sil3() {
    this.fbServis. AidatSil(this.secAidat.key3).then(d => {
      this.sonuc3.islem3 = true;
      this.sonuc3.mesaj3 = "Aidat Silindi";
      this.silme3 = false;
    });
  }

  TamamlaIptal(k: Daire, islem: boolean) {
    var tarih = new Date();
    k.duzTarih = tarih.getTime().toString();
    k.islem = islem;
    this.fbServis.DaireDuzenle(k).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Daire Güncellendi";
    });

  }

  TamamlaIptal2(k: Yonetici, islem: boolean) {
   
    k.islem2 = islem;
    this.fbServis.YoneticiDuzenle(k).then(d => {
      this.sonuc2.islem2 = true;
      this.sonuc2.mesaj2 = "Yonetici Güncellendi";
    });

  }

  TamamlaIptal3(k:  Aidat, islem: boolean) {
   
    k.islem3 = islem;
    this.fbServis. AidatDuzenle(k).then(d => {
      this.sonuc3.islem3 = true;
      this.sonuc3.mesaj3 = "Aidat Güncellendi";
    });

  }

  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
}
