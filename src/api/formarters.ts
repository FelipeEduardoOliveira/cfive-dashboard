interface ICodesErrorsAuthApi {
  code:
    | 'auth/invalid-email'
    | 'auth/user-disabled'
    | 'auth/user-not-found'
    | 'auth/wrong-password'
    | 'auth/too-many-requests'
    | 'auth/network-request-failed'
    | 'auth/internal-error'
    | 'auth/invalid-credential';
}

export const formatErrorsAuthApi = ({ code }: ICodesErrorsAuthApi) => {
  switch (code) {
    case 'auth/invalid-email':
      return 'E-mail inválido! Verifique se o e-mail está correto.';
    case 'auth/user-disabled':
      return 'Usuário desativado! Entre em contato com o suporte.';
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
      return 'Usuário não encontrado! Verifique se o e-mail está correto.';
    case 'auth/wrong-password':
      return 'Senha incorreta! Verifique se a senha está correta.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas! Tente novamente mais tarde.';
    case 'auth/network-request-failed':
      return 'Erro de rede! Verifique sua conexão com a internet.';
    case 'auth/internal-error':
      return 'Erro interno! Tente novamente mais tarde.';

    default:
      return 'Erro desconhecido! Tente novamente mais tarde.';
  }
};
