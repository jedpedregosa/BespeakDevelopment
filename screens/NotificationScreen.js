import React, { 
    Component 
} from "react";
import {
    TouchableOpacity,
    Text, 
    View,
    Image,
    ActivityIndicator,
    FlatList,
    RefreshControl
} from 'react-native';
import { 
    Entypo,
    Foundation
} from '@expo/vector-icons';
import { db } from '../firebase';

import NotificationScreenStyle from "../styles/NotificationScreenStyle";
import SystemStyle from "../styles/SystemStyle";

import { NotificationListLoader } from "../components/SectionLoader";

import { 
    _getProfileImage
} from '../helper/EventLoad';
import { _loadAllNotification } from "../helper/NotificationLoad";

class NotificationScreen extends Component {
    state = {
        data: {},

        limit: 10,
        loading: true,
        refreshing: false,
        user_refresh: false,

        last_data: null,
        can_extend: true
    }
    constructor() {
        super();
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        try {
            this._loadNotifications();
        } catch(error) {
            console.log(error);
        }
    }
    
    async _retrieveNotifications(type_extend = false) {
        return await _loadAllNotification(type_extend, this.state.limit, this.state.last_data);
    }

    async _loadNotifications() {
        console.log('Loading Notifs...')

        let query_res = await this._retrieveNotifications();

        //console.log('Loaded Notif Last: ', query_res.last);

        this.setState({
            data: query_res.data,
            last_data: query_res.last,
            loading: false,
            can_extend: query_res.data.length == this.state.limit
        });

        this._loadImages(query_res.data)
    }

    async _extendNotifications() {
        this.setState({
            refreshing: true,
            can_extend: false
        });
        console.log('Retrieving Other Notifs...')

        let query_res = await this._retrieveNotifications(true);

        let has_data = query_res.data.length == this.state.limit;
        let current_to_add = this.state.data;

        this.setState({
            data: [... current_to_add, ... query_res.data],
            last_data: query_res.last,
            refreshing: false,
            can_extend: has_data
        });
        
        this._loadImages(query_res.data, current_to_add)
    }
    _loadImages(items, has_add = []) {
        // Load Images
        items?.forEach(async (item) => {
            item.owner_image = await _getProfileImage(item.owner_id)

            this.setState({data: [...has_add, ...items]});
        })
    }
    doRefresh() {
        return new Promise((resolve) => {
          this._loadNotifications() 
          setTimeout(resolve, 3000)
        });
    }
    async onRefresh() {
        console.log("Refreshing...")
        this.setState({'user_refresh': true})
        await this.doRefresh().then(() => {
            this.setState({
                'user_refresh': false,
                'can_extend': true
            })
            console.log("Refreshed.")
        })
    }
    _renderFooter() {
        if(this.state.refreshing) {
            return (
                <>
                    <ActivityIndicator color="orange"/> 
                    <Text style={SystemStyle.TabEmptyList}> Please wait. </Text>
                </>
            )
        } 
    }
    async _handleNotificationClick(item) {
        if(!item.is_read) {
            await db.collection('_notification')
                .doc(item.id)
                .update({
                    is_read: true
                }).catch(err => console.log('Error!: ', err.message));
        }

        if(item.type == 'DEL_EVENT') {
            this.props.navigation.navigate('UserProfileScreen', {user_id: item.from});
            return;
        }

        this.props.navigation.navigate('EventScreen', {event_id: item.event_id});
        this._loadNotifications() 
    }
    render() {
        return (

            <View style={NotificationScreenStyle.Container}>   
                { this.state.loading && 
                    <NotificationListLoader/>
                }
                { this.state.data.length == 0 && 
                    <View style={SystemStyle.TabContainer}>
                        <View style={SystemStyle.WelcomeToBespeakImgContainer}>
                            <Image style={SystemStyle.WelcomeToBespeakImg} 
                                source={ require('../assets/img/WelcomeToBespeak.png') }/>      
                        </View>
                        <View style={SystemStyle.Center}>
                            <Text style={SystemStyle.EmptyTitle}> Get Notified! </Text>
                            <Text style={SystemStyle.GetNotifiedInfo}> Follow organizers to be notified on their upcoming events. </Text>
                            <View style={SystemStyle.Center}>  
                                <TouchableOpacity style={SystemStyle.RefreshBtnWrapper}
                                    onPress={this.onRefresh}>
                                        <View style = {SystemStyle.RefreshBtnContainer}>
                                            <Foundation name="refresh" size={20} color='#fff' />
                                            <Text style={SystemStyle.RefreshBtnTxt}>Refresh</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
                <FlatList
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.user_refresh}
                          onRefresh={this.onRefresh}
                          colors={["gray", "orange"]}/>
                    }
                    data={Object.values(this.state.data)}
                    renderItem={({ item }) => (
                        item.is_read ? (
                            <TouchableOpacity style={NotificationScreenStyle.NotifTab}
                                onPress={() => this._handleNotificationClick(item)}>
                                    <View style={NotificationScreenStyle.NotifImgContainer}>
                                        <Image style={NotificationScreenStyle.NotifImg}
                                            source={ item.owner_image }/>
                                    </View>
                                    <View style={NotificationScreenStyle.NotifCard}>
                                        <Text style={NotificationScreenStyle.NotifContentName}>{ item.owner_name }</Text>
                                        <Text style={NotificationScreenStyle.NotifContentPost}>{ item.content }</Text>
                                        <Text style={NotificationScreenStyle.NotifContentTime}>{ item.ago }.</Text>
                                    </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={NotificationScreenStyle.NotifTabUnread}
                                onPress={() => this._handleNotificationClick(item)}>
                                    <View style={NotificationScreenStyle.NotifImgContainer}>
                                        <Image style={NotificationScreenStyle.NotifImg}
                                            source={ item.owner_image }/>
                                    </View>
                                    <View style={SystemStyle.RowImg}>
                                        <View style={NotificationScreenStyle.NotifCard}>
                                            <Text style={NotificationScreenStyle.NotifContentNameUnread}>{ item.owner_name }</Text>
                                            <Text style={NotificationScreenStyle.NotifContentPostUnread}>{ item.content }</Text>
                                            <Text style={NotificationScreenStyle.NotifContentTimeUnread}>{ item.ago }.</Text>
                                        </View>
                                        <View style={NotificationScreenStyle.BUlletPosition}>
                                            <Entypo name="dot-single" size={40} color="#eb9834" style={NotificationScreenStyle.BUlletPosition}/>
                                        </View>
                                    </View>
                            </TouchableOpacity>
                        )
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={this._renderFooter()}
                    onEndReached={() => { 
                            console.log("Can Extend: ", this.state.can_extend)
                            if(this.state.can_extend) this._extendNotifications()
                        }
                    }
                    onEndReachedThreshold={0.5}
                    refreshing={this.state.refreshing}>
                </FlatList>   
            </View>
        );
    }
}

export default {
    NotificationScreen,
}