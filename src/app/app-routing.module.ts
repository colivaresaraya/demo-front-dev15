import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsumerCreditComponent } from "./consumer-credit/consumer-credit.component";
//import { MortgageCreditComponent } from './mortgage-credit/mortgage-credit.component';
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SelectCreditComponent } from "./select-credit/select-credit.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "select", component: SelectCreditComponent },
  { path: "consumer", component: ConsumerCreditComponent },
  //{path: 'mortgage', component : MortgageCreditComponent},
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
