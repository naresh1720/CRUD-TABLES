import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
records:any[] = [];
isPopupVisible: boolean = false;
selectedRecord: any = null;

constructor (private recordService: RecordService){}

itemsPerPage:number = 50;
allUserList:number = 0;
pagination:number = 1;
currentPage=this.allUserList;


ngOnInit(): void {
    this.loadRecords();
}

loadRecords():void{
this.recordService.getRecords().subscribe(data=>{
  this.records = data;
});
}

openPopup():void{
  this.selectedRecord = {col1:'', col2:'', col3:'', col4:'', col5:''};
  this.isPopupVisible = true;
}

closePopup(reload:boolean):void {
  this.isPopupVisible = false;
  if (reload) {
    this.loadRecords();
  }
}

editRecord(record:any): void{
  this.selectedRecord ={...record};
  this.isPopupVisible = true;
}

deleteRecord(id:number):void{
  if(confirm('Are you sure you want to delete this record?')){
    this.recordService.deleteRecord(id).subscribe(()=>{
      this.loadRecords();
    });
  }
}

renderPage(event:number){
this.pagination = event;
}
}
