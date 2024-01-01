import { GraphQLServer } from "graphql-yoga";
import {readFileSync} from 'fs'
import path from 'path'
import { ApolloServer } from "apollo-server";
import db  from "./db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Comment from "./resolvers/Comment";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";

const schemaSdl = readFileSync(path.join(__dirname, "./schema.graphql"), "utf-8")
const server = new ApolloServer({
  typeDefs:schemaSdl,
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {

  console.log("Server is up at port " + url);
});
