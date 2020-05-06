// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: '' + 
    'form goes here...' +
    '<pre>{{ form.value | json }}</pre>',
  styles: []
})

export class MainAppComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}