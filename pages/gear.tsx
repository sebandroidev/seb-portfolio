import Image from "next/image";

import Logi from "public/gear/logi.jpeg";

interface ItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Item = ({ title, description, image, link }: ItemProps) => (
  <li className="flex gap-4 items-center">
    <div className="relative bg-tertiary rounded-xl border border-primary overflow-hidden aspect-video w-[4rem] min-w-[4rem] h-16">
      <Image
        src={image}
        alt={title}
        className="object-cover w-full h-full "
        fill
      />
    </div>
    <div>
      <h3 className="text-primary line-clamp-2">{title}</h3>
      <p className="text-sm text-secondary line-clamp-1 mb-1">{description}</p>
    </div>
    <a
      className="ml-auto text-sm rounded-full px-3 bg-secondary text-blue w-fit"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get
    </a>
  </li>
);

const gear = [
  {
    name: "Orbitkey Desk Mat",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61Du63bfnlL._AC_SL1500_.jpg",
    description:
      "Leather and Recycled PET Felt | Document Hideaway | Magnetic Cable Holder",
    link: "https://amzn.to/3Dm37eu",
  },
  {
    name: "Glorious GMMK Pro",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71Nk1Qb3PhS._AC_SL1500_.jpg",
    description: "A 75% mechanical keyboard",
    link: "https://amzn.to/3U9tcE9",
  },
  {
    name: "Glorious Coiled Cables",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71lpNM41jVS._AC_SL1500_.jpg",
    description: "USB-C Artisan Braided, Mechanical Keyboards",
    link: "https://amzn.to/3NSznKR",
  },
  {
    name: "Logitech MX Master 3S Mouse",
    category: "Desk Setup",
    image: (Logi),
    description:
      "Ergonomic and comfortable to be used for all day use, love the scrolling!",
    link: "https://amzn.to/3U5syHG",
  },
  {
    name: "BenQ ScreenBar Monitor Light",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
    description:
      "Enhances immersion and focus, creates a comfortable environment",
    link: "https://amzn.to/3fUAfCi",
  },
  {
    name: "Anker USB-C Hub",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61thMtrP5rL._AC_SL1500_.jpg",
    description: "The one cable solution for my MacBook Pro.",
    link: "https://amzn.to/3Dk9vCV",
  },
  {
    name: "LG 34WN780-B UltraWide Monitor 34in 21:9 QHD",
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/81ewD+orLSL._AC_SL1500_.jpg",
    description: "A 3440 x 1440 IPS Display, great for multitasking.",
    link: "https://amzn.to/3DJd86G",
  },
  {
    name: "Brevite Backpack",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61kuICMElAL._AC_SL1500_.jpg",
    description: "Compact Camera Backpack - A Minimalist & Travel-friendly",
    link: "https://amzn.to/3U5PTJo",
  },
  {
    name: "Nikon Z6 Full Frame Mirrorless",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61h9UPZ40TL._AC_SL1000_.jpg",
    description: "Love the Z6 because it's great for photos and videos.",
    link: "https://amzn.to/3T1CvGa",
  },
  {
    name: "Nikon NIKKOR Z 28mm f/2.8",
    category: "Camera Gear",
    image:
      "https://ik.imagekit.io/kit/products/e4/bb/nikkor-z-28mm-f-2-8-e4bbd44f78ee3423c2db3a13f117e0e8.png?tr=dpr-1,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    description: "My main for walking around, with very useful aperture.",
    link: "https://amzn.to/3To5UdA",
  },
  {
    name: "NIKON NIKKOR Z 50mm f/1.8 S",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61u8mYpACQL._AC_SL1500_.jpg",
    description: "One of my main sit down lenses, with awesome bokeh.",

    link: "https://amzn.to/3yEqnmj",
  },
  {
    name: "GoPro HERO10 Black action camera",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61p2fYdYP+L._AC_SX679_.jpg",
    description: "Awesome for action video, I use it for my POV shots.",
    link: "https://amzn.to/3exkZuq",
  },

  {
    name: "Suptig Chest Mount for GoPro",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/81y-UqVnYAL._AC_SL1500_.jpg",
    description: "This is how I record my bike rides :)",
    link: "https://amzn.to/3DonSG9",
  },
  {
    name: "Movo VXR10-PRO",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/71CUGiUL2dL._AC_SL1500_.jpg",
    description: "Compact Shotgun Mic Compatible with Cameras and phones.",
    link: "https://amzn.to/3EjYzH7",
  },
  {
    name: "Movo LV1-USB Lavalier Microphone",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61eFtjXUWkL._AC_SL1500_.jpg",
    description: "Lapel Microphone, Lav Mic, Clip on Microphone",
    link: "https://amzn.to/3WQ1nDe",
  },
  {
    name: "ULANZI Camera Tripod",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61FTKuvhBeL._AC_SL1500_.jpg",
    description: "Mini Flexible Tripod Stand, Universal use",
    link: "https://amzn.to/3Elzw6G",
  },
];

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-28">
        <div
          className="flex flex-col gap-8 animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              My Gear
            </h1>
            <p className="animate-in text-secondary">
              Things I use and recommend.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-16 animate-in md:gap-24"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {categories.map((category, index) => (
            <section className="flex flex-col gap-4 " key={index}>
              <h2>{category}</h2>
              <ul className="grid md:grid-cols-2 gap-6 animated-list">
                {gear.map((item, index) => {
                  if (item.category === category) {
                    return (
                      <Item
                        key={index}
                        title={item.name}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}