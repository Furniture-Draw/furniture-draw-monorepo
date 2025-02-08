import './style.css';

export function Sponsors() {
  return (
    <div
      className="sponsors-container flex flex-col items-center"
      style={{ width: '1922px', minHeight: '538px', padding: '140px 220px' }}
    >
      <div className="text-center mb-10">
        <h1 className="sponsors-title text-5xl font-bold text-gray-800">
          Our Sponsors
        </h1>
      </div>

      {/* Element2.svg ekleme */}
      <div className="mb-8">
        <img
          src="./images/Element2.svg"
          alt="Element2"
          className="element-svg"
        />
      </div>

      {/* Logoları kart tasarımıyla hizala */}
      <div className="sponsors flex justify-center items-center flex-wrap gap-[100px] mt-10">
        {[
          {
            name: 'Apple',
            src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
          },
          {
            name: 'Microsoft',
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
          },
          {
            name: 'Slack',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1920px-Slack_Technologies_Logo.svg.png',
          },
          {
            name: 'Google',
            src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
          },
        ].map((sponsor, index) => (
          <div
            key={index}
            className="sponsor-card flex items-center justify-center w-36 h-36 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <img
              className="sponsor-logo w-24 h-24 object-contain transition-all duration-300"
              src={sponsor.src}
              alt={sponsor.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
