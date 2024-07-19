import LogItem from './LogItem';

const List = ({ children }) => {
  return <div className='list-group'>{children}</div>;
};
const LogList = Object.assign(List, {
  Item: LogItem,
});
export default LogList;
