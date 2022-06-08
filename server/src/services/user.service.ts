import config from "config";
import mongoose, {
  FilterQuery,
  LeanDocument,
} from "mongoose";
import _, { omit } from "lodash";
import { excludedToClientFields } from "../constants/exclude.constants";
import UserModel, { UserDocument } from "../models/user.model";
import { CreateUserInput } from "../schema/user.schema";
import { signJwt } from "../utils/jwt.utils";

export const createUser = async (
    input: CreateUserInput["body"]
) => {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const signToken = async (user: UserDocument) => {

  const clean = _.partial(_.omit, _, excludedToClientFields);
  const result = clean(user);

  // Sign the access token
  const accessToken = signJwt(
      { sub: { ...result } },
      {
        expiresIn: `${config.get<string>('accessTokenTtl')}`,
      }
  );

  // Return access token
  return { accessToken };
};

// find User by id
export const findUser = async (
  query: FilterQuery<UserDocument>
): Promise<LeanDocument<
  UserDocument & { _id: mongoose.Schema.Types.ObjectId }
> | null> => {
  return UserModel.findOne(query).lean();
};



// find all Users
export const findUsers = async () : Promise<UserDocument[]> => {
    const users = await UserModel.find({},{password:0});
    return users;
};
