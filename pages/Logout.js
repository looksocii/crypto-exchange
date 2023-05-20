import { useRouter } from "next/router";
import { removeAuthToken, isAuthenticated } from '../utils/Authentication';

const Logout = async () => {
    const router = useRouter();
    if (isAuthenticated()){
        try {
            const response = await fetch("http://localhost:4000/api/logout", {
                method: "POST",
            });
            if (response.ok){
                removeAuthToken();
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }else{
        router.push('/');
    }
};

export default Logout;
