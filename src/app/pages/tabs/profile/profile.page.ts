import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  item:any;

  async getAllPemilihan() {
    const res = await fetch('https://test.jamaahcoding.my.id/api/profil', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });

    const json = await res.json();
    this.item = json.data;
  }

  constructor(
    private router : Router
  ) { }

  EditProfile(){
    this.router.navigateByUrl('edit-profile')
  }
  ngOnInit() {
    this.getAllPemilihan();
  }

}
