module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  future: {
    webpack5: true,
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://12210038gcit:6GPeMfTkhWpM1vQE@cluster0.gxjruxs.mongodb.net/?retryWrites=true&w=majority",
    MONGODB_DB: "Cordy_Chain",
  },
};
