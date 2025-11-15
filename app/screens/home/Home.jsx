/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackArrow from '../../../assets/svg/BackArrow';
import { DARK_GREY, FONT_BLACK, FONT_WHITE } from '../../styles/colors';
import { SCALE_12, SCALE_16, SCALE_20, SCALE_8 } from '../../styles/spacing';
import { FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_24 } from '../../styles/typography';

const MAROON_COLOR = '#883141';

const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar backgroundColor={MAROON_COLOR} barStyle="light-content" />
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={style.headerContainer}>
          <Pressable style={style.backButton}>
            <BackArrow color={FONT_BLACK} width={24} height={24} />
          </Pressable>
          <View style={style.headerTextContainer}>
            <Text style={style.header_title}>Prestations sociales</Text>
            <Text style={style.header_sub_title}>Aide au Logement (IMTILAK/FOGALEF)</Text>
          </View>
        </View>

        <View style={style.imageWrapper}>
          <Image
            source={require('./../../../assets/images/media.png')}
            style={style.mainImage}
            resizeMode="cover"
          />
        </View>

        <View style={style.contentPadding}>
          <Text style={style.sectionTitle}>Aide au Logement</Text>
          <Text style={style.bodyText}>
            Dans le cadre du nouveau programme IMTILAK, l'adhérent a désormais le choix entre trois
            mécanismes de subvention pour acquérir son logement avec un financement classique.
          </Text>
        </View>

        <View style={style.separator} />

        <View style={style.contentPadding}>
          <Text style={style.simulatorTitle}>SIMULATEUR IMTILAK</Text>

          <Pressable style={[style.buttonStyle, { marginTop: SCALE_16 }]}>
            <Text style={style.buttonText}>CALCUL DE LA MENSUALITÉ</Text>
          </Pressable>

          <Pressable style={style.buttonStyle}>
            <Text style={style.buttonText}>CALCUL DU MONTANT</Text>
          </Pressable>

          <Pressable style={style.buttonStyle}>
            <Text style={style.buttonText}>CALCUL DU MONTANT MAXIMAL</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Home.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: FONT_WHITE,
  },
  scrollContainer: {
    paddingBottom: SCALE_20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCALE_12,
    paddingVertical: SCALE_12,
  },
  backButton: {
    paddingRight: SCALE_12,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header_title: {
    color: FONT_BLACK,
    fontSize: FONT_SIZE_16,
  },
  header_sub_title: {
    color: FONT_BLACK,
    fontSize: FONT_SIZE_14,
    fontWeight: 'bold',
  },
  imageWrapper: {
    width: width,
    height: width * 0.55,
    backgroundColor: '#ccc',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  contentPadding: {
    paddingHorizontal: SCALE_20,
    paddingVertical: SCALE_20,
  },
  sectionTitle: {
    color: FONT_BLACK,
    fontSize: FONT_SIZE_24,
    fontWeight: 'bold',
    marginBottom: SCALE_8,
  },
  bodyText: {
    color: DARK_GREY,
    fontSize: FONT_SIZE_16,
    lineHeight: FONT_SIZE_24,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: SCALE_20,
  },
  simulatorTitle: {
    fontSize: FONT_SIZE_18,
    color: DARK_GREY,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SCALE_12,
  },
  buttonStyle: {
    backgroundColor: MAROON_COLOR,
    paddingVertical: SCALE_16,
    paddingHorizontal: SCALE_12,
    borderRadius: SCALE_8,
    marginVertical: SCALE_8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: FONT_WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FONT_SIZE_16,
  },
});

export default Home;
