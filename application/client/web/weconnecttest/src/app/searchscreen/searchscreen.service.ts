import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   GpSearch=(employee:any) => {
        const temp:any= [];
 	 	const objectKeyPair = Object.entries(employee);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.get(Web() + `/employee/get/search?${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
}