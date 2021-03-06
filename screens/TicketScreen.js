import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Text, 
    View,
    Alert
} from 'react-native';
import { sha256 } from 'react-native-sha256';
import Spinner from 'react-native-loading-spinner-overlay';
import QRCode from 'react-native-qrcode-svg';

import { auth, db } from '../firebase.js';

import TicketScreenStyle from "../styles/TicketScreenStyle.js";
import SystemStyle from '../styles/SystemStyle.js';

import dateFormat from '../helper/DateFormat';
import { 
    _arrangeData,
    _getUserData
} from '../helper/EventLoad';

class TicketScreen extends Component {
    state = {
        data: [],

        is_loading: true
    }

    componentDidMount() {
        let _id = this.props.route.params.ticket_id;
        this._loadTicket(_id);
    }
    
    async _loadTicket(ticket_id) {
        let uid = auth.currentUser.uid;

        let get_ticket_query = await db.collection('ticket')
            .doc(ticket_id)
            .get();

        if(!get_ticket_query.exists) {
            Alert.alert('Content not found', 
                'This content is either not available or not existing.');
            this.props.navigation.goBack();
            return;
        }

        let _ticket = get_ticket_query.data();

        let get_event_query = await db.collection('event')
            .doc(_ticket.event_id)
            .get();

        if(get_event_query.empty) {
            this.props.navigation.goBack();
        }

        let _event = get_event_query.data();

        let _data = await _arrangeData([_event]);
        
        _data = _data[0];

        let content = {};

        content.key1 = ticket_id;
        await sha256(uid + _ticket.server_time).then( hash => {
            content.key2 = hash;
        })

        _data.key_content = JSON.stringify(content);

        _data.ticket_owner = await _getUserData('_name', _ticket.owner);
        _data.reg_date = await dateFormat(new Date(_ticket.server_time),
            "MMMM d, yyyy ∘ h:mm aaa");

        this.setState({
            data: {..._data},
            is_loading: false
        });
    }

    render() {
        if(this.state.is_loading) {
            return (
                <Spinner visible={true}
                    textStyle={SystemStyle.defaultLoader}
                    animation = 'fade'
                    overlayColor = "orange"/> //For Overlay Gray #5b5c5a
            );
        }

        let item = this.state.data;
        return (
            <View style={TicketScreenStyle.Container}>
                <View style={TicketScreenStyle.YourTicketContent}>
                    <Text style={TicketScreenStyle.BespeakLogo}>bespeak</Text>
                    <Text style={TicketScreenStyle.EventTitle}>{ item.name }</Text>
                    <Text style={TicketScreenStyle.EventSched}>{ item.sched }</Text>
                    <Text style={TicketScreenStyle.EventOrg}>{ item.owner_name }</Text>
                    <Text style={TicketScreenStyle.EventLocation}>{ item.location }</Text>
                </View>
                <View style={TicketScreenStyle.QRContainer}>
                    <View style={TicketScreenStyle.QRImg}> 
                        <QRCode value={ item.key_content } size = {150}/>
                    </View>
                </View>
                <View style={TicketScreenStyle.YourTicketContent}>
                    <Text style={TicketScreenStyle.TicketOwner}>{ item.ticket_owner }</Text>
                    <Text style={TicketScreenStyle.RegistrationDate}>{ item.reg_date }</Text>
                </View>   
                <View style={TicketScreenStyle.EventDescriptionContainer}>
                    <Text style={TicketScreenStyle.EventDescriptionText}>
                        { item.desc }
                    </Text>
                    <Text style={TicketScreenStyle.EventInformationText}>
                        { item.info }
                    </Text>
                </View>
                <View style={TicketScreenStyle.Button}>
                <TouchableOpacity style={TicketScreenStyle.DoneBtn} 
                    onPress={() => {
                        console.log('Closing ticket...');
                        this.props.navigation.goBack()}}>
                        <Text style={TicketScreenStyle.DoneTextBtn}>Done</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
    
export default TicketScreen;  