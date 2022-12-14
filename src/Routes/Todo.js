import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todo() {

    // 로컬스토리지에 JWT가 존재하는지 확인하는 함수
    const getLocalStorageJWT = () => {
        let jwt = localStorage.getItem('access_token');
        if (jwt) {
            console.log("true");
            return true;
        }
        return false;
    }

    const navigate = useNavigate();
    const goToTodo = () => {
        navigate('/');
    }

    useEffect(() => {
        if (!getLocalStorageJWT()) {
            goToTodo();
        }
    }, [])

    useEffect(() => {
        getTodoListHandler();
    }, [])

    const setTodoListHandler = () => {
        let copy = [...todoList];
        copy.unshift(newTodoList);
        setTodoList(copy);
    }

    const getTodoListHandler = () => {
        axios.get('https://pre-onboarding-selection-task.shop/todos', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then(function (response) {
            console.log(response);
            setTodoList(response.data);
        }).catch(function (error) {
            console.error(error);
        })
    }

    const deleteTodoList = (id) => {
        const url = `https://pre-onboarding-selection-task.shop/todos/:${id}`;
        axios.delete(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        })
    }

    const [todoList, setTodoList] = useState([]);
    const [newTodoList, setNewTodoList] = useState('');

    return (
        <>
            <div>투두리스트</div>
            {
                todoList.map(function (a, i) {
                    return (
                        <div className="list">
                            <h4 key={a}>{a.todo}</h4>
                            <p>완료여부 : {a.isCompleted ? <span>✅</span> : <span>❌</span>}</p>
                            <span>
                                <button onClick={() => {
                                    deleteTodoList(a.id);
                                    console.log(a.id);
                                }}>삭제</button>
                            </span>
                        </div>
                    )
                })
            }

            <input type='text' onChange={(e) => {
                setNewTodoList(e.target.value);
            }} />
            <button onClick={() => {
                setTodoListHandler();
                axios.post('https://pre-onboarding-selection-task.shop/todos', {
                    todo: newTodoList,
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        "Content-Type": `application/json`,
                    },
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.error(error);
                })
            }}>추가</button>
        </>
    )
}

export default Todo;