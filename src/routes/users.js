import express, { Router } from "express";//importing bothb express and router inside it,,but only need router
import { signUp ,logIn} from "../controlers/users.js";
const router = Router();


router.post('/signup', signUp);
router.post('/logIn', logIn);

export default router;
