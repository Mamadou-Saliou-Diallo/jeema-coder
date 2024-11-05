let utilisateurs = [];

        // Fonction pour ajouter un utilisateur
        function ajouterUtilisateur() {
            const prenom = document.getElementById('prenom').value;
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('telephone').value;

            // Vérification des champs
            if (prenom && nom && email && telephone) {
                const utilisateur = {
                    prenom,
                    nom,
                    email,
                    telephone
                };

                utilisateurs.push(utilisateur);
                afficherUtilisateurs();
                // Réinitialisation des champs de saisie
                document.getElementById('prenom').value = '';
                document.getElementById('nom').value = '';
                document.getElementById('email').value = '';
                document.getElementById('telephone').value = '';
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        }

        // Fonction pour afficher les utilisateurs dans le tableau
        function afficherUtilisateurs() {
            const tbody = document.querySelector('#utilisateursTable tbody');
            tbody.innerHTML = '';
            utilisateurs.forEach((utilisateur, index) => {
                const tr = document.createElement('tr');
                
                tr.innerHTML = `
                    <td>${utilisateur.prenom}</td>
                    <td>${utilisateur.nom}</td>
                    <td>${utilisateur.email}</td>
                    <td>${utilisateur.telephone}</td>
                    <td class="actions">
                        <button onclick="modifierUtilisateur(${index})">Modifier</button>
                        <button onclick="supprimerUtilisateur(${index})">Supprimer</button>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });
        }

        // Fonction pour modifier un utilisateur
        function modifierUtilisateur(index) {
            const utilisateur = utilisateurs[index];
            document.getElementById('prenom').value = utilisateur.prenom;
            document.getElementById('nom').value = utilisateur.nom;
            document.getElementById('email').value = utilisateur.email;
            document.getElementById('telephone').value = utilisateur.telephone;

            // Supprimer l'utilisateur pour qu'il puisse être réajouté après modification
            utilisateurs.splice(index, 1);
            afficherUtilisateurs();
        }

        // Fonction pour supprimer un utilisateur
        function supprimerUtilisateur(index) {
            utilisateurs.splice(index, 1);
            afficherUtilisateurs();
        }