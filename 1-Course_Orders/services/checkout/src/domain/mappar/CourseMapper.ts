import { Course } from "@domain/entity/Course";
import { IMapper } from "@infra/core/IMapper";
import { CourseModel } from "@infra/model/CourseModel";
import { Decimal } from "@prisma/client/runtime/library";

export class CourseMapper implements IMapper<Course, CourseModel>{
    toEntity(model: CourseModel): Course {
        return {
            courseId: model.course_id,
            title: model.title,
            amount: Number(model.amount)
        }
    }
    toModel?(entity: Course): CourseModel {
        return{
            course_id: entity.courseId,
            title: entity.title,
            amount: Decimal(entity.amount)
        }
    }
}