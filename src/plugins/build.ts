import { Context } from "subjektify";

export const buildFunction = (context: Context): Promise<void> => {
    console.log(context);
    return Promise.resolve();
}
