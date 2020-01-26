// theme.js
export const lightTheme = {
  body: "#f2f2f2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  colors: {
    primaryColor: "#006778", // darkblue
    secondaryColor: "#69923a", // green (#69923a)  old one(#a8b400)
    white: "#ffffff",
    black: "#000000",
    info: "#e37222",
    border: "#d4d4d4",
    dropdownArrow: "#606060",
    greyColor: "#f4f3f3",
    tabHead: "#505050",
    error: "#f5222d",
    lightGrey: "#d9d9d9",
    darkBlue: "#167f91"
  },
  backgroundColor: {
    primaryColor: "#006778", // darkblue
    layoutLight: "#ffffff", // white
    layoutDark: "#eaeaea", // grey
    lightGrey: "#f4f2f3",
    disabled: "#505050",
    cardDark: "#f2f2f2",
    cardGridDivider: "#9b9b9b",
    blurBg: "#dcdcdc",
    blurOpacity: 0.7,
    tableAltRowDark: "#eaeaea", // specially for table styles
    tableInputDisabled: "#d6d4d4",
    summaryDivider: "#d4d4d4",
    pill: "#f5f5f5",
    tealBlue: "#007fab",
    boxSlider: "rgba(0,103,120,0.15)",
    tabBackground: "#f4f3f3",
    layoutOrange: "#f0ab00"
  },
  border: {
    primary: "#eaeaea",
    tableBorder: "#f4f3f3",
    filledTabsInactive: "#bfbfbf",
    pill: "#d4d4d4",
    raeCardFooter: "#bfbfbf",
    unchecked: "#b6bdbd",
    inputBox: "#505050",
    divider: "#9b9b9b",
    teal: "#006778",
    noBorder: "none",
    tealBlue: "#007fab",
    disabledTab: "#e5eff1",
    stepperBorder: "#dcdcdc"
  },
  fontFamily: {
    berkeleyStd: "BerkeleyStd-Book",
    berkeleyStdItalic: "BerkeleyStd-Italic",
    berkeleyStdMedium: "BerkeleyStd-Medium",
    berkeleyStdBold: "BerkeleyStd-Bold",
    berkeleyStdBookItalic: "BerkeleyStd-Book-Italic",
    helveticaNeue: "HelveticaNeue",
    helveticaNeueBold: "HelveticaNeue-Bold",
    helveticaNeueCondensedBold: "HelveticaNeue-CondensedBold",
    helveticaNeueLight: "HelveticaNeue-Light",
    helveticaNeueMedium: "HelveticaNeue-Medium",
    helveticaNeueThin: "HelveticaNeue-Thin",
    helveticaNeueUltraLight: "HelveticaNeue-UltraLight",
    helveticaNeueCondensedBlack: "HelveticaNeue-CondensedBlack"
  },
  fontColors: {
    primary: "#006778", // teal
    textColor: "#505050", // light black
    headingColor: "#022737", // Blue
    green: "#69923a", // green (#69923a)  old one(#a8b400)
    blur: "#727272",
    summaryLabel: "#505050",
    thead: "#505050",
    tbody: "#606060",
    error: "#f74c52",
    white: "#ffffff",
    placeholder: "#d4d4d4"
  },
  fontSize: {
    grantsCountSummary: "3.125rem", // 50px,
    h1: "2.625rem", // 42px
    grantSummary: "2.5rem", // 40px
    h2: "2.25rem", // 36px
    h3: "1.875rem", // 30px
    advisorCount: "1.75rem", // 28px
    h4: "1.5rem", // 24px
    h5: "1.25rem", // 20px (not to use now[22/4/19])
    heading: "1.125rem", // 18px
    primary: "1rem", // 16px
    tableFont: "0.938rem", //15px
    secondary: "0.875rem", // 14px
    tertiary: "0.75rem", // 12px
    quaternary: "0.625rem" // 10px
  },
  lineHeight: {
    h1: "3rem", // 42px -> 63px (48px)
    h2: "2.625rem", // 36px -> 54px (42px)
    h3: "2.25rem", // 30px -> 45px (36px)
    h4: "1.875rem", // 24px -> 36px (30px)
    h5: "1.875rem", // 20px -> 30px (not to use now[22/4/19])
    heading: "1.688rem", // 18px -> 27px (not to use now[22/4/19])
    subHeading: "1.67rem",
    primary: "1.5rem", // 16px -> 24px (24px)
    tableFont: "1.406rem", //15px -> 22.5px(22.5px)
    secondary: "1.25rem", // 14px -> 21px (20px)
    popUpHeading: "1.17rem",
    pageHeading: "1.14rem",
    pageHeadingMob: "1.2rem",
    tertiary: "1.125rem", // 12px -> 18px (18px)
    tertiaryUpdated: "1.13rem",
    twoRem: "2rem",
    normal: "normal",
    noHeight: "0px"
  }
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  colors: {
    primaryColor: "#173d8c", // darkblue
    secondaryColor: "#006778", // green (#69923a)  old one(#a8b400)
    white: "#ffffff",
    black: "#000000",
    info: "#e37222",
    border: "#d4d4d4",
    dropdownArrow: "#606060",
    greyColor: "#f4f3f3",
    tabHead: "#505050",
    error: "#f5222d",
    lightGrey: "#d9d9d9",
    darkBlue: "#167f91"
  },
  backgroundColor: {
    primaryColor: "#006778", // darkblue
    layoutLight: "#ffffff", // white
    layoutDark: "#eaeaea", // grey
    lightGrey: "#f4f2f3",
    disabled: "#505050",
    cardDark: "#f2f2f2",
    cardGridDivider: "#9b9b9b",
    blurBg: "#dcdcdc",
    blurOpacity: 0.7,
    tableAltRowDark: "#eaeaea", // specially for table styles
    tableInputDisabled: "#d6d4d4",
    summaryDivider: "#d4d4d4",
    pill: "#f5f5f5",
    tealBlue: "#007fab",
    boxSlider: "rgba(0,103,120,0.15)",
    tabBackground: "#f4f3f3",
    layoutOrange: "#f0ab00"
  },
  border: {
    primary: "#eaeaea",
    tableBorder: "#f4f3f3",
    filledTabsInactive: "#bfbfbf",
    pill: "#d4d4d4",
    raeCardFooter: "#bfbfbf",
    unchecked: "#b6bdbd",
    inputBox: "#505050",
    divider: "#9b9b9b",
    teal: "#006778",
    noBorder: "none",
    tealBlue: "#007fab",
    disabledTab: "#e5eff1",
    stepperBorder: "#dcdcdc"
  },
  fontFamily: {
    berkeleyStd: "BerkeleyStd-Book",
    berkeleyStdItalic: "BerkeleyStd-Italic",
    berkeleyStdMedium: "BerkeleyStd-Medium",
    berkeleyStdBold: "BerkeleyStd-Bold",
    berkeleyStdBookItalic: "BerkeleyStd-Book-Italic",
    helveticaNeue: "HelveticaNeue",
    helveticaNeueBold: "HelveticaNeue-Bold",
    helveticaNeueCondensedBold: "HelveticaNeue-CondensedBold",
    helveticaNeueLight: "HelveticaNeue-Light",
    helveticaNeueMedium: "HelveticaNeue-Medium",
    helveticaNeueThin: "HelveticaNeue-Thin",
    helveticaNeueUltraLight: "HelveticaNeue-UltraLight",
    helveticaNeueCondensedBlack: "HelveticaNeue-CondensedBlack"
  },
  fontColors: {
    primary: "#006778", // teal
    textColor: "#505050", // light black
    headingColor: "#022737", // Blue
    green: "#69923a", // green (#69923a)  old one(#a8b400)
    blur: "#727272",
    summaryLabel: "#505050",
    thead: "#505050",
    tbody: "#606060",
    error: "#f74c52",
    white: "#ffffff",
    placeholder: "#d4d4d4"
  },
  fontSize: {
    grantsCountSummary: "3.125rem", // 50px,
    h1: "2.625rem", // 42px
    grantSummary: "2.5rem", // 40px
    h2: "2.25rem", // 36px
    h3: "1.875rem", // 30px
    advisorCount: "1.75rem", // 28px
    h4: "1.5rem", // 24px
    h5: "1.25rem", // 20px (not to use now[22/4/19])
    heading: "1.125rem", // 18px
    primary: "1rem", // 16px
    tableFont: "0.938rem", //15px
    secondary: "0.875rem", // 14px
    tertiary: "0.75rem", // 12px
    quaternary: "0.625rem" // 10px
  },
  lineHeight: {
    h1: "3rem", // 42px -> 63px (48px)
    h2: "2.625rem", // 36px -> 54px (42px)
    h3: "2.25rem", // 30px -> 45px (36px)
    h4: "1.875rem", // 24px -> 36px (30px)
    h5: "1.875rem", // 20px -> 30px (not to use now[22/4/19])
    heading: "1.688rem", // 18px -> 27px (not to use now[22/4/19])
    subHeading: "1.67rem",
    primary: "1.5rem", // 16px -> 24px (24px)
    tableFont: "1.406rem", //15px -> 22.5px(22.5px)
    secondary: "1.25rem", // 14px -> 21px (20px)
    popUpHeading: "1.17rem",
    pageHeading: "1.14rem",
    pageHeadingMob: "1.2rem",
    tertiary: "1.125rem", // 12px -> 18px (18px)
    tertiaryUpdated: "1.13rem",
    twoRem: "2rem",
    normal: "normal",
    noHeight: "0px"
  }
};
