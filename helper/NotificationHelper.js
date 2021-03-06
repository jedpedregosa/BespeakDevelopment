import { auth, db } from '../firebase';

import fetch_date_time from '../api/GlobalTime';

import { _getUserData } from './EventLoad';
import { _getFollowersId } from './ProfileLoad';

async function _processNewEventNotif(event_id, _creator = auth.currentUser.uid) {
    const current_time = await fetch_date_time();
    const to_notif = await _getFollowersId();
    var batch = db.batch();

    if(to_notif == 0) return;

    to_notif.forEach((item) => {
        var to_notif_query = db.collection('_notification').doc();
        batch.set(to_notif_query, {
            type: 'NEW_EVENT',
            event_id: event_id,
            to: item,
            from: _creator,
            is_read: false,
            server_time: current_time.epoch
        });
    })

    batch.commit();
}

async function _constructNewEventNotif(_tokens = [], _data = {}, _creator = auth.currentUser.uid) {
    if(_tokens.length == 0) return;


    let _result = [];
    let owner_name = await _getUserData('_name', _creator);

    for(var token in _tokens) {
        _result.push({
            to: _tokens[token],
            title: owner_name,
            body: "Created a new event! Find out what's new!",
            data: _data
        });
    }

    return _result;
}

async function _processDelEventNotif(event_name, to_notif = [],  _creator = auth.currentUser.uid) {
    const current_time = await fetch_date_time();
    var batch = db.batch();

    if(to_notif == 0) return;

    to_notif.forEach((item) => {
        var to_notif_query = db.collection('_notification').doc();
        batch.set(to_notif_query, {
            type: 'DEL_EVENT',
            event_name: event_name,
            to: item,
            from: _creator,
            is_read: false,
            server_time: current_time.epoch
        });
    })

    batch.commit();
}

async function _processEventChangeNotif(event_id, to_notif = [],  _creator = auth.currentUser.uid) {
    const current_time = await fetch_date_time();
    var batch = db.batch();

    if(to_notif == 0) return;

    to_notif.forEach((item) => {
        var to_notif_query = db.collection('_notification').doc();
        batch.set(to_notif_query, {
            type: 'UPD_EVENT',
            event_id: event_id,
            to: item,
            from: _creator,
            is_read: false,
            server_time: current_time.epoch
        });
    })

    batch.commit();
}

async function _constructEventChangeNotif(_tokens = [], _data = {}, _creator = auth.currentUser.uid) {
    if(_tokens.length == 0) return;


    let _result = [];
    let owner_name = await _getUserData('_name', _creator);

    for(var token in _tokens) {
        _result.push({
            to: _tokens[token],
            title: owner_name,
            body: "Updated the description of an event you are attending.",
            data: _data
        });
    }

    return _result;
}

async function _constructDelEventNotif(_tokens = [], _data = {}, _creator = auth.currentUser.uid) {
    if(_tokens.length == 0) return;


    let _result = [];
    let owner_name = await _getUserData('_name', _creator);

    for(var token in _tokens) {
        _result.push({
            to: _tokens[token],
            title: owner_name,
            body: "Decided to cancel an event you are attending.",
            data: _data
        });
    }

    return _result;
}


async function _processCommentNotif(event_id, to_notif = [],  _creator = auth.currentUser.uid) {
    const current_time = await fetch_date_time();
    var batch = db.batch();

    if(to_notif == 0) return;

    to_notif.forEach((item) => {
        var to_notif_query = db.collection('_notification').doc();
        batch.set(to_notif_query, {
            type: to_notif.indexOf(item) == 0 ? 'EVNT_CMMNT' : 'NEW_CMMNT',
            event_id: event_id,
            to: item,
            from: _creator,
            is_read: false,
            server_time: current_time.epoch
        });
    })

    batch.commit();
}

async function _constructCommentNotif(_tokens = [], _data = {}, _special = [], _creator = auth.currentUser.uid) {
    if(_tokens.length == 0) return;


    let _result = [];
    let owner_name = await _getUserData('_name', _creator);

    for(var token in _tokens) {
        _result.push({
            to: _tokens[token],
            title: owner_name,
            body: _special.includes(_tokens[token]) ? "Commented on your event."
                : "Commented to an event discussion you are in.",
            data: _data
        });
    }

    return _result;
}

export { 
    _constructNewEventNotif,
    _processNewEventNotif,
    _constructDelEventNotif,
    _processDelEventNotif,
    _constructEventChangeNotif,
    _processEventChangeNotif,
    _processCommentNotif,
    _constructCommentNotif
};