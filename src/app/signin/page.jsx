"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            
            email,
            password,
            callbackURL: '/'
            
        })


        console.log({ data, error })

        if (!error) {
            router.push('/')
        }

    };

    return (
        <Card className="border border-gray-100 mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Please Sign In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
             
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your Email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <button type='submit' className="w-full bg-[#f9a11b] hover:bg-[#f59e0b] text-black text-lg font-medium py-2 rounded-md">Sign in</button>
                    <button type='submit' className="w-42 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-2 rounded-md">Reset</button>
                    
                </div>
            </Form>


        </Card>
    );
}