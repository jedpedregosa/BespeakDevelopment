import { StyleSheet } from "react-native";

const SystemStyle = StyleSheet.create({
  // Loading Spinners
  defaultLoader: {
    color: 'white',
    fontFamily: 'RedHatDisplay-Regular',
  },
  whiteLoader: {
    color: '#eb9834',
    fontFamily: 'RedHatDisplay-Regular',
  },

  // For Tab List View
  TabContainer: {
    width: '100%',
    height: '100%',
    alignSelf: "center", 
    justifyContent: "center",
    backgroundColor:'#fff',
  },
  TabEmptyList: {
    alignSelf: "center", 
    justifyContent: "center",
    color:'#ccc',
    fontSize:16,
    fontFamily:'RedHatDisplay-Regular',
    backgroundColor: '#fff',
  },
  //Containers Screen
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '4%',
    },
  EventListContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'3%'
  },
  //For Event Card
  Card:{
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '1%',
    marginBottom: '1.5%',
    marginLeft: '3.5%',
    marginRight: '3.5%',
    borderRadius: 20,
  },
  //Content Loader
  CardContentLoader:{
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '1%',
    marginBottom: '1.5%',
    marginLeft: '3.5%',
    marginRight: '3.5%',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //Card Image
  CardImage:{
    width: '100%',
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //Card Text Container
  CardContainer:{
    padding:'3%',
    marginLeft:'2%',
  },
  //Card Title
  CardTitle:{
    color: "#000",
    justifyContent: 'space-around',
    fontSize: 30,
    fontFamily: 'RedHatDisplay-Medium',
  },
  //Card Schedule
  CardSched:{
    color: "#000",
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Regular',
  },
  //Card Schedule for archived || FOR EVENTCARD.JS LINE 71
  CardSchedArchived:{
    color: "#A30000",
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Regular',
  },
  //Card Organizer
  CardOrg:{
    color: "#eb9834",
    justifyContent: 'space-around',
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Regular',
  },
  //Card Location Container
  CardLocationContainer:{
    flexDirection:'row',
    alignContent:'center',
  },
  CardLocation:{
    color: "#000",
    justifyContent: 'space-around',
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Light',
  },
  //Card Status Container
  CardStatContainer:{
    flexDirection:'row',
    alignContent:'center',
    marginTop: '1%'
  },
  EventEnded:{
    color: "#A30000",
    justifyContent: 'space-around',
    fontFamily:'RedHatDisplay-Medium',
    fontSize:16,
    marginLeft: 2,
  },
  AdmissionEnded:{
    color: "#5b5c5a",
    justifyContent: 'space-around',
    fontFamily:'RedHatDisplay-Medium',
    fontSize:16,
    marginLeft: 2,
  },
  StartAndSlot:{
    color: "#eb9834",
    justifyContent: 'space-around',
    fontFamily:'RedHatDisplay-Medium',
    fontSize:16,
    marginLeft: 2,
  },
  //Card Options For EventCard
  CardOptionForEventCard:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-between',
    marginBottom:'4%',
    marginHorizontal:'4%',
  },
  //Card Options For ProfileCard
  CardOptionForProfCard:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'flex-end',
    marginBottom:'4%',
    marginHorizontal:'4%',
  },
  //Draggable Modal Bottom Sheet
  BottomSheetModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf:'baseline',
    backgroundColor:'#fff',
    width: '100%'
  },
  BottomSheetModalContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor:'#fff',
    alignItems: "center",
    justifyContent:'center',
    padding:'4%',
    marginLeft:'2%',
    marginRight:'4%',
  },
  //Draggable Modal Image Container
  BottomSheetImage:{
    width: '100%',
    height: '35%',
    marginTop:'-4%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //Draggable Modal Container
  BottomSheetContainer:{
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#fff',
    width:'100%',
  },
  //Draggable Modal Text Content
  DragableModalTitle:{
    color: "#000",
    alignSelf:'center',
    justifyContent: 'center',
    fontSize: 28,
    marginBottom:12,
    fontFamily: 'RedHatDisplay-Medium',
  },
  DraggableModalDescription:{
    color: "#000",
    fontSize: 17,
    fontFamily: 'RedHatDisplay-Regular',
  },
  //To View Organizer Info in Modal
  OrganizerTabModal:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'3%',
    marginBottom:'3%',
    //marginLeft:'-4%',
  },
  //Organizer Button Profile
  OrganizerButton:{
    flexDirection:'row',
    marginBottom:10,
  },
  //To View Organizer Info
  OrganizerTab:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'3%',
    marginBottom:'3%',
  },
  OrganizerInfo:{
    flexDirection:'row',
  },
  OrganizerImgContainer: {
    alignItems:'center',
    justifyContent:'center',
  },
  OrganizerImg:{
    borderRadius:25,
    width: 40,
    height:40,
    justifyContent:'center',
  },
  OrgCard:{
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:'4%',
  },
  OrgCardContainer:{
    fontSize: 15,
    fontFamily:'RedHatDisplay-Light',
    color: '#000',
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:10,
    width:'55%',
  },
  // Oranizer Name for Own Event 
  OrganizerNameButBlack:{
    fontSize: 20,
    fontFamily:'RedHatDisplay-Medium',
    color: '#000',
    marginLeft:'1.4%',
    marginTop:'-1%',
  },
  // Organizer Name for Cards
  OrganizerName:{
    fontSize: 20,
    fontFamily:'RedHatDisplay-Medium',
    color: '#eb9834',
    marginLeft:'1.4%',
    marginTop:'-1%',
  },
  //For Interested Participants Container
  InterestedParticipantsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 12,
  },
  InterestedParticipantsBtn: {
    alignItems: 'center',
    justifyContent:'center',
    width: '58.5%',
    padding: 10,
    flexDirection: 'column',
  },
  //Interested Individual in Draggable Modal
  //For rowing Images
  RowImg:{
    flexDirection:'row',
  },
  InterestedIndividuals:{
    marginTop:'-2%',
    borderRadius:25,
    width: 18,
    height:18,
    justifyContent:'center',
  },
  InterestedIndividualsText:{
    fontSize: 13,
    justifyContent:'center',
    alignItems:'center',
    color: '#000',
    fontFamily: 'RedHatDisplay-Light',
  },
  // For Interested Button Orange
  InterestedBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#eb9834',
    height: 41,
    width: 150,
    borderRadius: 25,
  },
  InterestedTextBtn:{
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'RedHatDisplay-Medium',
  },
  // For Interested Button Gray
  ViewBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#5b5c5a',
    height: 36,
    width: 150,
    borderRadius: 25,
  },
  ViewTextBtn:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'RedHatDisplay-Medium',
  },

  //Detailed Screen
    //For Event Notification Detail Screen
    EventContainer:{
      flex:1,
      backgroundColor:'#fff',
      padding:'2%',
    },
    ImgContainer:{
        margin:'-1%',
        width: '102%',
        height: 180,
    },
  //Event Info
  EventTitle:{
    fontSize: 30,
    fontFamily: 'RedHatDisplay-Medium',
    color: '#000',
    marginBottom:'4%',
  },
    //For Follow Organizer Button
    FollowOrgBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#eb9834',
    height: 36,
    width: 120,
    borderRadius: 25,
    justifyContent:'center',
  },
    //Gray Default Size Button
    FollowingOrgBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#5b5c5a',
    height: 36,
    width: 120,
    borderRadius: 25,
    justifyContent:'center',
  },  
    //Text for Unfollow and Follow
    FollowOrgTextBtn:{
        marginTop: -2,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'RedHatDisplay-Medium',
    },
    //Event Info
    LowerSection:{
        flexDirection:'row'
    },
    EventSchedule:{
        marginLeft:10,
        marginTop:3,
        marginBottom:20,
        fontSize: 16,
        color: '#121212',
        fontFamily: 'RedHatDisplay-Regular',    
    },
    EventPlace:{
        paddingRight:25,
        marginLeft:10,
        marginTop:1,
        marginBottom:20,
        fontSize: 16,
        color: '#121212',
        fontFamily: 'RedHatDisplay-Regular',    
    },
    //Line Breaks
    LineBreak:{
        borderBottomWidth: 1, 
        borderColor:'#000', 
        opacity:0.1,
        marginTop:'-7%'
    },
    BreakLineContainer:{
      paddingTop:'4%',
      padding:'1%',    },
    BreakLine:{
        borderBottomWidth:1,
        borderBottomColor: '#000',
        alignItems:'center',
        opacity: .3,
    },
    BreakLineComment:{
      marginTop: '-5.5%',
      padding: '3%',
      backgroundColor:'#fff',
      color:'#000',
      alignSelf:'center',
      fontSize:14,
      fontFamily:'RedHatDisplay-Light',
    },
    //Event Guide
    EventAboutTitle:{
        color:'#eb9834',
        fontFamily:'RedHatDisplay-Medium',
        fontSize: 25,
        marginTop:'-4%',
        marginBottom:'2%',
    },
    EventTextInfo:{
        color:'#000',
        fontFamily:'RedHatDisplay-Light',
        fontSize: 17.5,
    },
    EventAddInfoTitle:{
        color:'#000',
        fontFamily:'RedHatDisplay-Medium',
        fontSize: 25,
        marginTop:'5%',
        marginBottom:'2%',
    },
    //No Comment Found
    EmptyComment:{
      alignSelf:'center',
      justifyContent:'center',
      padding:'5%',
      paddingBottom:'8%',
    },
    //Comment Section
    BespeakerCommentContainer:{
        flexDirection:'row',
        marginBottom:'3%',
        width:'90%'
    },
    BespeakerContainer:{
        paddingLeft:'3%',
        width:'88%',
    },
    BespeakerName:{
        paddingBottom:'1%',
        fontFamily:'RedHatDisplay-Medium',
        fontSize:18,
        color:'#5b5c5a'
    },
    BespeakerComment:{
        fontSize: 15,
        color:'#5b5c5a',
        fontFamily: 'RedHatDisplay-Regular',
    },
    //Comment Section Image
    BespeakerImgContainer: {
        alignItems:'center',
        justifyContent:'center',
    },
    BespeakerImg: {
        borderRadius:25,
        width: 50,
        height:50,
        justifyContent:'center',
    },
    //Write a comment
    MyCommentInput:{
        fontSize:15,
        borderRadius:10,
        backgroundColor:'#f5f5f5',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft:'4%',
        paddingRight:'4%',
        width: '100%',
        fontFamily: 'RedHatDisplay-Regular',
    },
    BespeakerInput:{
      flexDirection:'row',
      marginLeft:'-1%',
    },
    //For Comment Info
    CommentInfo:{
        marginLeft:'2%',
    },
    //Send Comment
    SendComment:{
        marginTop:'2%',
        marginLeft:'2%',
        marginRight:'2%',
    },
    //I'm Attending, View Attendee Container
    AttendingContainer:{
      paddingTop:'17%',
      backgroundColor:'#fff',
      justifyContent:'center',
      padding:'3%'
    },
    AttendingBtn: {
      marginTop:-2,
      alignItems: 'center',
      alignContent:'center',
      justifyContent:'center',
      backgroundColor: '#eb9834',
      height: 40,
      borderRadius: 25,
      flexDirection:'row'
    },
    AttendingTextBtn:{
      marginTop: -2,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'RedHatDisplay-Medium',
    },
    //For Refresh HomeScreen
    RefreshBtnWrapper: {
      marginTop: 10,
      backgroundColor: '#5b5c5a',
      borderRadius: 25,
    },
    RefreshBtnContainer: {
        alignItems: 'center',
        flexDirection:'row',
        marginTop:-2,
        justifyContent:'center',
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10
    },
    RefreshBtnTxt: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'RedHatDisplay-Medium',
        marginLeft: 8,
    },
    ViewAttendeeBtn: {
      marginTop:-2,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#5b5c5a',
      height: 40,
      borderRadius: 25,
      flexDirection:'row',
    },
    ViewAttendeeTextBtn:{
      marginTop: -2,
      marginLeft:'2%',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'RedHatDisplay-Medium',
    },
    //Modal for viewing ticket    
    YoureSetView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'rgba(0,0,0,.1)',
    },
    YoureSetModalView: {
    backgroundColor: "#fff",
    width: 300,
    height: 200,
    borderRadius:25,
    alignItems: "center",
  },
  //On-modal Text
    ModalText:{
        fontSize:40,
        fontFamily:'RedHatDisplay-Medium',
        color:'#000',
        padding:15,
    },
  // For View Ticket Button
    ViewBtn: {
        marginTop:8,
        marginHorizontal:'3%',
        alignItems: 'center',
        backgroundColor: '#eb9834',
        height: 40,
        width: 130,
        padding: 10,
        borderRadius: 25,
        justifyContent:'center',
    },
    ViewTextBtn:{
        marginTop: -2,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'RedHatDisplay-Medium',
    },
    //Comment Info Delete Modal
    CommentInfoContainer: {
      flex: 1,
    },
    Icon:{
      fontSize: 20,
      paddingLeft:'5%',
      flexDirection:'row',
    },
    DeleteTextBtn:{
      paddingLeft: '3%',
      color: '#000',
      fontSize: 20,
      fontFamily:'RedHatDisplay-Regular'
    },
    CommentDateInfo:{
      marginTop: '3%',
      flexDirection: 'row',
      marginLeft: '.9%',
    },
    CommentDate:{
      paddingLeft: '3%',
      color: '#000',
      fontSize: 20,
      fontFamily:'RedHatDisplay-Regular'
    },
  //Screen Footer
  Footer:{
    padding: '12%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginLeft:'-15%',
    marginRight:'-15%',
    height: '100%',
  },
  BespeakLogo:{
    color: '#eb9834',
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 30,
  },
  FooterText:{
    fontFamily: 'RedHatDisplay-Regular',
  },
  //For Organizer Card
  OrganizerCardContainer:{
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:10,
    width:'58%',
  },
  //To view organizer tab
  OrganizerSectionTab:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'3%',
    marginBottom:'3%',
    marginLeft:'-2%',
    width:'100%',
  },
  // Organizer Info
  OrgCardInfo:{
    fontSize: 15,
    fontFamily:'RedHatDisplay-Light',
  },
  // For MenuTabNavigator
  TabTitle:{
    color: '#eb9834',
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 25,
    marginLeft: '-35%',
  },
  // Follow Screen Styles
  FollowOrganizerTab:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:'2%',
    marginTop:'2%',
    marginRight:'2%',
  },
  FollowOrganizerImg:{
    borderRadius:25,
    width: 40,
    height: 40,
    justifyContent:'center',
  },
  FollowCardContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
    marginLeft: '3%',
    width:'60%',
  },
  FollowListOrganizerName:{
    fontSize: 17,
    fontFamily:'RedHatDisplay-Medium',
    color: '#5b5c5a',
    marginLeft:'1.4%',
    marginTop:'-1.5%',
  },
  FollowListOrganizerBio:{
    fontSize: 13,
    fontFamily:'RedHatDisplay-Light',
    color: '#5b5c5a',
    marginLeft:'1.4%',
    marginTop:'-1.5%',
  },
  //Gray Button To Follow -- Small
  ToFollowOrgBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#5b5c5a',
    height: 30,
    width: 90,
    borderRadius: 25,
    justifyContent:'center',
  },  
  //Orange Button Following -- Small
  ToFollowingOrgBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#eb9834',
    height: 30,
    width: 90,
    borderRadius: 25,
    justifyContent:'center',
  },
  //For Empty Screens
  Center:{
    alignItems:'center',
    justifyContent:'center',
  },
  EmptyTitle:{
    color:'#000',
    fontSize: 30,
    fontFamily:'RedHatDisplay-Medium',
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:'2%',
  },
  EmptyTitleAdditionalInfo:{
    color:'#5b5c5a',
    fontSize:17,
    fontFamily:'RedHatDisplay-Regular',
    alignItems:'center',
    justifyContent:'center',
  },
  //
  AdditionalInfo:{
    color:'#5b5c5a',
    fontSize:17,
    fontFamily:'RedHatDisplay-Regular',
    alignItems:'center',
    justifyContent:'center',
  },
  GetNotifiedInfo:{
    color:'#5b5c5a',
    fontSize:17,
    fontFamily:'RedHatDisplay-Regular',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'7%',
    marginRight:'7%'
  },
  //Empty Screen Images
  LookEventImgContainer: {
    alignItems:'center',
    justifyContent:'center',
  },
  LookEventImg: {
    width: 110,
    height: 100,
    justifyContent:'center',
  },
  CreateEventImgContainer: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:'20%'
  },
  CreateEventImg: {
    marginBottom:'1.5%',
    width: 125,
    height: 120,
    justifyContent:'center',
  },
  WelcomeToBespeakImgContainer: {
    alignItems:'center',
    justifyContent:'center',
  },
  WelcomeToBespeakImg: {
    marginBottom:'1.5%',
    width: 215,
    height: 140,
    justifyContent:'center',
  },
  //user Profile Sharing Icon
  ShareUserOption:{
    padding:'2%',
    margin:'2%',
  },
  //For Load More Comments
  //Center
  Center:{
    alignItems: 'center',
    justifyContent:'center',
  },
  LoadBtn: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#ebebeb',
    height: 20,
    borderRadius: 6,
    justifyContent:'center',
  },
  LoadText:{
    marginTop: -2,
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontFamily: 'RedHatDisplay-Medium',
    marginLeft: 5,
    marginRight: 5
}, 
//For Event Ended Buttons
//Orange Bordered Button
EventEndedBtnButOrange: {
  marginTop:-2,
  alignItems: 'center',
  alignContent:'center',
  justifyContent:'center',
  backgroundColor: '#fff',
  borderColor:'#eb9834',
  borderWidth: 2,
  height: 40,
  borderRadius: 25,
  flexDirection:'row'
},
EventEndedTextForOrangeBtn:{
  marginTop: -2,
  marginLeft:'2%',
  fontSize: 20,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#eb9834',
  fontFamily: 'RedHatDisplay-Medium',
},
ReOpenTicketForOrangeBtn:{
    marginTop: -2,
    marginLeft:'2%',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'RedHatDisplay-Medium',
},
//Gray Bordered Button
EventEndedBtnButGray: {
  marginTop:-2,
  alignItems: 'center',
  alignContent:'center',
  justifyContent:'center',
  backgroundColor: '#fff',
  borderColor:'#5b5c5a',
  borderWidth: 2,
  height: 40,
  borderRadius: 25,
  flexDirection:'row'
},
EventEndedTextForGrayBtn:{
  marginTop: -2,
  marginLeft:'2%',
  fontSize: 20,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#5b5c5a',
  fontFamily: 'RedHatDisplay-Medium',
},
//For View Attendee Screen
NameList:{
  flexDirection:'row',
  paddingVertical:'1.5%',
},
  // Image
  NamesImgContainer: {
    alignItems:'center',
    justifyContent:'center',
  },
  NamesImg: {
    borderRadius:25,
    width: 45,
    height:45,
    justifyContent:'center',
  },
  //Names Info
  NamesInCard:{
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:'4%',
    flexDirection:'column'
  },
  NamesInCardText:{
    fontSize: 20,
    fontFamily:'RedHatDisplay-Regular',
    color: '#000',
  },
  EmailInCardText:{
    marginBottom:'-1.5%',
    fontSize: 15,
    fontFamily:'RedHatDisplay-Light',
    color: '#eb9834',
  },
  MobileNoInCardText:{
    marginTop:'-1.5%',
    fontSize: 15,
    fontFamily:'RedHatDisplay-Light',
    color: '#5b5c5a',
  },

});

export default SystemStyle
