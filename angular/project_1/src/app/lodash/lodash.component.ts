// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lodash',
//   templateUrl: './lodash.component.html',
//   styleUrls: ['./lodash.component.css']
// })
// export class LodashComponent {

// }

// import { Component } from '@angular/core';
// import * as _ from 'lodash'; 
//npm i lodash
//npm i --save-dev @types/lodash
// @Component({
//   selector: 'app-lodash',
//   template: `
//     <div>
//       {{ transformedArray  }}
//     </div><br>
//     <div>
//       {{ transformedArray_2  }}
//     </div><br>
//     <div>
//       {{ transformedArray_3  }}
//     </div><br>
//     <div>
//       {{ transformedArray_4  }}
//     </div><br>

//   `,
// })
// export class LodashComponent {
//   originalArray = [1, 2, 3, 4, 5];

//   // Transform the array using Lodash map function
//   transformedArray = _.map(this.originalArray, (num) => num * 2);

//   originalArray_2 = [1, 2, 3, 4, 5];

//   // Transform the array using Lodash map function
//   transformedArray_2 = _.reverse(this.originalArray_2);

//   originalArray_3 = [1, 2, 3, 4, 5];

//   // Transform the array using Lodash map function
//   transformedArray_3 = _.drop(this.originalArray_3,2);

//   originalArray_4 = [1, 2, 3, 4, 5,6];

//   // Transform the array using Lodash map function
//   transformedArray_4 = _.chunk(this.originalArray_4,2);

// }

// import { Component } from '@angular/core';
// import * as moment from 'moment'; 
// //npm i moment
// @Component({
//   selector: 'app-lodash',
//   template: `
//     <div>
//       Formatted Date: {{ formattedDate }}
//     </div>
//   `,
// })
// export class LodashComponent {
//   originalDate = '2023-08-14T12:00:00Z';

//   // Format the date using Moment
//   formattedDate = moment(this.originalDate).format('MMMM Do YYYY, h:mm:ss a');
// }

import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
//npm install @ngneat/transloco
@Component({
  selector: 'app-lodash',
  template: `
  <div>
  {{ 'helloWorld' | transloco }}
  </div>

  `,
})
export class LodashComponent {
  constructor(private translocoService: TranslocoService) {}

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}