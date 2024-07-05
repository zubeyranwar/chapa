import Image from "next/image";
import Nav from "./Nav";
import SVGComponent from "./components/SVGComponent";
import LineComponent from "./components/LineComponent";
export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-none">
      <Nav />
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="font-[500] text-3xl text-[#0D1B34] sm:text-5xl">
          Seamless Payments,Endless Opportunities!
        </h1>
        <p className="mt-8 text-[16px] text-[#434E60] font-[400] md:text-[20px]">
          Empowering businesses in Ethiopia to securely accept online payments
          from international and <br className="hidden md:block" />
          local customers by providing fast and easy payment experience.
        </p>
        <div className="mt-12 flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-8">
          <button
            type="button"
            className="h-[48px] px-8 inline-flex items-center gap-x-2 text-sm rounded-xl border border-transparent bg-[#7DC400] text-white hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none font-[800]"
          >
            Create Account
          </button>
          <button
            type="button"
            className="h-[48px] px-8 inline-flex items-center gap-x-2 text-sm rounded-xl border border-[#0D1B34] text-[#0D1B34] hover:bg-lime-500 hover:text-white transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none font-[600]"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="relative flex justify-center custom-gradient">
        <div className="hidden md:block relative">
          <div className="translate-y-6 -translate-x-[100px] font-[800] text-[10px] text-white bg-[#7DC400] px-4 py-2 rounded-full">
            25M+ transactions
          </div>
          <div className="relative flex-center rounded-full w-[70px] h-[70px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#fff] shadow-custom-shadow animate-wave"></div>
            <div className="flex-center bg-[#FFFFFFB2] rounded-full w-[60px] h-[60px] border-2 border-white relative">
              <div className="flex-center rounded-full shadow-custom-shadow w-[56px] h-[56px] bg-white">
                <img
                  src="/Cash.svg"
                  alt="provide privacy"
                  width="24"
                  height="24"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-[65px] left-[430px]">
          <SVGComponent />
        </div>

        <div className="absolute top-[10px] left-[730px] rounded-full animate-up-down">
          <img src="/money.svg" alt="money" width="146" height="95" />
        </div>

        <div className="absolute top-[180px] left-[300px] ">
          <div className="relative flex flex-nowrap justify-between items-center bg-white w-[188px] h-[80px] shadow-custom-shadow rounded-md px-4">
            <Image
              src="/call-center.svg"
              alt="Call Center employee listenting client call"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <h4 className="text-[#7DC400] font-[800] text-[12px]">24/7</h4>
              <h4 className="text-[#0D1B34] font-[700] text-[10px]">
                Customer Support
              </h4>
            </div>
            <div className="absolute w-3 h-3 top-3 left-[60px] animate-pulse rounded-full border-2 border-white bg-[#7DC400]"></div>
          </div>
        </div>
        <Image src="/showcase.svg" alt="Chapa demo" width={813} height={342} />

        {/* Flavour Elements😉 */}
        <div className="hidden md:block relative">
          <div className="translate-y-[40px] translate-x-[55px] font-[800] text-[10px] text-white bg-[#7DC400] px-4 py-2 rounded-full">
            Secured
          </div>
          <div className="relative flex-center rounded-full w-[70px] h-[70px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#fff] shadow-custom-shadow animate-wave"></div>
            <div className="flex-center bg-[#FFFFFFB2] rounded-full w-[60px] h-[60px] border-2 border-white relative">
              <div className="flex-center rounded-full shadow-custom-shadow w-[56px] h-[56px] bg-white">
                <Image
                  src="/Privacy.svg"
                  alt="provide privacy"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[150px] right-[250px] w-[272px] h-[141px] bg-white rounded-lg shadow-custom-shadow">
          <div className="relative top-[45px] left-[23px]">
            <LineComponent />
          </div>
        </div>

        {/* <div className="absolute top-[150px] right-[200px]">
          <Image src="process.svg" alt="the step" width={272} height={141} />
        </div> */}
      </div>
    </div>
  );
}
