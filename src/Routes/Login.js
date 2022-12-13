import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [disabled, setDisabled] = useState(true);
    const [opacity, setOpacity] = useState(0.5);

    // 이메일에 @ 포함되어있는지?
    const isValidEmail = userEmail.includes('@');

    // 비밀번호 길이가 8자 이상인지?
    const isValidPassword = userPassword.length >= 8;

    const handleInput = (event) => {
        return event.target.value;
    }

    const buttonHandler = () => {
        isValidEmail && isValidPassword ? setOpacity(1) : setOpacity(0.5);
        isValidEmail && isValidPassword ? setDisabled(false) : setDisabled(true);
    }

    // 로그인 성공시 JWT를 로컬스토리지에 저장하는 함수
    const setAccessTokenToLS = (response) => {
        localStorage.setItem('access_token', response);
    }

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
        navigate('/todo');
    }

    useEffect(() => {
        buttonHandler();
    })

    useEffect(() => {
        if (getLocalStorageJWT()) {
            goToTodo();
        }
    }, [])

    return (
        <>
            <div>로그인</div>
            <div className="login-bg">
                <div>
                    <input type="email" className="login-input-email" placeholder="이메일을 입력해주세요" value={userEmail} onChange={(event) => {
                        setUserEmail(handleInput(event));
                        buttonHandler();
                    }}></input>
                </div>
                <div>
                    <input type="password" className="login-input-pw" placeholder="비밀번호를 입력해주세요" value={userPassword} onChange={(event) => {
                        setUserPassword(handleInput(event));
                        buttonHandler();
                    }}></input>
                </div>
                <div>
                    <button type="submit" className="login-button" disabled={disabled} style={{ opacity: opacity }} onClick={() => {
                        axios.post('https://pre-onboarding-selection-task.shop/auth/signin', {
                            email: userEmail,
                            password: userPassword,
                        }, {
                            headers: {
                                "Content-Type": `application/json`,
                            },
                        }).then(function (response) {
                            console.log(response);
                            setAccessTokenToLS(response.data.access_token);
                            getLocalStorageJWT();
                            goToTodo();
                        }).catch(function (error) {
                            console.error(error);
                        })
                    }}>로그인</button>
                </div>
            </div>
        </>
    )
}

export default Login;