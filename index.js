const mongoose = require("mongoose");

//01 Conecting to mongo db
mongoose
  .connect("mongodb://localhost:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

//02 Creating a schema
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

//03 Creating the collection or Model
const Student = new mongoose.model("Student", student);

// 04 Creating a database
const adder = async () => {
  const ss = await Student.create({
    name: "Aniket",
    workout: true,
    height: 7,
  });
  console.log(ss);

  // calling a method
  await ss.save();
};

//05 Find a data
// const adder = async () => {
//   const ss = await Student.deget({ height: { $eq: 7 } });

//   console.log(ss);
// };

//call
adder();
