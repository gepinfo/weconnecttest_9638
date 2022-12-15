import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class roleController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/role/:id', this.GpDelete);
this.router.get('/role', this.GpGetAllValues);
this.router.post('/role', this.GpCreate);
this.router.get('/role/userid/created_by', this.GpGetNounCreatedBy);
        //#@gepdelimeterone@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpDelete');
        new ApiAdapter().delete(Constant.ROLEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.ROLEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpCreate');
        new ApiAdapter().post(Constant.ROLEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.ROLEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#








}

