'use client';
import { UpdateUserProfile } from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";


const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    // if(!user){
    //     redirect('/signin')
    // }
    
    return (
        <div>
            <Card className="max-w-96 mx-auto min-h-[40vh] flex flex-col items-center my-8 border border-gray-200">
                <Avatar className="w-22 h-22">
                    <Avatar.Image
                        alt="User"
                        src={user?.image}
                        referrerPolicy='no-referrer' />

                    <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>
                <h3 className="text-xl font-bold">{user?.name}</h3>
                <p className="text-muted">{user?.email}</p>
                <UpdateUserProfile />
            </Card>
        </div>
    );
};

export default ProfilePage;