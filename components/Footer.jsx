import { Image, View } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme";

const Footer = () => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Image
        style={{ alignItems: "center" }}
        source={require("../assets/images/man-with-hp.png")}
      />
      <View>
        <Text centered preset="h4" uppercase>
          {" "}
        </Text>
        <Text centered uppercase preset="h4">
          <Text preset="h4" textColor={colors.primary}>
            
          </Text>{" "}
          
        </Text>
      </View>
      <Text style={{ textAlign: "justify", marginTop: 20 }} textColor="#c3c3c3">
        
      </Text>
    </View>
  );
};

export default Footer;
