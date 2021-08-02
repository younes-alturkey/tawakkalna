import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import imageBG from "../assets/imageBG.png";
import twLogo from "../assets/twLogo.png";
import sdaiaLogo from "../assets/sdaiaLogo.png";
import axios from "axios";
import { logIn } from "../redux/actions";

export default function Login({ navigation }) {
  const [nationalID, setNationalID] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const login = () => {
    let data = {
      //"1099664582"
      national_id: nationalID,
      //"secret"
      password: password,
    };

    axios
      .post("http://tawakalna.maneea.net/api/login", data)
      .then((res) => {
        dispatch(logIn(res.data));
        navigation.navigate("Main");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.logosContainer}>
        <Image source={twLogo} style={styles.logos} />
        <Image source={sdaiaLogo} style={styles.logos} />
      </View>
      <View style={styles.lang}>
        <TouchableOpacity style={styles.langButton}>
          <Icon3 name="world-o" size={20} color="gray" />
          <Text style={styles.langText}>العربية </Text>
          <Icon2 name="arrow-down" size={16} color="gray" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} style={styles.imagesScrolling}>
        <View style={styles.imagesContainer}>
          {/* horizontal={true} */}
          <Image source={image1} style={styles.images} />
          <Image source={image2} style={styles.images} />
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <View style={styles.inputlabel}>
          <Icon name="user" size={25} color="#23AA9C" />
          <Text style={styles.label}>
            رقم الهوية الوطنية/هوية مقيم/رقم جوال للزائر{" "}
          </Text>
        </View>
        <TextInput
          onChangeText={(NID) => setNationalID(NID)}
          value={nationalID}
          style={styles.input}
        ></TextInput>

        <View style={styles.inputlabel}>
          <Icon2 name="lock-open" size={25} color="#23AA9C" />
          <Text style={styles.label}>كلمة المرور </Text>
        </View>
        <TextInput
          onChangeText={(pass) => setPassword(pass)}
          value={password}
          style={styles.input}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.helplabel}>
          <Text style={styles.help}>المساعدة </Text>
          <Text style={styles.help}>تواصل معنا </Text>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginlabel}>
          ليس لديك حساب؟ <Text style={styles.signupLabel}>تسجيل جديد </Text>{" "}
        </Text>
        <TouchableOpacity style={styles.loginNext} onPress={() => login()}>
          <Text style={styles.nextText}>التالي </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logosContainer: {
    flex: 1.1,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
  logos: {
    width: 120,
    height: 40,
    marginBottom: 10,
  },

  lang: {
    height: 55,
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  langButton: {
    backgroundColor: "rgb(28,28,30)",
    display: "flex",
    flexDirection: "row-reverse",
    borderRadius: 4,
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },
  langText: {
    color: "white",
    fontSize: 16,
  },

  imagesContainer: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  imagesScrolling: {
    width: "100%",
  },
  images: {
    borderRadius: 25,
    width: 290,
    height: 130,
    marginHorizontal: 10,
  },

  inputContainer: {
    flex: 3,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    direction: "rtl",
  },
  inputlabel: {
    marginLeft: 20,
    margin: 8,
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  input: {
    padding: 5,
    color: "white",
    marginHorizontal: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
  },
  label: {
    textAlign: "justify",
    marginHorizontal: 5,
    color: "white",
    fontSize: 18,
  },
  helplabel: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  help: {
    color: "#23AA9C",
    fontSize: 14,
    fontWeight: "bold",
  },

  loginContainer: {
    flex: 1.6,
    alignItems: "center",
  },
  loginlabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  signupLabel: {
    color: "#23AA9C",
    fontSize: 14,
    fontWeight: "bold",
  },
  loginNext: {
    backgroundColor: "#23AA9C",
    borderWidth: 2,
    borderRadius: 10,
    width: "85%",
    height: 50,
    alignItems: "center",
    marginTop: 7,
    justifyContent: "center",
  },
  nextText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bgImage: {
    zIndex: -1,
    width: "100%",
    height: 246,
  },
});
