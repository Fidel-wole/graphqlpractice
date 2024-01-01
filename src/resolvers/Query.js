const Query = {
    users(parent, args, {db}, info) {
      if (!args.query) {
        return db.users;
    
      }
      return db.users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, {db}, info) {
      if (!args.query) {
        return db.posts;
      }
      return db.posts.filter((post) => {
        return post.title.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0; 
      } else {
        return args.numbers.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
      }
    },
    me() {
      return {
        id: 234,
        name: "Fidel Wole",
        email: "adewoyeadedayo10@gmail.com",
        password: "Fidel",
      };
    },
    post() {
      return {
        id: 212,
        title: "Twerk",
        body: "Tue tue",
        published: true,
      };
    },
    comment(parent, args, {db}, info) {
      return db.comments.filter((comment) => {
        if (!args.query) {
          return comment;
        }
        return comment.comment.toLowerCase().includes(args.query.toLowerCase());
      });
    },
  }

  export {Query as default}
