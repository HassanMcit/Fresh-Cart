import amazon from "../../assets/images/amazon-pay-svgrepo-com.svg";
import amx from "../../assets/images/amex-svgrepo-com.svg";
import master from "../../assets/images/mastercard-4-logo-svgrepo-com.svg";
import pay from "../../assets/images/paypal-svgrepo-com.svg";
import appStore from "../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import googlePlay from "../../assets/images/google-play-badge-logo-svgrepo-com.svg";

export default function Footer() {
  return (
    <>
      <footer className="px-5 bg-primary">
        <div className="container py-12">
          <h5 className="text-xl font-medium">Get the FreshCart app</h5>
          <p className="my-2 text-gray-500/50">
            We will send you a link, open it on your phone to download the app.
          </p>
          <div className="px-1 flex flex-col md:flex-row items-center justify-between space-x-5 pb-3 border-b-2">
            <input
              type="email"
              className="ms-3 p-3 rounded-xl w-full md:w-fit focus:outline-secondary flex-grow my-4"
              placeholder="Email .."
            />
            <button className="bg-secondary w-full md:w-fit  hover:bg-secondary/80 py-3 px-14 focus:border-white text-white rounded-xl">
              Share App Link
            </button>
          </div>
          <div className="px-1 pb-3 border-b-2 flex flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="flex md:w-1/2 items-center flex-col md:flex-row py-7 md:space-x-6">
              <h6 className="text-xl md:text-2xl text-gray-600">Payment Partners</h6>
              <div className="flex my-6 md:my-0 space-x-5">
                <div className="w-1/2 mx-auto md:w-12 cursor-pointer">
                  <img src={amazon} className="rounded-xl" alt="amazon" />
                </div>
                <div className="w-1/2 mx-auto md:w-12 cursor-pointer">
                  <img src={amx} className="rounded-xl" alt="amazon" />
                </div>
                <div className="w-1/2 mx-auto md:w-12 cursor-pointer">
                  <img src={master} className="rounded-xl" alt="amazon" />
                </div>
                <div className="w-1/2 mx-auto md:w-12 cursor-pointer">
                  <img src={pay} className="rounded-xl" alt="amazon" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-1/2 justify-between md:justify-end items-center space-x-0 md:space-x-5">
              <h5 className="text-xl md:text-2xl text-gray-600">Get deliveries with FreshCart</h5>

              <div className="w-full md:w-[15%] cursor-pointer">
                <img src={appStore} className="w-full" alt="appStore" />
              </div>
              <div className="w-full md:w-[15%] cursor-pointer">
                <img src={googlePlay} className="w-full" alt="appStore" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
