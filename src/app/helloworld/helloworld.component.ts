import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css'],
})
export class HelloworldComponent implements OnInit {
  msg: string = 'Hello World Component';
  myId: string = 'myH1';
  fontColor: string = 'blue';
  isDisable: boolean = false;
  isEdit: boolean = false;
  count: number = 0;
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  handleClick() {
    alert(this.msg);
  }

  handleEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.msg = 'You can edit me!';
    } else {
      this.msg = "I'm read only!";
    }
  }
  onLog() {
    this.logger.witeCount(this.count);
    this.count++;
  }
}
