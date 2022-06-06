import IRoleModel, { RoleDocuments } from "../models/role.model";
import { DocumentDefinition } from "mongoose";


export async function createRole(input: DocumentDefinition<RoleDocuments>){
    try {
      return await IRoleModel.create(input)
  }catch (e: any) {
    throw new Error(e);
  }
}