import crypto from "crypto"
import { IEntity } from "@domain/infra/IEntity";
import { OrderStatus } from "@domain/enum/OrderStatus";

export class Order implements IEntity{
    constructor(
        readonly orderId: string,
        readonly name: string,
        readonly email: string,
        readonly courseId: string,
        readonly amount: number,
        readonly status: OrderStatus

    ){}
    
    static create( courseId: string, name: string, email:string, amount: number) {
        const orderId = crypto.randomUUID();
        const status = OrderStatus.WaitPayment;
        return new Order(orderId, name, email, courseId, amount, status)
    }
   
}