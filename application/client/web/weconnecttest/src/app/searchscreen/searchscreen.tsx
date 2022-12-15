import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./searchscreen.scss";

import {service} from './searchscreen.service';


class Searchscreen extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Role', field: 'role'  },];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
     this.onRowSelected = this.onRowSelected.bind(this)
   
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
    GpSearch() {
      this.test.GpSearch(this.state.employee).then((data:any) => {
            this.setState({rowData:data.data})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    onRowSelected(event:any) {
         this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
        return(
            <>
            <h2 className="screen-align">searchscreen</h2>
            <input id="template-i1jl" placeholder="Name" onChange={this.handlechange}
name="name" value={this.state.employee.name}className="input form-control "
/>
<button id="template-i18k" onClick={()=>this.GpSearch()} className="button btn btn-primary ">
    <div id="template-innd"
    className="">Search</div>
</button>
<div id="template-i3vm" className="ag-theme-material" style={{height:
'500px', width: '100%'}}>
    <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}defaultColDef={{sortable:
    true, filter: true }} rowData={this.state.rowData} rowSelection={
    "single"} onRowSelected={this.onRowSelected }></AgGridReact>
</div>
<div id="myGrid" className="ag-theme-alpine "></div>
            </>
        );
    };
};

export default Searchscreen;