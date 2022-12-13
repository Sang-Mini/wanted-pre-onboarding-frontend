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

    const handleInput = event => {
        return event.target.value;
    }

    const buttonHandler = () => {
        isValidEmail && isValidPassword ? setOpacity(1) : setOpacity(0.5);
        isValidEmail && isValidPassword ? setDisabled(false) : setDisabled(true);
    }

    // const navigate = useNavigate();
    // const goToLogin = () => {
    //     navigate('/login');
    // }

    useEffect(() => {
        buttonHandler();
    })

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
                        axios.post('https://pre-onboarding-selection-task.shop/auth/signup', {
                            email: userEmail,
                            password: userPassword,
                        }, {
                            headers: {
                                "Content-Type": `application/json`,
                            },
                        }).then(function (response) {
                            console.log(response);
                            // goToLogin();
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