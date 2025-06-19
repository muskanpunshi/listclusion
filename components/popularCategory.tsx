import {category_data} from "@utils/data";

import Heading from "./heading";
import { IoIosArrowForward } from "react-icons/io";
import Button from "@components/Button";
import CategoryItemCard from "@components/CategoryItemCard";

const PopularCategory = () => {
  return (
    <div className="py-16 bg-dark-background px-6 max-md:px-4 max-w-full">
      <div className="flex w-full justify-between items-center mb-10 ">
        <Heading
          isHeadingH1={false}
          className=" text-white font-medium max-md:text-center "
        >
          Popular Categories.
        </Heading>

        <Button
          href="#"
          className="bg-transparent border-b-2 border-white p-0 hover:text-primary hover:border-primary transition-all duration-400 max-md:hidden"
        >
          See all categories
          <IoIosArrowForward className="-ml-2 " />
        </Button>
      </div>

      <div className="w-full">
        <ul className="flex flex-wrap justify-center gap-6">
          {category_data.map((item) => (
            <CategoryItemCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="max-md:block hidden text-center mt-10">
        <Button
          href="#"
          className="bg-transparent border-b-2 border-white p-0 hover:text-primary hover:border-primary transition-all duration-400 "
        >
          See all categories
          <IoIosArrowForward className="-ml-2 " />
        </Button>
      </div>
    </div>
  );
};

export default PopularCategory;
