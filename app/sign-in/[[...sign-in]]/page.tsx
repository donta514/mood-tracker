// import { SignIn } from "@clerk/nextjs";

// const SignInPage = () => {
//   return <SignIn />;
// };

// export default SignInPage;

"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="formContainer">
      <div className="formLogo">
        <Image src="app/assets/images/logo.svg" width={40} height={40} alt="" />
        <h1>Mood tracker</h1>
      </div>
      <div className="SignInForm">
        <SignIn.Root>
          <SignIn.Step name="start">
            <h2 className="formHeading">Welcome Back!</h2>
            <p className="formBodyText">
              Log in to continue tracking your mood and sleep.
            </p>

            <Clerk.Field name="identifier">
              <Clerk.Label>Email</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="password">
              <Clerk.Label>Password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>Log in</SignIn.Action>
            <div>
              <p>Haven't got an account?</p>
              <a href="/sign-up">Sign up</a>
            </div>
          </SignIn.Step>

          <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <h1>Check your email</h1>
              <p>
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code">
                <Clerk.Label>Email code</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
            </SignIn.Strategy>

            <SignIn.Strategy name="password">
              <h1>Enter your password</h1>

              <Clerk.Field name="password">
                <Clerk.Label>Password</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
              <SignIn.Action navigate="forgot-password">
                Forgot password?
              </SignIn.Action>
            </SignIn.Strategy>

            <SignIn.Strategy name="reset_password_email_code">
              <h1>Check your email</h1>
              <p>
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code">
                <Clerk.Label>Email code</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step>

          <SignIn.Step name="forgot-password">
            <h1>Forgot your password?</h1>

            <SignIn.SupportedStrategy name="reset_password_email_code">
              Reset password
            </SignIn.SupportedStrategy>

            <SignIn.Action navigate="previous">Go back</SignIn.Action>
          </SignIn.Step>

          <SignIn.Step name="reset-password">
            <h1>Reset your password</h1>

            <Clerk.Field name="password">
              <Clerk.Label>New password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="confirmPassword">
              <Clerk.Label>Confirm password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>Reset password</SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
}
