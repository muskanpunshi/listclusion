'use client';

import { CategoryItem } from '@utils/data';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  item: CategoryItem;
}

const CategoryItemCard: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center font-medium transition-all duration-400 hover:text-primary hover:border-primary text-white gap-2 border border-[#ffffff21]  py-[15px] px-[25px] "
      >
        <Image
          src={item.icon || ''}
          alt={item.text}
          className="w-6 h-6 object-contain invert"
          width={24}
          height={24}
        />
        <span>{item.text}</span>
      </Link>
    </li>
  );
};

export default CategoryItemCard;
