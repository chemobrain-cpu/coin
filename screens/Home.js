import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import * as Progress from 'react-native-progress'
import ContentLoaders from '../loaders/contentLoader'
import WatchList from '../component/HomeWatchList'
import TopMovers from "../component/HomeTopMovers"
import TimelineContainer from "../component/homeTimeline"
import { Entypo, MaterialIcons, MaterialCommunityIcons, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import { Card } from "react-native-shadow-cards"
import { timelineData } from "../data/data"


const Home = ({ navigation }) => {
    let [isLoading, setIsLoading] = useState(true)
    const [header, setHeader] = useState(false);
    const [headerAction, setHeaderAction] = useState(false);

    const scrollHandler = (e) => {
        if (e.nativeEvent.contentOffset.y > 1000) {
            setHeader(true)
            setHeaderAction(true)

        }
        else {
            setHeader(false)
            setHeaderAction(false)
        }

    }



    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

    },[])


    if (isLoading) {
        return <ContentLoaders />

    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} onScroll={scrollHandler} stickyHeaderIndices={[0]}>
                <>
                    {header ? <View >
                        <View style={{ ...styles.headerContainer }}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Entypo name="menu" size={24} color="black" />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.amountContainer}>

                                <Text style={{ ...styles.giftText, color: 'black', fontFamily: "Poppins", fontSize: 17 }}>$0.00</Text>


                            </TouchableOpacity>




                            <TouchableOpacity onPress={() => alert('notification')}>
                                <MaterialIcons name="notifications-none" size={30} color="black" />
                                <View style={styles.notification}>
                                    <View style={styles.notificationTextContainer}>
                                        <Text style={styles.notificationText}>1</Text>

                                    </View>

                                </View>

                            </TouchableOpacity>

                        </View>


                        {headerAction ? <View style={{ ...styles.actionContainer, zIndex: 15, backgroundColor: 'white' }}>
                            <View style={styles.actionInnerContainer}>
                                <TouchableOpacity style={styles.action}>
                                    <Ionicons name="add" size={30} color="white" />

                                </TouchableOpacity>
                                <Text style={styles.actionText}>Buy</Text>

                            </View>
                            <View style={styles.actionInnerContainer}>
                                <TouchableOpacity style={styles.action}>
                                    <AntDesign name="minus" size={22} color="white" />

                                </TouchableOpacity>

                                <Text style={styles.actionText}>Sell</Text>

                            </View>
                            <View style={styles.actionInnerContainer}>
                                <TouchableOpacity style={styles.action}>
                                    <AntDesign name="arrowup" size={22} color="white" />

                                </TouchableOpacity>

                                <Text style={styles.actionText}>Send</Text>

                            </View>

                            <View style={styles.actionInnerContainer}>
                                <TouchableOpacity style={styles.action}>
                                    <Octicons name="sync" size={22} color="white" />

                                </TouchableOpacity>
                                <Text style={styles.actionText}>Convert</Text>


                            </View>

                            <View style={styles.actionInnerContainer}>
                                <TouchableOpacity style={styles.action}>
                                    <AntDesign name="arrowdown" size={22} color="white" />

                                </TouchableOpacity>
                                <Text style={styles.actionText}>Recieve</Text>


                            </View>





                        </View> : <></>}



                    </View> : <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Entypo name="menu" size={24} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('notification')} style={styles.giftContainer}>
                            <MaterialCommunityIcons name="gift-outline" size={15} color="#1652f0" style={{ alignSelf: 'center' }} />
                            <Text style={styles.giftText}>Get $1000</Text>


                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => alert('notification')}>
                            <MaterialIcons name="notifications-none" size={30} color="black" />
                            <View style={styles.notification}>
                                <View style={styles.notificationTextContainer}>
                                    <Text style={styles.notificationText}>1</Text>

                                </View>

                            </View>

                        </TouchableOpacity>


                    </View>}
                </>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/icons/homebox.jpg')}
                        style={{ width: 250, height: 250, marginBottom: 35 }} />

                </View>
                <Card style={styles.setupContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome to coinbase

                    </Text>
                    <Text style={styles.setupText}>
                        Finish

                    </Text>
                    <Text style={styles.setupText}>
                        account

                    </Text>
                    <Text style={styles.setupText}>
                        setup

                    </Text>
                    <View style={styles.progressContainer}>
                        <Progress.Bar progress={0.5} width={120} height={12} unfilledColor='rgb(240,240,240)' color="#1652f0" style={styles.progress} />
                        <Text style={styles.progressText}>2/4</Text>

                    </View>





                </Card>

                <Text style={styles.explore}>Explore Coinbase</Text>
                <Card style={styles.learnearnContainer}>
                    <View>
                        <Text style={styles.learnText}>
                            Want to learn
                        </Text>
                        <Text style={styles.learnText}>
                            more?
                        </Text>

                        <Text style={styles.earnText}>
                            Want to learn
                        </Text>
                        <Text style={styles.earnText}>
                            more?
                        </Text>

                    </View>


                    <Image
                        source={require('../assets/icons/bulb.jpg')}
                        style={{ width: 60, height: 60, marginBottom: 35 }} />


                </Card>

                {headerAction ? <></> : <View style={styles.actionContainer}>
                    <View style={styles.actionInnerContainer}>
                        <TouchableOpacity style={styles.action}>
                            <Ionicons name="add" size={30} color="white" />

                        </TouchableOpacity>
                        <Text style={styles.actionText}>Buy</Text>

                    </View>
                    <View style={styles.actionInnerContainer}>
                        <TouchableOpacity style={styles.action}>
                            <AntDesign name="minus" size={22} color="white" />

                        </TouchableOpacity>

                        <Text style={styles.actionText}>Sell</Text>

                    </View>
                    <View style={styles.actionInnerContainer}>
                        <TouchableOpacity style={styles.action}>
                            <AntDesign name="arrowup" size={22} color="white" />

                        </TouchableOpacity>

                        <Text style={styles.actionText}>Send</Text>

                    </View>

                    <View style={styles.actionInnerContainer}>
                        <TouchableOpacity style={styles.action}>
                            <Octicons name="sync" size={22} color="white" />

                        </TouchableOpacity>
                        <Text style={styles.actionText}>Convert</Text>


                    </View>

                    <View style={styles.actionInnerContainer}>
                        <TouchableOpacity style={styles.action}>
                            <AntDesign name="arrowdown" size={22} color="white" />

                        </TouchableOpacity>
                        <Text style={styles.actionText}>Recieve</Text>


                    </View>





                </View>}

                <View style={{ paddingBottom: 200, borderBottomWidth: .5, borderBottomColor: "rgb(225,225,225)" }}>
                    <View>
                        <Text style={styles.watchHeader}>Watchlist</Text>
                    </View>

                    <WatchList />

                </View>

                <View style={{ marginLeft: '5%', paddingTop: 15, marginBottom: 50 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'Poppins',
                            color: "rgb(44, 44, 44)",
                            paddingTop: 10,
                            paddingBottom: 10
                        }}
                    >
                        Top Movers
                    </Text>


                    <TopMovers />

                </View>


                {timelineData.map(data => <TimelineContainer key={data.about} data={data} />)}

                <View style={{ paddingVertical: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color='#1652f0' size={30} />


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: "row",

    },
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 0,

    },
    scrollContainer: {
        paddingBottom: 100,



    },
    headerContainer: {
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: 'white',
        paddingHorizontal: 15

    },
    giftContainer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 10,
        alignItems: "center",
        height: 40,
        paddingHorizontal: 30,
    },
    giftText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        marginLeft: 10,
        color: '#1652f0',
        alignSelf: 'center'
    }
    ,
    notification: {
        width: 20,
        height: 20,
        position: 'relative',
        padding: 10,
        marginRight: 20
    },
    notificationTextContainer: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 35,
        left: 15,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20

    },
    notificationText: {
        color: 'white',
        fontFamily: 'Poppins',
    },

    imageContainer: {
        height: Dimensions.get('window').height / 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    setupContainer: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 25,
        marginHorizontal: '5%',
    },
    welcomeText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#1652f0',
        marginBottom: 10

    },
    setupText: {
        fontSize: 30,
        color: 'rgb(15,15,15)'

    },
    progressContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    progress: {
        backgroundColor: 'rgb(240,240,240)', borderColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        marginRight: 15

    },
    progressText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        marginTop: 10
    },
    explore: {
        fontSize: 22,
        fontFamily: 'Poppins',
        marginBottom: 10,
        marginHorizontal: '5%',
    },
    learnearnContainer: {
        borderRadius: 10,
        padding: 15,
        marginHorizontal: '5%',
        marginBottom: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    learnText: {
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    earnText: {
        fontSize: 18,
        fontFamily: 'ABeeZee',
        color: 'grey'
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(230,230,230)',
        paddingBottom: 10,
        paddingHorizontal: '5%',
        backgroundColor: '#fff'

    },
    actionInnerContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,


    },
    action: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#1652f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10

    },
    actionText: {
        fontSize: 14,
        fontFamily: 'ABeeZee',
    },
    watchHeader: {
        fontSize: 20,
        fontFamily: 'Poppins',
        color: "rgb(44, 44, 44)",
        paddingTop: 10,
        marginHorizontal: '5%',
    },
})


export default Home





































