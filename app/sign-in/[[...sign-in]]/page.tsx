"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Button from "@/app/components/ui/buttons/Button";
import Input from "@/app/components/ui/inputs/Input";

export default function SignInPage() {
  return (
    <div className="form-container">
      <img className="form-logo" src="/assets/images/logo.svg" alt="logo" />
      <div className="sign-in">
        <SignIn.Root>
          <SignIn.Step name="start">
            <h2 className="sign-in-heading text-preset-3">Welcome Back!</h2>
            <p className="sign-in-text text-preset-6-reg">
              Log in to continue tracking your mood and sleep.
            </p>
            <div className="sign-in-fields">
              <Clerk.Field className="sign-in-email-fields" name="emailAddress">
                <Clerk.Label className="email-label-field text-preset-6-reg">
                  Email address
                </Clerk.Label>
                <Clerk.Input
                  asChild
                  className="email-input-field text-preset-6-reg"
                >
                  <Input
                    id="username"
                    name="username"
                    placeholder="name@mail.com"
                  />
                </Clerk.Input>
                <Clerk.FieldError className="text-preset-6-reg" />
              </Clerk.Field>

              <Clerk.Field className="sign-in-password-fields" name="password">
                <Clerk.Label className="password-label-field text-preset-6-reg">
                  Password
                </Clerk.Label>
                <Clerk.Input className="password-input-field text-preset-6-reg" />
                <Clerk.FieldError className="text-preset-6-reg" />
              </Clerk.Field>
            </div>

            <SignIn.Action
              className="sign-in-button text-preset-5"
              submit
              asChild
            >
              <Button variant="default">Log In</Button>
            </SignIn.Action>
            <div className="redirect-message text-preset-6-reg">
              <p>Haven't got an account?</p>
              <a href="/sign-up">Sign up.</a>
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
