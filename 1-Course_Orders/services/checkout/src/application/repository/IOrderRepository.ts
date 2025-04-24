import { IRepository } from "@application/infra/IRepository";
import { Order } from "@domain/entity/Order";

export interface IOrderRepository extends IRepository<Order>{
    save(order: Order): Promise<void>
    update(order:Order): Promise<void>
    get(orderId:string): Promise<Order>
}