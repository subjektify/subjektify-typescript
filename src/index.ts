import { IPlugin } from "subjektify";
import BuildPlugin from "./plugins/build";

export const plugins = (): IPlugin[] => {
    return [
        new BuildPlugin()
    ];
}
