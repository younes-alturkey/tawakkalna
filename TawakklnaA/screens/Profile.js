import React,{useState} from 'react'
import { View, Text, ScrollView,StyleSheet,TouchableOpacity,Ionicons,Switch,Image } from 'react-native'
import ListItem from './ListItem'


export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex:1, backgroundColor:"black"}}>
      <ScrollView style={[styles.scrollV],{marginTop:80,marginBottom:10}}>
      <Text style={styles.heading}>إعدادات الحساب</Text>
      <View style={styles.listContainer}>
            <TouchableOpacity><ListItem name='اللغة' icon={require('../assets/icons/notActive/language.png')}/></TouchableOpacity>
            <TouchableOpacity><ListItem name='تحديث رقم الجوال' icon={require('../assets/icons/notActive/phoneNumber.png')}/></TouchableOpacity>
            <TouchableOpacity><ListItem name='تغيير كلمة المرور' icon={require('../assets/icons/notActive/updatePassword.png')}/></TouchableOpacity>
            <TouchableOpacity><ListItem name='تحديث موقع السكن' icon={require('../assets/icons/notActive/homeAdress.png')}/></TouchableOpacity>
            
            <View style={{ flex: 1 }}>
            <View style={styles.toggleItem}>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', paddingRight: 10 }}>إظهار الصورة الشخصية للنساء</Text>
                    <Image source={require('../assets/icons/notActive/personalPicture.png')} style={{width:20,height:20}}/>
                </View>
            </View>

        </View>
        </View>

      <Text style={styles.heading}>حول التطبيق</Text>
      <View style={styles.listContainer}>
      <TouchableOpacity><ListItem name='شركاء النجاح' icon={require('../assets/icons/notActive/successPartners.png')}/></TouchableOpacity>
      <TouchableOpacity><ListItem name='الأسئلة الشائعة' icon={require('../assets/icons/notActive/FAQs.png')}/></TouchableOpacity>
      <TouchableOpacity><ListItem  name='تواصل معنا' icon={require('../assets/icons/notActive/contactUs.png')}/></TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
      <View style={styles.picContainer}>
      <Image source={require('../assets/sdaiaLogoGray.png')} style={{width:110,height:38}}/>
      <Image source={require('../assets/twLogoGray.png')} style={{width:105,height:35, marginLeft:30}}/>
      </View>
      <Text style={styles.versionNumber}>V 2.9.2</Text>
      </View>

      

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  heading:{
    color:"white",
    alignSelf:"flex-end",
    fontSize:20,
    marginBottom:2,
    marginRight:10,
    fontWeight: 'bold'
},
listContainer:{
  backgroundColor: '#1C1B1B', 
  flex: 1.5, 
  margin:15, 
  borderRadius:10, 
  padding: 5
},
toggleItem:{
  backgroundColor: '#1C1B1B', flexDirection: 'row', 
  justifyContent: 'space-between', 
  padding: 15, 
  alignItems: 'center' 
},
picContainer:{
  flexDirection:'row', 
  borderRadius:10, 
  justifyContent: 'space-around', 
  padding: 15, 
  alignItems: 'center', 
  justifyContent:'center'
},
versionNumber:{
  textAlign:'center', 
  color: '#64686a', 
  fontSize: 20
}
})
