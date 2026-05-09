"use client";
import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
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

export default function SignUpPage() {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        })


        console.log({ data, error })

        if (!error) {
            router.push('/')
        }

    };

    const handleGoogleSignIn = async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    };

    return (
        <Card className="border border-gray-100 mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Please Sign Up</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

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
                    <button type='submit' className="w-full bg-[#f9a11b] hover:bg-[#f59e0b] text-black text-lg font-medium py-2 rounded-md cursor-pointer">Sign up</button>
                    <input type="reset" value="Reset" className="btn rounded-md py-2 w-22 bg-blue-600 text-white" />  
                    

                    {/* <Button type="submit">            
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button> */}
                </div>
            </Form>
            <div className="flex flex-col items-center">
                <p className='text-lg text-center'>Or</p>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-purple-400 w-3/4">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
            </div>


        </Card>
    );
}