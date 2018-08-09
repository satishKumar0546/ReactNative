import React from 'react';
import RadioForm,  {   View, Text, StyleSheet, TextInput, Image, RadioButton, RadioButtonInput, RadioButtonLabel,Keyboard, TouchableOpacity,  Picker   } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Button, Header } from 'react-native-elements'; // Version can be specified in package.json
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import SegmentedControlTab from 'react-native-segmented-control-tab';

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var globalData = {
  randomNo: 212121,
  time:"4:30PM",
  currdate:date + "-" + month + "-"+ year
}
class AccountNumber extends React.Component {
    Hide_Soft_Keyboard=()=>{
    Keyboard.dismiss();
    this.props.navigation.navigate('Verify')
  }
    render() {
        return (
          <View>
            <Header outerContainerStyles={{ backgroundColor: '#db0011' }}
  centerComponent={{ text: 'Mobile Security', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#db0011', color: '#fff' } }}
></Header>
            <View style= {styles.container}>
              <Text>1. Enter Your Accounr Number</Text>
              <TextInput style={styles.inputbox}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#000000" />
                <TouchableOpacity
            onPress={this.Hide_Soft_Keyboard}
            activeOpacity={0.7}
            style={styles.button} >

           <Text style={styles.TextStyle}> Continue</Text>

          </TouchableOpacity>


            </View>

        </View>
    );
    }
}




const styles = StyleSheet.create({
  listcontainer: {
      padding: 10,
      backgroundColor: '#ffffff',
      marginTop:20,
      marginLeft:20,
      marginRight:20
   },
   picker :{
     margin:5,
     width : '90%',
     padding : 0

   },
   text: {
      color: '#4f603c',
      fontSize:18
   },
    detail: {
      color: '#4f603c'
   },
  button: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#db0011',
    borderRadius:1,
    marginBottom: 20,
    padding: 10
  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },
  container: {
    marginTop: 50,
    marginLeft: 50,
  },
  branchContainer:{
    margin:'5%'
  },
  inputbox: {
    marginTop: 20,
    fontSize: 18,
    color: '#34495e',
    width:'80%',
    padding: 10,
    borderBottomWidth: 1

  },
  subText:{
    marginTop: 10,
    fontSize:12,
     width:'80%',
  },
  successcontainer:{
    height: 110,
	backgroundColor: '#76612c',
  flexDirection:"row",
   justifyContent:"center",
  },
  successcontainerTxt:{
    height: 110,
	backgroundColor: '#76612c',
   justifyContent:"center",
   color: '#FFFFFF',
   alignItems:'center',
   fontSize:20,
   marginTop:10
  },
  bookedTxt:{
    justifyContent:"center",
   color: '#FFFFFF',
   alignItems:'center',
   fontSize:20,
   marginTop:10
  },

  subTxt:{
    color: '#FFFFFF',
   alignItems:'center',
   fontSize:14,
   width: "70%",
   textAlign:"center",
   fontWeight:"bold"
  },
  subcontainerTxt:{

	backgroundColor: '#76612c',
   color: '#FFFFFF',
   alignItems:'center',
   height:70,
   marginTop: 10,
  },
subcontainerTxt1:{

	backgroundColor: '#76612c',
   color: '#FFFFFF',
   alignItems:'center',
  },
  whiteContainer:{
      width: "100%",
      height: 150,
      backgroundColor: "#FFFFFF",
      paddingTop: 30,
  },
  successconta:{

marginTop: 30,
  flexDirection:"row",
   justifyContent:"center",
  },


        tabsContainerStyle: {
          //custom styles
        },
        tabStyle1:{
            margin : 7,
          borderColor: '#CCCCCC',
          color:'#CCCCCC',
        },
        tabTextStyle1: {
          //custom styles
          color: '#9d9d9d',
        },
        tabStyle: {
          //custom styles

          margin : 7,
          borderColor: '#000000',
          },
        tabTextStyle: {
          //custom styles
          color: '#000000',
        },
        activeTabStyle: {
          //custom styles
          marginLeft: 7,
          },
        activeTabTextStyle: {
          //custom styles
        },
        timeDesc:{
            width: 250,
            height: 40,
            borderWidth: 1,
            flexDirection: 'row',
            marginLeft: 10,
            marginTop: 20,
            marginBottom: 20
        },
        checkbox:{
            width: 20,
            height: 20,
            borderWidth: 1,
            margin: 7
        },
         timeTxt:{
          height: 110,
        justifyContent:"center",
        alignItems:'center',
        fontSize:16,
        marginTop:5
      },
        checkboxDisable:{
            width: 20,
            height: 20,
            borderWidth: 1,
            margin: 7,
            marginLeft:15,
            borderColor:'#9d9d9d'
        },
        timeTxtDisable:{
          height: 110,
        justifyContent:"center",
        alignItems:'center',
        fontSize:16,
        marginTop:5,
        color:'#9d9d9d'
      },
      timeContainer:{
          backgroundColor: '#FFFFFF',
          flex: 1
      },
      tabcont:{
          backgroundColor: '#DFDFD7'
      },
      tokenContainer:{
        backgroundColor: '#76612C',
        flex: 1,
      },
      tokenDate:{
        alignItems:"center",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: 26,
        marginBottom:10
      },
      tokenNumber:{
        fontSize:26,
        color:'#FFFFFF',
         fontWeight: "bold",
         marginTop:20
      },
      tokenNumber1:{
        fontSize:26,
        color:'#FFFFFF',
         fontWeight: "bold",
      }
});

class VerifySms extends React.Component {
   Hide_Soft_Keyboard=()=>{
    Keyboard.dismiss();
    this.props.navigation.navigate('Activation')
  }
    render() {
        return (
            <View>
            <Header outerContainerStyles={{ backgroundColor: '#db0011' }}
  centerComponent={{ text: 'Mobile Security', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#db0011', color: '#fff' } }}
></Header>
            <View style= {styles.container}>
              <Text>2. Verify By SMS</Text>
              <Text  style= {styles.subText}>We've sent a verification coe to you at this mobile number ********99</Text>
              <TextInput style={styles.inputbox}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#000000" keyboardType={'numeric'}/>

              <TouchableOpacity
            onPress={this.Hide_Soft_Keyboard}
            activeOpacity={0.7}
            style={styles.button} >

           <Text style={styles.TextStyle}> Continue</Text>

          </TouchableOpacity>
            </View>

        </View>
    );
    }
}

class ActivationComplete extends React.Component {
   Hide_Soft_Keyboard=()=>{
    Keyboard.dismiss();
    this.props.navigation.navigate('Branch')
  }
    render() {
        return (
            <View>
            <Header outerContainerStyles={{ backgroundColor: '#db0011' }}
  centerComponent={{ text: 'Mobile Security', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#db0011', color: '#fff' } }}
></Header>
            <View style= {styles.successcontainer}>


              <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png'}} style={{width: 64, height: 64,flex: 2, marginTop: 40}} resizeMode="contain"></Image>
            </View>
            <View style= {styles.successcontainer}>
            <Text style= {styles.successcontainerTxt}>Activation Complete</Text>
            </View>
            <View style= {styles.successconta}>
            <TouchableOpacity
            onPress={this.Hide_Soft_Keyboard}
            activeOpacity={0.7}
            style={styles.button} >

           <Text style={styles.TextStyle}> Continue</Text>

          </TouchableOpacity>
              </View>
            </View>
    );
    }
}
class SelectBranch extends React.Component {

 HK = { area :"Hong Kong Island", districts : ["Wanchai", "Causeway Bay"]};
 Kwl= {area :"Kowloon", districts : ["Central","Cantral 2"]};
 banks = [{name : "Central bank", district : "Wanchai", address : "Address of Central bank"},
{name: "Bank2", district : "Central", address :"Address of bank 2"}]
selectedBank = this.HK
   constructor(props){
      super(props);
      this.state={
        selectedArea : "Hong Kong Island",

        + : 'Please select',
        SelectedAddress : 'Central',
        selectedDate:"2018-09-15",
        language:'js'

      }
    }
    onAreaSelect(selection : any){
      this.setState({selectedArea: selection})
      this.selectedBank = selection;
    }
    render() {
        return (
            <View>
            <Header outerContainerStyles={{ backgroundColor: 'black' }}
  centerComponent={{ text: 'Select a branch', style: {fontSize: 20, fontWeight:'bold',backgroundColor: 'black', color: '#fff' } }}
></Header>
<View style= {styles.branchContainer}>
<Text>Preferred area</Text>
 <Picker
  selectedValue={this.state.selectedArea}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) => this.onAreaSelect(itemValue)}>
  <Picker.Item label={this.HK.area} value={this.HK} />
  <Picker.Item label={this.Kwl.area} value={this.Kwl} />
</Picker>

<Text>Preferred district</Text>
<Picker
  selectedValue={this.selectedBank.districts[0]}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Wanchai" value="Wanchai" />
  <Picker.Item label="Central" value="Central" />
   <Picker.Item label="Causeway bay" value="Causewaybay" />
</Picker>
<Text>Preferred HSBC primier center</Text>
<Picker
  selectedValue={this.state.language}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
<Text>Address</Text>
<Text>12/F, Central HSBC center</Text>
<Text></Text>
<Text>Select a date</Text>


<DatePicker
        style={{width: 200}}
        date={this.state.selectedDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2018-01-01"
        maxDate="2020-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({selectedDate: date})}}
      />



        <View style= {styles.successconta}>
    <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Time')}
            activeOpacity={0.7}
            style={styles.button} >

           <Text style={styles.TextStyle}> Continue</Text>

          </TouchableOpacity>

      </View>

        </View></View>
    );
    }
}

class SelectTime extends React.Component {
  Hide_Soft_Keyboard=()=>{
    Keyboard.dismiss();

    this.props.navigation.navigate('Service')
  }
  constructor(){
      super()
      this.state = {
        selectedIndex: -1
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        selectedIndex: index,
      });
      if(index === 0){
        globalData['time'] = "4:00PM"
      }else{
        globalData['time'] = "4:30PM"
      }
    }
  render()
  {
    var radioList = [['9:00am','9:30am'],['10:00am','10:30am'],['11:00am','11:30am'],['12:00pm','12:30pm'],['1:00pm','1:30pm'],['2:00pm','2:30pm'],['3:00pm','3:30pm']]
    return(
      <View style = { styles.timeContainer }>

  <Header outerContainerStyles={{ backgroundColor: '#262626' }}
  centerComponent={{ text: 'Book Appointment Preferred Time', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#262626', color: '#fff', alignItems:"center", textAlign:"center" , flex:1} }}
></Header>
  <View style={styles.timeDesc}>
    <View style={styles.checkbox}></View>
    <Text style= {styles.timeTxt}>Available</Text>
    <View style={styles.checkboxDisable}></View>
    <Text style= {styles.timeTxtDisable}>UnAvailable</Text>
  </View>
  <View style={styles.tabcont}>

        { radioList.map((item, key)=>(
            <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle1}
          tabTextStyle={styles.tabTextStyle1}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          allowFontScaling={false}
          values={item}
          borderRadius={1}
          enable = {false}
          selectedIndex={-1}
          />
         )
         )}

        <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        allowFontScaling={false}
        values={['4:00pm', '4.30pm']}
         borderRadius={1}
         enable = {false}
         selectedIndex={this.state.selectedIndex}
         onTabPress= {this.handleIndexChange}
        />

    </View>
    <View style= {styles.successconta}>
    <TouchableOpacity
            onPress={this.Hide_Soft_Keyboard}
            activeOpacity={0.7}
            style={styles.button} >

           <Text style={styles.TextStyle}> Continue</Text>

          </TouchableOpacity>

      </View>
      </View>
    )
  }



}

class ServiceList extends React.Component {
  state = {
      names: [
         {
            id: 0,
            name: 'Cash Withdrawal',
            detail: 'Change primary communication address',
            screen: 'Token'
         },
         {
            id: 1,
            name: 'Mobile Number Change',
            detail: 'Change Mobile Number',
            screen: 'Token'
         },
         {
            id: 2,
            name: 'Address Change',
            detail: 'Change primary communication address',
            screen: 'Token'
         },
         {
            id: 3,
            name: 'Cash Deposit',
            detail: 'Deposit Cash at Branch',
            screen: 'Token'
         },
         {
            id: 4,
            name: 'Credit Card Request',
            detail: 'Request for a new credit card',
            screen: 'Token'
         }
      ]
   }
    goToNextScreen = (item) => {

         return (item.screen);
     }

   alertItemName = (item) => {
     // alert(item.name)
   }
  render() {
      return (
         <View style={{backgroundColor: '#ccc', flex:1}}>
         <Header outerContainerStyles={{ backgroundColor: '#262626' }}
  centerComponent={{ text: 'Select Service', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#262626', color: '#fff', alignItems:"center", textAlign:"center" , flex:1} }}
></Header>
             {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.listcontainer}
                    // onPress = {() => this.alertItemName(item)}>
                      onPress = {() => this.props.navigation.navigate(this.goToNextScreen(item))}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Text style = {styles.detail}>
                        {item.detail}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

class TokenGenerated extends React.Component {
    render() {
        return (
            <View style = { styles.tokenContainer }>

          <Header outerContainerStyles={{ backgroundColor: '#262626' }}
          centerComponent={{ text: 'Token Generated', style: {fontSize: 20, fontWeight:'bold',backgroundColor: '#262626', color: '#fff', alignItems:"center", textAlign:"center" , flex:1} }}
        ></Header>
        <View style= {styles.successcontainer}>
              <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png'}} style={{width: 64, height: 64,flex: 2, marginTop: 40}} resizeMode="contain"></Image>
            </View>
<View style= {styles.subcontainerTxt1}>
            <Text style= {styles.bookedTxt}>Appointment Booked</Text>

            </View>
            <View style= {styles.subcontainerTxt}>
            <Text style= {styles.subTxt}>Once you reach branch at the booked slot, please check-in using branch QR CODE.</Text>

            </View>
            <View style= {styles.whiteContainer}>
              <Text style={styles.tokenDate}>Date   <Text>  {globalData['currdate']}</Text></Text>
              <Text style={styles.tokenDate}>Time   <Text>      {globalData['time']}      </Text></Text>
            </View>

            <View style= {styles.subcontainerTxt1}>
            <Text style= {styles.tokenNumber}>TOKEN NUMBER</Text>
             <Text style= {styles.tokenNumber1}>PS1010</Text>
            </View>

        </View>
    );
    }
}
const RootStack = StackNavigator(
    {
        Account: {
            screen: AccountNumber,
              navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Verify: {
            screen: VerifySms,
              navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Activation: {
            screen: ActivationComplete,
              navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Branch: {
            screen: SelectBranch,
            navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Time: {
            screen: SelectTime,
            navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Service: {
            screen: ServiceList,
            navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        },
        Token: {
            screen: TokenGenerated,
              navigationOptions: {
                headerVisible: false,
                headerLeft: null,
                mode: 'modal',
                header: null,
            }
        }
    },
    {
        initialRouteName: 'Account',
    },
    {
      header: null,
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
          headerLeft: null,
          mode: 'modal',
          header: null,
      }
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
