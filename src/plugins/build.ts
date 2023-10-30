import { BuildContext, IPlugin } from 'subjektify';

export class BuildPlugin implements IPlugin {

    target(): string {
        return "build";
    }
    
    run(context: BuildContext): Promise<void> {
        console.log("[TYPESCRIPT] BuildPlugin.run");
        console.log(context);
        return Promise.resolve();
    }
}
