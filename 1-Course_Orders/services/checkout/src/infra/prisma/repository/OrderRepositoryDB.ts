import { IOrderRepository } from "@application/repository/IOrderRepository";
import { Order } from "@domain/entity/Order";
import { Mapper } from "@domain/mappar";
import { OrderModel } from "@infra/core/model/OrderModel";
import { prisma } from "@infra/prisma";

export class OrderRepositoryDB implements IOrderRepository{
    async save(order: Order): Promise<void> {
        await prisma.order.create({
            data: {
                order_id: order.orderId, 
                course_id: order.courseId,
                name: order.name,
                email: order.email,
                status: order.status,
                amount: order.amount
            }
        });
    }
    async update(order: Order): Promise<void> {
        await prisma.order.update({
            where: { order_id: order.orderId }, 
            data: {
                course_id: order.courseId,
                name: order.name,
                email: order.email,
                status: order.status,
                amount: order.amount
            }
        });
    }
    async get(orderId: string): Promise<Order> {
        const order = await prisma.order.findUnique({
            where: { order_id: orderId } 
        }) as OrderModel;
        return Mapper.Order().toEntity(order);
    }
}