import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    flex: 1,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  icon: {
    position: "absolute",
    right: 5,
  },
  cardContainer: {
    borderRadius: 50,
    backgroundColor: "#313030",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  resultText: {
    color: "white",
    fontSize: 16,
  },
  closeCameraIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
