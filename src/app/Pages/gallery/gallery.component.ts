import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare let $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  userName : string = '';
  logedIn:boolean=false;
  constructor() { }
  
  galleryImages = [
    {
      thumbnailUrl: '../../../assets/images/g1.jpeg',
      imageUrl: '../../../assets/images/g1.jpeg',
      caption: 'Image 1',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g2.jpeg',
      imageUrl: '../../../assets/images/g2.jpeg',
      caption: 'Image 2',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g3.jpeg',
      imageUrl: '../../../assets/images/g3.jpeg',
      caption: 'Image 4',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g4.jpeg',
      imageUrl: '../../../assets/images/g4.jpeg',
      caption: 'Image 3',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g5.jpeg',
      imageUrl: '../../../assets/images/g5.jpeg',
      caption: 'Image 3',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g6.jpeg',
      imageUrl: '../../../assets/images/g6.jpeg',
      caption: 'Image 3',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g7.jpeg',
      imageUrl: '../../../assets/images/g7.jpeg',
      caption: 'Image 3',
      isPrivate: true
    },
    {
      thumbnailUrl: '../../../assets/images/g8.jpeg',
      imageUrl: '../../../assets/images/g8.jpeg',
      caption: 'Image 3',
      isPrivate: true
    },
    // Add more images as needed
  ];

   isPrivate:boolean=true;


  ngOnInit(): void {

    //console.log("hgchjcjh", this.galleryImages);

    const userObj  = JSON.parse(localStorage.getItem('userDetails'));
    this.userName = userObj?.username;
    this.isPrivate=userObj?.isPrivateUser;

    console.log("tydyhchchjchj", this.isPrivate);

    if(this.userName){
      this.logedIn= true;

    }

    
  }
  
  openModal(image: any) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    modalImage.src = image.imageUrl;

    // Open the modal using jQuery
    $('#imageModal').modal('show');
  }

 

}
