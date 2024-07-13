import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

type MedKitProps = {
  array: MedKit[];
  onPress: (id: string, image: any, title: string) => void;
};

type MedKit = {
  id: string;
  image: any;
  title: string;
};

const MedKitList = ({array, onPress}: MedKitProps): React.JSX.Element => {
  const RenderItem = ({id, image, title}: MedKit) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() => onPress(id, image, title)}>
      <Image style={styles.icon} source={image} />
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={({item}) => <RenderItem {...item} />}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  boxItem: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 18,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    marginTop: 10,
  },
  icon: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
  txt: {
    color: 'black',
    fontSize: 10,
    flex: 1,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});

export default MedKitList;
