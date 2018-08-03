import { Component, OnInit, Input } from '@angular/core';
import { SummaryService } from './../../../common/services/summary.service';

var jQuery:any;
declare var $ :any;

@Component({
  selector: 'app-c-courses',
  templateUrl: './c-courses.component.html',
  styleUrls: ['./c-courses.component.scss'],
  providers:[SummaryService],
})
export class CCoursesComponent implements OnInit {
  @Input() coursesList;
  @Input() courseWithGraph;
  @Input() barChartLabels;
  @Input() barChartData;
  @Input() barChartOptions;
  @Input() barChartColors;
  @Input() barChartLegend;
  @Input() barChartType;
  @Input() barDataList;

  summaryList: any[];
  productDetail: any [];
  errorMessage:string;
  starWidth:number;
  //rating:number;

  constructor(private summaryService: SummaryService) { }



   ngOnInit() {
    this.summaryService.getSummary()
            .subscribe(summaryList => {
                this.summaryList = summaryList;
              //  this.productDetail = this.summaryList;
              },
                error => this.errorMessage = <any>error);
   
                
}

//  *** for setting star width   ****
// callStarRating() {
//   console.log('call star rating' + this.summaryList.length);

//   for (var i=0; i < this.summaryList.length; i++ ){
//     let rating = this.summaryList[i].starRating;
//     this.starWidth = rating * 86/5;
//   }
// }



// **********For getting Color format  ************
  getColor(num: any) {
    //  console.log('color' + num);

    if (num <= 60) {
      return 'class1';
    }
    if (num > 60 && num <= 70) {
      return 'class2';
    }
    if (num > 70) {
      return 'class3';
    }

  }


  //  ******* for opening modal with particular ID ******
  openModal(id : number) {
    console.log(' id: ' + id);
    // this.summaryService.getProduct(id)
    // .subscribe(productDetail => {
    //     this.productDetail = productDetail;
    //     console.log(' product detail: ' + this.productDetail);

    // },
    // error => this.errorMessage = <any>error);
 this.productDetail = this.summaryList.filter(product => product.productId === id);
  console.log(this.productDetail);
 


    $("#mymodal").modal();
  }

  // closeModal(){
  //   console.log('hide');
  //   $("#myModal.close").click();
  // }


  
  }

