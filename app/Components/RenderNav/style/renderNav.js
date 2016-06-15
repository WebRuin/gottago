import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Roboto', sans-serif"
    },
    "siteHeader": {
        "background": "#0D1313",
        "color": "white",
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center"
    },
    "logo": {
        "textDecoration": "none",
        "color": "white",
        "fontSize": 0.9,
        "textTransform": "uppercase",
        "letterSpacing": 3,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "siteNav ul": {
        "listStyle": "none",
        "display": "flex",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "siteNav a": {
        "textTransform": "uppercase",
        "textDecoration": "none",
        "color": "#CDD0D0",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "display": "inline-block"
    },
    "siteNav active a": {
        "fontWeight": "bold",
        "color": "#62DEBE",
        "background": "#14604c"
    },
    "accountActions": {
        "marginLeft": "auto",
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "marginRight": 10
    },
    "accountDropdown": {
        "position": "relative"
    },
    "accountDropdown ul": {
        "display": "block",
        "background": "#222",
        "color": "#CDD0D0",
        "position": "absolute",
        "right": 1400
    },
    "accountDropdown:hover ul": {
        "display": "flex",
        "width": 500,
        "position": "absolute",
        "top": 21,
        "right": -72,
        "listStyleType": "none"
    },
    "newBathroomForm:hover": {
        "display": "flex",
        "width": 500,
        "position": "absolute",
        "top": 21,
        "right": -72,
        "listStyleType": "none"
    },
    "signOutLink": {
        "color": "#62DEBE",
        "fontSize": 0.8,
        "marginLeft": 10,
        "textTransform": "uppercase"
    }
});