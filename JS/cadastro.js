// ===== VERIFICADOR DE FORÇA DE SENHA =====
function checarForca(senha) {
    var barras = ['fb1', 'fb2', 'fb3', 'fb4'];
    var cores = ['#cc0000', '#e65c00', '#f0a500', '#2e7d32'];
    var labels = ['Fraca', 'Razoável', 'Boa', 'Forte'];

    var forca = 0;
    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    barras.forEach(function(id, i) {
        document.getElementById(id).style.background = i < forca ? cores[forca - 1] : '#2a1a1a';
    });

    var textoEl = document.getElementById('forca-texto');
    textoEl.textContent = forca > 0 ? labels[forca - 1] : '';
    textoEl.style.color = forca > 0 ? cores[forca - 1] : '#a07050';
}

// ===== VALIDADOR DE NOME DE USUÁRIO =====
function validarUsuario(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9_]/g, '');
}

// ===== CADASTRO COM ARMAZENAMENTO EM JSON (localStorage) =====
function fazerCadastro() {
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sobrenome').value.trim();
    var email = document.getElementById('email').value.trim();
    var usuario = document.getElementById('usuario').value.trim();
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;

    // Verificação: campos obrigatórios
    if (!nome || !sobrenome || !email || !usuario || !senha || !confirmarSenha) {
        mostrarMensagem('Preencha todos os campos obrigatórios.', 'erro');
        return;
    }

    // Verificação: formato de e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarMensagem('Digite um e-mail válido.', 'erro');
        return;
    }

    // Verificação: tamanho mínimo da senha
    if (senha.length < 8) {
        mostrarMensagem('A senha deve ter no mínimo 8 caracteres.', 'erro');
        return;
    }

    // Verificação: senhas iguais
    if (senha !== confirmarSenha) {
        mostrarMensagem('As senhas não coincidem. Tente novamente.', 'erro');
        return;
    }

    // Lê a lista de usuários já cadastrados do localStorage
    // localStorage só guarda texto, então usamos JSON.parse para converter
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificação: e-mail já cadastrado
    var emailJaExiste = usuariosCadastrados.find(function(u) {
        return u.email === email;
    });
    if (emailJaExiste) {
        mostrarMensagem('Este e-mail já está cadastrado. Tente fazer login.', 'erro');
        return;
    }

    // Verificação: nome de usuário já em uso
    var usuarioJaExiste = usuariosCadastrados.find(function(u) {
        return u.usuario === usuario;
    });
    if (usuarioJaExiste) {
        mostrarMensagem('Este nome de usuário já está em uso. Escolha outro.', 'erro');
        return;
    }

    // Cria o objeto do novo usuário
    // Estrutura pensada para banco de dados: nome, email e senha são os campos principais
    var novoUsuario = {
        nome: nome + ' ' + sobrenome,
        email: email,
        usuario: usuario,
        senha: senha
    };

    // Adiciona o novo usuário na lista e salva de volta no localStorage como JSON
    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    mostrarMensagem('Conta criada com sucesso! Bem-vindo ao Olimpo, ' + nome + '!', 'sucesso');

    // Redireciona para login após 2 segundos
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}

// ===== EXIBE MENSAGEM DE FEEDBACK NA TELA =====
function mostrarMensagem(texto, tipo) {
    var el = document.getElementById('msg-feedback');
    if (!el) return;
    el.textContent = texto;
    el.className = 'msg-feedback ' + tipo;
    el.style.display = 'block';
}
