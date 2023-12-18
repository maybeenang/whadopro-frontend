import Navbar from "../../components/layouts/Navbar";
import hero1 from "../../assets/svg/hero1.svg";
import hero2 from "../../assets/svg/hero2.svg";
import QuotesCard from "../../components/cards/QuotesCard";
import CallToActionButton from "../../components/buttons/CallToActionButton";
import Footer from "../../components/layouts/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-secondary">
        <section className="text-center py-8">
          <h1 className="text-white text-[48px] font-semibold max-w-xl mx-auto leading-tight mb-4">
            Take Control of Your Projects, Step by Step.
          </h1>
          <p className="text-white text-[24px] max-w-xl mx-auto leading-tight">
            WhaDoPro Helping You Record, Organize, and Accomplish Tasks with
            Ease.
          </p>
          <CallToActionButton
            variant="secondary"
            classnames="mt-8 text-lg px-10 px-8 py-3"
          />
          <p className="text-white text-sm">or</p>
          <p className="text-white ">
            Already have an account?{" "}
            <span className="text-blue-400">Login</span>
          </p>
        </section>
        <div className=" min-h-[600px] bg-clip-text">
          <img
            src={hero1}
            className="absolute right-0 object-none object-right-top h-[600px] min-w-full  "
          />
          <img src={hero2} className="absolute left-0 lg:block hidden " />
        </div>
        <div className="bg-primary px-16 py-24 min-h-screen">
          <h1 className="text-white font-semibold text-[48px] max-w-md leading-tight">
            Chase Your Dreams, One Task at a Time.
          </h1>
          <div className="flex gap-16 flex-wrap mt-16">
            <QuotesCard />
            <QuotesCard />
            <QuotesCard />
          </div>
          <CallToActionButton
            classnames="mt-16"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
