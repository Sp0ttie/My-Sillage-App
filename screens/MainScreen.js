"use client"

import React from "react"
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { Camera } from "expo-camera"

export default function MainScreen() {
  const [hasPermission, setHasPermission] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera}>
          <View style={styles.scanFrame}>
            <Text style={styles.scanText}>Position your camera to scan a fragrance bottle</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.scanButton}>
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>

      <View style={styles.recentContainer}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Recently Scanned</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Feather name="clock" size={16} color="#6b7280" />
            <Text style={styles.historyText}>History</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentScroll}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.fragranceItem}>
              <View style={styles.fragranceImageContainer}>
                <Image
                  source={{ uri: "https://via.placeholder.com/40x80" }}
                  style={styles.fragranceImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.fragranceName} numberOfLines={1}>
                Maison Margiela
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3efe9",
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 256,
    height: 256,
    borderWidth: 2,
    borderColor: "#a78bfa",
    borderStyle: "dashed",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(243, 239, 233, 0.3)",
  },
  scanText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6b7280",
    paddingHorizontal: 24,
    backgroundColor: "rgba(243, 239, 233, 0.7)",
    borderRadius: 4,
    padding: 8,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 24,
    alignItems: "center",
    width: "100%",
  },
  scanButton: {
    backgroundColor: "#a78bfa",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recentContainer: {
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e8e1d9",
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  historyButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  historyText: {
    marginLeft: 4,
    color: "#6b7280",
    fontSize: 14,
  },
  recentScroll: {
    paddingBottom: 8,
  },
  fragranceItem: {
    width: 80,
    marginRight: 12,
  },
  fragranceImageContainer: {
    height: 96,
    backgroundColor: "#f3efe9",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  fragranceImage: {
    height: 80,
    width: 40,
  },
  fragranceName: {
    fontSize: 12,
    textAlign: "center",
  },
})

