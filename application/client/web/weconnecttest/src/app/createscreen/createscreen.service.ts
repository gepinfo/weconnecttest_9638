import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   roleGpGetAllValues= () => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + '/role' + `?jwt_token=${jwt_token}`);
    }
}