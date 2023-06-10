import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-materi',
  templateUrl: './materi.page.html',
  styleUrls: ['./materi.page.scss'],
})
export class MateriPage implements OnInit {

  public userLatitude: number = 0;
  public userLongitude: number = 0;
  public attendanceLatitude: number = 0;
  public attendanceLongitude: number = 0;
  public distance: number = 0;
  public maxDistance: number = 100;


  constructor(
    private geolocation: Geolocation
  ) { }

  async getCurrentLocation() {
    try {
      const position: Geoposition = await this.geolocation.getCurrentPosition();
      this.userLatitude = position.coords.latitude;
      this.userLongitude = position.coords.longitude;

      this.distance = this.calculateDistance(
        this.userLatitude,
        this.userLongitude,
        this.attendanceLatitude,
        this.attendanceLongitude
      );
    } catch (error) {
      console.error('Error saat mendapatkan lokasi', error);
    }
  }

  async kirimAbsen(absen: any) {
    try {
      const position: Geoposition = await this.geolocation.getCurrentPosition();
      this.userLatitude = position.coords.latitude;
      this.userLongitude = position.coords.longitude;

    } catch (error) {
      console.error('Error saat mendapatkan lokasi', error);
    }

    const url = 'http://test.jamaahcoding.my.id/api/save-presensi';
    const token = localStorage.getItem('token');

    const data = {
      status: absen,
      latitude: this.userLatitude,
      longitude: this.userLongitude,
      // 'masuk' atau 'keluar'
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });

    // const json = await res.json();
    // this.pemilihans = json.data;
  }

  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    return Math.acos(dist) * (180 / Math.PI) * 60 * 1.1515 * 1.609344 * 1000;
  }


  ngOnInit() {
  }

}
