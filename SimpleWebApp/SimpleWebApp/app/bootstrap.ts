import { enableProdMode } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic'
import { TitleService } from './services/app.titleservice';
import { HTTP_PROVIDERS } from '@angular/http';
import { TitleListComponent } from './components/titlelist/titlelist.component';
//import { DetailModalComponent } from './components/detailmodal/detailmodal.component';

//enableProdMode();
bootstrap(TitleListComponent, [HTTP_PROVIDERS, TitleService]);//, DetailModalComponent]); 
//bootstrap(DetailModalComponent,[]);