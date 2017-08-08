import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateBMI(){
    if (this.weight > 0 && this.height > 0){
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }
private setBMIMessage() {
  if (this.bmiValue < 18.5) {
    this.bmiMessage = "You are a skinny devil"
  }

  if (this.bmiValue > 18.5 && this.bmiValue < 25){
    this.bmiMessage = "Average Joe"
  }

  if (this.bmiValue > 25 && this.bmiValue < 30) {
    this.bmiMessage = "Fatty goes boom boom"
  }

  if (this.bmiValue > 30) {
    this.bmiMessage = "Call 911 we have a whale here"
  }
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
