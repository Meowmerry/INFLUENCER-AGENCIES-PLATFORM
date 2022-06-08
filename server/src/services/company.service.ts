import config from "config";
import mongoose, { FilterQuery, LeanDocument } from "mongoose";
import _, { omit } from "lodash";
import { excludedToClientFields } from "../constants/exclude.constants";
import CompanyModel, { CompanyDocument } from "../models/company.model";
import { CreateCompanyInput } from "../schema/company.schema";
import { signJwt } from "../utils/jwt.utils";

//export const creteCompany = async (input: CreateCompanyInput["body"]) => {
  export const creteCompany = async (input: CreateCompanyInput["body"]) => {
  try {
    return await CompanyModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const signCompanyToken = async (company: CompanyDocument) => {
  const clean = _.partial(_.omit, _, excludedToClientFields);
  const result = clean(company);

  // Sign the access token
  const accessToken = signJwt(
    { sub: { ...result } },
    {
      expiresIn: `${config.get<string>("accessTokenTtl")}`,
    }
  );

  // Return access token
  return { accessToken };
};

// find company by id
export const findCompany = async (
  query: FilterQuery<CompanyDocument>
): Promise<LeanDocument<
  CompanyDocument & { _id: mongoose.Schema.Types.ObjectId }
> | null> => {
  return CompanyModel.findOne(query).lean();
};

// find all company
export const findCompanies = async (): Promise<CompanyDocument[]> => {
  const users = await CompanyModel.find({},{password:0});
  return users;
};
