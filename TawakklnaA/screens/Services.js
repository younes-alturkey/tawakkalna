import React from 'react'
import { View, Text,StyleSheet, ScrollView,Image, TouchableOpacity } from 'react-native'


export default function Services({ navigation }) {
  
    return (
        <View style={{flex:1, backgroundColor:"black"}}>
      <ScrollView style={[styles.scrollV],{marginTop:80}}>

      <Text style={styles.service}>الخدمات العامة</Text>
           <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/mobileNumber.png')}></Image>
               <Text style={styles.serviceName}>تعريف رقم الجوال</Text>  
               </View>
               </TouchableOpacity>
           </View>
           <Text style={styles.service}>خدمات التصاريح</Text>
           <View style={styles.boxContainer}>
           <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/newPermits.png')}></Image>
                 <Text style={styles.serviceName}>طلب تصريح جديد</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/personalPermits.png')}></Image>
                 <Text style={styles.serviceName}>التصاريح الشخصية</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/gathering.png')}></Image>
                 <Text style={styles.serviceName}>تصاريح التجمع</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/QrCode.png')}></Image>
                 <Text style={styles.serviceName}>باركود زيارة تجمع</Text>  
               </View>
               </TouchableOpacity>
           </View>
           
           <Text style={styles.service}>خدمات الصحة</Text>
           <View style={styles.boxContainer}>
           <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/cautionMode.png')}></Image>
                 <Text style={styles.serviceName}>الوضع الحذر</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/Test.png')}></Image>
                 <Text style={styles.serviceName}>فحص كورونا</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/AskForHelp.png')}></Image>
                 <Text style={styles.serviceName}>اسأل عن مساعدة</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity
                onPress={() => navigation.navigate('HealthPassport')}
               >
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/healthPassport.png')}></Image>
                 <Text style={styles.serviceName}>الجواز الصحي</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>  
               <Image style={styles.logo} source={require('../assets/icons/active/Vaccine.png')}></Image>
                 <Text style={styles.serviceName}>لقاح كورونا</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/organDonation.png')}></Image>
                 <Text style={styles.serviceName}>التبرع بالأعضاء</Text>  
               </View>
               </TouchableOpacity>
           </View>
           
           <Text style={styles.service}>خدمات التعليم</Text>
           <View style={styles.boxContainer}>
           <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/children'sEducationalStatus.png")}></Image>
                 <Text style={styles.serviceName}>الحالة الدراسية للأبناء</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={{height:40,width:80,alignSelf:"center",marginTop:25}} source={require("../assets/icons/active/madrasatyPlatform.png")}></Image>
                 <Text style={styles.serviceName}>بيانات منصة مدرستي</Text>  
               </View>
               </TouchableOpacity>

           </View>
           <Text style={styles.service}>خدمات أفراد الأسرة</Text>
           <View style={styles.boxContainer}>
           <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/id.png")}></Image>
                 <Text style={styles.serviceName}>بطاقة الوضع الصحي</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/dependents.png")}></Image>
                 <Text style={styles.serviceName}>رعاية أفراد الأسرة</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/familySponsored.png")}></Image>
                 <Text style={styles.serviceName}>أفراد الأسرة والمكفولين</Text>  
               </View>
               </TouchableOpacity>
           </View>
           <Text style={styles.service}>خدمات الحج والعمرة</Text>
           <View style={styles.boxContainer}>
           <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/permits.png")}></Image>
                 <Text style={styles.serviceName}>التصاريح</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/issuuePermits.png")}></Image>
                 <Text style={styles.serviceName}>إصدار التصاريح</Text>  
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require("../assets/icons/active/companionsManagement.png")}></Image>
                 <Text style={styles.serviceName}>إدارة المرافقين</Text>  
               </View>
               </TouchableOpacity>
           </View>
</ScrollView>
  </View>
    )
}
const styles = StyleSheet.create({
    box:{
      backgroundColor: "#1C1B1B",
      width:120,
      height:140,
      margin:8,
      borderRadius:15,      
    },
    logo:{
      height:45,
      width:45,
      alignSelf:"center",
      marginTop:25,
  },
    serviceName:{
        flex:1,
        color:"white",
        marginTop:20,
        fontSize:17,
        alignItems:"center",
        textAlign:"center"
    },
    service:{
        color:"#6b6a6b",
        alignSelf:"flex-end",
        fontSize:25,
        marginRight:10,
    },
    boxContainer:{
    flexDirection:"row-reverse",
    justifyContent:"flex-start",
    marginBottom:18,
    flexWrap:"wrap",
    },
})

