import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public logs: string[] = [];

  constructor() { }

  addLog(log: string): void {
    this.logs.push(log);
  }

  clearLog(): void {
    this.logs = [];
  }


}
