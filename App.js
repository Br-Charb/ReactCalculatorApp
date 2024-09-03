import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-web';
function addTo(x, num){
  if (x.action == ''){
    x.value1 = Number(String(x.value1) + num);
  }else{
    x.value2 = Number(String(x.value2) + num);
  }
  console.log(x)
}
function numAction(x, action){
  if (action == "±"){
    if (x.action == ''){  
      x.value1 *= -1;
    }else{
      x.value2 *= -1;
    }
  } else if(action == "-"){
    x.value1 -= Number(x.value2);
    x.action = ""; x.value2 = "";
  } else if(action == "+"){
    x.value1 += Number(x.value2);
    x.action = ""; x.value2 = "";
  } else if(action == "*"){
    x.value1 *= x.value2;
    x.action = ""; x.value2;
  }else{
    x.value1 /= x.value2;
    x.action = ""; x.value2;
  }
  // console.log(x.value1);
  console.log(x)
}
let x = {value1 : 0, value2 : 0, action : ''};
export default function App() {
  console.log("App Start")
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "7")}>7</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "8")}>8</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "9")}>9</Text>
        <Text style={styles.textSpacing} onPress={() => x.action = "*"}>x</Text>
        <StatusBar style="auto" />
        <StatusBar style="auto" />
      </SafeAreaView>
      <SafeAreaView style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "4")}>4</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "5")}>5</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "6")}>6</Text>
        <Text style={styles.textSpacing} onPress={() => x.action = "-"}>-</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
      <SafeAreaView style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "1")}>1</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "2")}>2</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "3")}>3</Text>
        <Text style={styles.textSpacing} onPress={() => x.action = "+"}>+</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
      <SafeAreaView style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => numAction(x, "±")}>±</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "0")}>0</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, ".")}>.</Text>
        <Text style={styles.textSpacing} onPress={() => numAction(x, x.action)}>=</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white ',
    justifyContent: 'center',
  },
  viewRows: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white ',
    justifyContent: 'center',
    },
  textSpacing: {
    flex: 1,
    fontSize: 60,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 0,
    backgroundColor: 'grey',
    textAlign: 'center',
  }
});
