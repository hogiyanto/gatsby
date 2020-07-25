const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }, pluginOptions) => {
  const options = pluginOptions.options || {};
  const stages = pluginOptions.stages || ["develop"];

  if (stages.includes(stage)) {
    actions.setWebpackConfig({
      plugins: [
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            // Recommended to use 'write-references' if using babel-loader to improve initial compilation time.
            // See https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#typescript-options
            mode: "write-references",
            diagnosticOptions: {
              semantic: true,
              syntactic: true,
            },
          },
          eslint: {
            enabled: true,
            files: "./src/**/*.{ts,tsx,js,jsx}",
          },
          ...options,
        }),
      ],
    });
  }
};
