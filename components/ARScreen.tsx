import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { Search, Clock } from "./icons"

export default function ARScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <View style={styles.scanFrame}>
          <Text style={styles.scanText}>Position your camera to scan a fragrance bottle</Text>
        </View>
        <TouchableOpacity style={styles.scanButton}>
          <Search width={24} height={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.recentContainer}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Recently Scanned</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Clock width={16} height={16} color="#6b7280" />
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#f3efe9",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
  },
  scanText: {
    textAlign: "center",
    fontFamily: "System",
    fontSize: 14,
    color: "#6b7280",
    paddingHorizontal: 24,
  },
  scanButton: {
    position: "absolute",
    bottom: 24,
    backgroundColor: "#a78bfa",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
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

