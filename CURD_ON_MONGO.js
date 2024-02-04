const mongoose = require("mongoose");
main()
  .then((res) => {
    /* if You want to wait untill connection established then 
        Then you can put your all code here but it is not necessory */
    console.log("Hi there !");
  })
  .catch((err) => console.log(err));

async function main() {
  // for connetion to mongodb with text database
  mongoose.connect("mongodb://127.0.0.1:27017/test");
}
// for defineing the structure of Database
const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
});

// for creating collection we use model(User)
const User = mongoose.model("User", userSchema);

/*-------------------------------CURD OPERATIONS-----------------------------*/

/******************************************************************************/

// for inserting many data at a time
User.insertMany([
  { name: "arav", age: 25, email: "arav@gmail.com" },
  { name: "arav", age: 25, email: "arav@gmail.com" },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// For inserting one data at time
const User3 = new User({
  name: "arav",
  age: 25,
  email: "arav@gmail.com",
});
// save returns a promise
User3.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/******************************************************************************/

// for finding the data
User.findOne({ age: { $gt: 10 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
User.find({ age: { $gt: 20 } })
  .then((res) => {
    console.log(res[0]._id);
  })
  .catch((err) => {
    console.log(err);
  });

/******************************************************************************/

// for Updating the data
User.updateOne({ age: 20 }, { age: "1000" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
User.findByIdAndUpdate(
  "65bfc33875673da60083dd43",
  { age: "1000" },
  { new: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/******************************************************************************/

// For deleting of data
User.deleteOne({ name: "raj" })
  .then((res) => {
    console.log(res);
    (";");
  })
  .catch((err) => {
    console.log(err);
  });
User.findOneAndDelete({ name: "raj" })
  .then((res) => {
    console.log(res);
    (";");
  })
  .catch((err) => {
    console.log(err);
  });
