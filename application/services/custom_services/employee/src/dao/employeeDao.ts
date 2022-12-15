import * as mongoose from 'mongoose';
import employeeModel from '../models/daomodels/employee';
import { CustomLogger } from '../config/Logger'


export class employeeDao {
    private employee = employeeModel;
    constructor() { }
    
    public async GpDelete(employeeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpDelete');

    

    
    
    
    this.employee.findByIdAndRemove(employeeId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(employeeData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.employee.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpUpdate');

    

    
    
    
    this.employee.findOneAndUpdate({ _id: employeeData._id }, employeeData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(employeeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpGetNounById');

    

    
    
    
    this.employee.findById(employeeId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpGetAllValues');

    

    
    
    
    this.employee.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpCreate');

    let temp = new employeeModel(employeeData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.employee.aggregate(([
                        { $match: { $and: [{ created_by: employeeData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}