interface AppCardProps {
    name: string;
    desc: string;
    image: string;
    source: string;
  }
  
  const AppCard = ({ name, desc, image, source }: AppCardProps) => {
    const handleClick = () => {
      window.open(source, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <button 
        onClick={handleClick}
        className="w-[220px] h-[220px] rounded-xl overflow-hidden relative group transition-transform hover:scale-105"
      >
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-sm text-white/80">{desc}</p>
        </div>
      </button>
    );
  };
  
  export default AppCard;