import HomePage from "./_components/main/home";
import Brand from "./_components/brands/brands";
import Packaging from "./_components/packing/packing";
import Black from "./_components/black/black";
import White from "./_components/white/white";
import ClutchSection from "./_components/clutch/clutch";
import ContactCopy from "./_components/ContactCopy/ContactCopy";
import FAQS from "./_components/FAQCopy/FAQCopy";
import Grid from "./_components/Grids/Grids";
import Footer from "./_components/footerCopy/footerCopy";
import StickyCta from "./_components/StickyCta/StickyCta";

export default function Chitti() {
    return (
        <>
            <HomePage />
            <Brand />
            <Packaging />
            <Black />
            <White />
            <ClutchSection />
            <ContactCopy />
            <FAQS />
            <Grid />
            <div id="footer-sentinel" style={{ height: '1px' }} />
            <Footer />
            <StickyCta />
        </>
    )
}