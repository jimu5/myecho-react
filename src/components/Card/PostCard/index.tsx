import Card from '../Default';
import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons';

import s from './index.module.scss';
import Loading from './Loading';

interface Props {
  title?: string;
  content?: string;
  date?: string;
  tags?: string[];
  view_count?: number,
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PostCard: React.FC<Props> = ({ title, content, date, tags, view_count, loading, onClick }) => {
  return (
    <Card className={s.card} isStatic={true} onClick={onClick}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={s.title}>{title}</div>
          <p className={s?.content}>
            {content?.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </p>
          <div className={s.info}>
            <span className={s.date}>
              <ClockCircleOutlined style={{paddingRight: "5px"}} />
              {dayjs(date!).format('YYYY-MM-DD')}
            </span>
            <div className={s.view_count} style={{visibility: view_count? "unset":"hidden"}}>
              <EyeOutlined style={{position: "relative", bottom: "0", marginRight: "3px"}}/>
              <span>
                {view_count}
              </span>
            </div>
            <div className={s.tags}>
              {tags?.map(tag => (
                <span className={s.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default PostCard;
