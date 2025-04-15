import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function ExToDo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: number, title: string, done: boolean }[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = { id: Date.now(), title: task, done: false };
    setTasks([newTask, ...tasks]);
    setTask('');
  };

  const toggleDone = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View className="flex-1 p-6 bg-slate-50">

      <Text className="text-4xl font-semibold text-center my-8">Minhas Tarefas</Text>

      <View className="flex-row mb-4">
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Nova tarefa..."
          placeholderTextColor="#cacaca"
          className="flex-1 border border-slate-300 rounded-full pl-4"
        />
        <TouchableOpacity
          onPress={addTask}
          className="ml-2 p-4 bg-blue-600 rounded-full"
        >
          <Text className="text-white text-xl font-semibold">Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        className="mt-2"
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between mb-4 bg-slate-200 p-6 rounded-lg">
            <TouchableOpacity onPress={() => toggleDone(item.id)} className="flex-1">
              <Text className={`text-base ${item.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(item.id)} className="ml-4">
              <Text className="text-red-500 font-bold">X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
