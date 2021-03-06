import { Share, Alert } from 'react-native';
import { db } from '../firebase';

import dateFormat from './DateFormat';
import { _getGeneratedLink } from './EventHelper'
import { _getUserGeneratedLink } from './ProfileHelper'

async function _initiateSharing(item) {
    let _link = item._link;

    let link_title = item.name + ' (' 
        + await dateFormat(new Date(item.schedule), "EEEE, MMMM d, yyyy - h:mm aaa") + ', ' 
        + item.location + ') ';

    console.log('Saved Link: ', _link)

    if(!_link) {

        // Create a dynamic link.
        _link = await _getGeneratedLink('event', item.id, 
            link_title, item._banner?.uri ? item._banner?.uri : undefined, item?.desc);

        await db
            .collection('event')
            .doc(item.id)
            .update({
                _link: _link
            })
            .catch(error => {
                Alert.alert('Error!', error.message)
                console.log('Error!', error.message)
            })
    }
    try {
        let result = await Share.share({
            title: link_title,
            message: _link
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }

    } catch(e) {
        Alert.alert('Error!', e.message)
        console.log('Error!', e)
    }
}

async function _initiateUserSharing(item) {
    let _link = item._link;

    let link_title = item.user_type == "INDIV" ? item.f_name : item.org_name;

    console.log('Saved Link: ', _link)

    if(!_link) {

        // Create a dynamic link.
        _link = await _getUserGeneratedLink(item.id, 
            link_title, item?.profile_image?.uri ? item?.profile_image?.uri : undefined, item?.bio);

        await db
            .collection('user_info')
            .doc(item.id)
            .update({
                _link: _link
            })
            .catch(error => {
                Alert.alert('Error!', error.message)
                console.log('Error!', error.message)
            })
    }
    try {
        let result = await Share.share({
            title: link_title,
            message: _link
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }

    } catch(e) {
        Alert.alert('Error!', e.message)
        console.log('Error!', e)
    }
}

export {
    _initiateSharing,
    _initiateUserSharing
}