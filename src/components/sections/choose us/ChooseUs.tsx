import React from "react";
import WhyUsBlock from "../../WhyUsBlock";
import BitHand from "../../../assets/choose-main.png";
import Header from "../../UI/Header";
type Props = {};

const ChooseUs = (props: Props) => {
  return (
    <section id="chooseus" className="flex bg-bg pt-40">
      <div className="mx-auto max-w-[70%] max-[1200px]:max-w-[90%]">
        <div className="choose-container">
          <Header>
            why
            <span className="ml-[20px] bg-gradient-to-l from-[#2600fc]  to-[#ff00ea]  bg-clip-text text-transparent">
              choose us
            </span>
          </Header>

          <div className=" mt-16 flex justify-center max-[1000px]:flex-wrap max-[1000px]:gap-6">
            <div className="flex flex-col gap-5">
              <WhyUsBlock
                img="fa-solid fa-wallet"
                title="CONNECT YOUR WALLET"
                text="Use Trust Wallet, Metamask or to connect to the app."
              />
              <WhyUsBlock
                img="fa-solid fa-pen-ruler"
                title="SELECT YOUR QUANTITY"
                text="Upload your crypto and set a title, description and price."
              />
              <WhyUsBlock
                img="fa-solid fa-bolt"
                title="CONFIRM TRANSACTION"
                text="Earn by selling your crypto on our marketplace."
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[80%] max-[500px]:w-[60%]"
                src={BitHand}
                alt="hand_img"
              />
            </div>
            <div className="flex flex-col gap-5">
              <WhyUsBlock
                img="fa-solid fa-satellite-dish"
                title="RECEIVE YOUR OWN NFTS"
                text="Invest all your crypto at one place on one platform."
              />
              <WhyUsBlock
                img="fa-solid fa-chess-knight"
                title="TAKE A MARKET
            TO SELL"
                text="Discover, collect the right crypto collections to buy or sell."
              />
              <WhyUsBlock
                img="fa-solid fa-boxes-stacked"
                title="DRIVE YOUR COLLECTION"
                text="We make it easy to Discover, Invest and manage."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
