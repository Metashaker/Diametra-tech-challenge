// Packages
import { Tag } from 'antd';

interface StatusProps {
  status: string;
}

const Status = (props: StatusProps) => {
  const { status } = props;
  if (status === 'Alive') {
    return <Tag color="success">{status}</Tag>;
  }
  if (status === 'Dead') {
    return <Tag color="red">{status}</Tag>;
  }
  if (status === 'unknown') {
    return <Tag color="default">{status}</Tag>;
  }
};

export default Status;
