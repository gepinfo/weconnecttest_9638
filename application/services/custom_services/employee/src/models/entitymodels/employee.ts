
export interface employee 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: String,
   role: { type: String, ref: 'role' }
}
