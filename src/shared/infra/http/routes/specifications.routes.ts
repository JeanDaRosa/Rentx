import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createEspecification/CreateSpecificationController";
import { ensureAdmin } from "@shared/infra/http/middlewares/enseureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createSpecificationController.handle
);

export { specificationRoutes };
