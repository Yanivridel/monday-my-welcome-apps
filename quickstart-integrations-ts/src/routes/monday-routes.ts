import express from "express";
const router = express.Router();

import * as transformationController from "../controllers/transformation-controller";
import authenticationMiddleware from "../middleware/authentication";

router.post(
  "/monday/execute_action",
  authenticationMiddleware,
  transformationController.executeAction
);
router.post(
  "/monday/get_remote_list_options",
  authenticationMiddleware,
  transformationController.getRemoteListOptions
);

export default router;
