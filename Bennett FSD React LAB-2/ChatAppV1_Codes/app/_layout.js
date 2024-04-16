import { Slot, useRouter, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authContext"
import { useEffect } from "react";

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segements = useSegments();
    const router = useRouter();

    useEffect(() => {
        // check if user is authenticated or not
        if(typeof isAuthenticated == "undefined") return;
        const inApp = segements[0] == '(app)';
        console.log("Condition check",isAuthenticated, inApp)
        if(isAuthenticated && !inApp) {
            // redirect user to home
            console.log("Redirect to Home...");
        } else if(isAuthenticated == false) {
            // redirect user to signIn page
            console.log("Redirect to SignIn...");
            router.replace('signIn');
        } 
    }, [isAuthenticated]);

    return <Slot />
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}