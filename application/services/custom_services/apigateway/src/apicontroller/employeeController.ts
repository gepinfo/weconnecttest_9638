import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class employeeController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/employee/:id', this.GpDelete);
this.router.get('/employee/get/search', this.GpSearch);
this.router.put('/employee', this.GpUpdate);
this.router.get('/employee/:id', this.GpGetNounById);
this.router.get('/employee', this.GpGetAllValues);
this.router.post('/employee', this.GpCreate);
this.router.get('/employee/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/employee/get/searchrelationship', this.GpSearchRelationship);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpDelete');
        new ApiAdapter().delete(Constant.EMPLOYEEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpSearch');
        new ApiAdapter().get(Constant.EMPLOYEEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpUpdate');
        new ApiAdapter().put(Constant.EMPLOYEEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.EMPLOYEEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.EMPLOYEEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpCreate');
        new ApiAdapter().post(Constant.EMPLOYEEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.EMPLOYEEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                let response1:any;
                                                let response2:any;
                                                let finalresponse:any;
                                                let relURL = '/role/get/search?role=';                                                
                                                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GpSearch');
                                                new ApiAdapter().get(Constant.EMPLOYEEURL + `${req.url}`).then((res: any) => res.response.json()).then(result => 
                                                {
                                                  response1 = result;
                                                  new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GpSearch');
                                                  new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpSearch');
                                                  new ApiAdapter().get(`${Constant.ROLEURL}`+`${relURL}`+`${response1[0].role}`).then((res: any) => res.response.json()).then(result => 
                                                  {
                                                    response2 = result;
                                                    finalresponse = 
                                                    {
                                                      "response1" : response1,
                                                      "response2" : response2
                                                    }
                                                    new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpSearch');
                                                    req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                    req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                  });
                                                }).catch(err => 
                                                   {
                                                    res.send(err);
                                                   });
                                            }








}

