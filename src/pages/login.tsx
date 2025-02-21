import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { PageContainer } from "../components/PageContainer";

export const Login = () => {
  return (
    <PageContainer>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <LoginForm />
    </PageContainer>
  );
};
