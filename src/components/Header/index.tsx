import React from 'react';
import {
  useLocalStorageState,
  useUpdateEffect,
  useEventListener,
} from 'ahooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames'
import { modeMap, modeMapArr } from '@/utils/modeMap';
import {
  HomeOutlined,
  BgColorsOutlined,
  CheckOutlined
} from '@ant-design/icons'
import { setHeaderShow, setMode } from '@/redux/actions';
import { storeState } from '@/redux/interface';
import { useLinkList } from './config';
import s from './index.module.scss';

interface Props {
  headerShow?: boolean;
  setHeaderShow?: Function;
  mode?: number;
  setMode?: Function;
}

const bodyStyle = window.document.getElementsByTagName('body')[0].style;

const Header: React.FC<Props> = ({
  headerShow,
  setHeaderShow,
  mode,
  setMode,
}) => {
  const navigate = useNavigate();

  const { linkArr } = useLinkList();
  const [, setLocalMode] = useLocalStorageState('localMode');
  const modeOptions = ['rgb(171, 194, 208)', 'rgb(110, 180, 214)', 'rgb(19, 38, 36)'];

  useUpdateEffect(() => {
    setLocalMode(mode);
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type as keyof typeof modeMap][mode!]);
    }
  }, [mode]);

  useEventListener(
    'mousewheel',
    (event) => {
      event = event || window.event;
      setHeaderShow!(event.wheelDeltaY > 0);
    },
    { target: document.body }
  );

  return (
    <header className={s.header}>
      {/* <header className={classNames(s.header, { [s.hiddenHeader]: !headerShow})}> */}
      {/* header 内容 */}
      <div className={s.headerContent}>
        {/* 主页 */}
        <div className={s.homeBtn} onClick={() => navigate('/')}>
          <HomeOutlined />
        </div>

        {/* 主题模式切换 */}
        <div className={s.modeBtn}>
          <BgColorsOutlined />
          <div className={s.modeOptions}>
            {modeOptions.map((backgroundColor, index) => (
              <div
                key={index}
                style={{ backgroundColor }}
                className={classNames(s.modeItem, s[`modeItem${index}`])}
                onClick={() => setMode?.(index)}
              >
                <CheckOutlined style={{ display: mode === index ? 'block' : 'none' }} />
              </div>
            ))}
          </div>
        </div>

        {/* 配置中的链接 */}
        {linkArr.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? s.headerActive : s.headerBtn)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default connect(
  (state: storeState) => ({
    headerShow: state.headerShow,
    mode: state.mode,
  }),
  { setHeaderShow, setMode }
)(Header);
