import { AuthRegister, AuthLogin } from 'src/widgets/Auth';


export const Auth = ({ mode = "login" }) => {
  return mode === "register" ? <AuthRegister /> : <AuthLogin />;
};
