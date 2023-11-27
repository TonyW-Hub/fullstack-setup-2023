import { Schema } from "mongoose";
import { IUser, IUserMethods, IUserModel } from "../../types/models/user";

export const statics = (schema: Schema<IUser, IUserModel, IUserMethods>) => {
    schema.statics.template = async function () {
        return true;
    };
};
