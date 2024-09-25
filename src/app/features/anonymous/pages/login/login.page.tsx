import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFormState, FieldError } from "react-hook-form";
import { AuthDTO } from "src/app/core/dto/auth.dto";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { DialogComponent } from "src/app/shared/components";
import './login.style.scss';
import { useNavigate } from "react-router";
import { dialogInitialStateVO } from './dialog-initial-state.vo';
import { LoginFormDTO } from "src/app/core/dto/login-form.dto";
const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid }, setFocus } = useForm<LoginFormDTO>({
        mode: "all",
        defaultValues: {
            email: "",
            password: ""
        }
    });


    const { login } = useActionsWithEffects();
    const { isLoggedIn, error } = useTypedSelector((state) => state.auth as AuthDTO);
    const [status, setStatus] = useState(dialogInitialStateVO);

    const onDialogClose = () => {
        setStatus(dialogInitialStateVO);
    }

    const onSubmit: SubmitHandler<LoginFormDTO> = (form: LoginFormDTO) => {
        login({ ...form });
        setStatus({ ...status, isInProgress: true, open: true, title: "", desciption: "Login. Please wait ..." });
    }

    useEffect(() => {
        setFocus("email");
    }, [setFocus]);

    useEffect(() => {
        if (error !== "") {
            setStatus({ ...status, isInProgress: false, title: "Error", desciption: error as string });
        }
        if (isLoggedIn) {
            navigate('/protected');
        }
    }, [error, isLoggedIn]);



    return (
        <div className="login-form-wrapper">
            <div className="login-form">
                <header>Login</header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: new RegExp('^([a-z0-9_\\-\\.]+)@([a-z0-9_\\-\\.]+)\\.([a-z]{2,5})$'),
                                message: "Invalid Email"
                            }
                        })}
                        type="email"
                        label="Enter Email"
                        id="email"
                        autoComplete="email"
                        error={
                            errors.email && errors.email.message !== "" ? true : false
                        }
                        helperText={
                            errors.email && errors.email ? errors.email.message : ""
                        }
                    />
                    <TextField
                        {...register("password", {
                            required: "Required",
                            minLength: {
                                value: 8,
                                message: "Minimum 8 characters"
                            }
                        })}
                        type="password"
                        label="Enter Password"
                        id="password"
                        autoComplete="current-password"
                        error={
                            errors.password && errors.password.message !== "" ? true : false
                        }
                        helperText={
                            errors.password && errors.password ? errors.password.message : ""
                        }
                    />
                    <Button disabled={!isValid} variant="contained" className="button" type="submit">Login</Button>
                </form>
                <DialogComponent {...status} onDismiss={onDialogClose} />
            </div>
        </div>
    );
};

export default LoginPage;