import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ContasPagarComponent } from './pages/contas-pagar/contas-pagar.component';
import { AuthGuard } from './Servico/auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'homepage', canActivate: [AuthGuard], component: HomepageComponent, children:[
        {path: 'contasPagar', component: ContasPagarComponent, outlet: "ComponenteContasPagar"},
    ], },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
