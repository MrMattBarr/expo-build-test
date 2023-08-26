import { StyleSheet } from 'react-native';
import {
  ref as dbRef,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const [demo, setDemo] = useState<any>()
  useEffect(() => {

    const db = getDatabase();
    const thingRef = ref(db, `demos/-NK_H44LjmQPfyLu-KA4`);
    console.log({ thingRef, db })
    onValue(thingRef, async (snapshot) => {
      const thing = snapshot.val();
      setDemo(thing)
    })
  }, [])

  useEffect(() => { console.log({ demo }) }, [demo])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{demo?.title ?? "No Demo"}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
