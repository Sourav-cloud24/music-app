import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import coursesData from "@/data/music_courses.json";

/* ================= TYPES ================= */

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  level: string;
  isFeatured: boolean;
  image: string;
}

interface CoursesResponse {
  courses: Course[];
}

const Page = () => {
  const { courses } = coursesData as CoursesResponse;

  return (
    <div className="bg-black relative w-full min-h-screen overflow-hidden flex justify-center">
      <Spotlight />
      <div className="flex flex-wrap justify-center gap-2.5 max-w-full px-10 py-11">
        {courses.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
