// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Log } from 'ng2-logger';
// import { Configuration } from '../models/configuration/configuration.core.d';
// import { ConfigurationService } from './configuration.service';
// import { environment } from '../../environments/environment';

// @Injectable()
// export class ConfigurationStore {
//   private log = Log.create('configuration');

//   private _configuration: BehaviorSubject<Configuration> = new BehaviorSubject(
//     null
//   );
//   public readonly configuration: Observable<
//     Configuration
//   > = this._configuration.asObservable();

//   constructor() {
//     //this.loadInitialData();
//   }

//   // loadInitialData() {
//   //   this.ConfigurationService.get().subscribe(
//   //     res => {
//   //       this.log.info('config returned', res);
//   //       if (environment.baseHref !== '/') {
//   //         res.layout.companyLogoPath =
//   //           environment.baseHref + res.layout.companyLogoPath;
//   //       }
//   //       this._configuration.next(res);
//   //     },
//   //     err => {
//   //       console.log(err);
//   //     }
//   //   );
//   // }
// }
