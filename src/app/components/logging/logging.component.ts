import { Component } from '@angular/core';
import { LoggingService } from 'src/app/models/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent {

  constructor(public loggingService: LoggingService) { }

}
