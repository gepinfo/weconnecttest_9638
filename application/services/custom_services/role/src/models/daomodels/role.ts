
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const roleSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   role: String
})

const roleModel = mongoose.model('role', roleSchema, 'role');
export default roleModel;
