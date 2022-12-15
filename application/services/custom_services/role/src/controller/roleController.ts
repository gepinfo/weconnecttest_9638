import { Request, Response } from 'express';
import { roleService } from '../service/roleService';
import { CustomLogger } from '../config/Logger'
let role = new roleService();

export class roleController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    role.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    role.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    role.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    role.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpGetNounCreatedBy');
    })}


}