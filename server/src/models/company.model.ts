import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface Address {
    address: string;
    city: string;
    country: string;
    zipcode: string;
}

export interface CompanyInput {
    companyName: string;
    webSite: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address;
    role: string;
}

export interface CompanyDocument extends CompanyInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const companySchema = new mongoose.Schema(
    {
        companyName: { type: String, require: true },
        webSite: { type: String, require: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: Object, required: false },
        role: { type: String, required: true },
    },
    {
        timestamps: true,
    });

companySchema.pre("save", async function (next) {
    const user = this as CompanyDocument;

    if (!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

const CompanyModel = mongoose.model<CompanyDocument>("Company", companySchema);

export default CompanyModel;