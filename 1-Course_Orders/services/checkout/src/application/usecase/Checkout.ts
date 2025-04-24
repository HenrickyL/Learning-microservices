import { ICourseRepository } from "@application/repository/ICourseRepository";
import { IUseCase } from "../infra/IUseCase";
import { IOrderRepository } from "@application/repository/IOrderRepository";
import { Order } from "@domain/entity/Order";

export class Checkout implements IUseCase<Input, Output>{

    constructor(
        readonly courseRepository: ICourseRepository,
        readonly orderRepository: IOrderRepository
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