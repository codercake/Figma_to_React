import Header from "../components/Header";
import Timer from "../components/Timer";
import TextField from "../components/TextField";
import NotifyButton from "../components/NotifyButton";
import LaunchedCard from "../components/LaunchedCard";

const LaunchPageLightMode21 = () => {
  return (
    <div className="w-full relative bg-main-white overflow-hidden flex flex-col items-start justify-start pt-[33.8px] px-[38px] pb-[152px] box-border gap-[88.9px] leading-[normal] tracking-[normal] text-center text-xl text-lightgray font-poppins mq450:gap-[22px] mq725:gap-11">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg-animation.svg"
      />
      <nav className="m-0 flex flex-row items-start justify-start gap-[5.7px] max-w-full text-center text-5xl-6 text-black font-montserrat">
        <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit] inline-block min-w-[58px] z-[1]">
            THE
          </a>
        </div>
        <div className="bg-black flex flex-row items-start justify-start pt-[6.7px] px-0.5 pb-[6.6px] z-[1] text-white">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit]">
            PRODUCT
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit] z-[1]">
            PLATFORM
          </a>
        </div>
      </nav>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <div className="w-[1027px] flex flex-col items-start justify-start min-h-[720px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-center py-6 px-0 box-border gap-[72px] max-w-full z-[1] mq1025:gap-9 mq725:gap-[18px] mq725:pt-5 mq725:pb-5 mq725:box-border">
            <Header titleMargin="unset" />
            <img
              className="w-[282.5px] h-[25.8px] relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/stay-tuned2@2x.png"
            />
            <img
              className="w-[631px] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/get-ready-text@2x.png"
            />
            <Timer
              showHours={false}
              propWidth="434px"
              propBorderRadius="24px"
              propBackground="linear-gradient(99.57deg, #e6b8d9, #c9b8e6)"
              propPadding="32px"
              propGap="20px"
              propAlignSelf="stretch"
              propPadding1="8px"
              propGap1="16px"
              propHeight="unset"
              showColon={false}
              propWidth1="12px"
              propFontSize="64px"
              propColor="#333"
              propPadding2="8px"
              propGap2="16px"
              propHeight1="unset"
              propFontSize1="64px"
              propColor1="#0f0f0f"
              propDisplay="inline-block"
              propMinWidth="83px"
              propFlex="unset"
              propFontSize2="24px"
              propColor2="#333"
              propMinWidth1="94px"
              propHeight2="unset"
              propFontSize3="64px"
              propColor3="#333"
              propWidth2="unset"
              propDisplay1="unset"
              propPadding3="8px"
              propGap3="16px"
              propHeight3="unset"
              propFontSize4="64px"
              propColor4="#0f0f0f"
              propDisplay2="inline-block"
              propMinWidth2="80px"
              propFlex1="unset"
              propFontSize5="24px"
              propColor5="#333"
              propMinWidth3="104px"
              propHeight4="unset"
            />
            <div className="w-[804px] hidden flex-col items-center justify-center gap-6 max-w-full">
              <div className="h-6 relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
                Be the first to know! Share your email and We'll notify you when
                it's live
              </div>
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full text-left text-13xl text-gray-500">
                <TextField
                  propBorder="1.5px solid #ccc"
                  propBorderRadius="8px"
                  propPadding="14px 18px"
                  propMinWidth="390px"
                  propHeight="unset"
                  propColor="#808080"
                  propHeight1="20px"
                  propFontSize="20px"
                  propDisplay="inline-block"
                  propAlignSelf="unset"
                />
                <div className="h-12 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-5 box-border whitespace-nowrap">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Notify Me
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[804px] flex flex-col items-center justify-center gap-6 max-w-full text-gray-300">
              <div className="relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
                Be the first to know! Share your email and We'll notify you when
                it's live
              </div>
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full">
                <div className="flex-1 rounded-lg border-dimgray border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[18px] min-w-[390px] max-w-full mq725:min-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-5 flex-1 relative leading-[100%] text-dimgray text-left inline-block min-w-[250px] max-w-full p-0 mq450:text-base mq450:leading-[16px]"
                    placeholder="Please enter your email id"
                    type="text"
                  />
                </div>
                <NotifyButton />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[99px] flex flex-row items-start justify-center py-0 px-5 box-border mt-[-409px]">
            <LaunchedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPageLightMode21;
