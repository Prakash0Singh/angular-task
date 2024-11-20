import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit {
  panelOpenState = false;
  constructor(private api:ApiService){};
  url='getInPlayGames'
  collectionData:any[]=[];

  DataStructure:any[]=[]

  ngOnInit(): void {
    this.api.post(this.url).subscribe({
      next:(res:any)=>{
        let cricketList:any[]=[];
        let tennsiList:any[]=[];
        let soccerList:any[]=[];

      res.forEach((data:any) => {
        if (data.sportid==4) {
          cricketList.push(data)
        } else if(data.sportid==2) {
          tennsiList.push(data);
        } else if(data.sportid==1) {
          soccerList.push(data)
        }
      }
    );
      
      this.DataStructure.push({key:'cricket',list:cricketList})
      this.DataStructure.push({key:'tennsi',list:tennsiList})
      this.DataStructure.push({key:'soccer',list:soccerList})
      }
    })

    console.log(this.DataStructure)
  }

}
