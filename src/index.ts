import { IPlugin } from "subjektify";
import { myBuildPlugin } from "./plugins";

const plugins = (): IPlugin[] => [
    {
        target: "build",
        apply: myBuildPlugin
    }
]

export default plugins;
