// import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as d3 from 'd3';
// import {scaleThreshold} from 'd3-scale';
// import {geoPath} from 'd3-geo';
// import {geoVanDerGrinten} from 'd3-geo-projection';
// import * as topojson from 'topojson-client';
// import * as ss from 'simple-statistics';
// import {IsoCountryNamesService} from '../../services/iso-country-names.service';

// @Component({
//   selector: 'app-stream-map',
//   templateUrl: './stream-map.component.html',
//   styleUrls: ['./stream-map.component.scss'],
//     encapsulation: ViewEncapsulation.None,
//     providers: [HttpClient]
// })

// export class StreamMapComponent implements OnInit, OnChanges {
//     @ViewChild('chart') private chartContainer: ElementRef;
//     @Input('countryFacets') private data: Array<any> = [];
//     private margin: any = {top: 10, left: 10, bottom: 10, right: 10};
//     private getWidth: any;
//     private getHeight: any;
//     private mapRatio = 0.6;
//     private tooltip: any;
//     private projection: any;
//     private path: any;
//     private svg: any;
//     private colors: string[] = ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c'];
//     private noData = '#dddddd';
//     private anyErrors: any;
//     private mapInitialized = false;
//     private element: any;
//     constructor(private http: HttpClient,
//                 private isoNamesService: IsoCountryNamesService) { }

//   ngOnInit() {
//       this.createMap();
//       if (this.data && this.mapInitialized) {
//           this.updateMap();
//       }
//   }

//   ngOnChanges() {

//       if (this.data && this.mapInitialized) {
//           this.updateMap();
//       }
//   }

//     /**
//      * initialize the map. create the SVG object, the tooltip, load map data, and render a blank map
//      */
//     createMap(): void {
//         this.element = this.chartContainer.nativeElement;

//         // calculate the size of the map according to the size of the container defined by 'selector'
//         this.getWidth = function(){
//             return this.element.offsetWidth - this.margin.left - this.margin.right;
//         };
//         this.getHeight = function(){
//             return (this.element.offsetWidth - this.margin.left - this.margin.right) * this.mapRatio;
//         };

//         this.svg = d3.select(this.element).select('svg.d3-viz')
//             .attr('width', this.element.offsetWidth)
//             .attr('height', this.element.offsetWidth * this.mapRatio);

//         this.projection = geoVanDerGrinten()
//            .scale(this.getWidth() / 6)
//            .translate([this.getWidth() / 2 - this.margin.left, (this.getHeight() + (this.getWidth() / 6) ) / 2  ])
//             .precision(.1);

//         this.path = geoPath()
//              .projection(this.projection);
//         // resize map on window resize
//         // d3.select(window).on('resize', doResize);

//         // Append Div for tooltip to SVG
//         this.tooltip = d3.select(this.element)
//             .append('div')
//             .attr('class', 'tooltip')
//             .style('opacity', 0);

//         this.loadMap();
//         // resize map on window resize
//         const self = this;
//         d3.select(window).on('resize', function(){ self.doResize(); });
//     }

//     /**
//      * function to resize map if container resizes
//      */
//     doResize() {

//         // update projection
//         this.projection
//             .scale(this.getWidth() / 6)
//             .translate([this.getWidth() / 2 - this.margin.left, (this.getHeight() + (this.getWidth() / 6) ) / 2  ])
//             .precision(.1);

//         // resize the map container
//         this.svg
//             .attr('width', this.element.offsetWidth)
//             .attr('height', this.element.offsetWidth * this.mapRatio);

//         // resize the map
//         this.svg.selectAll('.land').attr('d', this.path);
//     }

//     /**
//      * load the topojson map data and render the map on callback
//      */
//     loadMap(): void {
//         let world: topojson;
//         this.http.get<topojson>('assets/data/world.json').subscribe(
//             data => {
//                 world = data;
//                 this.setupMap(world);
//                 this.mapInitialized = true;
//                 if (this.data) {
//                     this.updateMap();
//                 }
//             }
//         );
//     }

//     setupMap(world: topojson): void {
//         const self = this;
//         self.svg.selectAll('path')
//             .data(topojson.feature(world, world.objects.countries).features)
//             .enter()
//             .append('path')
//             .attr('d', self.path)
//             .attr('class', 'land')
//             .attr('fill', function (d: any) {
//                 d.properties.count = 0;
//                 return self.noData;
//             })
//             // show tooltip and set position
//             .on('mouseover', function (d: any) {
//                 self.tooltip.transition()
//                     .duration(200)
//                     .style('opacity', .9);
//                 const mouse = d3.mouse(self.chartContainer.nativeElement);
//                 self.isoNamesService.getName(d.properties.a3_iso).subscribe(
//                   val => {
//                       self.tooltip.text(val + ': ' + d.properties.count)
//                           .style('left', mouse[0] + 20 + 'px')
//                           .style('top', mouse[1] - 5 + 'px');
//                   }
//                 );

//             })
//             // fade out tooltip on mouse out
//             .on('mouseout', function (d: any) {
//                 self.tooltip.transition()
//                     .duration(500)
//                     .style('opacity', 0);
//             })
//             .on('click', function (d: any) {
//                 // don't do anything if the count is 0
//                 if (d.properties.count > 0) {
//                     self.isoNamesService.addCountryFilter(d.properties.a3_iso);
//                 }
//             });
//     }

//     /**
//      * update the data that shows on the map.
//      *
//      * calculates breaks from the data, retrieves colors for each category and makes changes to country fill colors.
//      */
//     updateMap(): void {

//         const self = this;
//         const breaks = this.calculateBreaks(self.data);
//         // breaks.shift(); // remove min value from breaks Array before applying to domain
//         // breaks.pop(); // same for max

//         const colors: string[] = this.getColors(self.data);
//         // return a color for a data value
//         const valueToColor = scaleThreshold<number, string>()
//             .domain(breaks)
//             .range(colors);

//         // returns the count for a given ISO code from the input data
//         // we could also do this by using a d3 merge, but requires some extra steps
//         const get_count = function (a3_iso) {
//             let count = 0;
//             for (let i = 0; i < self.data.length; i++) {
//                 if (self.data[i].val === a3_iso) {
//                     count = self.data[i].count;
//                     break;
//                 }
//             }
//             return count;
//         };

//         // Select the section we want to apply our changes to
//         const sel = d3.select(this.element).transition().selectAll('.land')
//             .duration(500)
//             .style('fill', function (d: any) {
//                 const count = get_count(d.properties.a3_iso);
//                 d.properties.count = count;
//                 if (count === 0) {
//                     return self.noData;
//                 } else {
//                     return valueToColor(d.properties.count);
//                 }
//             });

//     }
//     /**
//      * calculate the natural breaks in the data using ckmeans
//      * @param data
//      * @returns {*}
//      */
//     calculateBreaks(data) {
//         // use ckmeans to calculate natural clusters in the data
//         // if we have less data points than number of colors, use the data length as a minimum
//         const numColors: number = this.colors.length;

//         return ss.ckmeans(data.map(function (d) {
//             return d.count;
//         }), Math.min(data.length, numColors));

//     }

//     /**
//      * retrieve a copy of the colors array that can be manipulated
//      * @param data
//      * @returns {Array.<T>}
//      */
//     getColors(data): string[] {
//         // make a copy of the colors array
//         let colors: string[] = this.colors.slice();
//         // number of colors should match number of breaks (+ 1)
//         if (data.length < colors.length) {
//             colors = colors.slice(0, data.length + 1);
//         }

//         return colors;
//     }

// }
