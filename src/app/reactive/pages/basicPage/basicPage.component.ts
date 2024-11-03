import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

const rtx5090={
  name: 'RTX 5090',
    price: 2500,
    inStorage:6,
}

@Component({
  selector: 'app-basicPage',
  templateUrl: './basicPage.component.html',
})
export class BasicPageComponent implements OnInit{
  //public myForm: FormGroup= new FormGroup({
    //name: new FormControl(''),
    //price: new FormControl(0),
    // inStorage: new FormControl(0),
  //})
  public myForm: FormGroup= this.fb.group({
    name: [''],
    price: [0],
    inStorage:[0],
})
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm.reset( rtx5090 );
  }
  onSave():void {
    console.log(this.myForm.value);
    if(this.myForm.invalid) return;
    this.myForm.reset({price:10, inStorage:0})
  }

}
