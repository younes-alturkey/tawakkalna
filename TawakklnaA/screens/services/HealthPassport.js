import React from "react";
import arrow from "../../assets/icons/active/next.png";
import Test from "../../assets/icons/notActive/HP_Test.png";
import insurance from "../../assets/icons/notActive/HP_insurance.png";
import PDF from "../../assets/icons/notActive/HP_PDF.png";
import whiteArrow from "../../assets/icons/active/HP_whiteArrow.png";
import { useSelector, useDispatch } from "react-redux";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HealthPassport({ navigation }) {
  const user = useSelector((state) => state.user);

  return (
    // <View>
    //
    // </View>
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={{ paddingTop: 30, marginRight: 9 }}
          onPress={() => {
            navigation.navigate("Services");
          }}
        >
          <Image source={whiteArrow} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>الجواز الصحي</Text>
        </View>

        <View></View>
      </View>

      <ScrollView style={([styles.scrollV], { marginTop: 45, flexGrow: 1 })}>
        <ImageBackground
          style={styles.card}
          source={require("../../assets/icons/active/HP_card.jpg")}
        >
          <Image
            style={{
              height: 61,
              width: 61,
              marginRight: 27,
              marginBottom: 20,
              borderRadius: 50,
            }}
            source={{
              // uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
              uri: user.user_info.profile_pic,
            }}
          />

          <Text style={{ color: "white", marginRight: 25, marginBottom: 50 }}>
            {user.user_info.name_ar}
          </Text>
        </ImageBackground>

        <View style={styles.dashboard}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.subTitle}>المعلومات الشخصية</Text>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>الجنسية</Text>
              <Text style={{ color: "white" }}>المملكة العربية السعودية</Text>
            </View>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>رقم الهوية</Text>
              <Text style={{ color: "white" }}>
                {user.user_info.national_id}
              </Text>
            </View>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>رقم جواز السفر</Text>
              <Text style={{ color: "white" }}>
                {user.user_info.passport_no}
              </Text>
            </View>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>فصيلة الدم</Text>
              <Text style={{ color: "white" }}>
                {user.user_info.blood_type}
              </Text>
            </View>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>الأهلية الصحية للسفر</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>مؤهل</Text>
            </View>
            <View
              style={
                ([styles.viewText],
                {
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  width: "110%",
                  marginRight: -15,
                  marginVertical: 20,
                  backgroundColor: "red",
                })
              }
            />
            <Text style={styles.subTitle}>المعلومات الصحية</Text>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>حالة التحصين</Text>
              <Text style={{ color: "green" }}>
                {`${user.user_info.immunity_status} ${user.user_info.vaccine.name}`}
              </Text>
            </View>
            <View style={styles.viewText}>
              <Text style={{ color: "grey" }}>تاريخ التحصين</Text>
              <Text style={{ color: "white" }}>
                {user.user_info.immunity_date}
              </Text>
            </View>

            <View
              style={
                ([styles.viewText],
                {
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  width: "110%",
                  marginRight: -15,
                  marginVertical: 20,
                  backgroundColor: "red",
                })
              }
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image source={Test} style={{ height: 70, width: 70 }} />
              <Text style={{ color: "white" }}>
                نتيجة فحص كورونا PCR غير متوفره
              </Text>
            </View>

            <View
              style={
                ([styles.viewText],
                {
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  width: "110%",
                  marginRight: -15,
                  marginVertical: 20,
                  backgroundColor: "red",
                })
              }
            />
            <Text style={styles.subTitle}>التامين الطبي للسفر</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                source={insurance}
                style={{ height: 70, width: 70, marginVertical: 20 }}
              />
              <Text style={{ color: "white" }}>
                حالتك الصحية لا تتطلب وجود تأمين طبي للسفر
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 650 }}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {" "}
            تحميل الجواز الصحي
          </Text>
          <Image source={PDF} style={styles.arrowIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 190,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  nav: {
    height: 100,
    width: 400,
    backgroundColor: "#3B9E97",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowIcon: {
    height: 30,
    width: 35,
  },
  title: {
    color: "white",
    marginTop: 30,
  },
  dashboard: {
    backgroundColor: "#000000",
    marginLeft: 10,
    marginTop: 147,
    height: 740,
    width: "95%",
    borderRadius: 10,
    position: "absolute",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    backgroundColor: "#3B9E97",

    width: "95%",
    height: 90,
    borderRadius: 10,

    padding: 1,
  },
  subTitle: {
    color: "white",
    direction: "rtl",
    fontWeight: "bold",
  },
  viewText: {
    alignItems: "flex-start",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
});
