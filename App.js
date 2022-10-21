import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import ResultCard from "./ResultCard";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOpen, setIsOpenCamera] = useState(false);
  const [results, setResults] = useState([]);
  const [scanned, setScanned] = useState(false);
  async function openScanner() {
    if (hasPermission === null) {
      //If there is no permission when the camera button is tapped, the user is asked first.
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setIsOpenCamera(true);
    } else {
      //If the camera is allowed, direct guidance is made.
      setIsOpenCamera(true);
    }
  }
  function getResult({ type, data }) {
    const checkDublicate = results.find((result) => result.data === data); // we check if the barcode is already scanned.
    if (!checkDublicate) {
      //If the barcode is scanned successfully, its values are thrown into the state as an object and then updated on the screen.
      setScanned(true);
      const newData = {
        id: results.length + 1,
        type: type,
        data: data,
      };
      setResults((oldData) => [...oldData, newData]);
      setIsOpenCamera(false);
      setScanned(false);
    }
  }
  function closeCamera() {
    setIsOpenCamera(false);
    setScanned(false);
  }
  function renderScannerResult({ item }) {
    return <ResultCard item={item}></ResultCard>;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false}></StatusBar>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BarcodeScanner</Text>
        {isCameraOpen === false && (
          <Ionicons
            name="camera"
            size={30}
            color="white"
            style={styles.icon}
            onPress={openScanner}
          ></Ionicons>
        )}
      </View>
      {isCameraOpen && (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : getResult}
            style={StyleSheet.absoluteFillObject}
          />
          <Ionicons
            color="white"
            name="close-circle"
            size={35}
            style={styles.closeCameraIcon}
            onPress={closeCamera}
          ></Ionicons>
        </>
      )}
      {isCameraOpen === false && (
        <FlatList data={results} renderItem={renderScannerResult}></FlatList>
      )}
    </View>
  );
}
