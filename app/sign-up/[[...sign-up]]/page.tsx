"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Button from "@/app/components/ui/buttons/Button";
import Input from "@/app/components/ui/inputs/Input";

export default function SignUpPage() {
  return (
    <div className="form-container">
      <img className="form-logo" src="/assets/images/logo.svg" alt="logo" />
      <div className="sign-up">
        <SignUp.Root>
          <SignUp.Step name="start">
            <h1 className="sign-up-heading text-preset-3">Create an account</h1>
            <p className="sign-up-text text-preset-6-reg">
              Join to track your daily mood and sleep with ease.
            </p>
            <div className="sign-up-fields">
              <Clerk.Field className="sign-up-email-fields" name="emailAddress">
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

              <Clerk.Field className="sign-up-password-fields" name="password">
                <Clerk.Label className="password-label-field text-preset-6-reg">
                  Password
                </Clerk.Label>
                <Clerk.Input className="password-input-field text-preset-6-reg" />
                <Clerk.FieldError className="text-preset-6-reg" />
              </Clerk.Field>
            </div>

            <SignUp.Captcha />
            <SignUp.Action
              className="sign-up-button text-preset-5"
              submit
              asChild
            >
              <Button variant="default">Sign Up</Button>
            </SignUp.Action>

            <div className="redirect-message text-preset-6-reg">
              <p>Already got an account?</p>
              <a href="/sign-in">Log in.</a>
            </div>
          </SignUp.Step>
          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h1>Check your email</h1>

              <Clerk.Field name="code">
                <Clerk.Label>Email Code</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignUp.Action submit>Verify</SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  );
}
