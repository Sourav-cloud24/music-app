import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  level: string;
  isFeatured: boolean;
}

const FeatureSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-10 bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-teal-600 font-semibold tracking-wide">
            FEATURED COURSES
          </h2>
          <p className="text-5xl font-semibold text-white">
            Learn With the Best
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {featuredCourses.map((course) => (
            <BackgroundGradient
              key={course.id}
              className="
    rounded-[22px]
    max-w-sm
    p-6
    bg-zinc-900
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:scale-[1.03]
    hover:shadow-2xl
    hover:shadow-teal-500/10
  "
            >
              <div className="flex flex-col h-full">
                {/* Level Badge */}
                <span className="w-fit mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-teal-600/20 text-teal-400 transition-colors duration-300 group-hover:bg-teal-600/30">
                  {course.level}
                </span>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold leading-tight transition-colors duration-300 hover:text-teal-400">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2 line-clamp-3 transition-colors duration-300">
                  {course.description}
                </p>

                <div className="flex-grow" />

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Instructor</p>
                    <p className="text-sm text-gray-300 font-medium">
                      {course.instructor}
                    </p>
                  </div>

                  <p className="text-lg font-semibold text-white">
                    ${course.price}
                  </p>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            className="px-4 py-3.5 text-neutral-800 hover:bg-gray-100 transition bg-white"
            href="/courses"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
