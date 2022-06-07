import { DocumentDefinition } from "mongoose";
import IRoleModel, { RoleDocuments } from "../models/role.model";

export const  createRole = async(input: DocumentDefinition<RoleDocuments>)=> {
  try {
    return await IRoleModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}

export const findRoles = async () : Promise<RoleDocuments[]> => {
  return await IRoleModel.find({});
};
