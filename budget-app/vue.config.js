module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/budget-app/dist/'
        : '/'
};