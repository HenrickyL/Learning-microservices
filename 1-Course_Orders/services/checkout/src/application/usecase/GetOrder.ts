import { IOrderRepository } from '../repository/IOrderRepository';
import { OrderStatus } from "@domain/enum/OrderStatus";
import {IUseCase} from "@shared/infra/base/IUseCase"

export class GetOrder implements IUseCase<Input, Output>{
    constructor(
        readonly orderRepository: IOrderRepository
    ){}
    
    async execute({orderId}: Input): Promise<Output> {
        const order = await this.orderRepository.get(orderId);
        return order;
    }
}


type Input = {
    orderId: string
}

type Output = {
    orderId: string,
    name: string,
    email: string,
    courseId: string,
    amount: number,
    status: OrderStatus
}