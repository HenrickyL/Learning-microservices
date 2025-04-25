import { CheckoutUseCase } from "@application/usecase/Checkout";
import { CourseRepositoryDB } from "@infra/prisma/repository/CourseRepositoryDB";
import { OrderRepositoryDB } from "@infra/prisma/repository/OrderRepositoryDB";

//main.test.ts
test("must do checkout", async ()=>{
    const orderRepository = new OrderRepositoryDB();
    const courseRepository = new CourseRepositoryDB();
    const checkout = new CheckoutUseCase(orderRepository, courseRepository);

    const input = {
        courseId: "",
        name: "John Doe",
        email: "john.doe@mail.com",
        creditCardToken: "123456789"
    }

    const output = await checkout.execute(input);
    expect(output.orderId).toBeDefined();
});