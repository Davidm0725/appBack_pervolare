import { Router } from "express";
import {getUserLogin} from "../controllers/userLogin.controller";

const router = Router();

router.route('/login/:email/:pass')
  .get(getUserLogin)

export default router;
