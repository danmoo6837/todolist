import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');

  const addTodo = () => {
    setTodos([...todos, { key: Math.random().toString(), text: text, priority: priority, deadline: deadline }]);
    setText('');
    setPriority('');
    setDeadline('');
  };

  const updatePriority = (id, newPriority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.key === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  const updateDeadline = (id, newDeadline) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.key === id ? { ...todo, deadline: newDeadline } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <View style={styles.extraInputContainer}>
          <TextInput
            style={styles.extraInput}
            placeholder="Priority"
            value={priority}
            onChangeText={(value) => setPriority(value)}
          />
          <TextInput
            style={styles.extraInput}
            placeholder="Deadline"
            value={deadline}
            onChangeText={(value) => setDeadline(value)}
          />
        </View>
        <Button title="Add" onPress={addTodo} />
      </View>
      <ScrollView style={styles.list}>
        {todos.map((item) => (
          <View style={styles.item} key={item.key}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.itemText}>Priority: {item.priority}</Text>
              <Text style={styles.itemText}>Deadline: {item.deadline}</Text>
            </View>
            <View style={styles.deleteButton}>
              <Button
                title="Complete"
                onPress={() => {
                  const newTodos = todos.filter((todo) => todo.key !== item.key);
                  setTodos(newTodos);
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  extraInputContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  extraInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  list: {
    flex: 1,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    marginBottom: 4,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
});

export default TodoList;