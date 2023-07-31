import React, { FC, } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { ConnectionType } from "../../../redux/slices/deviceSlice";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinusSquare, faPlusSquare, } from "@fortawesome/free-regular-svg-icons";

interface DeviceCardProps {
    deviceName: string;
    connectionType: ConnectionType;
    isConnected: boolean;
    cardFunct: undefined | (() => void);
    isEven: boolean;
}

const DeviceCard: FC<DeviceCardProps> = ({deviceName, isConnected, cardFunct, connectionType, isEven}) => {
    return (
        <View style={StyleSheet.compose(styles.container, {backgroundColor: isEven ? 'lightgray' : 'lightblue'})}>
            <View style={styles.rowContainer}>
                {/* Labels */}
                <View style={styles.rowContentContainer}>
                    <Text style={styles.titleText}>Name</Text>
                    <Text style={styles.titleText}>Type</Text>
                </View>

                {/* Data */}
                <View style={styles.rowContentContainer}>
                    <Text style={styles.dataText}>{deviceName}</Text>
                    <Text style={styles.dataText}>{connectionType == ConnectionType.Beacon ? 'Beacon' : 'Direct'}</Text>
                </View>
            </View>

            {/* Interact button */}
            <TouchableOpacity style={styles.iconContainer} onPress={cardFunct || (() => {})}>
                <FontAwesomeIcon icon={isConnected ? faMinusSquare : faPlusSquare} color={isConnected ? 'red' : 'green'} size={30} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',

        marginHorizontal: '5%',

        flexDirection: 'row',

        paddingVertical: 5,
    },

    rowContainer: {
        width: '75%',
        alignContent: 'space-between',
        justifyContent: 'space-around',

        flexDirection: 'column',
    },
    iconContainer: {
        width: '25%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    rowContentContainer: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },

    titleText: {
        width: '50%',

        color: 'black',
        fontSize: 15,

        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dataText: {
        width: '50%',
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },






    // container: {
    //     flexDirection: 'row',
    //     width: '90%',

    //     borderWidth: 2,
    //     borderRadius: 10,

    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     marginHorizontal: '5%',
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,

    //     marginTop: 8,

    //     backgroundColor: 'lightgray'
    // },
    // deviceNameText: {
    //     fontSize: 20,
    //     color: 'black',
    // },
    // typeText: {

    // },
});

export default DeviceCard;