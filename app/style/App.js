import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "app": {
        "backgroundColor": "green",
        "height": 50,
        "border": "1px solid blue"
    },
    "bap": {
        "backgroundColor": "red",
        "height": 25
    }
});