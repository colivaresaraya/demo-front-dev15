import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Credit } from "./credit";
import { SimulatorService } from "./simulator.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-consumer-credit",
  templateUrl: "./consumer-credit.component.html",
  styleUrls: ["./consumer-credit.component.css"],
})
export class ConsumerCreditComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private service: SimulatorService,
    private _snackBar: MatSnackBar
  ) {
    this.form = fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      amount: ["", Validators.required],
      quotas: ["", Validators.required],
      incomes: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  simulate() {
    let creditToSimulate: Credit = {
      name: this.form.value.name,
      email: this.form.value.email,
      amount: this.form.value.amount,
      quotas: this.form.value.quotas,
      income: this.form.value.incomes,
      isValid: false,
    };

    this.service.evaluateCredit(creditToSimulate).subscribe((credit) => {
      var message = "";
      var action = "";

      if (credit.isValid == true) {
        action = "Aprobado";
        message = "Felicidades usted cumple los requisitos.";
      } else {
        action = "Rechazado";
        message = "Lo lamentamos pero usted no cumple los requisitos.";
      }

      this._snackBar.open(message, action, { duration: 5000 });
    });
  }
}
