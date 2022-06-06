import mongoose, { Document, Schema } from "mongoose";

export interface RoleDocuments {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
const roleSchema = new Schema({
  name: { type: String, required: true },
});

const IRoleModel = mongoose.model<RoleDocuments>("Role", roleSchema);

export default IRoleModel;
