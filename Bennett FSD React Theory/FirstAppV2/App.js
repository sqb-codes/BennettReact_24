import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredTask, setEnteredTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function taskChangeHandler(enteredTask) {
    // console.log("Task Entered :",enteredTask);
    setEnteredTask(enteredTask);
  }

  function addTask() {
    // console.log(enteredTask);
    setTaskList((currentTask) => [
      ...currentTask,
      // enteredTask
      {taskText: enteredTask, taskId:Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.textStyle}>Hello this is my first react app...</Text>
      </View> */}

      <View style={styles.header}>
        <Text style={styles.headerText}>My Task App</Text>
      </View>

      <View style={styles.textWrapper}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter your task' 
          onChangeText={taskChangeHandler}/>
      </View>
      
      <View style={styles.buttonWrapper}>
        <Button onPress={addTask} title='Add new task..' />
      </View>

      <View style={styles.taskListView}>
        <View style={styles.taskListWrapper}>
          <Text style={styles.taskListHeading}>My Task List</Text>
        </View>
        
        {/* <View>
          {taskList.map((task) => <Text key={task} style={styles.taskItem}>{task}</Text>)}
        </View> */}

        <FlatList 
          style={styles.flatList}
          data={taskList}
          renderItem={(itemData) => {
            return <View>
              <Text style={styles.taskItem}>{itemData.item.taskText}</Text>
            </View>
          }}
          keyExtractor={(item, index) => {
            return item.taskId;
          }}/>

      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // justifyContent: "center"
  },
  header : {
    marginBottom: 20,
    marginTop: 100,
  },
  headerText: {
    fontSize: 50
  },
  textStyle: {
    fontSize: 20,
    color: 'blue',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 20,
    marginBottom: 20
  },
  textWrapper : {
    // backgroundColor: 'black',
    width: '100%',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 20,
    color: 'blue',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 20,
    width: '80%',
    marginBottom: 20
  },
  taskListView: {
    flex: 5,
    marginTop: 50,
    width: '80%',
  },
  taskListWrapper: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingBottom: 20
  },
  taskListHeading: {
    fontSize: 40,
  },
  taskItem: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: '#000',
    color: "#fff",
    padding: 10
  },
  flatList: {
    backgroundColor: 'red'
  }
});
