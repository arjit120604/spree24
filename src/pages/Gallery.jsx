import Carousel from "../components/Carousel";
import img1 from "../assets/Gallery/i1.png";
import img2 from "../assets/Gallery/i2.png";
import img3 from "../assets/Gallery/i3.png";
import img4 from "../assets/Gallery/i4.png";
import img5 from "../assets/Gallery/i5.png";
import img6 from "../assets/Gallery/i6.png";
import bgimg from "../assets/Gallery/bggal.png";
import Nav from "../components/Nav";

const IMAGES = [
  <img
    src={img1}
    key={1}
    alt="Slide 1"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
  <img
    src={img2}
    key={2}
    alt="Slide 2"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
  <img
    src={img3}
    key={3}
    alt="Slide 3"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
  <img
    src={img4}
    key={4}
    alt="Slide 4"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
  <img
    src={img5}
    key={5}
    alt="Slide 5"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
  <img
    src={img6}
    key={6}
    alt="Slide 6"
    loading="lazy"
    className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square "
  />,
];

function Gallery() {
  return (
    <div
      className="max-md:overflow-clip h-screen bg-[#F7A23F] flex justify-center flex-col max-md:items-center"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="fixed right-2 lg:top-2 top-2 h-10 ">
        <Nav />
      </div>
      <div className="max-md:mb-[20%] max-md:mt-[-30%]">
        <h1 className="text-center ml-0 mb-10 mt-5 font-medium text-white text-6xl font-Rampart text-[3.4rem] lg:text-[4.5rem] text-shadow-orange-stroke">
          GALLERY
        </h1>
      </div>
      <div className="lg:bg-[#005C65] py-10 ">
        <Carousel items={IMAGES} />
      </div>
    </div>
  );
}

export default Gallery;
