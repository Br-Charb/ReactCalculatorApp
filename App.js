import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-web';
import {useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



var x = {value1 : '', value2 : '', action : ''};
export default function App() {
  function addTo(x, num){
    if (x.action == ''){
      if(x.value1 == '0' && num != "."){
        x.value1 = String(num);
      } else{
        x.value1 = String(x.value1) + num;
      }
    }else{
      x.value2 = String(x.value2) + num;
    }
    changeText();
    console.log(x);
  }
  function applyAction(x, action){
  if (action == "c"){
    x.value1 = '0';
    x.value2 = '';
    x.action = '';
  } else{
    x.action = action;
  }
  console.log(x)
  changeText();
  
  }
  function numAction(x, action){
    x.value1 = Number(x.value1);
    x.value2 = Number(x.value2);
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
    } else if(action == "x"){
      x.value1 *= x.value2;
      x.action = ""; x.value2 = "";
    } else if (action == "^"){
      x.value1 = x.value1 ** x.value2;
      x.action = ""; x.value2 = "";
    } else{
      x.value1 /= x.value2;
      x.action = ""; x.value2 = "";
    }
    changeText();
    console.log(x)
  }
  const [r, setText] = useState('0');
  const changeText = () => {
    setText(String(x.value1) + String(x.action) + String(x.value2))
  }
  console.log("App Start")
  return (
    <SafeAreaView>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing}>Benjamin's Calc</Text>
      </View>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing}>{r}</Text>
      </View>
      <View style={styles.viewRows}>
      <Text style={styles.textSpacing} onPress={() => applyAction(x, 'c')}>c</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "")}>⌫</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "^")}>^x</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "/")}>/</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "7")}>7</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "8")}>8</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "9")}>9</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "x")}>x</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "4")}>4</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "5")}>5</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "6")}>6</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "-")}>-</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "1")}>1</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "2")}>2</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "3")}>3</Text>
        <Text style={styles.textSpacing} onPress={() => applyAction(x, "+")}>+</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.viewRows}>
        <Text style={styles.textSpacing} onPress={() => numAction(x, "±")}>±</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, "0")}>0</Text>
        <Text style={styles.textSpacing} onPress={() => addTo(x, ".")}>.</Text>
        <Text style={styles.textSpacing} onPress={() => numAction(x, x.action)}>=</Text>
        <StatusBar style="auto" />
      </View>
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
    paddingBottom: 100,
  },
  viewRows: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white ',
    justifyContent: 'center',
  },
  textSpacing: {
    flex: 1,
    fontSize: scale(60),
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 0,
    backgroundColor: 'grey',
    textAlign: 'center',
  }
});
