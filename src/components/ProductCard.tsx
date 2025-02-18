import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  const { colors } = useTheme();
  return (
    <View style={[styles.wrapper, { backgroundColor: colors.card }]}>
      <TouchableOpacity style={styles.fav}>
        <Image source={require("../assets/icons/fav-icon.png")} />
      </TouchableOpacity>
      <View style={[styles.cardContainer]}>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={styles.imgStyle}
        />
        <View style={styles.details}>
          <Text
            numberOfLines={1}
            style={[styles.productName, { color: colors.text }]}
          >
            {name}
          </Text>
          <Text style={[styles.productPrice, { color: colors.text }]}>
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 151,
    height: 231,
    position: "relative",
    // padding: 5,
    borderRadius: 10,
  },
  cardContainer: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgStyle: {
    width: "100%",
    height: 190,
    // backgroundColor: "#fff",
  },
  productName: {
    // color: "#272727",
    height: 15,
  },
  productPrice: {
    fontSize: 14,
    // color: "#272727",
    fontWeight: "700",
    height: 14,
  },
  fav: {
    position: "absolute",
    top: 5,
    right: 10,
    height: 24,
    width: 24,
    zIndex: 10,
  },
  details: {
    paddingHorizontal: 10,
  },
});
