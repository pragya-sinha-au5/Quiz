const mongoose = require("mongoose");
const url =
"mongodb+srv://pragya:qwerty12@cluster0.xwkp0.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true, useFindAndModify: false}).then(
  async (res) => {
    console.log("mongodb is connected succesfully");
  },
  (err) => {
    console.log("error in connection");
  }
);
