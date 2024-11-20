import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {

  constructor(private api:ApiService){}
  url='getTomorrowGames'

  data:any[]=[];

  
  ngOnInit(): void {
    this.api.post(this.url).subscribe({
      next:(res:any)=>{
        this.data=res;
      }
    })  
  }

}
