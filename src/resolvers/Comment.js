const Comment = {
    postId(parent, args, {db}, info) {
      return db.posts.find((post) => {
        return post.id == parent.postId;
      });
    },
  }
  export {Comment as default}