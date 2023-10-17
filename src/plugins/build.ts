import { CommandTarget, Context, IPlugin } from "subjektify";

export default class BuildPlugin implements IPlugin {

    constructor() {
    }
    
    public target(): CommandTarget {
        return "build";
    }

    public run(context: Context): Promise<void> {
        console.log("Build plugin running...");
        console.log(context);
        return Promise.resolve();
    }
}
