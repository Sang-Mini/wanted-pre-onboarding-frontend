import { useState } from "react";

function Login() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [disabled, setDisabled] = useState(true);
    const [opacity, setOpacity] = useState(0.5);

    const isValidEmail = userEmail.includes('@');

    const handleInput = event => {
        return event.target.value;
    }

    const emailErrorHandler = () => {
        if (!isValidEmail) {
            alert('이메일 형식이 올바르지 않습니다.');
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
                    <input type="password" className="login-input-pw" placeholder="비밀번호를 입력해주세요"></input>
                </div>
                <div>
                    <button type="submit" className="login-button">제출</button>
                </div>
            </div>
        </>
    )
}

export default Login;