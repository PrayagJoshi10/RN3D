import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber/native";
import Model from "./src/components/Model";
import useControls from "r3f-native-orbitcontrols";
import Trigger from "./src/components/Trigger";
import Loader from "./src/components/Loader";

export default function App() {
  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[0, 0, 1]} args={["white", 5]} />
          <directionalLight position={[0, 0, -1]} args={["white", 5]} />
          <directionalLight position={[0, 1, 0]} args={["white", 5]} />
          <directionalLight position={[0, -1, 0]} args={["white", 5]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Aston Martin</Text>
        <Text style={styles.priceLabel}>$50,000</Text>
        <Text style={styles.description}>
          The DB11 is powered by the brand new 5.2-litre turbocharged V12 petrol
          engine and is the first Aston to take the force induction route to
          performance. The 600bhp and 700Nm torque engine is mated to an
          eight-speed ZF torque converter automatic gearbox powers the right set
          of wheels. The DB11 zooms past 100kmph in 3.9 seconds on its way to a
          top speed of 323kmph.
        </Text>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonLabel}>Buy Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1.5,
    backgroundColor: "white",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "green",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  buyButton: {
    width: "90%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 16,
    padding: 10,
  },
  buyButtonLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
  },
});
