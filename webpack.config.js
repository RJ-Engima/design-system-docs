const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const nodePolyfill = require("node-polyfill-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  performance: { hints: false, maxEntrypointSize: 512000, maxAssetSize: 512000 },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    hot: "only",
    compress: true,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost:6060',
        pathRewrite: { '^/api': '' },
      }
    },
    port: 3001
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".css"],
    alias: {
      events: "events",
    },
    fallback: {
      fs: false,
      net: false,
      async_hooks: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        // use: ["@svgr/webpack", "url-loader", "svg-url-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.json$/, type: 'json',
      },
      {
        test: /\.css|s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    publicPath: "/",
  },

  plugins: [
    new ModuleFederationPlugin({
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new ReactRefreshWebpackPlugin(),
    new nodePolyfill(),
  ],
};