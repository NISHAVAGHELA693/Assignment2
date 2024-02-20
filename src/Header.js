import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Scale from "./Scale";

const Header = (props) => {
    const {
        logoIcon,
        title,
        notificationIcon,
        deleteIcon,
        customStyle,
    } = props;

    return (
        <View style={[styles.container, customStyle && customStyle]}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Image source={logoIcon} style={styles.logoIcon} />
            <Text style={styles.titleTxt}>{title}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Image source={notificationIcon} style={styles.notificationIcon} />
            <Image source={deleteIcon} style={styles.deleteIcon} />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#0012",
        marginTop: Scale(40),
        paddingHorizontal:Scale(20)
    },
    logoIcon: {
        width: 16,
        height: 20,
    },
    notificationIcon:{
        width: 16,
        height: 20,
        marginRight:Scale(20)
    },
    deleteIcon:{
        width: 16,
        height: 20,
    },
    titleTxt:{
         fontSize: 16, 
         fontWeight: "700",
          color: "#ffff",
          marginLeft:Scale(20) 
        }
});

export default Header;
