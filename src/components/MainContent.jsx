import Wrapper1 from "./Wrapper1";
import Timer2 from "./Timer2";
import NotificationSection from "./NotificationSection";
import PropTypes from "prop-types";

const MainContent = ({
  className = "",
  showHours,
  propBackground,
  propWidth,
  propBorderRadius,
  propPadding,
  propGap,
  propOverflowX,
  propAlignSelf,
  propGap1,
  propHeight,
  propColor,
  propWidth1,
  propFontSize,
  propFlex,
  propGap2,
  propWidth2,
  propColor1,
  propFontSize1,
  propMinWidth,
  propWidth3,
  propHeight1,
  propColor2,
  propFontSize2,
  propMinWidth1,
  propAlignSelf1,
  propHeight2,
  propColor3,
  propMargin,
  propFontSize3,
  propFontWeight,
  propHeight3,
  propWidth4,
  propDisplay,
  propFlex1,
  propGap3,
  propWidth5,
  propColor4,
  propFontSize4,
  propMinWidth2,
  propWidth6,
  propHeight4,
  propColor5,
  propFontSize5,
  propMinWidth3,
  propAlignSelf2,
  propHeight5,
}) => {
  return (
    <div
      className={`max-w-full flex flex-col items-center justify-center gap-12 leading-[normal] tracking-[normal] self-stretch ${className}`}
    >
      <Wrapper1
        getReadyText="/get-ready-text3@2x.png"
        stayTuned="/stay-tuned6@2x.png"
        darkModeRocketGif="/dark-mode-rocket-gif.svg"
      />
      <Timer2
        showHours={showHours}
        propBackground={propBackground}
        propWidth={propWidth}
        propBorderRadius={propBorderRadius}
        propPadding={propPadding}
        propGap={propGap}
        propOverflowX={propOverflowX}
        propAlignSelf={propAlignSelf}
        propGap1={propGap1}
        propHeight={propHeight}
        propColor={propColor}
        propWidth1={propWidth1}
        propFontSize={propFontSize}
        propFlex={propFlex}
        propGap2={propGap2}
        propWidth2={propWidth2}
        propColor1={propColor1}
        propFontSize1={propFontSize1}
        propMinWidth={propMinWidth}
        propWidth3={propWidth3}
        propHeight1={propHeight1}
        propColor2={propColor2}
        propFontSize2={propFontSize2}
        propMinWidth1={propMinWidth1}
        propAlignSelf1={propAlignSelf1}
        propHeight2={propHeight2}
        propColor3={propColor3}
        propMargin={propMargin}
        propFontSize3={propFontSize3}
        propFontWeight={propFontWeight}
        propHeight3={propHeight3}
        propWidth4={propWidth4}
        propDisplay={propDisplay}
        propFlex1={propFlex1}
        propGap3={propGap3}
        propWidth5={propWidth5}
        propColor4={propColor4}
        propFontSize4={propFontSize4}
        propMinWidth2={propMinWidth2}
        propWidth6={propWidth6}
        propHeight4={propHeight4}
        propColor5={propColor5}
        propFontSize5={propFontSize5}
        propMinWidth3={propMinWidth3}
        propAlignSelf2={propAlignSelf2}
        propHeight5={propHeight5}
      />
      <NotificationSection
        notifySectionColor="#ccc"
        placeholderBorder="1.5px solid #ccc"
        notifyButtonColor="#808080"
        notifyMeBackgroundColor="#fff"
        propColor="rgba(15, 15, 15, 0.5)"
      />
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
  showHours: PropTypes.bool,
  propBackground: PropTypes.string,
  propWidth: PropTypes.string,
  propBorderRadius: PropTypes.string,
  propPadding: PropTypes.string,
  propGap: PropTypes.string,
  propOverflowX: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propGap1: PropTypes.string,
  propHeight: PropTypes.string,
  propColor: PropTypes.string,
  propWidth1: PropTypes.string,
  propFontSize: PropTypes.string,
  propFlex: PropTypes.string,
  propGap2: PropTypes.string,
  propWidth2: PropTypes.string,
  propColor1: PropTypes.string,
  propFontSize1: PropTypes.string,
  propMinWidth: PropTypes.string,
  propWidth3: PropTypes.string,
  propHeight1: PropTypes.string,
  propColor2: PropTypes.string,
  propFontSize2: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propHeight2: PropTypes.string,
  propColor3: PropTypes.string,
  propMargin: PropTypes.string,
  propFontSize3: PropTypes.string,
  propFontWeight: PropTypes.string,
  propHeight3: PropTypes.string,
  propWidth4: PropTypes.string,
  propDisplay: PropTypes.string,
  propFlex1: PropTypes.string,
  propGap3: PropTypes.string,
  propWidth5: PropTypes.string,
  propColor4: PropTypes.string,
  propFontSize4: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propWidth6: PropTypes.string,
  propHeight4: PropTypes.string,
  propColor5: PropTypes.string,
  propFontSize5: PropTypes.string,
  propMinWidth3: PropTypes.string,
  propAlignSelf2: PropTypes.string,
  propHeight5: PropTypes.string,
};

export default MainContent;
