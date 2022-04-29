import React, {FC} from "react";
import { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button } from "react-native"

interface IToDo {
    text: string;
    completed: boolean;
    // editRow: false,
   
  }
  

const Tasks : FC = ({}) => {

        const [value, setValue] = useState<string>("");
        const [toDoList, setToDos] = useState<IToDo[]>([]);
        const [error, showError] = useState<Boolean>(false);
      
        const handleSubmit = (): void => {
          if (value.trim())
            setToDos([...toDoList, { text: value, completed: false, }]);
          else showError(true);
          setValue("");
        };
      
        const removeItem = (index: number): void => {
          const newToDoList = [...toDoList];
          newToDoList.splice(index, 1);
          setToDos(newToDoList);
        };
        // const editRow = (index: number): void => {
        //     const updateToDoList = [...toDoList];
        //     updateToDoList[index].editRow = !updateToDoList[index].editRow;
        //     setToDos(updateToDoList);
        //   };
        const toggleComplete = (index: number): void => {
          const newToDoList = [...toDoList];
          newToDoList[index].completed = !newToDoList[index].completed;
          setToDos(newToDoList);
        };
      
        return (
          <View style={styles.container}>
            {/* <Text style={styles.title}>Task List</Text> */}
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter your todo task..."
                value={value}
                onChangeText={e => {
                  setValue(e);
                  showError(false);
                }}
                style={styles.inputBox}
              />
              <Button title="Add Task" onPress={handleSubmit} color={'white'} />
            </View>
            {error && (
              <Text style={styles.error}>Error: Input field is empty...</Text>
            )}
            <Text style={styles.subtitle}>Your Tasks :</Text>
            {toDoList.length === 0 && <Text>No to do task available</Text>}
            {toDoList.map((toDo: IToDo, index: number) => (
              <View style={styles.listItem} key={`${index}_${toDo.text}`}>
                <Text
                  style={[
                    styles.task,
                    { textDecorationLine: toDo.completed ? "line-through" : "none" }
                  ]}
                >
                  {toDo.text}
                </Text>
                <Button color={'#adff2f'}
                  title={toDo.completed ? "Completed" : "Complete" }
                  onPress={() => toggleComplete(index)}
                />
            {/* <Button
            onPress={() => {
                editRow(index);
              }}
              title="Edit"
             /> */}
             <Button
                  title="X"
                  onPress={() => {
                    removeItem(index);
                  }}
                  color="#ff0000"
                />
              </View>
            ))}
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          padding: 35,
          alignItems: "center",
          // backgroundColor: "#ffb6c1",
          backgroundColor: '#663399',
          height: "100%"
        },
        inputWrapper: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20
        },
        inputBox: {
          width: 200,
          borderColor: "#ffffff",
          borderRadius: 8,
          borderWidth: 2,
          paddingLeft: 8,
          backgroundColor: "#ffffff",
        },
        title: {
          fontSize: 20,
          marginBottom: 40,
          fontWeight: "bold",
          textDecorationLine: "none",
          color: "#0000ff"
        },
        subtitle: {
          fontSize: 20,
          marginBottom: 20,
          color: "white"
        },
        listItem: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: 10,
        },
        addButton: {
          alignItems: "flex-end"
        },
        task: {
          width: 200,
          color: 'white',
        },
        error: {
          color: "red"
        }
      })

export default Tasks;