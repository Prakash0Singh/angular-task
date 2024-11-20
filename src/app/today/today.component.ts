import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  constructor(private api:ApiService){}
  url='getTodayGames'

  data:any[]=[];
  
  ngOnInit(): void {
    this.api.post(this.url).subscribe({
      next:(res:any)=>{
        this.data=res;
      }
    })  
  }
}
