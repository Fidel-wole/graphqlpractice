const { v4: uuidv4 } = require("uuid");

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email);
    console.log(args);
    if (emailTaken) {
      throw new Error("Email Taken");
    }
    const user = {
      id: uuidv4(),
      name: args.data.name,
      email: args.data.email,
      password: args.data.password,
    };

    db.users.push(user);
    return user;
  },
  createPost(parents, args, { db }, info) {
    const userId = db.users.some((user) => user.id === args.data.author);
    if (!userId) {
      throw new Error("User does not exist");
    }
    const post = {
      id: uuidv4(),
      title: args.data.title,
      body: args.data.body,
      author: args.data.author,
    };
    db.posts.push(post);
    return post;
  },
  createComment(parent, args, { db }, info) {
    const postId = db.posts.some((post) => post.id === args.data.postId);
    if (!postId) {
      throw new Error("Post Id is invalid");
    }
    const user = db.users.some((user) => user.id === args.data.userId);
    if (!user) {
      throw new Error("User does not exist");
    }
    const comment = {
      id: uuidv4(),
      comment: args.data.comment,
      postId: args.data.postId,
      user: args.data.userId,
    };
    db.comments.push(comment);
    return comment;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    const deletedUser = db.users.splice(userIndex, 1);
    return deletedUser[0];
  },
  updateUser(parents, {id, data}, {db}, info){
    const findUser = db.users.find((user)=> user.id === id);
    if(!findUser){
      throw new Error("User not found")
    }
    if(typeof data.email === 'string'){
      const emailTaken =db.users.some((user) => user.email === data.email);
      if(emailTaken){
        throw new Error("Email already exist")
      }
      findUser.email = data.email;
    }
    if(typeof data.name === 'string'){
      findUser.name = data.name
    }
    if(typeof data.password === 'string'){
      findUser.password = data.password
    }
    return findUser;
  },
  updatePost(parent, {id, data}, {db},