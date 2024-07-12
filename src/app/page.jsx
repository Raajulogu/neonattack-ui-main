"use client";
import Image from "next/image";
import Textarea from "@mui/joy/Textarea";
import { useEffect, useState } from "react";
import { backgroundColor, colors, fontSize, fontStyles, icons, tailwindfontstyle } from "../../service";
import { useRouter } from "next/navigation";


export default function Home() {
  let router = useRouter();
  const [selectedColor, setSelectedColor] = useState("White");
  const [inputText, setInputText] = useState("");
  const [price, setPrice] = useState("");
  const [textfont, setTextFont] = useState("Arial");
  const [fontsize, setFontSize] = useState("Small");
  const [textAlign, setTextAlign] = useState("left");
  const [activeTab, setActiveTab] = useState("Text");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleFontClick = (font) => {
    setTextFont(font);
  };
  const handleFontSize = (size) => {
    setFontSize(size);
  };

  let Medium = 600;
  let Large = 1300;
  const [Waterproof, setWaterProof] = useState("No");
  const [Wireless, setWireless] = useState("No");
  useEffect(() => {
    let totalprice = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (i == 0) {
        switch (fontsize) {
          case "Medium":
            totalprice = totalprice + 3150 + 600;
            break;
          case "Large":
            totalprice = totalprice + 3150 + 1300;
            break;
          default:
            totalprice = totalprice + 3150;
        }
      } else {
        switch (fontsize) {
          case "Medium":
            totalprice = totalprice + 400 + 100;
            break;
          case "Large":
            totalprice = totalprice + 400 + 200;
            break;
          default:
            totalprice = totalprice + 400;
        }
      }
    }

    if (Waterproof === "Yes") {
      totalprice = totalprice + 3000;
    }
    if (Wireless === "Yes") {
      totalprice = totalprice + 2000;
    }
    setPrice(totalprice);
  }, [inputText, fontsize, Waterproof, Wireless]);
  const handleTextareaChange = (event) => {
    setInputText(event.target.value);
  };
  const handleTextAlignClick = (align) => {
    setTextAlign(align);
  };
  // upload part
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //when clicking button data need to store in local storage
  const handleSubmit = () => {
    if(inputText.length === 0 ){
      alert("please enter text");
      return null;
    }
    let data = {
      text: inputText,
      size: fontsize,
      color: selectedColor,
      font: textfont,
      waterproof: Waterproof,
      wireless: Wireless,
      price: price,
      quantity: 1,
    };
    let cart = localStorage.getItem("cart")
    cart ? cart = JSON.parse(cart) : cart= [];
    cart.push(data)
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/addtocart");
  };
  return (
    <>
      <br />
      <br />
      <div className="relative">
        <div className="darkhead ">
          <div className="darksubhead">
            <img alt="" src="https://cdn.shopify.com/s/files/1/0460/2753/8595/files/Group_2688.svg" />
            2 Year Warranty
          </div>
          <div className="darksubhead">
            <img alt="" src="https://cdn.shopify.com/s/files/1/0460/2753/8595/files/Group_2690.svg" />
            12000+ Happy Customers
          </div>
          <div className="darksubheadlast">
            <img alt="" src="https://cdn.shopify.com/s/files/1/0460/2753/8595/files/Group_2689.svg" />
            100% Timely Delivery
          </div>
        </div>
        {/* buttons */}

        <div class="flex flex-col sm:flex-row md:flex-row gap-4 pt-6 bg-opacity-30 bg-black relative">
          {activeTab === "Text" ? (
            <>
              <img 
                src="https://d1no4rdxmwcuog.cloudfront.net/files/Ka1_B1NeWpfltqebVYU9S.webp"
                alt="Neon Image"
                className="w-[100%] md:w-[67%]"
                id="neonImage"
              />
              <div className="absolute top-0 left-[20%] text-6xl h-full flex items-center justify-center content-center pointer-events-none">
                <div
                  id="textOverlay"
                  className={`font-bold text-white text-center flex flex-row ${
                    textfont ? tailwindfontstyle[textfont] : ""
                  }`}
                  style={{
                    fontFamily: textfont,
                    textShadow: `0 0 10px ${selectedColor}, 0 0 20px ${selectedColor}, 0 0 30px ${selectedColor}`,
                  }}
                >
                  {inputText ? (
                    inputText
                  ) : (
                    "Start Typing"
                  )}
                </div>
              </div>

              {/* price */}
              <div className="absolute text-xl top-[10px] left-[59%] h-[50px] flex flex-row items-center justify-center content-center pointer-events-none">
                <div
                  id="textOverlay"
                  className={` font-bold text-center `}
                >
                  <span> ₹ {price}.00 </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="uploadcontent">
                <h1>How it work?</h1>
                <div className="flex justify-evenly flex-row content-center items-center">
                  <div className="w-[90%]">
                    <h2>Tell us about your ideas</h2>
                    <p>
                      In the whatsapp chat, you can share your ideas and visions
                      with us. Simply share logos, images, or sketches to help
                      us sketch your neon sign even faster.
                    </p>
                  </div>
                  <div className="w-[90%]">
                    <h2>Our consultation</h2>
                    <p>
                      Our team will review your ideas together and then show you
                      a visualization of the neon sign to demonstrate how it
                      will look. No project is too big for us. We fulfill even
                      the wildest neon desires! :)
                    </p>
                  </div>
                  <div className="w-[90%]">
                    <h2>Production</h2>
                    <p>
                      Once you have created your perfect design with us, we will
                      begin production upon receiving your order. Your neon idea
                      will come to life!
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div
            className={`bg-#0003-500 p-4 ${
              activeTab === "Text"
                ? "overflow-y-auto h-[520px] lg:absolute lg:right-0 lg:left-[69%]"
                : ""
            }`}
          >
            <h1 className="rightsidecontent">Customise Neon</h1>
            <div className="flex justify-evenly p-[10px]">
              <button
                className={`${
                  activeTab === "Text"
                    ? "bg-green-500 w-[50%] items-center flex justify-center"
                    : "textbutton"
                }`}
                onClick={() => handleTabClick("Text")}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.75 3.32171V1.5C17.75 0.809643 17.1904 0.25 16.5 0.25H1.5C0.809644 0.25 0.25 0.809644 0.25 1.5V3.32171C0.25 4.01206 0.809645 4.57171 1.5 4.57171H2.44203C3.13238 4.57171 3.69203 4.01206 3.69203 3.32171V2.89535C3.69203 2.66523 3.87858 2.47868 4.1087 2.47868H6.86232C7.09244 2.47868 7.27899 2.66523 7.27899 2.89535V15.1047C7.27899 15.3348 7.09244 15.5213 6.86232 15.5213H6.11072C5.49529 15.5213 4.99638 16.0202 4.99638 16.6357C4.99638 17.2511 5.49528 17.75 6.11072 17.75H11.8893C12.5047 17.75 13.0036 17.2511 13.0036 16.6357C13.0036 16.0202 12.5047 15.5213 11.8893 15.5213H11.1377C10.9076 15.5213 10.721 15.3348 10.721 15.1047V2.89535C10.721 2.66523 10.9076 2.47868 11.1377 2.47868H13.8913C14.1214 2.47868 14.308 2.66523 14.308 2.89535V3.32171C14.308 4.01206 14.8676 4.57171 15.558 4.57171H16.5C17.1904 4.57171 17.75 4.01206 17.75 3.32171Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text">Text</span>
              </button>
              <button
                type="button"
                className={`${
                  activeTab === "Upload"
                    ? "bg-green-500 w-[50%] p-4 flex justify-center text-white"
                    : "uploadbutton text-green-500"
                }`}
                onClick={() => handleTabClick("Upload")}
              >
                <span class="svgimg">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.38851 17.3333H12.6107C15.4359 17.3333 17.3334 15.3516 17.3334 12.4027V5.59727C17.3334 2.64843 15.4359 0.666672 12.6115 0.666672H5.38851C2.5641 0.666672 0.666687 2.64843 0.666687 5.59727V12.4027C0.666687 15.3516 2.5641 17.3333 5.38851 17.3333ZM6.0824 8.16667C4.93353 8.16667 4.00002 7.2319 4.00002 6.08334C4.00002 4.93478 4.93353 4.00001 6.0824 4.00001C7.23043 4.00001 8.16478 4.93478 8.16478 6.08334C8.16478 7.2319 7.23043 8.16667 6.0824 8.16667ZM15.5174 11.445C15.7964 12.1605 15.6514 13.0205 15.3531 13.7291C14.9995 14.5719 14.3224 15.21 13.4693 15.4887C13.0906 15.6125 12.6934 15.6667 12.297 15.6667H5.27389C4.57501 15.6667 3.95658 15.499 3.44961 15.1868C3.13201 14.9907 3.07587 14.5384 3.31134 14.2451C3.70519 13.7549 4.09401 13.263 4.48619 12.7668C5.23367 11.8173 5.73729 11.5421 6.29706 11.7838C6.52416 11.8836 6.75209 12.0332 6.98672 12.1914C7.61186 12.6163 8.48084 13.2002 9.62552 12.5664C10.4089 12.1277 10.8632 11.3751 11.2588 10.7198L11.2655 10.7088C11.2935 10.6628 11.3213 10.6169 11.349 10.571L11.349 10.571C11.482 10.351 11.6131 10.1339 11.7615 9.93396C11.9476 9.6837 12.6372 8.90111 13.5305 9.45838C14.0995 9.80926 14.578 10.284 15.09 10.7922C15.2852 10.9866 15.4243 11.2076 15.5174 11.445Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="uploadspan">Upload your design</span>
              </button>
            </div>
            {/* text area */}

            {activeTab === "Text" && (
              <>
                <div className="texthead">
                  <h3>Type Your Text</h3>
                  <Textarea
                    className="textarea"
                    minRows={3}
                    value={inputText}
                    onChange={handleTextareaChange}
                  />
                </div>
                {/* text align toggle icons */}
                <div className="toggleicon">
                  {icons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                      <button
                        key={index}
                        className={textAlign === icon.align ? "button" : ""}
                        onClick={() => handleTextAlignClick(icon.align)}
                      >
                        <IconComponent className={icon.className} />
                      </button>
                    );
                  })}
                </div>
                <div className="para">
                  <p>
                    1 or more characters are required for this size, please add
                    more characters.
                  </p>
                </div>
                <div className="texthead">
                  <h3>Pick Your Font</h3>
                </div>
                {/* Render font style buttons */}
                <div className="font-buttons">
                  <div className="grid grid-cols-3">
                    {fontStyles.map((font, index) => (
                      <button
                        key={index}
                        className={`${
                          textfont === font
                            ? "text-green-500 rounded-lg border-solid border-2 border-green-500"
                            : "font-button"
                        }`}
                        style={{ fontFamily: font }}
                        onClick={() => handleFontClick(font)}
                      >
                        {font}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Color pick */}
                <div className="texthead">
                  <h3>Select Your Color</h3>
                  <p className="text-sm">
                    {selectedColor ? selectedColor : "white"}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {colors.map((color, index) => (
                    <div
                    key={index}
                    className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? "ring-4 ring-gray-300" : ""}`}
                    style={{ backgroundColor:backgroundColor[color]}}
                    onClick={() => handleColorClick(color)}
                  >
                  </div>
                  ))}
                </div>
                {/* price */}
                <div className="texthead">
                  <span className="pt-4">Pick Your Size</span>
                  <p className="text-xs text-gray-300 pt-3 pb-3">
                    Size in inches. Dimensions are guide only and may vary
                    depending on the font. Please refer to the size measurement
                    above.
                  </p>
                  <div className="picksize">
                    {fontSize.map((size, idx) => (
                      <button
                        className={
                          fontsize === size
                            ? "text-green-500 rounded-lg border-solid border-2 border-green-500 w-[150px] h-[50px]"
                            : "picksizebutton"
                        }
                        key={idx}
                        onClick={() => handleFontSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="texthead">
                  <span>Make it Waterproof</span>
                  <p className="text-sm">₹ 3,000</p>
                  <div className="picksize">
                    <button
                      onClick={() => setWaterProof("Yes")}
                      className={
                        Waterproof === "Yes"
                          ? "text-green-500 rounded-lg border-solid border-2 border-green-500 w-[150px] h-[50px]"
                          : "picksizebutton"
                      }
                    >
                      YES
                    </button>
                    <button
                      onClick={() => setWaterProof("No")}
                      className={
                        Waterproof === "No"
                          ? "text-green-500 rounded-lg border-solid border-2 border-green-500 w-[150px] h-[50px]"
                          : "picksizebutton"
                      }
                    >
                      NO
                    </button>
                  </div>
                </div>

                <div className="texthead">
                  <span>Smart Wireless Controller</span>
                  <p className="text-sm">₹ 2,000</p>
                  <div className="picksize">
                    <button
                      onClick={() => setWireless("Yes")}
                      className={
                        Wireless === "Yes"
                          ? "text-green-500 rounded-lg border-solid border-2 border-green-500 w-[150px] h-[50px]"
                          : "picksizebutton"
                      }
                    >
                      YES
                    </button>
                    <button
                      onClick={() => setWireless("No")}
                      className={
                        Wireless === "No"
                          ? "text-green-500 rounded-lg border-solid border-2 border-green-500 w-[150px] h-[50px]"
                          : "picksizebutton"
                      }
                    >
                      NO
                    </button>
                  </div>
                </div>

                <div>
                  <h1 class="text-center font-bold text-3xl">₹ {price}.00</h1>
                  <p class="text-sm text-green-500">
                    1 or more characters are required for this size, please add
                    more characters.
                  </p>
                  <button
                    onClick={() => handleSubmit()}
                    class="border bg-green-500 text-white font-bold p-4 rounded-full hover:bg-green-500 w-full mb-3 mt-3"
                  >
                    Add To Cart
                  </button>
                </div>
                <hr />
              </>
            )}
            {activeTab === "Upload" && (
              <div className="uploadtext">
                <p>
                  If you have a logo/image you want to turn into a neon sign,
                  please click below and chat with us on WhatsApp
                </p>

                <a href="https://web.whatsapp.com/"> Click Here</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
