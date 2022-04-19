import express from "express";
import { SERVER_PORT } from "./constants";

const app = express();

app.listen({ port: SERVER_PORT }, () => console.log(`🚀 Server ready `));