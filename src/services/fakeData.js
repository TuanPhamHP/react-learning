const todoStatuses = [
	{
		id: 1,
		name: 'Chưa làm',
	},
	{
		id: 2,
		name: 'Hoàn thành',
	},
	{
		id: 3,
		name: 'Hủy',
	},
];
const todoPrio = [
	{
		id: 1,
		name: 'Bình thường',
	},
	{
		id: 2,
		name: 'Cần Gấp',
	},
	{
		id: 3,
		name: 'Ưu tiên làm đầu tiên',
	},
];
const todoList = [
	{
		id: 1,
		description: 'Hôm nay cần học lại react-router và tìm hiểu react-redux',
		created_at: '2023/07/25 20:30:00',
		estimate_finish: null,
		status_id: 1,
		prio_id: 1,
	},
	{
		id: 2,
		description: 'Cười to',
		created_at: '2023/07/25 21:30:00',
		estimate_finish: null,
		status_id: 2,
		prio_id: 1,
	},
]; // a

export const getListTodo = () => {
	return todoList; // a
};

export const setTodoDone = todoId => {
	const matchIdx = todoList.findIndex(item => {
		return item.id === todoId;
	});
	// matchIdx === -1 => không tìm thấy
	// matchIdx !== -1 =>  tìm thấy
	if (matchIdx === -1) {
		return false;
	}

	const matchTodo = todoList[matchIdx];
	matchTodo.status_id = 2;

	todoList.splice(matchIdx, 1, matchTodo);
	return todoList; // a
};
export const removeTodo = todoId => {
	const matchIdx = todoList.findIndex(item => {
		return item.id === todoId;
	});
	// matchIdx === -1 => không tìm thấy
	// matchIdx !== -1 =>  tìm thấy
	if (matchIdx === -1) {
		return false;
	}

	const matchTodo = todoList[matchIdx];
	matchTodo.status_id = 3;

	todoList.splice(matchIdx, 1, matchTodo);

	return todoList; // a
};
