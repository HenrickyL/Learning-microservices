import express from "express";
import { CheckoutUseCase } from "@application/usecase/Checkout";
import { CheckoutController } from "@application/usecase/Checkout/Controller";
import { CourseRepositoryDB } from "@infra/prisma/repository/CourseRepositoryDB";
import { OrderRepositoryDB } from "@infra/prisma/repository/OrderRepositoryDB";
import { RouterAdapter } from '@shared/infra/http/RouterAdapter';
import { CheckoutRequest, CheckoutResponse } from "@application/usecase/Checkout/DTO";

const router = express.Router()

const orderRepository = new OrderRepositoryDB();
const courseRepository = new CourseRepositoryDB();
const useCase = new CheckoutUseCase(orderRepository, courseRepository);
const controller = new CheckoutController(useCase);

const adapter = new RouterAdapter<CheckoutRequest, CheckoutResponse>(controller)

router.post("", (req, res)=>{adapter.handle(req, res)})

export default router;