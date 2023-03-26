import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import ScreenTemplate from "../screenTemplate";
import Ionicons from '@expo/vector-icons/Ionicons';


const getRoomInformation = (roomId) => {
    // TODO: get room information from backend.

    // this is just for demonstration purposes.
    return {
        "capacity": 4,
        "accessibleFriendly": false,
        "powerAvailable": true,
    }
}

const submitReservation = (params) => {
    // TODO: submit reservation information to backend.

    console.log("submitReservation() called.")
}


const roomQuickInfoStyle = StyleSheet.create({
    container: {
        border: "1px solid black",
        borderRadius: "20px",
        padding: "8px",
        display: "inline-block",
        alignSelf: 'center',
        marginTop: "3px",
        marginRight:" 3px",
    },
    newComponent:{
       // New component style
    }
  });

const getCheckMark = (boolVal) => {
    if (boolVal) return <Ionicons name="md-checkmark-circle" size={16} color="green" />;
    return <Ionicons name="md-close-circle" size={16} color="red" />
}


export default function ShowRoomPage({route, navigation}) {


    const roomId = "RM999";
    const date = "00/00/0000";
    const fromTime = "99:99AM";
    const toTime = "9:99PM";

    // roomId = route.params.roomId;
    // date = route.params.date;
    // fromTime = route.params.fromTime;
    // toTime = rote.params.toTime;

    const roomInfo = getRoomInformation(roomId);

    return (
        <ScreenTemplate>
            <ScrollView>
            <View
                style={{
                    height: 300,
                    backgroundColor:'black',
                    justifyContent:'center',
                    borderBottomWidth:2,
                    borderColor:'black',
                    borderStyle:'dashed'
                }}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    source={{uri:"https://i.redd.it/2yw2ibmd18o91.jpg"}}
                />
            </View>

            <View
                style={{
                    backgroundColor:'white',
                    justifyContent:'center',
                    padding: '20px',
                }}
            >

                <Text style={{fontSize: "xxx-large", fontWeight:"900"}}>
                    {roomId}
                </Text>
                <Text style={{fontSize: "large", fontWeight:"bold", color:"gray"}}>
                    Study Room
                </Text>

                <View style={{marginTop: "20px", marginBottom: "10px", display:"inline-block"}}>
                    <View style={roomQuickInfoStyle.container}>
                        <Text><Ionicons name="person" style={{marginRight: "7px"}}/><b>Capacity</b>: {roomInfo["capacity"]}</Text><br/>
                    </View>

                    <View style={roomQuickInfoStyle.container}>
                        <Text><Ionicons name="body" style={{marginRight: "7px"}}/><b>Accessible Friendly</b>: {getCheckMark(roomInfo["accessibleFriendly"])}</Text><br/>
                    </View>

                    <View style={roomQuickInfoStyle.container}>
                        <Text><Ionicons name="flash" style={{marginRight: "7px"}}/><b>Power Available</b>: {getCheckMark(roomInfo["powerAvailable"])}</Text><br/>
                    </View>
                </View>

                <Text>
                    This room is available for your desired timeframe (<b>{fromTime}-{toTime}</b> on <b>{date}</b>).<br/>
                    <br/><br/>
                    Please review the Room Policies below before reserving.
                </Text>


                {/* horizontal line */}
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
                </View>

                <Text style={{fontSize: "x-large", marginBottom: "5px"}}>
                    Room Policies
                </Text>
                <Text>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.                
                </Text>
                <br/>
                <br/>
                <br/>

                <View style={{textAlign:"center", marginBottom:"5px", backgroundColor: "#E8E8E8", padding:"10px"}}>
                    <Text style={{fontSize:"large", marginBottom:"5px"}}>
                        Reservation Information Confirmation
                    </Text>
                    <Text>
                        Room <b>{roomId}</b>, from <b>{fromTime}</b> to <b>{toTime}</b> on <b>{date}</b>.<br/>
                    </Text>                    
                </View>


                <Button onPress={ () => {
                    submitReservation("parameters here")
                }} title={"RESERVE"} color={"#57068c"}/>

            </View>
            </ScrollView>
        </ScreenTemplate>
    )
}