
export function Sponsors() {
  return (
    <div className="sponsors-container flex flex-col items-center">
      
      <div className="">
        <h1 className="sponsors-title text-center text-3xl font-semibold">Our Sponsors</h1>
      </div>
      
      <div className="sponsors flex justify-center items-center gap-8 mt-4">
        <img
          className="sponsor-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKulR0SRBKvqjR20sLKPlAr2APjwJ4lsIgA&s"
          alt="Sponsor 1"
        />
        <img
          className="sponsor-logo"
          src="https://s7d2.scene7.com/is/image/microsoftcorp/MS-logo_RW10nnH"
          alt="Sponsor 2"
        />
        <img
          className="sponsor-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviomQgeMfvAnaeFqYL58rL1l3psCx8Lah2g&s"
          alt="Sponsor 3"
        />
        <img
          className="sponsor-logo"
          src="https://cdn.wmaraci.com/nedir/google.png"
          alt="Sponsor 4"
          
        />
      </div>
    </div>
  );
}
