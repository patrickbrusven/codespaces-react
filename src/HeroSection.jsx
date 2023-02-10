import CornerBlobs from "./CornerBlobs";

function HeroSection() {
  return (
    <>
      <div className="hero-card">
        <CornerBlobs wrapperClass={"hero-card__background"}></CornerBlobs>
        <div className="hero-card__content">
          <div>
            <h1 className="highlight-text">Hi, my name is</h1>
            <h2 className="heading-text">Patrick Brusven.</h2>
            <h3 className="subheading-text">
              I'm a Front-End leaning Full-Stack Developer.
            </h3>
          </div>
          <p className="content-text">
            My unique background in Retail Operations inspired me to become a self-taught software
            engineer. I'm a bit of a polygot who specializes in the modern JavScript
            ecosystem.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
