// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
        if (!usuarioCorrente.login) {window.location.href = "login.html";}       

        function initPage() {
            // Associa a função de logout ao botão
            document.getElementById('btn_logout').addEventListener('click', logoutUser);

            // Informa o nome do usuário logado
            document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;
            
        }

        // Associa ao evento de carga da página a função para verificar se o usuário está logado
        window.addEventListener('load', initPage);