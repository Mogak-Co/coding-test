import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { loginPost } from "./api";

// useNavigate mocking
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// loginPost API mocking
jest.mock("./api", () => ({
  loginPost: jest.fn(),
}));

describe("LoginForm", () => {
  const queryClient = new QueryClient();
  it("로그인 화면 렌더링", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      const headerElement = screen.getByText("Login");
      expect(headerElement).toBeInTheDocument();
    });
  });

  it("input 입력 안 했을 시 에러 메세지", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </QueryClientProvider>
    );
    fireEvent.click(screen.getByText("로그인"));

    expect(screen.getByText("사용자명을 입력해 주세요.")).toBeInTheDocument();
    expect(screen.getByText("비밀번호를 입력해 주세요.")).toBeInTheDocument();
  });

  it("로그인 성공 후 페이지 이동", async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const mockToken = "fake-Token";

    loginPost.mockResolvedValue({ token: mockToken });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </QueryClientProvider>
    );

    const usernameInput = screen.getByRole("username-label");
    const passwordInput = screen.getByRole("password-label");
    const loginButton = screen.getByText("로그인");

    userEvent.type(usernameInput, "tester");
    userEvent.type(passwordInput, "tester");
    fireEvent.click(loginButton);

    await waitFor(() => expect(loginPost).toHaveBeenCalledTimes(1));

    expect(loginPost).toHaveBeenCalledWith({
      data: {
        username: "tester",
        password: "tester",
      },
    });

    expect(sessionStorage.getItem("userToken")).toBe(mockToken);

    expect(mockNavigate).toHaveBeenCalledWith("/request");
  });
});
