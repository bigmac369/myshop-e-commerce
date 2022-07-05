import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";

const categories = [
  {
    id: 1,
    title: "womens",
    imageUrl: "https://techouts.com/wp-content/uploads/2022/06/628-510-8.jpg",
    route: "shop/womens",
  },
  {
    id: 2,
    title: "mens",
    imageUrl:
      "https://cdn.luxe.digital/media/2019/12/16162226/best-men-online-shopping-mr-porter-luxe-digital.jpg",
    route: "shop/mens",
  },
  {
    id: 3,
    title: "electronics",
    imageUrl:
      "https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg",
    route: "shop/electronics",
  },
  {
    id: 4,
    title: "jewellery",
    imageUrl:
      "https://media.herworld.com/public/2018/04/classic-investment-pieces-banner.jpg",
    route: "shop/jewellery",
  },
];

const Directory = () => {
  return (
    <div className="grid md:grid-cols-2 p-8 gap-10 gap-x-20 lg:w-[80%]">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
