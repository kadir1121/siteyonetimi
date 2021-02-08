import { Aidat } from '../models/aidat';
import { Yonetici } from './../models/yonetici';
import { Daire } from '../models/daire';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {  

  private dbDaire = '/Daireler';
  private dbYoneticiler = '/Yoneticiler';
  private dbAidat = '/Aidatlar';

  daireRef: AngularFireList<Daire> = null;
  yoneticiRef: AngularFireList<Yonetici> = null;
  aidatRef: AngularFireList<Aidat> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.daireRef = db.list(this.dbDaire);
    this.yoneticiRef = db.list(this.dbYoneticiler);
    this.aidatRef = db.list(this.dbAidat);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }

  DaireListele() {
    return this.daireRef;
  }
  DaireEkle(k: Daire) {
    return this.daireRef.push(k);
  }
  DaireDuzenle(k: Daire) {
    return this.daireRef.update(k.key, k);
  }
  DaireSil(key: string) {
    return this.daireRef.remove(key);
  }

  YoneticiListele() {
    return this.yoneticiRef;
  }

  YoneticiEkle(k: Yonetici) {
    return this.yoneticiRef.push(k);
  }

  YoneticiDuzenle(k: Yonetici) {
    return this.yoneticiRef.update(k.key2, k);
  }

  YoneticiSil(key2: string) {
    return this.yoneticiRef.remove(key2);
  }

  AidatListele() {
    return this.aidatRef;
  }

  AidatEkle(k:  Aidat) {
    return this.aidatRef.push(k);
  }

  AidatDuzenle(k:  Aidat) {
    return this.aidatRef.update(k.key3, k);
  }

  AidatSil(key3: string) {
    return this.aidatRef.remove(key3);
  }
}
