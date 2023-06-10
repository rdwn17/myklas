import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-detailmateri',
  templateUrl: './detailmateri.page.html',
  styleUrls: ['./detailmateri.page.scss'],
})
export class DetailmateriPage implements OnInit {

  DataUser:any;
  nim:any;


  constructor(
    private route: ActivatedRoute,
    private api : ApiServiceService,

  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.nim = param.nim;
      console.log(this.nim);
      this.GetMateri(this.nim);
    });
  }

  GetMateri(nim:any){
    this.api.GetDetailMateri(nim).subscribe((res:any) =>{
      this.DataUser = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
      console.log('berhasil')
    });
  }

  // getPhotoFromAPI(nim:any) {

  //   this.api.GetFileMateri(nim).subscribe((res:any) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         this.imageUrl = reader.result as string;
  //       };
  //       reader.readAsDataURL(response);
  //     }, (error) => {
  //       console.log('Error:', error);
  //     });
  // }

  // getPDFFromAPI() {
  //   const pdfUrl = '<pdf_api_endpoint>';

  //   this.http.get(pdfUrl, { responseType: 'blob' })
  //     .subscribe((response: Blob) => {
  //       const file = new Blob([response], { type: 'application/pdf' });
  //       this.pdfUrl = URL.createObjectURL(file);
  //     }, (error) => {
  //       console.log('Error:', error);
  //     });
  // }

}
