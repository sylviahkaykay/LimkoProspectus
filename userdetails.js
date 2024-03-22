import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const userdetails = ({ name, description, imageSource }) => {
  const [Rates, setRates] = useState(0);

  const increaseRates = () => {
    if (Rates < 12) {
      setRates(Rates+ 1);
    }
  }

  return (
    <View style={styles.UserdetailsContainer}>
      <Image
        source={imageSource} 
        style={styles.image11}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <View style={styles.RatesContainer}>
        <Text style={styles.Rates}>Rates: {Rates}</Text>
        <Button title="Rate Here" onPress={increaseRates} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserdetailsContainer: {
    marginBottom: 20,
    alignItems:'baseline',
  },
 
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  image11: {
    width: 170,
    height: 120,
    borderRadius: 0,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  Rates: {
    fontSize: 20,
    marginRight: 10,
  },
  
});

export default userdetails;
