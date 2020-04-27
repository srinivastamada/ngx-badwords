# NgxBadwords

bad-words provider for Angular

# Installation
```
npm install --save bad-words ngx-badword
```

or if you use yarn:

``` typescript
yarn add bad-words ngx-badwords
```

# Usage
Import NgxBadwordsModule into your app's modules:
``` typescript
import { NgxBadwordsModule } from 'ngx-badword';
 
@NgModule({
  imports: [
    NgxBadwordsModule
  ]
})
```

Import NgxBadwordsService into your app's components:

``` typescript
import { NgxBadwordsService } from 'ngx-badwords'

export class AppComponent implements OnInit {
  
  constructor(private ngxBadwordsService: NgxBadwordsService){
  }

  ngOnInit(){
    let filterWord = this.ngxBadwordsService.clean("Don't be an ash0le");
    console.log(filterWord);//Don't be an ******
  }
}
```

Remove words from the blacklist

``` typescript
import { NgxBadwordsService } from 'ngx-badwords'

export class AppComponent implements OnInit {
  
  constructor(private ngxBadwordsService: NgxBadwordsService){
   let removeWords = ['hells', 'sadist'];
    this.filter.removeWords(removeWords);
  }

  ngOnInit(){
    let filterWord = this.ngxBadwordsService.clean("some sadist hells word");
    console.log(filterWord); //some sadist hells word!
  }
}
```

# License
The MIT License (MIT)