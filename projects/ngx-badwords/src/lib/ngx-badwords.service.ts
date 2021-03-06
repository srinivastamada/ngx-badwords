import { Injectable } from '@angular/core';
import Filter from 'bad-words';
@Injectable()
export class NgxBadwordsService {
  filter: any;
  constructor() {
    this.filter = new Filter();
  }

  clean(text: string) {
    return this.filter.clean(text);
  }

  removeWords(removeWords: any) {
    this.filter.removeWords(...removeWords);
  }
}
