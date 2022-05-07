import { useSafeState } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';

import s from './index.module.scss';

const LoginBox: React.FC = () => {
  const [nameOrEmail, setNameOrEmail] = useSafeState('');
  const [password, setPassword] = useSafeState('');

  return (
    <div className={s.loginBox}>
      <div className={s.loginWrapper}>
        <h2>登录</h2>
        <input
        type="text"
        placeholder="用户名或邮箱"
        value={nameOrEmail}
        onChange={(e) => setNameOrEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <div className={s.loginBtn} onClick={() => console.log("登录按钮")}>登录</div>
    </div>
  );
};

export default connect()(LoginBox);
