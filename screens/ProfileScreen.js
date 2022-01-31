import React, { Component } from "react";
import {
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  Text, 
  View,
  Image,
  Alert
} from 'react-native';
import { 
  Feather,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { auth, db, storage } from '../firebase';

import SystemStyle from "../styles/SystemStyle";
import homeStyles from "../styles/homeStyles";
  
class ProfileScreen extends Component {
  state = {
    user: auth.currentUser,
    data: {},
    is_loading: true
  }
  async _getUserData() {
    var uid = this.state.user.uid;
    const user_info = db.collection("user_info")
    const query = user_info.doc(uid)
    const snapshot = await query.get()

    if(snapshot.empty) {
      console.log('No matching documents.');
      return;
    } 

    //Arrange Data
    var raw_data = snapshot.data()

    var profile_name = ''
    if(raw_data.user_type == "INDIV") {
      profile_name = raw_data.f_name 
        + ' ' + raw_data.l_name;
    } else {
      profile_name = raw_data.org_name
    }
    
    let profile_image = null
    let cover_image = null

    await storage.ref(`/users/${uid}/profile`)
      .getDownloadURL()
      .then((url) => { 
        profile_image = url
        console.log("User's Profile Photo: ", url)
      }).catch((error) => {
        if(error.code == '[storage/object-not-found]') {
          return;
        }
        Alert.alert('Error!', error)
      })

    await storage.ref(`/users/${uid}/cover`)
      .getDownloadURL()
      .then((url) => { 
        cover_image = url
        console.log("User's Cover Photo: ", url)
      }).catch((error) => {
        if(error.code == '[storage/object-not-found]') {
          return;
        }
        Alert.alert('Error!', error)
      })
    
    this.setState({'data': {
      'profile_name': profile_name,
      'profile_photo': profile_image,
      'cover_photo': cover_image,
      ...raw_data
    }})
    console.log('Profile Name: ', this.state.data.profile_name)
    this.setState({'is_loading': false})
  }
  _loadUserData() {
    setTimeout(() => {
      this._getUserData()
    }, 100);
  }
  componentDidMount() {
    let uid = auth.currentUser.uid
    console.log('User ID: ' + uid);
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this._loadUserData()
    });

    this._loadUserData()
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    return (
      <View style={homeStyles.uHcontainer}>
        {
          this.state.is_loading && 
            <Spinner visible={true} 
              textStyle={SystemStyle.whiteLoader}
              color = '#eb9834'
              animation = 'fade'
              overlayColor = 'rgba(0, 0, 0, 0.50)'/>
        }
        <View style={homeStyles.Profileheader}/>
        <View style={homeStyles.profilecoverimgContainer}>
          <Image style={homeStyles.profilecoverimg}
            source={
              this.state.data.cover_photo ?
              {uri: this.state.data.cover_photo}:
              require('../assets/img/blank-cover.png')
            }/>
        </View>
        <View style={homeStyles.firstSection}>
          <View style={homeStyles.profileimgContainer}>
            <Image style={homeStyles.profileimg}
              source={
                this.state.data.profile_photo ?
                {uri: this.state.data.profile_photo}:
                require('../assets/img/blank-profile.png')
              }/>
          </View>
          <View>
            <TouchableOpacity style={homeStyles.EditProfile}
              onPress={() => this.props.navigation.navigate('EditProfileScreen')}>
                <Text style={homeStyles.EditProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeStyles.secondSection}>
          <Text style={homeStyles.ProfileName}>
            {
              this.state.data.profile_name
            }
          </Text>
          {
            this.state.data.bio ? (
              <Text style={homeStyles.ProfileBio}>
                {
                  this.state.data.bio
                }
              </Text>
            ) : null
          }
          { this.state.data.location ? (
            <View style={{flexDirection:'row'}}>
              <SimpleLineIcons name="location-pin" size={13} color="black" />
              <Text style={homeStyles.ProfileLocation}>
                {
                  this.state.data.location
                }
              </Text>
            </View>
          ) : null}
        </View>
        <View style={homeStyles.dashboard}>
          <View style={homeStyles.counter}>            
            <Text style={homeStyles.counterint}>814</Text>
            <Text style={homeStyles.boardtextOne}>Followers</Text>
          </View>
          <View style={homeStyles.counter}>            
            <Text style={homeStyles.counterint}>26</Text>
            <Text style={homeStyles.boardtextTwo}>Following</Text>
          </View>
        </View>
        <View style={homeStyles.MyTabsContainer}>
          <TouchableOpacity style={homeStyles.MyTabsSelect}>
            <Text style={homeStyles.MyTabs}>My Events</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={homeStyles.MyTabs}>My Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={homeStyles.MyTabs}>Bookmarks</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={homeStyles.createcard}>
          <TextInput style={homeStyles.createCardcontent} placeholder="Create event "></TextInput>
          <TouchableOpacity>
            <Feather name="plus" size={50} style={homeStyles.cardicon}/>
          </TouchableOpacity>
        </View>
  
        <View style={homeStyles.MyTabsContainer}>
            <TouchableOpacity>
            <Text style={homeStyles.MyTabs}>My Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.MyTabsSelect}>
            <Text style={homeStyles.MyTabs}>My Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={homeStyles.MyTabs}>Bookmarks</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <View style={homeStyles.MyTicketStub}> 
        <View style={homeStyles.MyTicketStubDiv}>
          <View>
          <Text style={homeStyles.MyTicketEvent}>Sunday Worship Service</Text>
          <Text style={homeStyles.MyTicketDate}>Sunday November 14 Starts at 9:00AM </Text>
  
          <Text style={homeStyles.MyTicketOrganizer}>Sunday Worship Service</Text>
          <Text style={homeStyles.MyTicketLocation}>L3 Alpha Kokak</Text>
          </View>
          <View style={homeStyles.MyTicketQRContainer}>
              <Image
                  style={homeStyles.MyTicketQR}
                  source={require('../assets/img/SampleQR.png')}
              />
              </View>
        </View>
        </View>
        </TouchableOpacity>
  
        <View style={homeStyles.MyTabsContainer}>
            <TouchableOpacity>
            <Text style={homeStyles.MyTabs}>My Events</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={homeStyles.MyTabs}>My Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.MyTabsSelect}>
            <Text style={homeStyles.MyTabs}>Bookmarks</Text>
            </TouchableOpacity>
        </View>
  
        <TouchableOpacity style={homeStyles.feed}>
          <Image
          style={homeStyles.firstpic}
          source={require('../assets/img/A.jpg')}
          />
          <View style={homeStyles.eventInfoTab}>
            <Text style={homeStyles.eventTitlecontent}>Not Bad Sunday</Text>
            <Text style={homeStyles.eventDTRcontent}>Sunday, November 14 ∘ 12:00PM</Text>
            <Text style={homeStyles.eventLOCcontent}>Every Nation Campus</Text>
            <View style={homeStyles.GeoLocTabcontent}>
              <SimpleLineIcons name="location-pin" size={16} color="black"/>
              <Text style={homeStyles.feedcontent}>Bulacan, Bulacan</Text>
            </View>
          </View>
          <View style={homeStyles.eventOptionTabcontent}>
            <TouchableOpacity>
            <Ionicons name="share-social-outline" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="bookmark" size={22} color="black" />
            </TouchableOpacity>
          </View>     
        </TouchableOpacity>
      </ScrollView>
    </View>
    );
  }
}
  
export default {
    ProfileScreen,
}