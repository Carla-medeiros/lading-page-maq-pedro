const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active float-left w-full">
          <img src="img/1.png" className="block w-full" alt="Wild Landscape" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
