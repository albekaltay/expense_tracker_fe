import { message } from 'antd';

 const showSuccess = (successMessage:string) => {
  const hide = message.success(successMessage, 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default showSuccess;