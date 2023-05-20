import ProtectedRoute from "../components/ProtectedRoute";
import Wallet from '../components/Wallet';

const AuthenticatedUserWallet = ProtectedRoute(Wallet);

function UserWallet() {
  return <AuthenticatedUserWallet />;
}

export default UserWallet;
