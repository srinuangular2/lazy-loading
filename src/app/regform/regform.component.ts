import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
 
  regForm:FormGroup;
  first_name;
  last_name;
  department;
  user_name;
  email;
  contact_no;

  constructor(private formbuilder:FormBuilder) { 

this.regForm=this.formbuilder.group({

  first_name:new FormControl(),
  last_name:new FormControl(),
  department:new FormControl(),
  user_name:new FormControl(),
  email:new FormControl(),
  contact_no:new FormControl(),

})


  }

  ngOnInit() {
  }


  postData(data){

console.log(data);

  }

}
