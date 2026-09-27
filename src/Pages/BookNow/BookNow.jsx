import Navbar from "../../components/Navbar/Navbar";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import BookingSection from "../../components/BookingSection/BookingSection";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function BookNow() {
  return (
    <>
      <Navbar />
      <WhatsApp />
      <BookingSection />
      
        <Testimonials
  title="OVER 100+ PEOPLE TRUST US"
  speed={105}
/>
      <Footer />
    </>
  );
}