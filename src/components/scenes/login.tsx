import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { actionTypes } from "../../redux/actionType";
import { IloginRequest } from "../../interfaces/requests/IloginRequest";
import { IauthSlice } from "../../redux/reducers/authSlice/IauthSlice";
import { useEffect } from "react";

interface IProps {
  auth: IauthSlice;
  login: (value: IloginRequest) => void;
}
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
function Login(props:IProps) {

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (props?.login) props.login(values as IloginRequest);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>{props?.auth?.loginResult?.token}</div>
      <Form
        className="sm:w-screen"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            loading={props?.auth?.loggingIn}
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            LogIn
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.authSlice,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (value: IloginRequest) =>
      dispatch({
        type: actionTypes.login,
        payload: {
          email: value.email,
          password: value.password,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
