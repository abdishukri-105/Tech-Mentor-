import hero from "../assets/svgs/hero.svg"

const LandingPage = () => {
    return (  
<div className="grid grid-cols-12 gap-4 pt-20 bg-blue-50 h-screen">
  <div className="col-start-3 col-span-5 ">
    <div className="text-xl mt-8 antialiased"> 
        <h1 className="text-6xl capitalize font-bold font-serif line-height  text-blue-900 mb-4 tracking-wider leading-tight"> Empowering beginners in Tech </h1>
        <h1 className="text-xl font-bold font-serif line-height ">Your Guide to the Best Tech Bootcamps and Courses</h1> 
    </div>
  </div>
  <div className="col-span-4">
    <img src={hero} alt="hero" className="max-w-sm" />
  </div>
</div>

    );
}
 
export default LandingPage;