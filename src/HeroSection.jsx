import CornerBlobs from "./CornerBlobs";

function HeroSection() {
  return (
    <>
      <div className="hero-card">
        <CornerBlobs wrapperClass={"hero-card__background"}></CornerBlobs>
        <div className="hero-card__content">
          <p className="highlight-text">Hi, my name is</p>
          <h1 className="heading-text">Patrick Brusven.</h1>
          <h2 className="subheading-text">
            I'm a Front-End leaning Full-Stack Developer.
          </h2>
          <p className="content-text">
            Technology amazes me every day and is why I transitioned form retail
            managment to engineering.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
