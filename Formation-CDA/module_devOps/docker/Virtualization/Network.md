# Réseau

## Introduction

La communication entre une machine virtuelle (VM) et son hôte est essentielle pour le développement, les tests ou la simulation d’environnements.   
Selon les besoins (accès Internet, isolation, partage de ressources), plusieurs modes de configuration réseau existent : NAT, ponté, hôte-seul ou interne.   
Chaque option offre des avantages spécifiques, influençant la connectivité, la sécurité et l’intégration au réseau local.

## Les différents types de réseaux

| Type de réseau | Description | Communication avec l’hôte | Communication avec Internet | Communication entre VMs | Cas d’usage typique |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Réseau NAT (Network Address Translation)** | La VM partage l’IP de l’hôte via un routeur virtuel. | Oui (via NAT) | Oui | Non (sauf configuration spécifique) | Développement local, tests isolés, sécurité renforcée. |
| **Réseau ponté (Bridged)** | La VM obtient une IP sur le même réseau physique que l’hôte, comme un appareil indépendant. | Oui | Oui | Oui | Simuler un appareil physique sur le réseau local, accès aux autres machines du LAN. |
| **Réseau hôte-seul (Host-Only)** | La VM ne communique qu’avec l’hôte et d’autres VMs en Host-Only sur le même hôte. | Oui | Non | Oui (entre VMs Host-Only) | Tests internes, développement en réseau isolé. |
| **Réseau interne (Internal)** | La VM ne communique qu’avec d’autres VMs sur le même réseau interne. | Non | Non | Oui (entre VMs internes) | Simulation de réseau isolé, tests de cluster. |
| **Réseau privé virtuel (VPN)** | La VM se connecte à un réseau distant via un tunnel sécurisé. | Oui (si configuré) | Oui (via le VPN) | Oui (si configuré) | Accès à un réseau d’entreprise ou à des ressources distantes. |

## Comment choisir ?

| Besoin | Configuration recommandée |
| ----- | ----- |
| Développement local, pas besoin d’accès depuis le LAN | NAT |
| Accès à la VM depuis d’autres machines du réseau local | Bridged |
| Tests en réseau isolé, pas besoin d’Internet | Host-Only ou Internal |
| Accès à un réseau d’entreprise ou ressources distantes | VPN |

## Configuration dans VirtualBox

* NAT : Paramètre par défaut.  
* Bridged : À sélectionner dans les paramètres réseau de la VM, choisir l’interface réseau physique.  
* Host-Only : Créer un adaptateur Host-Only dans les préférences de VirtualBox.  
* Internal : Sélectionner “Réseau interne” et donner un nom au réseau.

##  Bonnes pratiques

* Toujours vérifier l’absence de conflit d’IP.  
* Pour le développement web, privilégier le NAT ou le Bridged selon le besoin d’accès.  
* Isoler les VMs sensibles avec Host-Only ou Internal.  
* Documenter les configurations réseau pour chaque VM.

## Commandes utiles

* *ifconfig* → Vérifier les adresses IP.  
* *ping* → Tester la connectivité entre hôte et VM.

## Aller plus loin

Choisir la bonne configuration réseau pour une VM permet d’optimiser son utilisation. Ces concepts s’étendent aussi aux conteneurs, au cloud et aux infrastructures réseau physiques. Maîtriser ces bases ouvre la voie à des architectures plus complexes, comme les réseaux de conteneurs ou les infrastructures cloud.