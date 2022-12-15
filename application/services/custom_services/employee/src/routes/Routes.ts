import { Request, Response, NextFunction } from "express";
import { employeeController } from '../controller/employeeController';


export class Routes {
    private employee: employeeController = new employeeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/employee/:id').delete(this.employee.GpDelete);
app.route('/employee/get/search').get(this.employee.GpSearch);
app.route('/employee').put(this.employee.GpUpdate);
app.route('/employee/:id').get(this.employee.GpGetNounById);
app.route('/employee').get(this.employee.GpGetAllValues);
app.route('/employee').post(this.employee.GpCreate);
app.route('/employee/userid/created_by').get(this.employee.GpGetNounCreatedBy);
     }

}