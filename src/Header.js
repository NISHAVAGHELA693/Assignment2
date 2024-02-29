import React from "react";
import { View, Text, Image, StyleSheet,ImageBackground,TouchableOpacity} from "react-native";
import Scale from "./Scale";
import { BG1, Bin, Notification,menu} from './assests';

const Header = () => {
    return (
        <View>
            <ImageBackground source={BG1}>
                <View style={styles.HeaderView}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={menu} style={styles.menu} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#ffff" }}> profile </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={Notification} style={{ width: Scale(24), height: Scale(24) }} />
                        <Image source={Bin} style={styles.Bin} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
        HeaderView: {
            justifyContent: "space-between",
            marginTop: 35,
            marginHorizontal: 20,
            flexDirection: "row"
        },
        menu: {
            width: Scale(24),
            height: Scale(24),
            marginRight: Scale(10),
            alignSelf: "center",
            tintColor: "#000"
        },
        Bin: {
            width: Scale(24),
            height: Scale(24),
            marginLeft: Scale(10)
        },
        blueLogo: {
            width: Scale(109),
            height: Scale(32)
        },
});

export default Header;
