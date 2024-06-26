import { Button, Input } from "@nextui-org/react";

const img = [
  {
    id: 1,
    img: "/car1.png",
  },
  {
    id: 2,
    img: "/car2.png",
  },
  {
    id: 3,
    img: "/car3.png",
  },
  {
    id: 4,
    img: "/car4.png",
  },
  {
    id: 5,
    img: "/car5.png",
  },
  {
    id: 6,
    img: "/car6.png",
  },
  {
    id: 7,
    img: "/car7.png",
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/image 2.png"
        className="w-full md:h-[700px] h-[350px] md:object-cover object-fit"
      ></img>
      <Input
        className="hidden sm:inline absolute md:top-[500px] sm:top-48 top-60 left-8 md:left-2 md:inline w-[250px] lg:w-[700px] md:w-[500px]"
        size="sm"
        placeholder="Search Vehicle"
      ></Input>
      <Button
        className="absolute shadow-2xl font-bold hidden sm:inline sm:top-48 lg:left-[720px] md:left-[550px] left-[300px] top-60 md:top-[500px]"
        color="primary"
        size="sm"
      >
        Button
      </Button>
      <p className="absolute top-60 sm:top-[560px]  shadow-xl text-white font-semibold left-4 ">
        Search by Brand
      </p>
      <div className="flex gap-3 left-2 absolute top-[280px] md:top-[590px] flex-wrap">
        {img.map((item) => (
          <div
            className="hover:scale-110 transform transition-transform duration-300  h-full"
            key={item.key}
          >
            <img
              className="md:h-20 h-10 w-10 md:w-28"
              key={item.key}
              src={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
