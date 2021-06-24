const { Post } = require('../models');

const postData = [
  {
    id: '1',
    title: "jclark@email.com",
    body: 07101,
    createdAt: "password",
    updatedAt: "test",
    userId: 1
  },
//   {
//     name: 'John Name',
//     email: "jname@email.com",
//     zip: 07102,
//     password: "password123",
//   },

];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;