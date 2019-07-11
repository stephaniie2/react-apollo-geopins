const user = {
  _id: "1",
  name: "Reed",
  email: "reed@yahoo.com",
  picture: "https://cloudinary.com/asdf"

}

module.exports = {
  Query: {
    me: () => user
  }
}