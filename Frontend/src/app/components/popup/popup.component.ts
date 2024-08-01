import { Component, Input, Output, EventEmitter, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
@Input() record:any = {col1:'', col2:'', col3:'', col4:'', col5:'' };
@Output() close: EventEmitter<boolean> = new EventEmitter();

constructor(private recordService: RecordService){
  this.handleKeydown = this.handleKeydown.bind(this);
}

ngOnInit():void{
  document.addEventListener('keydown', this.handleKeydown);
}
onSubmit():void{
  if(this.record.id){
    this.recordService.updateRecord(this.record.id, this.record).subscribe(()=>{
      this.onClose(true);
    });
  }else{
    this.recordService.addRecord(this.record).subscribe(()=>{
      this.onClose(true);
    })
  }
}

onClose(reload:boolean):void{
  this.close.emit(reload);
}
handleKeydown(event:KeyboardEvent):void{
  if(event.key === 'Escape'){
    this.onClose(false);
  }
}
ngOnDestroy(){
document.removeEventListener('keydown', this.handleKeydown);
}

}
