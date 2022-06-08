import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export interface ChannelOffer {
    name: string;
    url: string;
    description: string;
}

export interface Address {
    address: string;
    city: string;
    country: string;
    zipcode: string;
}

export interface UserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    channels: ChannelOffer[];
    address: Address;
    role: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

export const comparePasswords = async (candidatePassword: string, hashedPassword: string) => {
    return await bcrypt.compare(candidatePassword, hashedPassword);
}

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        channels: { type: Object, required: false },
        address: { type: Object, required: false },
        role: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    const user = this as UserDocument;

    if (!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

userSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
