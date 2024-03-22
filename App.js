import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import UserDetails from './userdetails'; // Corrected import statement

const studentData = [
  { name: 'Faculty of information & communication technology', description: ' FOR LGSCE: You are required to have a minimum of five C grades that include Science and Mathematics.       Information Technology is a multi-platform, object-oriented, and network-centric languages that can be used as a platform in itself. It is the fast, secure, reliable programming languages for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.', imageSource: require('./a.png') },
  { name: 'Faculty of design & innovation', description: '  FOR LGSCE: You are required to have a minimum of four C grades that include English.                                          Design is a discipline of study and practice focused on the interaction between a person — a ‘user’— and the man-made environment, taking into account aesthetic, functional, contextual, cultural and societal considerations.', imageSource: require('./b.png') },
  { name: 'Faculty of tourism & hotel management', description: ' FOR LGSCE: You are required to have a minimum of three C grades and two passes.                                       Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services. As such, tourism is a product of modern social arrangements', imageSource: require('./c.png') },
  { name: 'Faculty of architecture & environment', description: 'FOR LGSCE: You are required to have a minimum of 2 C grades and three or four passes.                           Architecture is the discipline of designing and building a range of structures that are used to meet both functional and aesthetic requirements. Since every culture has a unique relationship with the natural world and with the other cultures around them, the structures it creates convey a great deal about its traditions, history, environment, artistic sensibilities, and many other facets of everyday life', imageSource: require('./d.png') },
];

const Header = () => {
  return (
    <Text style={styles.header}>LIMKOKWING UNIVERSITY PROSPECTUS 2024/2025</Text>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      {studentData.map((data, index) => (
        <UserDetails 
          key={index} 
          name={data.name} 
          description={data.description} 
          imageSource={data.imageSource} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'grey',
  },
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20, 

  },
});

export default App;
