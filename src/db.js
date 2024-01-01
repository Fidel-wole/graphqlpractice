const users = [
    {
      id: 1,
      name: "Adewole",
      email: "adewole@gmail.com",
      password: "Fidelwole@27",
    },
  
    {
      id: 2,
      name: "fidelis",
      email: "adewole@gmail.com",
      password: "Fidelwole@27",
    },
  ];
   console.log(users)
  const posts = [
    {
      id: 2,
      title: "Agbaya",
      body: "Nuisance",
      published: false,
      author: "1",
    },
    {
      id: 4,
      title: "Palace",
      body: "Nuisance",
      published: false,
      author: "2",
    },
    {
      id: 5,
      title: "way",
      body: "Nuisance",
      published: false,
      author: "2",
    },
  ];
  const comments = [
    {
      id: 1,
      comment: "I love you",
      postId: "5",
      author: "1",
    },
    {
      id: 2,
      comment: "I love you",
      postId: "4",
      author: "2",
    },
    {
      id: 3,
      comment: "I love you",
      postId: "2",
      author: "1",
    },
  ];

  const db ={
    users,
    posts,
    comments
  };
  export {db as default}