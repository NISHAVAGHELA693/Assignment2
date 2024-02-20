import React from "react";
import { StyleSheet } from "react-native";
import Scale from "./Scale";

const HomePage = () => {
    return (
        <>
            <Header
                logoIcon={menu}
                title="profile"
                notificationIcon={Notification}
                deleteIcon={Bin} />
        </>
    );
};

const styles = StyleSheet.create({

});

export default HomePage;
