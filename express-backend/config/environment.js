const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/recombix-test-${env}`;

module.exports = { port, env, dbURI };
