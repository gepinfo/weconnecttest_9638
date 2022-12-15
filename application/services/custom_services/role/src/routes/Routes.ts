import { Request, Response, NextFunction } from "express";
import { roleController } from '../controller/roleController';


export class Routes {
    private role: roleController = new roleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/role/:id').delete(this.role.GpDelete);
app.route('/role').get(this.role.GpGetAllValues);
app.route('/role').post(this.role.GpCreate);
app.route('/role/userid/created_by').get(this.role.GpGetNounCreatedBy);
     }

}