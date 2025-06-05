const Hero = () => {
  return (
    <footer className="flex flex-col justify-between items-center bg-indigo-950 text-white">
      <div>
        <h2 className="font-black mb-[40px] mt-[10px]">Prateek</h2>
      </div>

      <div className="mb-[40px]">
        <a href="https://www.facebook.com/" className="pr-10">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" className="pr-10">
          <i class="fa-brands fa-instagram" id="se"></i>
        </a>
        <a href="https://www.twitter.com/">
          <i class="fa-brands fa-x-twitter" id="tit"></i>
        </a>
      </div>
      <p className="mb-[10px]">© copyright all right reserved</p>
    </footer>
  );
};

export default Hero;
