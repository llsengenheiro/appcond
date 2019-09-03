module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'appcondominio',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
