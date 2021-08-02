import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import bg from "../assets/TAEWAKALNA_BG.png";
import tabaud from "../assets/tabaud.png";
import avatar from "../assets/user.png";
import qr from "../assets/qr-code.png";
import alarm from "../assets/icons/active/alarm.png";
import refresh from "../assets/icons/active/refresh.png";
import arrow from "../assets/icons/active/next.png";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const window = Dimensions.get("window");
  const ratio = window.width / 500;

  const user = useSelector((state) => state.user);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={alarm} style={styles.alarm} />
      <View style={styles.wrapper}>
        <View style={styles.profileContainer}>
          <ImageBackground
            source={bg}
            style={{
              width: window.width - 25,
              height: ratio * 333,
            }}
            imageStyle={{ borderRadius: 10 }}
            resizeMode="cover"
          >
            <Image
              source={
                //avatar
                { uri: user.user_info.profile_pic }
              }
              style={styles.avatarImage}
            />
            <Text style={styles.userName}>{user.user_info.name_ar}</Text>
          </ImageBackground>
        </View>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgb(6,74,34)", "rgb(12,107,51)"]}
          style={styles.card}
        >
          {/* <View style={styles.refreshIcon}></View> */}
          <Image source={refresh} style={styles.refreshIcon} />
          <View style={styles.cardText}>
            <Text style={styles.textHead}>محصًن</Text>
            <Text style={styles.textDetails}>
              أكمل جرعات لقاح كورونا (كوفيد-19)
            </Text>
            <Text style={styles.UpdateDetails}>
              آخر تحديث الاربعاء 28 يوليو، 10:35 ص
            </Text>
          </View>
          <Image source={qr} style={styles.qrImage} />
        </LinearGradient>
        <View style={styles.services}>
          <View style={styles.showAll}>
            <Image source={arrow} style={styles.servicesIcon} />
            <Text style={styles.textShowAll}>عرض الكل</Text>
          </View>
          <Text style={styles.textHeadColor}>الخدمات الحديثة</Text>
        </View>
        <View style={styles.icons}>
          <Image />
          <Image />
          <Image />
          <Image />
        </View>
        <View style={styles.servicesDetails}>
          <ScrollView horizontal={true} style={{ width: "90%" }}>
            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/QrCode.png")}
                  ></Image>
                  <Text style={styles.serviceName}> باركود زيارد تجمع</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/Test.png")}
                  ></Image>
                  <Text style={styles.serviceName}> فحص كورونا</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/id.png")}
                  ></Image>
                  <Text style={styles.serviceName}> بطاقة الوضع الصحي</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/familySponsored.png")}
                  ></Image>
                  <Text style={styles.serviceName}> بطاقة الوضع الصحي</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/Vaccine.png")}
                  ></Image>
                  <Text style={styles.serviceName}>لقاح كورونا</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/healthPassport.png")}
                  ></Image>
                  <Text style={styles.serviceName}>الجواز الصحي</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image
                    style={styles.logo}
                    source={require("../assets/icons/active/organDonation.png")}
                  ></Image>
                  <Text style={styles.serviceName}>التبرع بالاعضاء</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.warning}>
          <Text style={styles.warningTitle}>Warning</Text>
          <Text style={styles.warningBody}>
            We strongly encourage to download "Tabaud" App that alerts when
            contact with someone infected by Covid 19 and safe privacy, Protect
            your community by downloading the App.
          </Text>
          <Image source={tabaud} style={styles.warningImg} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDetails: {
    color: "white",
    fontSize: 13,
    marginRight: 20,
    marginLeft: 10,
    textAlign: "right",
    lineHeight: 35,
  },

  UpdateDetails: {
    color: "white",
    fontSize: 11.5,
    marginRight: 20,
    marginLeft: 10,
    textAlign: "right",
    lineHeight: 35,
  },
  textHead: {
    color: "white",
    textAlign: "right",
    fontSize: 18,
    marginRight: 20,
    fontWeight: "bold",
  },
  userName: {
    color: "#23AA9C",
    textAlign: "center",
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
  },
  avatarImage: {
    width: 128,
    height: 128,
    alignSelf: "center",
    marginTop: 5,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#23AA9C",
  },
  card: {
    backgroundColor: "green",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "85%",
    height: 110,
  },
  qrImage: {
    width: 80,
    height: 80,
    paddingHorizontal: 20,
  },

  alarm: {
    width: 40,
    height: 40,
    alignSelf: "flex-start",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 15,
  },
  wrapper: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  refreshIcon: {
    width: 25,
    height: 25,
    marginBottom: 8,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    width: 240,
  },
  services: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },

  textHeadColor: {
    color: "#23AA9C",
    fontSize: 23,
  },
  text: {
    color: "#fff",
  },
  servicesIcon: {
    height: 20,
    width: 15,
  },
  showAll: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 125,
  },
  textShowAll: {
    color: "gray",
    marginLeft: 10,
  },
  box: {
    backgroundColor: "#1C1B1B",
    width: 83,
    height: 140,
    margin: 8,
    borderRadius: 15,
  },
  logo: {
    height: 45,
    width: 45,
    alignSelf: "center",
    marginTop: 25,
  },
  serviceName: {
    flex: 1,
    color: "white",
    marginTop: 20,
    fontSize: 13,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
  },
  service: {
    color: "#6b6a6b",
    fontSize: 25,
  },
  boxContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    marginVertical: 18,
    flexWrap: "wrap",
  },
  servicesDetails: {
    flexDirection: "row",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  warning: {
    backgroundColor: "#A1363B",
    marginHorizontal: 10,
    marginVertical: 40,
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  warningTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  warningBody: {
    fontSize: 15,
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
  warningImg: {
    width: 66,
    height: 22,
    margin: 10,
  },
});
