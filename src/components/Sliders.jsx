import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "../assets/header1_1.jpg" },
  { url: "../assets/carservice3_1.jpg" },
  { url: "../assets/bileReapir1_1.jpg" },
  // { url: "../assets/header4_1.jpg" },
  // { url: "../assets/header3.jpg" },
  // { url: "../assets/header4.jpg" },
  // { url: "../assets/header5.jpg" },
 

];

const Sliders = () => {
  return (
    <div>
      <SimpleImageSlider
        width={2000}
        height={500}
        images={images}
        margin-top={10}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Sliders;
