import React, { useEffect, useState } from "react";
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthDTO } from "src/app/core/dto/auth.dto";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { useTypedSelector } from "src/app/core/hooks/use-typed-selectors";
import { DialogComponent } from "src/app/shared/components";
import './login.style.scss';
import { useNavigate } from "react-router";
import { dialogInfoInitialStateVO } from 'src/app/core/initial-state';
import { LoginFormDTO } from "src/app/core/dto/login-form.dto";
const LoginPage: React.FC = () => {

    const { login } = useActionsWithEffects();
    const { isLoggedIn, error } = useTypedSelector((state) => state.auth as AuthDTO);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid }, setFocus } = useForm<LoginFormDTO>({
        mode: "all",
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [dialogStatus, setDialogStatus] = useState(dialogInfoInitialStateVO);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onDialogClose = () => {
        setDialogStatus(dialogInfoInitialStateVO);
    }

    const onSubmit: SubmitHandler<LoginFormDTO> = (form: LoginFormDTO) => {
        login({ ...form });
        setDialogStatus({ ...dialogStatus, isInProgress: true, open: true, title: "", desciption: "Login. Please wait ..." });
    }

    useEffect(() => {
        setFocus("email");
    }, [setFocus]);

    useEffect(() => {
        if (error !== "") {
            setDialogStatus({ ...dialogStatus, isInProgress: false, title: "Error", desciption: error as string });
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
                    <FormControl variant="outlined">
                    <label>Email</label>
                        <OutlinedInput
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: new RegExp('^([a-z0-9_\\-\\.]+)@([a-z0-9_\\-\\.]+)\\.([a-z]{2,5})$'),
                                    message: "Invalid Email"
                                }
                            })}
                            type="email"
                            placeholder="Enter your email (Hint: chetan@gmail.com)"
                            id="email"
                            autoComplete="email"
                            error={
                                errors.email && errors.email.message !== "" ? true : false
                            }
                        />
                        <FormHelperText style={{marginLeft: '0', color: errors.email && errors.email ? 'red': ''}}>{errors.email && errors.email ? errors.email.message : " "}</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined">
                        <label>Password</label>
                        <OutlinedInput
                            {...register("password", {
                                required: "Required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum 8 characters"
                                }
                            })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password (Hint: chetan@pass)"
                            id="password"
                            autoComplete="current-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            error={
                                errors.password && errors.password.message !== "" ? true : false
                            }

                        />
                        <FormHelperText id="standard-weight-helper-text" style={{marginLeft: '0', color: errors.password && errors.password ? 'red': ''}}>{errors.password && errors.password ? errors.password.message : " "}</FormHelperText>
                    </FormControl>
                    <Button disabled={!isValid} variant="contained" className="button" type="submit">Login</Button>
                </form>
                <DialogComponent {...dialogStatus} onDismiss={onDialogClose} />
            </div>
        </div>
    );
};

export default LoginPage;