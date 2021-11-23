import Container from "react-bootstrap/esm/Container";
import Travel from "../assets/featured_icons/amazing-travel.png";
import Book from "../assets/featured_icons/book-trip.png";
import Discover from "../assets/featured_icons/discover.png";
import Support from "../assets/featured_icons/support.png";

function FeaturesSection() {
  return (
    <Container fluid className="featuredSection">
      <Container className="p-5">
        <div className="featured-title d-flex flex-column align-items-center justify-content-center">
          <h2 className="display-5 text-light fw-bold">WHY USE MYTINERARY?</h2>
          <p className="text-light">
            Mytinerary has the best service in the industry. Trust our
            experienced agents and the cheapest price around.
          </p>
        </div>
        <div className="d-flex featured-icons-container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="white-img" src={Travel} alt="Travel Icon" />
            <h3 className="text-light fw-bold text-center">Amazing Travel</h3>
            <p className="text-light col-10 text-center">
              Our routes are the best. We assure you that every corner of the
              city will be at your disposal. Do not worry about asking where to
              go next. Our tour based trip will be memorable.
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="white-img" src={Discover} alt="Discover Icon" />
            <h3 className="text-light fw-bold text-center">Discover</h3>
            <p className="text-light col-10 text-center">
              Always wondering how is the world out there outside your
              boundaries? Mytinerary tour based trip takes into account every
              typical known place and not so typical places. Get ready to
              discover new things!
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="white-img" src={Book} alt="Book Icon" />
            <h3 className="text-light fw-bold text-center">Book Your Trip</h3>
            <p className="text-light col-10 text-center">
              Prepare your with time. Check our discounts by scheduling in
              advance. If you book your trip more than four months in advance,
              we will give you 50% discount on total trip price!
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="white-img" src={Support} alt="Support Icon" />
            <h3 className="text-light fw-bold text-center">24/7 Support</h3>
            <p className="text-light col-10 text-center">
              Travel safe with our insurances. We currently have theft
              insurance, kidnapping insurance, healthcare and even if your phone
              breaks, we will take care of that!
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default FeaturesSection;
