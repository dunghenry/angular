import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  witeCount(count: number): void{
    console.warn(count);
  }
  constructor() { }
}
