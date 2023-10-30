import { IPlugin } from "subjektify";
import { BuildPlugin } from "./plugins";

export const plugins = (): IPlugin[] => {
    return [
        new BuildPlugin()
    ];
}
