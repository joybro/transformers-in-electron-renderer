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
};
