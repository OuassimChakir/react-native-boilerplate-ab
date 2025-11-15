import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const GREEN = '#A4C639';

const AndroidLogo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.antenna, styles.antennaLeft]} />
      <View style={[styles.antenna, styles.antennaRight]} />

      <View style={styles.head}>
        <View style={[styles.eye, styles.eyeLeft]} />
        <View style={[styles.eye, styles.eyeRight]} />
      </View>

      <View style={styles.body} />

      <View style={[styles.arm, styles.armLeft]} />
      <View style={[styles.arm, styles.armRight]} />

      <View style={[styles.leg, styles.legLeft]} />
      <View style={[styles.leg, styles.legRight]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* HEAD */
  head: {
    width: 180,
    height: 120,
    backgroundColor: GREEN,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  /* EYES */
  eye: {
    width: 16,
    height: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    position: 'absolute',
    top: 50,
  },
  eyeLeft: {
    left: 45,
  },
  eyeRight: {
    right: 45,
  },

  /* ANTENNAS */
  antenna: {
    width: 8,
    height: 45,
    backgroundColor: GREEN,
    position: 'absolute',
    top: '29%',
    borderRadius: 4,
  },
  antennaLeft: {
    left: '40%',
    transform: [{ rotate: '-25deg' }],
  },
  antennaRight: {
    right: '40%',
    transform: [{ rotate: '25deg' }],
  },

  /* BODY */
  body: {
    marginTop: 5,
    width: 200,
    height: 200,
    backgroundColor: GREEN,
    borderRadius: 25,
  },

  /* ARMS */
  arm: {
    width: 45,
    height: 160,
    backgroundColor: GREEN,
    borderRadius: 25,
    position: 'absolute',
    top: '47%',
  },
  armLeft: {
    left: 50,
  },
  armRight: {
    right: 50,
  },

  /* LEGS */
  leg: {
    width: 55,
    height: 130,
    backgroundColor: GREEN,
    borderRadius: 28,
    position: 'absolute',
    top: '63%',
  },
  legLeft: {
    left: '32%',
  },
  legRight: {
    right: '32%',
  },
});

export default AndroidLogo;
