type CardProps = {
    title: string;
    description?: string;
    img?: string;
  };
  
  const Card = ({ title, description, img }: CardProps) => {
    const isImageCard = Boolean(img);
  
    return (
      <div
        className={`${
          isImageCard
            ? "relative overflow-hidden bg-slate-800 p-0"
            : "bg-slate-800 p-6"
        } text-white rounded-xl shadow-lg h-full flex flex-col justify-center`}
      >
        {isImageCard ? (
          <>
            {/* Image covers the entire card */}
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-fit object-cover"
            />
  
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
  
            {/* Text overlay at the bottom */}
            <div className="relative z-10 mt-auto p-6">
              <h3 className="text-3xl font-semibold mb-2 drop-shadow-md">
                {title}
              </h3>
              {description && (
                <p className="text-lg text-gray-300 drop-shadow-sm">
                  {description}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            {description && <p className="text-gray-400">{description}</p>}
          </>
        )}
      </div>
    );
  };
  
  export default Card;
  