import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./gridscreen.scss";

import {service} from './gridscreen.service';


class Gridscreen extends React.Component<any, any> {
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
            <h2 className="screen-align">gridscreen</h2>
            <div id="template-i3zk" className="ag-theme-material" style={{height:
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

export default Gridscreen;