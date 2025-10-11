import { Course } from './course';
import { User } from './user';
import { ApiProperty } from '@nestjs/swagger';

export class CourseEnrollment {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  userId: string;

  @ApiProperty({ type: String })
  courseId: string;

  @ApiProperty({ type: Date })
  enrolledAt: Date;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: () => Course })
  course: Course;

  @ApiProperty({ type: () => User })
  user: User;
}
