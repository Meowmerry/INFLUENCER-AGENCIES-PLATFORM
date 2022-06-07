import config from "config";
import mongoose, {
  DocumentDefinition,
  FilterQuery,
  LeanDocument,
} from "mongoose";
import { omit } from "lodash";
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
  // Sign the access token
  const accessToken = signJwt(
      { sub: user._id },
      {
        expiresIn: `${config.get<string>('accessTokenTtl')}`,
      }
  );

  // Return access token
  return { accessToken };
};

// export const validatePassword = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   const user = await UserModel.findOne({ email });
//
//   if (!user) {
//     return false;
//   }
//
//   const isValid = await user.comparePassword(password);
//
//   if (!isValid) return false;
//
//   return omit(user.toJSON(), "password");
// };

export const findUser = async (
  query: FilterQuery<UserDocument>
): Promise<LeanDocument<
  UserDocument & { _id: mongoose.Schema.Types.ObjectId }
> | null> => {
  return UserModel.findOne(query).lean();
};
