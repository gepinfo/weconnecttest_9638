import { Request, Response } from 'express';
import {employeeDao} from '../dao/employeeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let employee = new employeeDao();

export class employeeService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpDelete')
     let  employeeId = req.params.id;
     employee.GpDelete(employeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpSearch')
     let  employeeData = req.query;
     employee.GpSearch(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpUpdate')
     let  employeeData = req.body;
     employee.GpUpdate(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpGetNounById')
     let  employeeId = req.params.id;
     employee.GpGetNounById(employeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpGetAllValues')
     
     employee.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpCreate')
     let  employeeData = req.body;
     employee.GpCreate(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GpGetNounCreatedBy')
     let  employeeData = { created_by: req.query.createdby };
     employee.GpGetNounCreatedBy(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}