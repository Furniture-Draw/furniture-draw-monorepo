import './style.css';

export function Sponsors() {
  return (
    <div className="sponsors-container flex flex-col items-center">
      
      <div className="text-center">
        <h1 className="sponsors-title text-3xl font-semibold text-gray-800">Our Sponsors</h1>
      </div>

      {/* Logoları kart tasarımıyla hizala */}
      <div className="sponsors flex justify-center items-center flex-wrap gap-12 mt-8">
        {[
          { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
          { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
          { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
          { name: "Facebook", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" }
        ].map((sponsor, index) => (
          <div key={index} className="sponsor-card flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <img className="sponsor-logo w-24 h-auto grayscale hover:grayscale-0 transition-all duration-300" src={sponsor.src} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

