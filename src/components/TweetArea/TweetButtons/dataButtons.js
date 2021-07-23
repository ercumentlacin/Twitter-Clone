import { BiMessageRounded, BiHeart } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';

export default [
  {
    name: 'comment',
    style: 'message',
    count: 0,
    svg: BiMessageRounded,
  },
  {
    name: 'retweet',
    style: 'retweet',
    count: 0,
    svg: FaRetweet,
  },
  {
    name: 'like',
    style: 'like',
    count: 0,
    svg: BiHeart,
  },
  {
    name: 'share',
    style: 'share',
    count: 0,
    svg: IoShareOutline,
  },
];
