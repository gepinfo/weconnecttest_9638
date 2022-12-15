import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./createscreen.scss";

import {service} from './createscreen.service';


class Createscreen extends React.Component<any, any> {
    roleitemArray: any = [];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
   
    this.state={ employee : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        role: '',
    },rowData :[],
    }  }

    handlechange = (e: any) => {
        this.setState({ employee: { ...this.state.employee, [e.target.name]: e.target.value } })  
    }

    componentDidMount() {
        this.state.employee.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    roleGpGetAllValues() {
      this.test.roleGpGetAllValues().then((data:any) => {
            this.roleitemArray = data;
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">createscreen</h2>
            <div id="template-i4h7" className="gjs-row">
    <div id="template-iukl" className="gjs-cell">
        <label id="template-izkz" className="label ">
            <div id="template-ii0kl" className="">Name</div>
        </label>
        <input id="template-iau9" placeholder="Name" onChange={this.handlechange}
        name="name" value={this.state.employee.name}className="input form-control "
        />
    </div>
    <div id="template-ioud" className="gjs-cell">
        <div id="template-ilw3" className="">
            <select id="template-iozz" name="dynamicdropdown_template-iozz" className="form-select"
            [items]="roleitemArray" onChange={this.handlechange} name="role" value={this.state.employee.role}onClick={()=>this.roleGpGetAllValues()} className="form-control "></select>
        </div>
        <div id="template-ihcn" className="">
            <div id="template-ih8dv" className="">1</div>
        </div>
        <button id="template-iynng" className="button btn btn-primary ">
            <div id="template-il1b1" className="">Send</div>
        </button>
    </div>
</div>
            </>
        );
    };
};

export default Createscreen;