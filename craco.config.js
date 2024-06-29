module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5002',
        changeOrigin: true,
      },
    },
    allowedHosts: 'all',
  },
};