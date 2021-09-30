module.exports = {
  url: `mongodb://${process.env.HOST}:${process.env.MD_PORT}/${process.env.DB_NAME}`,
};
// mongoose.connect("mongodb://localhost/my_database"); // mongo db connection url
