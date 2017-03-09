"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_titleservice_1 = require('./services/app.titleservice');
var http_1 = require('@angular/http');
var todolist_component_1 = require('./components/todolist/todolist.component');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(todolist_component_1.TodoListComponent, [http_1.HTTP_PROVIDERS, app_titleservice_1.TitleService]);
//# sourceMappingURL=boottodolist.js.map