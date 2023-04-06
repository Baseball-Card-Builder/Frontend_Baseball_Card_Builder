import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { Card } from "react-native-elements";

const BaseballCard = () => {
  return (
    <ScrollView>
        <Card style={styles.card}>
            <Image
            style={styles.image}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/mlb-card-collection.appspot.com/o/AJudge.jpeg?alt=media&token=150a10b7-66e4-40d8-a9d4-107c0c1f2190",
              }}
            />
            <Card.Divider />
            <Text>Aaron Judge</Text>
            <Text>New York Yankees</Text>
            <Text>HR: 62</Text>
            <Text>RBI: 133</Text>
        </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default BaseballCard;
