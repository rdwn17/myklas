import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.page.html',
  styleUrls: ['./tugas.page.scss'],
})
export class TugasPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  doBack(){
    this.router.navigateByUrl('tabs')
  }
  goFormTugas(){
    this.router.navigateByUrl('formtugas')
  }

  ngOnInit() {
  }

}
