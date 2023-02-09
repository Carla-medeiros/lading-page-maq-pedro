const Maps = () => {
  return (
    <div id="location" className="mt-16 px-40 max-md:px-3 mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.0047375327764!2d-59.983354970775885!3d-3.0896131607038817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1ad9212c5e3f%3A0x753985389cd66aff!2sR.%20Santo%20Ant%C3%B4nio%2C%20477%20-%20Coroado%2C%20Manaus%20-%20AM%2C%2069080-271!5e0!3m2!1spt-BR!2sbr!4v1675815839783!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Maps;
