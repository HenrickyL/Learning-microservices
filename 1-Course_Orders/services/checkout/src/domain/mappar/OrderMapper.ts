import { Order } from "@domain/entity/Order";
import { OrderStatus } from "@domain/enum/OrderStatus";
import { IMapper } from "@infra/core/IMapper";
import { OrderModel } from "@infra/core/model/OrderModel";
import { Decimal } from "@prisma/client/runtime/library";

export class OrderMapper implements IMapper<Order, OrderModel>{
    toEntity(model: OrderModel): Order {
        return{
            orderId: model.order_id,
            name: model.name,
            email: model.email,
            amount: Number(model.amount),
            courseId: model.course_id,
            status: model.status as OrderStatus
        }
    }
    toModel?(entity: Order): OrderModel {
        return{
            order_id: entity.orderId,
            name: entity.name,
            email: entity.email,
            amount: Decimal(entity.amount),
            course_id: entity.courseId,
            status: entity.status
        }
    }
}