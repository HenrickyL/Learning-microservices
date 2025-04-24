import { ICourseRepository } from "@application/repository/ICourseRepository";
import { Course } from "@domain/entity/Course";
import { Mapper } from "@domain/mappar";
import { CourseModel } from "@infra/model/CourseModel";
import { prisma } from "@infra/prisma";

export class CourseRepositoryDB implements ICourseRepository{
    async get(courseId: string): Promise<Course> {
        const course = await prisma.course.findUnique({
            where: { course_id: courseId } // Busca o pedido pelo 'orderId'
        }) as CourseModel;
        return Mapper.Course().toEntity(course);
    }
}