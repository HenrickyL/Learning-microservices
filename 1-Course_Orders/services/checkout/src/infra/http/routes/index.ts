import express from 'express';
import checkoutRouter from './checkout.router'

const router = express.Router();

router.use('/checkout', checkoutRouter)
export { router };