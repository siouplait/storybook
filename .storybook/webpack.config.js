module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          {
            loader: require.resolve("@storybook/addon-storysource/loader"),
            options: {
              prettierConfig: {
                parser: "babylon" //The default prettier parser (we might want 'flow' in future)
              }
            }
          }
        ],
        enforce: "pre"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader', { loader: 'image-webpack-loader', options: { bypassOnDebug: true },}]
      }
    ]
  }
}
