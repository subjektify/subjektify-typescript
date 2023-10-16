import { CommandTarget, Context, IPlugin } from "subjektify";

export default class BuildPlugin implements IPlugin {

    constructor() {
    }
    
    public target(): CommandTarget {
        return "build";
    }

    public apply(context: Context): Promise<void> {
        console.log(context);
        return Promise.resolve();
    }
}
