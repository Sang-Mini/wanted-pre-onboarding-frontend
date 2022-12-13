import { useEffect } from "react";
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
        navigate('/login');
    }

    useEffect(() => {
        if (!getLocalStorageJWT()) {
            goToTodo();
        }
    }, [])

    return (
        <>
            <div>투두리스트</div>
        </>
    )
}

export default Todo;