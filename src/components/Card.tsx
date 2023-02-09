interface Iprops {
  title: string;
  description: string;
  alt: string;
  image: string;
}

const Card = ({ title, alt, image, description }: Iprops) => {
  return (
    <div id="services" className="flex justify-center mt-[2rem]">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={image}
            alt={alt}

          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
