import { Request, Response } from 'express';
import {roleDao} from '../dao/roleDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let role = new roleDao();

export class roleService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpDelete')
     let  roleId = req.params.id;
     role.GpDelete(roleId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpGetAllValues')
     
     role.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpCreate')
     let  roleData = req.body;
     role.GpCreate(roleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into roleService.ts: GpGetNounCreatedBy')
     let  roleData = { created_by: req.query.createdby };
     role.GpGetNounCreatedBy(roleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from roleService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}