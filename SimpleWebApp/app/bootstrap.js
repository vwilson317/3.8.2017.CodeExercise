"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_titleservice_1 = require('./services/app.titleservice');
var http_1 = require('@angular/http');
var titlelist_component_1 = require('./components/titlelist/titlelist.component');
//import { DetailModalComponent } from './components/detailmodal/detailmodal.component';
//enableProdMode();
platform_browser_dynamic_1.bootstrap(titlelist_component_1.TitleListComponent, [http_1.HTTP_PROVIDERS, app_titleservice_1.TitleService]); //, DetailModalComponent]); 
//bootstrap(DetailModalComponent,[]); 
//# sourceMappingURL=bootstrap.js.map