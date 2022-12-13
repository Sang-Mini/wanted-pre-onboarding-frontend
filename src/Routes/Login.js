function Login() {
    return (
        <>
            <div>로그인</div>
            <div className="login-bg">
                <div>
                    <input type="email" className="login-input-email" placeholder="이메일을 입력해주세요"></input>
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