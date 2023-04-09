import hero from "../assets/svgs/hero.svg"

const LandingPage = () => {
    return (  
<div className="grid grid-cols-12 gap-4 mt-10">
  <div className="col-start-2 col-span-5 ">
    <div className="text-xl mt-20"> 
        <h1 className="text-5xl font-bold font-serif line-height  text-blue-900 mb-8"> Empowering beginners in Tech </h1>
        <h1 className="text-xl font-bold font-serif line-height ">Your Guide to the Best Tech Bootcamps and courses</h1> 
       
    </div>
  </div>
  <div className="col-span-5">
    <img src={hero} alt="hero" className="max-w-sm" />
  </div>
</div>

    );
}
 
export default LandingPage;