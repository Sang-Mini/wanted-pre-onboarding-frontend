import axios from "axios";
import { useEffect, useState } from "react";

function SignUp() {

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

    const buttonHandler = () => {
        isValidEmail && isValidPassword ? setOpacity(1) : setOpacity(0.5);
        isValidEmail && isValidPassword ? setDisabled(false) : setDisabled(true);
    }

    useEffect(() => {
        buttonHandler();
    })

    return (
        <>
            <div>회원가입</div>
            <div className="signup-bg">
                <div>
                    <input type="email" className="signup-input-email" placeholder="이메일을 입력해주세요" value={userEmail} onChange={(event) => {
                        setUserEmail(handleInput(event));
                        buttonHandler();
                    }}></input>
                    <button onClick={() => {
                        emailErrorHandler();
                    }}>인증</button>
                </div>
                <div>
                    <input type="password" className="signup-input-pw" placeholder="비밀번호를 입력해주세요" value={userPassword} onChange={(event) => {
                        setUserPassword(handleInput(event));
                        buttonHandler();
                    }}></input>
                    <button onClick={() => {
                        pwErrorHandler();
                    }}>인증</button>
                </div>
                <div>
                    <button type="submit" className="signup-button" disabled={disabled} style={{ opacity: opacity }} onClick={() => {
                        axios.post('https://pre-onboarding-selection-task.shop/auth/signup', {
                            email: userEmail,
                            password: userPassword,
                        }, {
                            headers: {
                                "Content-Type": `application/json`,
                            },
                        }).then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                            console.error(error);
                        })
                    }}>회원가입</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;