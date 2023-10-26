import Routes from "express";
import { Controller } from "../api/controller.js";
export const app=Routes()


app.post('/create', Controller.crearDispenser)