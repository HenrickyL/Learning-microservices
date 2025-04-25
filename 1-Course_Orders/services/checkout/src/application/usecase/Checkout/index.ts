import { ICourseRepository } from "@application/repository/ICourseRepository";
import { IOrderRepository } from "@application/repository/IOrderRepository";
import { Order } from "@domain/entity/Order";
import { IUseCase } from "@shared/infra/base/IUseCase"
import { CheckoutRequest, CheckoutResponse } from "./DTO";

export class CheckoutUseCase implements IUseCase<CheckoutRequest, CheckoutResponse>{
    constructor(
        readonly orderRepository: IOrderRepository,
        readonly courseRepository: ICourseRepository,
    ){}

    async execute(input: CheckoutRequest): Promise<CheckoutResponse> {
        const {courseId, name, email, creditCardToken} = input;
        const course = await this.courseRepository.get(courseId);
        const order = Order.create(courseId, name, email, course.amount);
        await this.orderRepository.save(order);
        return {
            orderId: order.orderId
        }
    }
}