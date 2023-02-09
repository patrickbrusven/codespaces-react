import CornerBlobs from "./CornerBlobs";

function HeroSection() {
  return (
    <>
      <div className="hero-card">
        <CornerBlobs wrapperClass={"corner-blobs"}></CornerBlobs>
        {/* <h1>Patrick Brusven</h1>
        <h2>Software Developer</h2> */}
      </div>
    </>
  );
}

export default HeroSection;
