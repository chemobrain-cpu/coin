import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Dimensions} from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validatePhoneNumber } from "../utils/util";
import { signup } from "../store/action/appStorage";

import RNPickerSelect from "react-native-picker-select";


const VerifyNumber = ({navigation}) => {
    let [phone, setPhone] = useState('')
    let changePhone = (e) => {
        setPhone(e)

    }

    return (<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
            <View style={styles.navigationHeader}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={22} fontWeight={100} color="rgb(44, 44, 44)" style={{ fontWeight: '200' }} />
                </TouchableOpacity>

                <View style={styles.progress}>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={1} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0.3} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>


                </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <Text style={styles.headerText}>
                    Set up 2-step verification
                </Text >
                <Text style={styles.text}>Enter your phone number so we can text you an authentication code</Text>





                <View style={styles.formContainer}>
                    <View style={styles.codeCon}>
                        <Text style={styles.countryText}>Country</Text>
                        <View style={styles.selectorContainer}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "Afghanistan(+93)",value:"Afghanistan(+93)"},
                                { label: "Albania(+355)", value: "Albania(+355)" },
                                { label: "Algeria(+213)", value: "Algeria(+213)" },
                                { label: "American Samoa(+1)", value: "American Samoa(+1)" },
                                { label: "Andorra(+376)", value: "Andorra(+376)" },
                                { label: "Angola(+244)", value: "Angola(+244)" },
                                { label: "Anguilla(+1)", value: "Anguilla(+1)" },
                                { label: "Antarctica(+672)", value: "Antarctica(+672)" },
                                { label: "Antigua and Barbuda(+1)", value: "Antigua and Barbuda(+1)" },
                                { label: "Argentina(+54)", value: "Argentina(+54)" },
                                { label: "Armenia(+374)", value: "Armenia(+374)" },
                                { label: "Aruba(+297)", value: "Aruba(+297)" },
                                { label: "Australia(+43)", value: "Australia(+43)" },
                                { label: "Azerbaijan(+994)", value: "Azerbaijan(+994)" },
                                { label: "Bahamas(+1)", value: "Bahamas(+1)" },
                                { label: "Bahrain(+973)", value: "Bahrain(+973)" },
                                { label: "Bangladesh(+880)", value: "Bangladesh(+880)" },
                                { label: "Barbados(+1)", value: "Barbados(+1)" },
                                { label: "Belarus(+375)", value: "Belarus(+375)" },
                                { label: "Belgium(+32)", value: "Belgium(+32)" },
                                { label: "Belize(+501)", value: "Belize(+501)" },
                                { label: "Benin(+229)", value: "Benin(+229)" },
                                { label: "Bermuda(+1)", value: "Bermuda(+1)" },
                                { label: "Bhutan(+975)", value: "Bhutan(+975)" },
                                { label: "Bolivia(+591)", value: "Bolivia(+591)" },
                                { label: "Bonaire, Sint Eustatius and Saba (+599)", value: "Bonaire, Sint Eustatius and Saba (+599)" },
                                { label: "Bosnia and Herzegovina(+387)", value: "Bosnia and Herzegovina(+387)" },
                                { label: "Botswana(+267)", value: "Botswana(+267)" },
                                { label: "Bouvet Island(+47)", value: "Bouvet Island(+47)" },
                                { label: "Brazil(+55)", value: "Brazil(+55)" },
                                { label: "British Indian Ocean Territory(+246)", value: "British Indian Ocean Territory(+246)" },
                                { label: "Brunei Darussalam(+673)", value: "Brunei Darussalam(+673)" },
                                { label: "Bulgaria(+359)", value: "Bulgaria(+359)" },
                                { label: "Burkina Faso(+226)", value: "Burkina Faso(+226)" },
                                { label: "Burundi(+257)", value: "Burundi(+257)" },
                                { label: "Cambodia(+855)", value: "Cambodia(+855)" },
                                { label: "Cameroon(+237)", value: "Cameroon(+237)" },
                                { label: "Canada(+1)", value: "Canada(+1)" },
                                { label: "Cape Verde(+238)", value: "Cape Verde(+238)" },
                                { label: "Cayman Islands(+1)", value: "Cayman Islands(+1)" },
                    
                                { label: "Central African Republic(+236)", value: "Central African Republic(+236)" },
                                { label: "Chad(+235)", value: "Chad(+235)" },
                                { label: "Chile(+56)", value: "Chile(+56)" },
                                { label: "China(+86)", value: "China(+86)" },
                                { label: "Christmas Island(+61)", value: "Christmas Island(+61)" },
                                { label: "Cocos Islands(+61)", value: "Cocos Islands(+61)" },
                                { label: "Colombia(+57)", value: "Colombia(+57)" },
                                { label: "Comoros(+269)", value: "Comoros(+269)" },
                                { label: "Congo(+242)", value: "Congo(+242)" },
                                { label: "Congo,The Democratic Republic Of The(+243)", value: "Congo,The Democratic Republic Of The(+243)" },
                                { label: "Cook Islands(+682)", value: "Cook Islands(+682)" },
                                { label: "Costa Rica(+596)", value: "Costa Rica(+596)" },
                                { label: "Croatia(+385)", value: "Croatia(+385)" },
                                { label: "Cuba(+53)", value: "Cuba(+53)" },
                                { label: "Curacao(+599)", value: "Curacao(+599)" },
                                { label: "Cyprus(+357)", value: "Cyprus(+357)" },
                                { label: "Czech Republic(+420)", value: "Czech Republic(+420)" },
                                { label: "Cote D'Ivoire(+225)", value: "Cote D'Ivoire(+225)" },
                                { label: "Denmark(+45)", value: "Denmark(+45)" },
                                { label: "Djibouti(+253)", value: "Djibouti(+253)" },
                                { label: "Dominica(+1)", value: "Dominica(+1)" },
                                { label: "Dominican Republic(+1)", value: "Dominican Republic(+1)" },
                                { label: "Ecuador(+593)", value: "Ecuador(+593)" },
                                { label: "Egypt(+20)", value: "Egypt(+20)" },
                                { label: "El Salvador(+503)", value: "El Salvador(+503)" },
                                { label: "Equatorial Guinea(+240)", value: "Equatorial Guinea(+240)" },
                                { label: "Eritrea(+291)", value: "Eritrea(+291)" },
                                { label: "Estonia(+372)", value: "Estonia(+372)" },
                                { label: "Ethiopia(+251)", value: "Ethiopia(+251)" },
                                { label: "Falkland Islands(+500)", value: "Falkland Islands(+500)" },
                                { label: "Faroe Islands(+298)", value: "Faroe Islands(+298)" },
                                { label: "Fiji(+679)", value: "Fiji(+679)" },
                                { label: "Finland(+358)", value: "Finland(+358)" },
                                { label: "France(+33)", value: "France(+33)" },
                                { label: "French Guiana(+594)", value: "French Guiana(+594)" },
                                { label: "French Polynesia(+689)", value: "French Polynesia(+689)"},
                                { label: "French Southern Territories(+262)", value: "French Southern Territories(+262)" },
                                { label: "Gabon()+241", value: "Gabon()+241" },
                                { label: "Gambia(+220)", value: "Gambia(+220)" },
                                { label: "Georgia(+995)", value: "Georgia(+995)" },
                                { label: "Germany(+49)", value: "Germany(+49)" },
                                { label: "Ghana(+233)", value: "Ghana(+233)" },
                                { label: "Gibraltar(+350)", value: "Gibraltar(+350)" },
                                { label: "Greece(+30)", value: "Greece(+30)" },
                                { label: "Greenland(+299)", value: "Greenland(+299)" },
                                { label: "Greenada(+1)", value: "Greenada(+1)" },
                                { label: "Guadeloupe(+590)", value: "Guadeloupe(+590)" },
                                { label: "Guam(+1)", value: "Guam(+1)" },
                                { label: "Guatemala(+502)", value: "Guatemala(+502)" },
                                { label: "Guernsey(+44)", value: "Guernsey(+44)" },
                                { label: "Guinea(+224)", value: "Guinea(+224)" },
                                { label: "Guinea Bissau(+245)", value: "Guinea Bissau(+245)" },
                                { label: "Guyana(+224)", value: "Guyana(+224)" },
                                { label: "Haiti(+509)", value: "Haiti(+509)" },
                                { label: "Heard and McDonald Islands(+672)", value: "Heard and McDonald Islands(+672)" },
                                { label: "Holy See(+39)", value: "Holy See(+39)" },
                                { label: "Honduras(+504)", value: "Honduras(+504)" },
                                { label: "Hong Kong(+852)", value: "Hong Kong(+852)" },
                                { label: "Hungary(+36)", value: "Hungary(+36)" },
                                { label: "Iceland(+354)", value: "Iceland(+354)" },
                                { label: "India(+91)", value: "India(+91)" },
                                { label: "Indonesia(+62)", value: "Indonesia(+62)" },
                                { label: "Iran,Islamic Republic Of(+98)", value: "Iran,Islamic Republic Of(+98)" },
                                { label: "Iraq(+964)", value: "Iraq(+964)" },
                                { label: "Ireland(+353)", value: "Ireland(+353)" },
                                { label: "Isle of Man(+44)", value: "Isle of Man(+44)" },
                                { label: "Isreal(+972)", value: "Isreal(+972)" },
                                { label: "Italy(+39)", value: "Italy(+39)" },
                                { label: "Jamaica(+1)", value: "Jamaica(+1)" },
                                { label: "Japan(+81)", value: "Japan(+81)" },
                                { label: "Jersey(+44)", value: "Jersey(+44)" },
                                { label: "Jordan(+962)", value: "Jordan(+962)" },
                                { label: "Kazakhstan(+7)", value: "Kazakhstan(+7)" },
                                { label: "Kenya(+254)", value: "Kenya(+254)" },
                                { label: "Kiribati(+686)", value: "Kiribati(+686)" },
                                { label: "Korea,Democratic People's Republic of (+850)", value: "Korea,Democratic People's Republic of (+850)" },
                                { label: "Korea,Republic of (+82)", value: "Korea,Republic of (+82)" },
                                { label: "Kuwait(+965)", value: "Kuwait(+965)" },
                                { label: "Kyrgyzstan(+996)", value: "Kyrgyzstan(+996)" },
                                { label: "Lao People's Democratic  Republic  (+856)", value: "Lao People's Democratic  Republic  (+856)" },
                                { label: "Latvia(+371)", value: "Latvia(+371)" },
                                { label: "Lebanon(+961)", value: "Lebanon(+961)" },
                                { label: "Lesotho(+266)", value: "Lesotho(+266)" },
                                { label: "Liberia(+231)", value: "Liberia(+231)" },
                                { label: "Libya(+281)", value: "Libya(+281)" },
                                { label: "Liechtenstein(+423)", value: "Liechtenstein(+423)" },
                                { label: "Lithuania(+370)", value: "Lithuania(+370)" },
                                { label: "Luxembourg(+352)", value: "Luxembourg(+352)" },
                                { label: "Macao(+853)", value: "Macao(+853)" },
                                { label: "Madagascar(+261)", value: "Madagascar(+261)" },
                                { label: "Malawi(+265)", value: "Malawi(+265)" },
                                { label: "MalaySia(+60)", value: "MalaySia(+60)" },
                                { label: "Maldives(+960)", value: "Maldives(+960)" },
                                { label: "Mali(+223)", value: "Mali(+223)" },
                                { label: "Malta(+356)", value: "Malta(+356)"},
                                { label: "Marshall Islands(+692)", value: "Marshall Islands(+692)" },
                                { label: "Martinique(+596)", value: "Martinique(+596)" },
                                { label: "Mauritania(+222)", value: "Mauritania(+222)" },
                                { label: "Mauritius(+230)", value: "Mauritius(+230)" },
                                { label: "Mayotte(+262)", value: "Mayotte(+262)" },
                                { label: "Mexico(+52)", value: "Mexico(+52)" },
                                { label: "Micronesia,Federated States Of(+691)", value: "Micronesia,Federated States Of(+691)" },
                                { label: "Moldova, Republic of(+373)", value: "Moldova, Republic of(+373)" },
                                { label: "Monaco(+377)", value: "Monaco(+377)" },
                                { label: "Mongolia(+976)", value: "Mongolia(+976)" },
                                { label: "Montenegro(+382)", value: "Montenegro(+382)" },
                                { label: "Montserrat(+1)", value: "Montserrat(+1)" },
                                { label: "Morocco(+212)", value: "Morocco(+212)" },
                                { label: "Mozambique(+258)", value: "Mozambique(+258)" },
                                { label: "Myanmar(+95)", value: "Myanmar(+95)" },
                                { label: "Namibia(+264)", value: "Namibia(+264)" },
                                { label: "Nauru(+674)", value: "Nauru(+674)" },
                                { label: "Nepal(+977)", value: "Nepal(+977)" },
                                { label: "Netherlands(+31)", value: "Netherlands(+31)" },
                                { label: "Netherlands Antilles(+599)", value: "Netherlands Antilles(+599)" },
                                { label: "New Caledonia(+687)", value: "New Caledonia(+687)" },
                                { label: "New Zealand(+64)", value: "New Zealand(+64)" },
                                { label: "Nicaragua(+505)", value: "Nicaragua(+505)" },
                                { label: "Niger(+227)", value: "Niger(+227)" },
                                { label: "Nigeria(+234)", value: "Nigeria(+234)" },
                                { label: "Niue(+683)", value: "Niue(+683)" },
                                { label: "Norfolk Island(+672)", value: "Norfolk Island(+672)" },
                                { label: "North Macedonia, Republic of(+389)", value: "North Macedonia, Republic of(+389)" },
                                { label: "Northern Mariana Islands(+1)", value: "Northern Mariana Islands(+1)" },
                                { label: "Norway(+47)", value: "Norway(+47)" },
                                { label: "Oman(+968)", value: "Oman(+968)" },
                                { label: "Pakistan(+92)", value: "Pakistan(+92)" },
                                { label: "Palau(+680)", value: "Palau(+680)" },
                                { label: "Palestine,State of(+970)", value: "Palestine,State of(+970)" },
                                { label: "Panama(+507)", value: "Panama(+507)" },
                                { label: "Papua New Guinea(+675)", value: "Papua New Guinea(+675)" },
                                { label: "Paraguay(+595)", value: "Paraguay(+595)" },
                                { label: "Peru(+51)", value: "Peru(+51)" },
                                { label: "Philippines(+63)", value: "Philippines(+63)" },
                                { label: "Pitcairn(+64)", value: "Pitcairn(+64)" },
                                { label: "Poland(+48)", value: "Poland(+48)" },
                                { label: "Portugal(+351)", value: "Portugal(+351)" },
                                { label: "Puerto Rico(+1)", value: "Puerto Rico(+1)" },
                                { label: "Qatar(+974)", value: "Qatar(+974)" },
                                { label: "Romania(+40)", value: "Romania(+40)" },
                                { label: "Russian Federation(+7)", value: "Russian Federation(+7)" },
                                { label: "Rwanda(+250)", value: "Rwanda(+250)" },
                                { label: "Reunion(+262)", value: "Reunion(+262)" },
                                { label: "Saint Barthelemy(+590)", value: "Saint Barthelemy(+590)" },
                                { label: "Saint Helena(+290)", value: "Saint Helena(+290)" },
                                { label: "Saint Kitts And Nevis(+1)", value: "Saint Kitts And Nevis(+1)" },
                                { label: "Saint Lucia(+1)", value: "Saint Lucia(+1)" },
                                { label: "Saint Martin(+590)", value: "Saint Martin(+590)" },
                                { label: "Saint Pierre And Miquelon(+508)", value: "Saint Pierre And Miquelon(+508)" },
                                { label: "Saint Vincent And The Grenedines(+1)", value: "Saint Vincent And The Grenedines(+1)" },
                                { label: "Samoa(+685)", value: "Samoa(+685)" },
                                { label: "San Marino(+378)", value: "San Marino(+378)" },
                                { label: "Sao Tome and Principe(+239)", value: "Sao Tome and Principe(+239)" },
                                { label: "Saudi Arabia(+966)", value: "Saudi Arabia(+966)" },
                                { label: "Senegal(+221)", value: "Senegal(+221)" },
                                { label: "Serbia(+381)", value: "Serbia(+381)" },
                                { label: "Seychelles(+248)", value: "Seychelles(+248)" },
                                { label: "Seirra Leone(+232)", value: "Seirra Leone(+232)" },
                                { label: "Singapore(+65)", value: "Singapore(+65)" },
                                { label: "Sint Maarten(+1)", value: "Sint Maarten(+1)" },
                                { label: "Slovakia(+386)", value: "Slovakia(+386)" },
                                { label: "SolomoN Islands(+677)", value: "Solomon Islands(+677)" },
                                { label: "Somalia(+252)", value: "Somalia(+252)" },
                                { label: "South Africa(+27)", value: "South Africa(+27)" },
                                { label: "South Georgia and the south Sandwich Islands(+500)", value: "South Georgia and the south Sandwich Islands(+500)" },
                                { label: "South Sudan(+211)", value: "South Sudan(+211)" },
                                { label: "Spain(+34)", value: "Spain(+34)" },
                                { label: "Sri Lanka(+94)", value: "Sri Lanka(+94)" },
                                { label: "Sudan(+249)", value: "Sudan(+249)" },
                                { label: "Suriname(+597)", value: "Suriname(+597)" },
                                { label: "Svalbard And Jan Mayen(+47)", value: "Svalbard And Jan Mayen(+47)" },
                                { label: "Swiziland(+268)", value: "Swiziland(+268)" },
                                { label: "Sweden(+46)", value: "Sweden(+46)" },
                                { label: "Switzerland(+41)", value: "Switzerland(+41)" },
                                { label: "Syrian Arab Republic(+963)", value: "Syrian Arab Republic(+963)" },
                                { label: "Taiwan,Republic Of China(+886)", value: "Taiwan,Republic Of China(+886)" },
                                { label: "Tajikistan(+992)", value: "Tajikistan(+992)" },
                                { label: "Tanzania,United Republic Of (+255)", value: "Tanzania,United Republic Of (+255)" },
                                { label: "Thailand(+66)", value: "Thailand(+66)" },
                                { label: "Timor-Leste(+670)", value: "Timor-Leste(+670)" },
                                { label: "Togo(+228)", value: "Togo(+228)" },
                                { label: "Tokelau(+690)", value: "Tokelau(+690)" },
                                { label: "Tonga(+676)", value: "Tonga(+676)" },
                                { label: "Trinidad and Tobago(+1)", value: "Trinidad and Tobago(+1)" },
                                { label: "Tunisia(+216)", value: "Tunisia(+216)" },
                                { label: "Turkey(+90)", value: "Turkey(+90)" },
                                { label: "Turkmenistan(+993)", value: "Turkmenistan(+993)" },
                                { label: "Turks and Caicos Islands(+1)", value: "Turks and Caicos Islands(+1)" },
                                { label: "Tuvalu(+688)", value: "Tuvalu(+688)" },
                                { label: "Uganda(+256)", value: "Uganda(+256)" },
                                { label: "Ukraine(+380)", value: "Ukraine(+380)" },
                                { label: "United Arab Emirates(+971)", value: "United Arab Emirates(+971)" },
                                { label: "United Kingdom(+44)", value: "United Kingdom(+44)" },
                                { label: "United States(+1)", value: "United States(+1)" },
                                { label: "United States Minor Outlying Islands(+246)", value: "United States Minor Outlying Islands(+246)" },
                                { label: "Uruguay(+598)", value: "Uruguay(+598)" },
                                { label: "Uzbekistan(+998)", value: "Uzbekistan(+998)" },
                                { label: "Vanuatu(+678)", value: "Vanuatu(+678)" },
                                { label: "Venezuela, Bolivarian Republic(+58)", value: "Venezuela, Bolivarian Republic(+58)" },
                                { label: "Veitnam(+84)", value: "Veitnam(+84)" },
                                { label: "Virgin Islands, British(+1)", value: "Virgin Islands, British(+1)" },
                                { label: "Virgin Islands, U.S.(+1)", value: "Virgin Islands, U.S.(+1)" },
                                { label: "Wallis and Futuna(+681)", value: "Wallis and Futuna(+681)" },
                                { label: "Western Sahara(+212)", value: "Western Sahara(+212)" },
                                { label: "Yemen(+967)", value: "Yemen(+967)" },
                                { label: "Zambia(+260)", value: "Zambia(+260)" },
                                { label: "Zimbabwe(+263)", value: "Zimbabwe(+263)" },
                                { label: "Aland Islands(+358)", value: "Aland Islands(+358)" },
                               
                            ]}
                        />
                        </View>
                    </View>
                    <View style={styles.phoneCon}>
                        <Text style={styles.phoneText}>Phone</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={changePhone}
                            value={phone}
                            placeholder='Phone Number'
                            keyboardType='phone-pad'
                        />

                    </View>

                </View>


                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Authenticate')}>
                        <Text style={styles.buttonText}>
                            Continue
                        </Text>

                    </TouchableOpacity>
                </View>


            </ScrollView>

        </View>

    </SafeAreaView>
    )




}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingTop: 60

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        zIndex: 10,
        borderColor: 'white',

    },
    progress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 40,
        justifyContent: 'space-around'

    },
    progressbar: {
        paddingLeft: 8

    },
    close: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',


    },
    body: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    headerText:{
        marginBottom:15,
        fontSize:20,
        fontWeight:'700',
        color:'rgb(44, 44, 44)',
        fontFamily: 'ABeeZee',

    },
    text:{
         marginBottom:25,
         fontSize:16,
         color:'grey',
         fontFamily:'ABeeZee'
        
    },
    input: {
        borderWidth:2,
        height:55,
        borderRadius:5,
        paddingLeft:10,
        borderColor:'#1652f0'
    },
    selectorContainer:{
        borderWidth:1,
        borderColor:'grey',
        height:55,
        borderRadius:2,

    },
    select:{
        borderColor:'grey',
        borderWidth:1


    },

    formContainer:{
        display:'flex',
        flexDirection:'row',
        width:Dimensions.get('window').width,
        alignItems:'center',
        marginBottom:Dimensions.get('window').height/2.2

    },
    phoneCon:{
        width:'70%'

    },
    codeCon:{
        width:'20%',
        

    },
    countryText:{
        fontFamily:'ABeeZee'

    },
    phoneText:{
        fontFamily:'ABeeZee',
        color:'#1652f0'

    },


    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins',
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical:8,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 10,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon,
        
    }
});

export default VerifyNumber