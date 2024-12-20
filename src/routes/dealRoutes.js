import express from "express";
import { verifyJwt } from "../middlewears/verifyJwt";
import {
  create,
  dealsList,
  deleteClaimDeal,
  getClaimdDeals,
  getDeal,
  getFavDealsList,
  getParticipator,
  join,
  makeFavDeal,
  updateDeal,
} from "../controller/dealController";

const dealRouter = express.Router();

dealRouter.post("/create", verifyJwt, create);
dealRouter.post("/join", verifyJwt, join);
dealRouter.get("/list", dealsList);
dealRouter.post("/getDeal", verifyJwt, getDeal);
dealRouter.post("/getParticipator", verifyJwt, getParticipator);
// dealRouter.get("/claim", verifyJwt, getClaimdDeals);
dealRouter.post("/delete", verifyJwt, deleteClaimDeal);
dealRouter.post("/fav", verifyJwt, makeFavDeal);
dealRouter.post("/favDealList", verifyJwt, getFavDealsList);
dealRouter.post("/update", verifyJwt, updateDeal);

export default dealRouter;
