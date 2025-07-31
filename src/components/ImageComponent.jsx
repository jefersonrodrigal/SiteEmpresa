const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover" 
    />
  );
};

export default Image;