import { Form, Input, Button,Result } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../utils/api';

  

const Login = () => {


    const location  = useLocation();
   


        const navigate = useNavigate();
    
        const onFinish = async (values: any) => {


            try{

                console.log('Success:', values);
                await api.post("/users/login",values);
                navigate("/");

            }   
            catch(error) {
                console.log({error});
            }
   
        };
      
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
    

  return( <Form
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
   {(location as any).state?.newSignUp  &&
       <Result
       status="success"
       title="You successfully sign up!"
       subTitle="Please log,n using your creadentials."
       
     />

 
   }

<h2 style={{ textAlign:'center'}}>  Please Login</h2>
  <Form.Item
    label="Username"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password />
  </Form.Item>



  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
)};
  
export default Login;
