import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./rolescreen.scss";

import {service} from './rolescreen.service';


class Rolescreen extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
   
    this.state={ role : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        role: '',
    },rowData :[],
    }  }

    handlechange = (e: any) => {
        this.setState({ role: { ...this.state.role, [e.target.name]: e.target.value } })  
    }

    componentDidMount() {
        this.state.role.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate() {
      this.test.GpCreate(this.state.role).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">rolescreen</h2>
            <div id="template-ijeg" className="gjs-row">
    <div id="template-i3zr" className="gjs-cell">
        <input id="template-izot" placeholder="Role" onChange={this.handlechange}
        name="role" value={this.state.role.role}className="input form-control "
        />
        <label id="template-iexh" className="label ">
            <div id="template-iocg" className="">Label</div>
        </label>
        <button id="template-i15g" onClick={()=>this.GpCreate()} className="button btn btn-primary ">
            <div id="template-ix03"
            className="">Add</div>
        </button>
    </div>
</div>
            </>
        );
    };
};

export default Rolescreen;