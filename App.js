import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Switch
} from 'react-native';
import styles from './style'; 

export default function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(1); // counter

  // add task 
  const addTask = () => {
    if (taskTitle === '') {
      return; // unavailable if title is empty
    }
  
    const newTask = {
      id: taskCounter.toString(),
      title: taskTitle,
      status: 'due',
    };
  
    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskCounter(taskCounter + 1);
  };

  // toggle task status between 'due' and 'done'
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        let newStatus;
        if (task.status === 'due') {
          newStatus = 'done';
        } else {
          newStatus = 'due';
        }
        return { ...task, status: newStatus };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  // delete task
  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  // render a single task item
  const renderTask = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskStatus}>{item.status}</Text>
        <Switch
          value={item.status === 'done'} // true if status is 'done'
          onValueChange={() => toggleTaskStatus(item.id)}
        />
        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="enter task title"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Button title="Add Task" onPress={addTask} disabled={!taskTitle.trim()} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderTask}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks added yet.</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}
