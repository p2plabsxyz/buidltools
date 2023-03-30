import React, { useState } from "react";
import firebase from "firebase/compat/app";
import db from "../firebase";
import Hero from "../images/hero.png";
import DScan from "../images/dscan.png";
import Dhost from "../images/dhost.png";
import NFT from "../images/1clicknft.png";

function LandingPage() {
  const [input, setInput] = useState("");
  const [subscribe, setSubscribe] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (input) {
      await db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setSubscribe("Subscribed successfully!");
      setTimeout(() => {
        setSubscribe("");
      }, 3690);
    }
  }

  return (
    <div style={{ backgroundColor: "#FFFCF9" }}>
      {/* header */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-16 sm:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <br className="hidden lg:inline-block" />
              <code>Powering the Decentralized Web</code>
            </h1>
            <p className="mb-8 leading-relaxed">
              At P2P Labs, we're building curated web3 infrastructure tools for
              the decentralized internet on top of the IPFS protocol.
              <br />
              One of the most significant benefits of decentralization is the
              transformation towards seamless data accessibility from anywhere,
              primarily driven by the widespread use of smartphones and cloud
              applications.{" "}
              <b>
                Our vision is to ensure that users can access information as
                extensively as possible from anywhere in the world.
              </b>
            </p>
            <div className="block justify-center">
              <form onSubmit={submitHandler}>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-48 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label
                      for="footer-field"
                      className="leading-7 text-sm text-gray-600"
                    >
                      🗞️ Newsletter
                    </label>
                    <input
                      type="email"
                      onChange={inputHandler}
                      value={input}
                      id="footer-field"
                      placeholder="email address"
                      name="footer-field"
                      className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-400 border-0 py-2 px-4 focus:outline-none hover:bg-cyan-500 rounded"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-sky-400 text-sm mt-2 md:text-left text-center">
                {subscribe}
              </p>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="decentralized network"
              src={Hero}
            />
          </div>
        </div>
      </section>
      {/* Projects */}
      <section
        className="text-gray-600 body-font"
        style={{ textAlign: "left" }}
      >
        <div className="container px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden"></div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Projects
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-28 pl-0">
                Use our services from the following links. Our software is
                open-sourced. So you can read it, fork it, and improve it!
              </p>
            </div>
          </div>
          {/* dscan */}
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={DScan}
                  alt="DScan"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Decentralized storage & sharing tool
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DScan
                  </h1>
                  <p className="leading-relaxed mb-3">
                    DScan is a chrome extension that uploads the content to IPFS
                    and generates decentralized QR codes.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://chrome.google.com/webstore/detail/dscan-decentralized-qr-co/idpfgkgogjjgklefnkjdpghkifbjenap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chrome Web Store
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <a
                        href="https://chrome.google.com/webstore/detail/dscan-decentralized-qr-co/idpfgkgogjjgklefnkjdpghkifbjenap"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://img.shields.io/chrome-web-store/users/idpfgkgogjjgklefnkjdpghkifbjenap?label=installs&style=flat-square&color=blue"
                          width="80"
                          alt="chrome web store"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* dhost */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Dhost}
                  alt="Dhost"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Dev tool
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DHost
                  </h1>
                  <p className="leading-relaxed mb-3">
                    DHost is a vscode extension that publishes static websites
                    to IPFS.
                  </p>
                  <br />
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://marketplace.visualstudio.com/items?itemName=DHost.dhost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSCode Marketplace
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=DHost.dhost"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://img.shields.io/vscode-marketplace/d/DHost.dhost.svg?style=flat-square&color=green&label=installs"
                          width="80"
                          alt="vs code marketplace"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 1clicknft */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={NFT}
                  alt="1clickNFT"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Dev tool
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    1clickNFT
                  </h1>
                  <p className="leading-relaxed mb-3">
                    1clickNFT allows you to instantly upload NFT data to IPFS
                    right from VS Code by using nft.storage.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center md:mb-2 lg:mb-0"
                      href="https://marketplace.visualstudio.com/items?itemName=1clickNFT.1clicknft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSCode Marketplace
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=1clickNFT.1clicknft"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://img.shields.io/vscode-marketplace/d/1clickNFT.1clicknft.svg?style=flat-square&color=green&label=installs"
                          width="80"
                          alt="vs code marketplace"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
