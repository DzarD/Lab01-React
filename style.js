import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 15,
    backgroundColor: 'grey'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white'
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  taskStatus: {
    fontSize: 14,
    marginRight: 10,
  },
deleteButton: {
  padding: 5,
  marginLeft: 10, // additional margin if needed
  backgroundColor: 'red',
  borderRadius: 3
},
  deleteText: {
    color: '#ff0000',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555'
  }
});

export default styles;
