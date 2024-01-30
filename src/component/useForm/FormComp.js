import React, { useState, formState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const FormComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-group">
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div>Registration form</div>
        <hr />
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Name"
          {...register("username", { required: "Username is Required" })}
          //register will hold the validation of the input tag
        />
        <div className="error">
          {errors.username?.type === "required" && "Username is Required"}
        </div>
        <br />

        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is Required",
          })}
        />
        <div className="error">
          {errors.email?.type === "required" &&
            "Entered Email format may be wrong"}
        </div>
        <br />

        <label for="mobile">Mobile:</label>
        <input
          type="mobile  "
          placeholder="Enter your Mobile Number"
          name="mobile"
          maxLength={10}
          pattern="[789][0-9]{9}"
          {...register("mobile", { required: "Mobile Number is Required" })}
        />
        <div className="error">
          {errors.mobile && (
            <span style={{ color: "red" }}>{errors.mobile.message}</span>
          )}
        </div>
        <br />

        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          placeholder="Enter Your Password"
          {...register("password", { required: "password is Required " })}
        />
        <div className="error">
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </div>
        <br />

        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default FormComp;
