import { Course } from "@domain/entity/Course";
import { IRepository } from "@infra/core/IRepository";

export interface ICourseRepository extends IRepository<Course>{
    get(courseId: string): Promise<Course>
}