import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDateService {
    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }

    formatDate(date: Date) {
        return [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
        ].join('-');
    }
}