import {
    Form,
    Input,
    Label,
    Text,
    TextField,
    FieldError,
    Button
  } from 'react-aria-components';

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Signup = () => {

    const [Signin , setSigning] = useState(true);
    let onSubmit = (e) => {
        e.preventDefault();
    
        // Submit data to your backend API...
    };

    return(
        <>
            <Form onSubmit={onSubmit}>
                {
                    (Signin)
                    ?
                    <>    
                        <TextField name = "email" type='email' isRequired>
                            <Label>Email</Label>
                            <Input />
                        </TextField>

                        <TextField name = "name" isRequired>
                            <Label>Password</Label>
                            <Input />
                        </TextField>

                        <div>
                            <p>
                                New Here?
                                <span className="link" onClick={ () => setSigning(!Signin)}>
                                Create Account
                                </span>
                            </p>
                            <p>Forgot Password?</p>
                        </div>
                        <Button type='submit'>
                            <Link to="/Tenant">
                                Submit
                            </Link>
                        </Button>
                    
                    </>
                    :
                    <>
                        <TextField name = "name">
                            <Label>Full Name</Label>
                            <Input />
                            <FieldError />
                        </TextField>


                        <TextField name = "email" type='email'>
                            <Label>Email</Label>
                            <Input />
                            <FieldError />
                        </TextField>

                        <TextField type='password'>
                            <Label>Password</Label>
                            <Input id='main-input'/>
                            <Text slot='description'>
                                Password must be at least 8 characters
                            </Text>
                        </TextField>

                        <TextField type='password'>
                            <Label>Confirm Password</Label>
                            <Input />
                        </TextField>

                        <Button type='submit'>Submit</Button>

                        <div>
                            <p>
                                Already have an account? 
                                <span className="link" onClick={ () => setSigning(!Signin)}>
                                    Sign In
                                </span>
                            </p>
                        </div>
                    </>
                }

                

            </Form>
        
        
        </>
    );
}

export default Signup;