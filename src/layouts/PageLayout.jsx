import { Link, useHistory } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../utils/auth.js";

export default function PageLayout({ children }) {
  const history = useHistory();
  const token = getAuthToken(); 

  const handleLogout = () => {
    removeAuthToken(); 
    history.push("/login"); 
  };

  return (
    <div className="relative">
      <div className="sticky top-0 bg-white shadow-md z-10">
        <header className="container mx-auto p-6 text-[#ff7e3e] flex flex-row justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold">kiwitter</h1>
          </Link>
          <nav className="font-bold text-sm">
            {token && (
              <button 
                onClick={handleLogout} 
                className="text-[#ff7e3e] hover:text-[#ff7e3e] transition-colors"
              >
                Çıkış Yap
              </button>
            )}
          </nav>
        </header>
      </div>
      <div className="pt-6 pb-12">
        <main className="container mx-auto min-h-96 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}