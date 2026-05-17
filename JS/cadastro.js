function checarForca(senha) {
    const barras = ['fb1', 'fb2', 'fb3', 'fb4'];
    const cores = ['#cc0000', '#e65c00', '#f0a500', '#2e7d32'];
    const labels = ['Fraca', 'Razoável', 'Boa', 'Forte'];

    let forca = 0;
    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    barras.forEach((id, i) => {
        document.getElementById(id).style.background = i < forca ? cores[forca - 1] : '#2a1a1a';
    });

    document.getElementById('forca-texto').textContent = forca > 0 ? labels[forca - 1] : '';
    document.getElementById('forca-texto').style.color = forca > 0 ? cores[forca - 1] : '#a07050';
}

function validarUsuario(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9_]/g, '');
}

function fazerCadastro() {
    var nome = document.getElementById('nome').value.trim();
    var sobre = document.getElementById('sobrenome').value.trim();
    var email = document.getElementById('email').value.trim();
    var usuario = document.getElementById('usuario').value.trim();
    var nasc = document.getElementById('nascimento').value;
    var senha = document.getElementById('senha').value;
    var conf = document.getElementById('confirmar-senha').value;
    var termos = document.getElementById('termos').checked;

    if (!nome || !sobre || !email || !usuario || !nasc || !senha || !conf) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }
    if (senha !== conf) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }
    if (senha.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres.');
        return;
    }


    alert(`Conta criada com sucesso!\nBem-vindo ao Olimpo, ${nome}!`);
}