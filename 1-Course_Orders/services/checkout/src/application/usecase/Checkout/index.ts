import { ICourseRepository } from "@application/repository/ICourseRepository";
import { IOrderRepository } from "@application/repository/IOrderRepository";
import { Order } from "@domain/entity/Order";
import { IUseCase } from "@infra/core/IUseCase";

export class CheckoutUseCase implements IUseCase<Input, Output>{

    constructor(
        readonly orderRepository: IOrderRepository,
        readonly courseRepository: ICourseRepository,
    ){}

    async execute(input: Input): Promise<Output> {
        const {courseId, name, email, creditCardToken} = input;
        const course = await this.courseRepository.get(courseId);
        const order = Order.create(courseId, name, email, course.amount);
        await this.orderRepository.save(order);
        return {
            orderId: order.orderId
        }
    }
}

type Input = {
    courseId: string,
    name: string,
    email: string,
    creditCardToken: string
}

type Output = {
    orderId: string
}