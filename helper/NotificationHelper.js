import { auth, db } from '../firebase';

import fetch_date_time from '../api/GlobalTime';

import { _getUserData } from './EventLoad';
import { _getFollowersId } from './ProfileLoad';

async function _processNewEventNotif(event_id) {
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

export { 
    _constructNewEventNotif,
    _processNewEventNotif
};