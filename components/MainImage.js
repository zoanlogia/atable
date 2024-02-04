import { Image, StyleSheet } from "react-native";
export default function ImageLogo({ ImageSrc }) {
  return <Image style={styles.logo} source={ImageSrc} fill />;
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    margin: 20,
    padding: 20,
    resizeMode: "contain",
  },
});
