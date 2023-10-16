import { Context, IPlugin } from "subjektify";
import { buildFunction } from "./plugins";

export const plugins = (): IPlugin[] => {
    return [
        {
            target: () => "build",
            apply: (context: Context) => buildFunction(context)
        }
    ];
}
