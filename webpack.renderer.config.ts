import type { Configuration } from "webpack";

import { plugins } from "./webpack.plugins";
import { rules } from "./webpack.rules";

rules.push({
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    devtool: "source-map",
    plugins,
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    },
    ignoreWarnings: [
        {
            module: /@huggingface\/transformers\/dist\/transformers\.web\.js$/,
            message:
                /Critical dependency: Accessing import\.meta directly is unsupported/,
        },
    ],
};
