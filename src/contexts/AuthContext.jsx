import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dados do admin (você)
  const ADMIN_EMAIL = "seu-email@exemplo.com";
  const ADMIN_PASSWORD = "sua-senha-segura";

  useEffect(() => {
    // Verificar se já existe um usuário salvo
    const storedUser = localStorage.getItem('@MeuSite:user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Verificar se é o admin
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const adminUser = {
          id: '1',
          name: 'Administrador',
          email: ADMIN_EMAIL,
          role: 'admin'
        };
        setUser(adminUser);
        localStorage.setItem('@MeuSite:user', JSON.stringify(adminUser));
        return { success: true, user: adminUser };
      }

      // Verificar usuários normais (você pode adicionar mais lógica aqui)
      const normalUser = {
        id: Date.now().toString(),
        name: email.split('@')[0],
        email: email,
        role: 'user'
      };
      setUser(normalUser);
      localStorage.setItem('@MeuSite:user', JSON.stringify(normalUser));
      return { success: true, user: normalUser };
    } catch (error) {
      return { success: false, error: 'Erro ao fazer login' };
    }
  };

  const register = async (name, email, password) => {
    try {
      // Verificar se o email já está em uso
      if (email === ADMIN_EMAIL) {
        return { success: false, error: 'Este email já está em uso' };
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user'
      };

      // Salvar usuário (em um sistema real, isso seria feito no backend)
      localStorage.setItem('@MeuSite:users', JSON.stringify([
        ...JSON.parse(localStorage.getItem('@MeuSite:users') || '[]'),
        newUser
      ]));

      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: 'Erro ao criar conta' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('@MeuSite:user');
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      loading,
      login,
      register,
      logout,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
} 