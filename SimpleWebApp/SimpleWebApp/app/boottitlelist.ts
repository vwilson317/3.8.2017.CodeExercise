import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {TitleService} from './services/app.titleservice';
import {HTTP_PROVIDERS} from '@angular/http';
import { TitleListComponent } from './components/titlelist/titlelist.component';
import { MaterialModule } from '@angular/material';

//enableProdMode();
bootstrap(TitleListComponent, [HTTP_PROVIDERS, TitleService]); 