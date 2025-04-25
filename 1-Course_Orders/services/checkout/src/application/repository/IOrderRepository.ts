import { Order } from "@domain/entity/Order";
import {IRepository} from "@shared/infra/base/IRepository"

export interface IOrderRepository extends IRepository<Order>{
    save(order: Order): Promise<void>
    update(order:Order): Promise<void>
    get(orderId:string): Promise<Order>
}