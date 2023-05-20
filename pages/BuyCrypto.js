import ProtectedRoute from "../components/ProtectedRoute";
import BuyCryptoForm from '../components/BuyCryptoForm';

const AuthenticatedBuyCrypto = ProtectedRoute(BuyCryptoForm);

function BuyCrypto() {
  return <AuthenticatedBuyCrypto />;
}

export default BuyCrypto;
