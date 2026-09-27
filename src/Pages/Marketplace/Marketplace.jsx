import Navbar from "../../components/Navbar/Navbar.jsx";
import MarketplaceSlider from "../../components/MarketplaceSlider/MarketplaceSlider.jsx";
// import MarketplaceProducts from "../../components/MarketplaceProducts/MarketplaceProducts.jsx";
import WhatsApp from "../../components/WhatsApp/WhatsApp.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MarketplaceBike from "../../components/MarketplaceBike/MarketplaceBike.jsx";
import aerox from "../../assets/images/aerox.png";
import nmaxStd from "../../assets/images/Nmax 2026.png";
import nmaxTechMax from "../../assets/images/MX King.png";
import mio from "../../assets/images/Yamaha mio2.png";
import gearUltimata from "../../assets/images/Yamaha gear.png";
import hondaCrf150 from "../../assets/images/Honda crf 150.png";
import lexi from "../../assets/images/yamaha filano.png";
import r125 from "../../assets/images/Yamaha r125.png";
import BikeModel from "../../components/BikeModel/BikeModel.jsx";
import aerox1_2 from "../../assets/images/aerox1.2.png";
import aeroxred from "../../assets/images/aerox red black1.1.png";
import aerox1_1 from "../../assets/images/yamaha aerox1.1.png";
import crf1_1 from "../../assets/images/crf1.1.png";
import hondabeat from "../../assets/images/honda beat1.1.png";
import hondagenio from "../../assets/images/honda genio1.1.png";
import hondagenio2 from "../../assets/images/honda genio2.1.png";
import hondagenio3 from "../../assets/images/honda genio3.1.png";
import hondagenio4 from "../../assets/images/honda genio4.1.png";
import mio1_1 from "../../assets/images/yamaha mio1.1.png";
import scoopy from "../../assets/images/honda scoopy1.1.png";
import hondaversa from "../../assets/images/honda versa1.1.png";
import hondalexi from "../../assets/images/lexi1.1.png";
import mxking from "../../assets/images/mx king1.1.png";
import nmax from "../../assets/images/nmax1.1.png";
import nmax2 from "../../assets/images/yamaha nmaxc2.1.png";
import nmaxblue from "../../assets/images/nmax matt blue1.1.png";
import filano from "../../assets/images/yamaha filano1.1.png";
import filano2 from "../../assets/images/yamaha filano21.1.png";
import gear from "../../assets/images/yamaha gear1.1.png";

export default function Marketplace() {
  const bikes = [
    { name: "Yamaha Aerox", image: aerox1_2 },
    { name: "Yamaha Aerox", image: aerox1_1 },
    { name: "Yamaha Aerox", image: aeroxred },
    { name: "Honda CRF", image: crf1_1 },
    { name: "Honda Beat", image: hondabeat },
    { name: "Honda Genio", image: hondagenio },
    { name: "Honda Genio", image: hondagenio2 },
    { name: "Honda Genio", image: hondagenio3 },
    { name: "Honda Genio", image: hondagenio4 },
    { name: "Yamaha Mio", image: mio1_1 },
    { name: "Honda Scoopy", image: scoopy },
    { name: "Honda Versa", image: hondaversa },
    { name: "Yamaha Lexi", image: hondalexi },
    { name: "Yamaha MX King", image: mxking },
    { name: "Yamaha NMAX", image: nmax },
    { name: "Yamaha NMAX", image: nmax2 },
    { name: "Yamaha NMAX", image: nmaxblue },
    { name: "Yamaha Filano", image: filano },
    { name: "Yamaha Filano", image: filano2 },
    { name: "Yamaha Gear", image: gear },
  ];

  return (
    <>
      <Navbar />

      {/* <MarketplaceSlider /> */}
      <MarketplaceBike
        head1="Yamaha"
        head2="Aerox"
        para="Yamaha Aerox features a liquid-cooled Blue Core VVA engine with Yamaha Electric CVT (YECVT) transmission for instant power and high fuel efficiency. It includes dual riding modes, Traction Control, Y-Connect smartphone integration, full-LED illumination, and sporty 14-inch wheels designed for dynamic urban performance."
        image={aerox}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="NMAX"
        para="Yamaha NMAX Std comes equipped with a refined liquid-cooled Blue Core engine featuring Variable Valve Actuation (VVA) and Stop & Start System technology. Designed for city commuting, it includes standard ABS, a full-digital LCD instrument cluster, all-LED lighting, and an ergonomic MAX series chassis."
        image={nmaxStd}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Yamaha"
        head2="MX King"
        para="Yamaha MX King is a high-performance mopet powered by a 150cc fuel-injected liquid-cooled engine with 5-speed manual transmission. Built with underbone sport geometry, it features aggressive R-DNA LED headlights, a digital speedometer, assist & slipper clutch, and wide tubeless tires for sharp city handling."
        image={nmaxTechMax}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="MIO"
        para="Yamaha MIO is built on an ultra-lightweight frame powered by an efficient 125cc air-cooled Blue Core engine. Engineered for effortless city maneuvering, it offers modern aesthetic updates, an eco-indicator display, integrated Smart Stand Switch, and excellent fuel economy."
        image={mio}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="Gear"
        para="Designed for utility and daily urban travel, Yamaha Gear is powered by a durable 125cc Blue Core engine with Answer Back System and Electric/Kick Start options. Features include double hook utility racks, an accessible power outlet, wide footrests, and scratch-resistant side body panels."
        image={gearUltimata}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Honda"
        head2="CRF 150"
        para="Honda CRF 150L features a rugged 149.15cc PGM-FI 4-stroke engine paired with long-travel Showa inverted front forks and a Pro-Link rear suspension. Built for dual-sport performance on and off-road, it provides high ground clearance, aluminum rims, and wave disc brakes."
        image={hondaCrf150}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="Filano"
        para="Yamaha Grand Filano Hybrid combines classic retro-modern styling with a 125cc Blue Core Hybrid engine assisted by a Smart Motor Generator. It includes keyless Smart Key System, TFT sub-screen, large under-seat storage with LED light, and front-refueling convenience."
        image={lexi}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Yamaha"
        head2="Yamaha r125"
        para="Inspired by Yamaha's flagship supersports, Yamaha R125 features a liquid-cooled 125cc 4-valve VVA engine, Assist & Slipper clutch, and Traction Control. Outfitted with a 5-inch TFT display with smartphone connectivity, KYB inverted front forks, and aggressive R1-style LED lighting."
        image={r125}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px 16px",
          backgroundColor: "#000",
          justifyContent: "center",
          boxSizing: "border-box",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {bikes.map((bike, index) => (
          <BikeModel key={index} name={bike.name} image={bike.image} />
        ))}
      </div>

      <WhatsApp />
      <Footer />
    </>
  );
}