import { Course } from "@domain/entity/Course";
import { IRepository } from "@infra/core/base/IRepository";

export interface ICourseRepository extends IRepository<Course>{
    get(courseId: string): Promise<Course>
}