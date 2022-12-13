import { useState } from "react";

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

    const emailErrorHandler = () => {
        if (!isValidEmail) {
            alert('이메일 형식이 올바르지 않습니다.');
        }
    }

    const pwErrorHandler = () => {
        if (!isValidPassword) {
            alert('비밀번호 형식이 올바르지 않습니다. 8자 이상 입력해주세요.');
        }
    }

    return (
        <>
            <div>로그인</div>
            <div className="login-bg">
                <div>
                    <input type="email" className="login-input-email" placeholder="이메일을 입력해주세요" value={userEmail} onChange={(event) => {
                        setUserEmail(handleInput(event));
                    }}></input>
                    <button onClick={() => {
                        emailErrorHandler();
                    }}>인증</button>
                </div>
                <div>
                    <input type="password" className="login-input-pw" placeholder="비밀번호를 입력해주세요" value={userPassword} onChange={(event) => {
                        setUserPassword(handleInput(event));
                    }}></input>
                    <button onClick={() => {
                        pwErrorHandler();
                    }}>인증</button>
                </div>
                <div>
                    <button type="submit" className="login-button">제출</button>
                </div>
            </div>
        </>
    )
}

export default Login;