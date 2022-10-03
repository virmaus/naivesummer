import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from "./components/home/home.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

