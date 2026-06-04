import Features from "../../components/landing/Features/Features";
import Navbar from "../../components/landing/Navbar/Navbar";
import Hero from "../../components/landing/Hero/Hero";
import HowItWorks from "../../components/landing/HowItWorks/HowItWorks";
import AnalyticsPreview from "../../components/landing/AnalyticsPreview/AnalyticsPreview";
import QRPreview from "../../components/landing/QRPreview/QRPreview";
import About from "../../components/landing/About/About";
import Contact from "../../components/landing/Contact/Contact";
import Footer from "../../components/landing/Footer/Footer";
function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <AnalyticsPreview></AnalyticsPreview>
      <QRPreview></QRPreview>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
export default LandingPage;
