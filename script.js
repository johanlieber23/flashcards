// Quiz data - alle vragen en antwoorden (Quiz 1)
const quiz1Data = [
    // Cybersecurity - BIV & Beveiliging
    {
        question: "Wat betekent BIV?",
        answers: [
            "Beveiliging, Identiteit, Vertrouwelijkheid",
            "Beschikbaarheid, Integriteit, Vertrouwelijkheid",
            "Bedrijfszekerheid, Integriteit, Veiligheid",
            "Beveiliging, Integriteit, Validatie"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is encryptie?",
        answers: [
            "Data omzetten naar tekst",
            "Data verbergen met sleutel",
            "Bestanden comprimeren",
            "Data-integriteit controleren"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is encoding?",
        answers: [
            "Data beschermen met sleutel",
            "Data omzetten zonder beveiliging",
            "Berichten versleutelen",
            "Gegevens valideren"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Verschil tussen encryptie en encoding:",
        answers: [
            "Encryptie gebruikt sleutels",
            "Encoding gebruikt sleutels",
            "Encoding is veiliger",
            "Ze zijn hetzelfde"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat doet hashing?",
        answers: [
            "Data verbergen",
            "Data versleutelen",
            "Unieke vingerafdruk maken",
            "Data delen"
        ],
        correct: 2,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Doel van hashing:",
        answers: [
            "Vertrouwelijkheid",
            "Integriteit",
            "Beschikbaarheid",
            "Versleuteling"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een salt bij hashing?",
        answers: [
            "Extra data voor veiligheid",
            "Een wachtwoord",
            "Een decryptie sleutel",
            "Een onveilige hash"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is symmetrische encryptie?",
        answers: [
            "Eén sleutel voor beide",
            "Twee verschillende sleutels",
            "Zonder sleutel",
            "Alleen voor e-mails"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is asymmetrische encryptie?",
        answers: [
            "Dezelfde sleutel aan beide kanten",
            "Public en private sleutels",
            "Encryptie zonder sleutel",
            "Hashing"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Voordeel van asymmetrische encryptie:",
        answers: [
            "Sneller",
            "Veiliger voor sleuteluitwisseling",
            "Simpeler",
            "Zonder authenticatie"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een publieke sleutel?",
        answers: [
            "Alleen verzender kent deze",
            "Iedereen mag hem gebruiken",
            "Alleen ontvanger kent deze",
            "Een symmetrische sleutel"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een private sleutel?",
        answers: [
            "Wordt openbaar gedeeld",
            "Alleen eigenaar kent deze",
            "Gebruikt voor hashcontrole",
            "In certificaat opgeslagen"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een certificaatautoriteit (CA)?",
        answers: [
            "Server die bestanden deelt",
            "Organisatie die certificaten uitgeeft",
            "Firewall",
            "Hashdatabase"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is vertrouwelijkheid?",
        answers: [
            "Gegevens blijven beschikbaar",
            "Alleen bevoegden hebben toegang",
            "Data verandert niet",
            "Systemen zijn snel"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is integriteit?",
        answers: [
            "Data blijft onveranderd",
            "Data is geheim",
            "Data is altijd beschikbaar",
            "Data is versleuteld"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is beschikbaarheid?",
        answers: [
            "Data is niet te bereiken",
            "Data is altijd toegankelijk",
            "Data is beschermd tegen virussen",
            "Data is geverifieerd"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een kwetsbaarheid (vulnerability)?",
        answers: [
            "Een fout in software",
            "Een hacker",
            "Een firewallregel",
            "Een beveiligingsupdate"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een exploit?",
        answers: [
            "Een patch",
            "Aanval die kwetsbaarheid misbruikt",
            "Een update",
            "Een scanprogramma"
        ],
        correct: 1,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is PTES?",
        answers: [
            "Framework voor pentests",
            "Een encryptiestandaard",
            "Een netwerkprotocol",
            "Een loggingsysteem"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    {
        question: "Wat is een CVE?",
        answers: [
            "Lijst met bekende kwetsbaarheden",
            "Een antivirusprogramma",
            "Een firewall",
            "Een cryptografisch algoritme"
        ],
        correct: 0,
        category: "Cybersecurity - BIV & Beveiliging"
    },
    
    // Python & Programmeerlogica
    {
        question: "Wat doet continue in een lus?",
        answers: [
            "Stopt de lus",
            "Slaat de huidige iteratie over",
            "Pauzeert de lus",
            "Gaat terug naar het begin van het script"
        ],
        correct: 1,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet break in een lus?",
        answers: [
            "Stopt de lus volledig",
            "Gaat verder met de volgende iteratie",
            "Maakt een foutmelding",
            "Zet de lus op pauze"
        ],
        correct: 0,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet del?",
        answers: [
            "Verwijdert een variabele of lijst-item",
            "Stopt een loop",
            "Print data",
            "Kopieert bestanden"
        ],
        correct: 0,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat betekent ==?",
        answers: [
            "Toewijzing",
            "Gelijkheidsvergelijking",
            "Ongelijkheid",
            "String-conversie"
        ],
        correct: 1,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet x % 2 == 0?",
        answers: [
            "Kijkt of x deelbaar is door 2",
            "Vermenigvuldigt x met 2",
            "Delen zonder rest",
            "Controleert of x even is (fout)"
        ],
        correct: 0,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Waarom geeft lijst[len(lijst)] een error?",
        answers: [
            "De index gaat te ver",
            "De lijst is leeg",
            "Typefout",
            "len() is onjuist"
        ],
        correct: 0,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet len(lijst)?",
        answers: [
            "Geeft het aantal elementen in de lijst",
            "De waarde van het eerste element",
            "De inhoud van de lijst",
            "De lengte van een string"
        ],
        correct: 0,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet print()?",
        answers: [
            "Start een printer",
            "Toont uitvoer op het scherm",
            "Verwijdert tekst",
            "Kopieert een variabele"
        ],
        correct: 1,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet een if-statement?",
        answers: [
            "Herhaalt code",
            "Voert code uit op basis van een conditie",
            "Maakt een lijst",
            "Print een string"
        ],
        correct: 1,
        category: "Python & Programmeerlogica"
    },
    {
        question: "Wat doet elif?",
        answers: [
            "Einde van if",
            "Extra conditie toevoegen",
            "Loop beëindigen",
            "Print alternatief"
        ],
        correct: 1,
        category: "Python & Programmeerlogica"
    },
    
    // Netwerken en TCP/IP
    {
        question: "Hoeveel lagen heeft het TCP/IP-model?",
        answers: [
            "2",
            "4",
            "5",
            "7"
        ],
        correct: 1,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is encapsulatie?",
        answers: [
            "Data krijgt headers per laag",
            "Headers worden verwijderd",
            "Data wordt gecomprimeerd",
            "Data wordt versleuteld"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is ARP?",
        answers: [
            "Domain Name Protocol",
            "Address Resolution Protocol",
            "Access Routing Protocol",
            "Automatic Response Process"
        ],
        correct: 1,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat doet ARP?",
        answers: [
            "IP omzetten naar MAC",
            "MAC naar IP",
            "IP-adressen uitdelen",
            "Encryptie"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat doet DHCP?",
        answers: [
            "DNS naar IP",
            "IP automatisch uitdelen",
            "Pakketten controleren",
            "Firewalls beheren"
        ],
        correct: 1,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is een DHCP-lease?",
        answers: [
            "Tijd dat IP geldig is",
            "Tijd tussen pakketten",
            "Tijd tot verbinding",
            "Tijd tot reset"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat doet DNS?",
        answers: [
            "Domeinnaam omzetten naar IP",
            "IP omzetten naar MAC",
            "Encryptie uitvoeren",
            "Snelheid regelen"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is ARP-spoofing?",
        answers: [
            "Nep-ARP-berichten sturen",
            "IP-adressen scannen",
            "Encryptie breken",
            "DHCP-servers vervangen"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is een MITM-aanval?",
        answers: [
            "Hacker zit tussen communicatie",
            "Website wordt gehackt",
            "Server overload",
            "Wachtwoordfout"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat helpt tegen MITM?",
        answers: [
            "HTTPS/TLS",
            "FTP",
            "HTTP",
            "POP3"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is broadcast?",
        answers: [
            "Naar één host",
            "Naar meerdere specifieke hosts",
            "Naar alle hosts in netwerk",
            "Naar de router"
        ],
        correct: 2,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is unicast?",
        answers: [
            "Naar één specifiek apparaat",
            "Naar iedereen",
            "Naar subnet",
            "Naar servergroep"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is multicast?",
        answers: [
            "Naar alle hosts",
            "Naar geselecteerde groep",
            "Naar één client",
            "Naar de gateway"
        ],
        correct: 1,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is een gateway?",
        answers: [
            "De verbinding tussen lokale en externe netwerken",
            "Een switch",
            "Een firewall",
            "Een IP-scan"
        ],
        correct: 0,
        category: "Netwerken en TCP/IP"
    },
    {
        question: "Wat is het doel van TLS/HTTPS?",
        answers: [
            "Data versnellen",
            "Data versleutelen",
            "DNS beschermen",
            "Servers updaten"
        ],
        correct: 1,
        category: "Netwerken en TCP/IP"
    },
    
    // Cisco en Netwerkbeheer
    {
        question: "Wat betekent Router#?",
        answers: [
            "Gebruikersmodus",
            "Privileged mode",
            "Configuratiemodus",
            "Interface mode"
        ],
        correct: 1,
        category: "Cisco en Netwerkbeheer"
    },
    {
        question: "Wat doet show ip interface brief?",
        answers: [
            "Toont alle IP's kort",
            "Start interface",
            "Reset verbinding",
            "Toont routes"
        ],
        correct: 0,
        category: "Cisco en Netwerkbeheer"
    },
    {
        question: "Wat doet show interfaces?",
        answers: [
            "Alleen actieve interfaces",
            "Alle interfaces en details",
            "Alleen configuratie",
            "Alleen IP's"
        ],
        correct: 1,
        category: "Cisco en Netwerkbeheer"
    },
    {
        question: "Wat doet show ip route?",
        answers: [
            "Laat routingtabellen zien",
            "Wijzigt routes",
            "Stuurt pakketten",
            "Toont DNS"
        ],
        correct: 0,
        category: "Cisco en Netwerkbeheer"
    },
    {
        question: "Wat is ARP Inspection?",
        answers: [
            "Controleert ARP-pakketten tegen spoofing",
            "Maakt back-ups",
            "Verwijdert IP's",
            "Versnelt verkeer"
        ],
        correct: 0,
        category: "Cisco en Netwerkbeheer"
    },
    
    // Linux Commando's en Permissies
    {
        question: "Wat doet ls?",
        answers: [
            "Toon mappen en bestanden",
            "Start programma",
            "Toon gebruikers",
            "Wis bestanden"
        ],
        correct: 0,
        category: "Linux Commando's en Permissies"
    },
    {
        question: "Wat doet cat?",
        answers: [
            "Kopieer bestand",
            "Toon inhoud van bestand",
            "Verwijder bestand",
            "Start editor"
        ],
        correct: 1,
        category: "Linux Commando's en Permissies"
    },
    {
        question: "Wat doet pwd?",
        answers: [
            "Print working directory",
            "Wijzig map",
            "Toon gebruikers",
            "Wis log"
        ],
        correct: 0,
        category: "Linux Commando's en Permissies"
    },
    {
        question: "Wat doet cd?",
        answers: [
            "Verander directory",
            "Maak bestand",
            "Kopieer map",
            "Toon inhoud"
        ],
        correct: 0,
        category: "Linux Commando's en Permissies"
    },
    {
        question: "Wat doet whoami?",
        answers: [
            "Toon huidige gebruiker",
            "Toon alle gebruikers",
            "Toon systeemnaam",
            "Toon IP"
        ],
        correct: 0,
        category: "Linux Commando's en Permissies"
    },
    {
        question: "Wat betekent rw-r-----?",
        answers: [
            "Eigenaar: lezen/schrijven, groep: lezen",
            "Eigenaar: alleen lezen",
            "Iedereen lezen",
            "Groep: schrijven"
        ],
        correct: 0,
        category: "Linux Commando's en Permissies"
    },
    
    // Ethisch en Juridisch
    {
        question: "Wat betekent CVD (Coordinated Vulnerability Disclosure)?",
        answers: [
            "Geheime melding",
            "Verantwoord melden van kwetsbaarheden",
            "Hack zonder toestemming",
            "Bug bounty"
        ],
        correct: 1,
        category: "Ethisch en Juridisch"
    },
    {
        question: "Wat is ethisch hacken?",
        answers: [
            "Zonder toestemming hacken",
            "Met toestemming testen op kwetsbaarheden",
            "Data stelen",
            "Virussen verspreiden"
        ],
        correct: 1,
        category: "Ethisch en Juridisch"
    },
    {
        question: "Waarom is ethiek belangrijk?",
        answers: [
            "Voor geld",
            "Voor veiligheid, vertrouwen en wetgeving",
            "Om sneller te hacken",
            "Om straf te vermijden"
        ],
        correct: 1,
        category: "Ethisch en Juridisch"
    },
    {
        question: "Wat moet je doen als je GenAI gebruikt voor school?",
        answers: [
            "Niet melden",
            "Vermelden welke tool en waarvoor",
            "Alleen als docent vraagt",
            "Mag nooit"
        ],
        correct: 1,
        category: "Ethisch en Juridisch"
    },
    
    // Extra Cybersecurity & Beveiliging (51-60)
    {
        question: "Wat is het doel van multi-factor authenticatie (MFA)?",
        answers: [
            "Het versnellen van inlogprocessen",
            "Het toevoegen van extra beveiligingslagen",
            "Het verwijderen van wachtwoorden",
            "Het anonimiseren van data"
        ],
        correct: 1,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is phishing?",
        answers: [
            "Een vorm van datacompressie",
            "Een aanval waarbij iemand wordt misleid om gegevens te geven",
            "Een virus",
            "Een DDoS-aanval"
        ],
        correct: 1,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is social engineering?",
        answers: [
            "Het manipuleren van mensen om toegang te krijgen",
            "Het ontwerpen van sociale netwerken",
            "Het maken van firewalls",
            "Het scannen van poorten"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is het doel van een firewall?",
        answers: [
            "Netwerkverkeer filteren",
            "Data comprimeren",
            "Wachtwoorden genereren",
            "Software installeren"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is ransomware?",
        answers: [
            "Malware die bestanden versleutelt en losgeld eist",
            "Spyware die data verzamelt",
            "Software voor back-ups",
            "Een DDoS-tool"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is spyware?",
        answers: [
            "Malware die gebruikersactiviteit bespioneert",
            "Antivirussoftware",
            "Netwerkscanner",
            "Encryptieprogramma"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is een zero-day aanval?",
        answers: [
            "Een aanval die plaatsvindt vóórdat een patch beschikbaar is",
            "Een aanval na 30 dagen",
            "Een aanval met malware",
            "Een aanval via phishing"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is patchmanagement?",
        answers: [
            "Het installeren van updates om kwetsbaarheden te verhelpen",
            "Het scannen van netwerken",
            "Het verwijderen van gebruikers",
            "Het configureren van routers"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is de AVG (GDPR)?",
        answers: [
            "Europese privacywetgeving",
            "Een netwerkprotocol",
            "Een encryptiestandaard",
            "Een firewall"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    {
        question: "Wat is een honeypot?",
        answers: [
            "Een valstrikserver om aanvallers te lokken",
            "Een antivirusprogramma",
            "Een routerfunctie",
            "Een back-up systeem"
        ],
        correct: 0,
        category: "Cybersecurity & Beveiliging"
    },
    
    // Netwerken (61-70)
    {
        question: "Wat doet NAT (Network Address Translation)?",
        answers: [
            "Verandert interne IP's in publieke IP's",
            "Verstuurt DNS-verkeer",
            "Filtert pakketten",
            "Maakt verbindingen sneller"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat doet een router?",
        answers: [
            "Verbindt netwerken met elkaar",
            "Verbindt apparaten op één netwerk",
            "Maakt wachtwoorden",
            "Encryptie uitvoeren"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat doet een switch?",
        answers: [
            "Verbindt meerdere apparaten binnen een LAN",
            "Verbindt netwerken",
            "Geeft IP-adressen uit",
            "Versleutelt data"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat is een VLAN?",
        answers: [
            "Virtueel gescheiden netwerk binnen een switch",
            "Een VPN-verbinding",
            "Een cloudserver",
            "Een fysieke router"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat is een IP-adres versie 6 voorbeeld?",
        answers: [
            "192.168.1.1",
            "10.0.0.1",
            "fe80::1",
            "255.255.255.255"
        ],
        correct: 2,
        category: "Netwerken"
    },
    {
        question: "Wat doet een DNS-cache?",
        answers: [
            "Slaat eerder opgezochte domeinen tijdelijk op",
            "Versleutelt DNS",
            "Blokkeert DNS",
            "Vervangt IP-adressen"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat is latency?",
        answers: [
            "De snelheid van dataoverdracht",
            "De vertraging tussen verzenden en ontvangen",
            "De grootte van een pakket",
            "De sterkte van encryptie"
        ],
        correct: 1,
        category: "Netwerken"
    },
    {
        question: "Wat is een traceroute?",
        answers: [
            "Een commando dat de route van pakketten toont",
            "Een tool om poorten te scannen",
            "Een back-upprogramma",
            "Een encryptietool"
        ],
        correct: 0,
        category: "Netwerken"
    },
    {
        question: "Wat is de standaard poort voor HTTPS?",
        answers: [
            "80",
            "22",
            "443",
            "8080"
        ],
        correct: 2,
        category: "Netwerken"
    },
    {
        question: "Wat is het verschil tussen LAN en WAN?",
        answers: [
            "LAN is lokaal, WAN is wereldwijd",
            "WAN is trager",
            "LAN heeft geen IP's",
            "Er is geen verschil"
        ],
        correct: 0,
        category: "Netwerken"
    },
    
    // Python & Logica (71-80)
    {
        question: "Wat doet input() in Python?",
        answers: [
            "Leest gebruikersinvoer",
            "Schrijft naar bestand",
            "Print uitvoer",
            "Slaat variabelen op"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat doet range(5)?",
        answers: [
            "Lijst van 1–5",
            "Lijst van 0–4",
            "Lijst van 0–5",
            "Foutmelding"
        ],
        correct: 1,
        category: "Python & Logica"
    },
    {
        question: "Wat doet ==?",
        answers: [
            "Vergelijkt gelijkheid",
            "Wijst toe",
            "Controleert ongelijkheid",
            "Vermenigvuldigt"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat doet x += 1?",
        answers: [
            "Voegt 1 toe aan x",
            "Vermenigvuldigt x",
            "Reset x",
            "Niets"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat betekent een IndexError?",
        answers: [
            "Onbestaande index in een lijst",
            "Fout in rekenkundige operatie",
            "Fout in syntax",
            "Fout in geheugen"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat is het verschil tussen een tuple en een lijst?",
        answers: [
            "Tuple is niet aanpasbaar",
            "Tuple is sneller",
            "Tuple heeft sleutels",
            "Geen verschil"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat doet # in Python?",
        answers: [
            "Commentaar",
            "Vermenigvuldiging",
            "Hashen",
            "Verwijderen"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat doet int(\"5\")?",
        answers: [
            "Zet string om naar integer",
            "Maakt float",
            "Foutmelding",
            "Zet integer naar string"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    {
        question: "Wat doet if not True:?",
        answers: [
            "Voert code uit",
            "Wordt overgeslagen",
            "Foutmelding",
            "Loopt oneindig"
        ],
        correct: 1,
        category: "Python & Logica"
    },
    {
        question: "Wat is de uitvoer van print(3 * \"ha\")?",
        answers: [
            "hahaha",
            "ha3",
            "Foutmelding",
            "ha ha ha"
        ],
        correct: 0,
        category: "Python & Logica"
    },
    
    // Linux & Besturingssystemen (81-90)
    {
        question: "Wat doet sudo?",
        answers: [
            "Start een programma met adminrechten",
            "Maakt bestanden aan",
            "Wisselt gebruiker",
            "Stopt het systeem"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet mkdir?",
        answers: [
            "Maakt een nieuwe map",
            "Verwijdert map",
            "Kopieert map",
            "Toont mappen"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet rm -r?",
        answers: [
            "Verwijdert bestanden en mappen",
            "Kopieert mappen",
            "Verplaatst bestanden",
            "Toont logs"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet chmod 755 bestand?",
        answers: [
            "Geeft iedereen schrijfrechten",
            "Eigenaar mag alles, anderen alleen lezen",
            "Alleen root mag lezen",
            "Alleen groep mag schrijven"
        ],
        correct: 1,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet history?",
        answers: [
            "Laat alle commando's zien die zijn ingevoerd",
            "Toont systeemlog",
            "Toont gebruikers",
            "Reset terminal"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet grep?",
        answers: [
            "Zoekt tekst in bestanden",
            "Kopieert bestanden",
            "Maakt directory",
            "Versleutelt data"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet ping 8.8.8.8?",
        answers: [
            "Test verbinding met Google DNS",
            "Reset netwerk",
            "Wijzigt DNS",
            "Sluit verbinding"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet top?",
        answers: [
            "Laat actieve processen zien",
            "Sluit sessie",
            "Laat logs zien",
            "Start opnieuw op"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet df -h?",
        answers: [
            "Laat schijfruimte zien in leesbaar formaat",
            "Verwijdert partities",
            "Kopieert bestanden",
            "Reset disk"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    {
        question: "Wat doet nano bestand.txt?",
        answers: [
            "Opent tekstbestand in editor",
            "Kopieert bestand",
            "Verwijdert bestand",
            "Versleutelt bestand"
        ],
        correct: 0,
        category: "Linux & Besturingssystemen"
    },
    
    // Aanvallen, Beveiliging en Tools (91-100)
    {
        question: "Wat doet een brute-force aanval?",
        answers: [
            "Probeert veel wachtwoorden tot er één klopt",
            "Versleutelt bestanden",
            "Installeert malware",
            "Sluit poorten"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is hashing NIET geschikt voor?",
        answers: [
            "Wachtwoordopslag",
            "Data-integriteit",
            "Originele data terughalen",
            "Authenticatie"
        ],
        correct: 2,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is een DDoS-aanval?",
        answers: [
            "Overbelasting van een server door veel verkeer",
            "Malware die bestanden verwijdert",
            "Een SQL-injectie",
            "Een netwerkupdate"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is SQL-injectie?",
        answers: [
            "Kwaadaardige invoer in database-query",
            "Encryptie van data",
            "Netwerkmanipulatie",
            "File corruptie"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat doet Wireshark?",
        answers: [
            "Analyseert netwerkverkeer",
            "Maakt firewalls",
            "Beheert wachtwoorden",
            "Maakt back-ups"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat doet Nmap?",
        answers: [
            "Scant netwerken op open poorten",
            "Analyseert DNS",
            "Versleutelt verkeer",
            "Filtert logs"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat doet iptables in Linux?",
        answers: [
            "Stelt firewallregels in",
            "Versleutelt bestanden",
            "Scant IP's",
            "Controleert ARP"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is hashing met pepper?",
        answers: [
            "Extra geheime waarde naast salt",
            "Hash zonder sleutel",
            "Compressie",
            "Random string"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is een rootkit?",
        answers: [
            "Malware die zich diep in het systeem verstopt",
            "Anti-virus",
            "Firewall",
            "Script"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    },
    {
        question: "Wat is het doel van incident response?",
        answers: [
            "Reageren en herstellen na een beveiligingsincident",
            "Firewalls installeren",
            "Back-ups maken",
            "Updates plannen"
        ],
        correct: 0,
        category: "Aanvallen, Beveiliging en Tools"
    }
];

// Quiz 2 data en Python quiz worden uit losse files geladen
const quiz2Data = window.quiz2Data || [];
const quizPythonData = window.quizPythonData || [];

// Active quiz dataset pointer
let activeQuizKey = 'quiz1';
let quizData = quiz1Data;

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let categoryScores = {};
let currentUser = null;
let shuffledQuizData = [];
let currentAnswerOrder = [];
const TARGET_ANSWER_MIN_LEN = 35;

function padAnswerForDisplay(text) {
    const base = String(text || '');
    if (base.length >= TARGET_ANSWER_MIN_LEN) return base;
    const deficit = TARGET_ANSWER_MIN_LEN - base.length;
    const zeroWidth = '\u200B'.repeat(deficit);
    return base + zeroWidth;
}

// DOM elements
const questionText = document.getElementById('questionText');
const answersSection = document.getElementById('answersSection');
const feedbackSection = document.getElementById('feedbackSection');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackText = document.getElementById('feedbackText');
const correctAnswer = document.getElementById('correctAnswer');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
const progressFill = document.getElementById('progressFill');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const quizContainer = document.getElementById('quizContainer');
const resultsSection = document.getElementById('resultsSection');
const scorePercentage = document.getElementById('scorePercentage');
const correctCount = document.getElementById('correctCount');
const totalCount = document.getElementById('totalCount');
const categoryBreakdown = document.getElementById('categoryBreakdown');
const restartQuizButton = document.getElementById('restartQuizButton');
const userSelectionSection = document.getElementById('userSelectionSection');
const resumeSection = document.getElementById('resumeSection');
const currentUserDisplay = document.getElementById('currentUserDisplay');
const changeUserButton = document.getElementById('changeUserButton');
const resumeButton = document.getElementById('resumeButton');
const startFreshButton = document.getElementById('startFreshButton');
const resumeUserName = document.getElementById('resumeUserName');
const resumeProgressInfo = document.getElementById('resumeProgressInfo');
const progressBarContainer = document.getElementById('progressBarContainer');
const questionCounter = document.getElementById('questionCounter');

// User and progress management
async function saveProgress() {
    if (!currentUser) return;
    
    const progress = {
        activeQuizKey,
        currentQuestionIndex,
        score,
        userAnswers,
        categoryScores,
        shuffledQuizData,
        timestamp: Date.now()
    };
    
    // Try cloud storage first, fallback to localStorage
    if (useCloudStorage && API_ENDPOINT) {
        try {
            // Get all records to find this user
            const getResponse = await fetch(API_ENDPOINT);
            const allRecords = await getResponse.json();
            
            // Find existing record for this user
            const existing = Array.isArray(allRecords) 
                ? allRecords.find(r => r.user === currentUser && r.activeQuizKey === activeQuizKey)
                : null;
            
            if (existing && existing.id) {
                // Update existing
                await fetch(`${API_ENDPOINT}/${existing.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: currentUser, ...progress })
                });
                console.log('Voortgang bijgewerkt in cloud');
            } else {
                // Create new - MockAPI needs simple structure
                const dataToSave = {
                    user: currentUser,
                    activeQuizKey: progress.activeQuizKey,
                    currentQuestionIndex: progress.currentQuestionIndex,
                    score: progress.score,
                    userAnswers: progress.userAnswers,
                    categoryScores: progress.categoryScores,
                    shuffledQuizData: progress.shuffledQuizData,
                    timestamp: progress.timestamp
                };
                
                const createResponse = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSave)
                });
                
                if (!createResponse.ok) {
                    const errorText = await createResponse.text();
                    console.error(`MockAPI error ${createResponse.status}:`, errorText);
                    throw new Error(`HTTP ${createResponse.status}: ${errorText}`);
                }
                
                const saved = await createResponse.json();
                console.log('Voortgang opgeslagen in cloud:', saved.id || 'success');
            }
        } catch (error) {
            console.error('Cloud opslaan mislukt, gebruikt localStorage:', error);
            localStorage.setItem(`quiz_progress_${currentUser}_${activeQuizKey}`, JSON.stringify(progress));
        }
    } else {
        localStorage.setItem(`quiz_progress_${currentUser}_${activeQuizKey}`, JSON.stringify(progress));
    }
}

async function loadProgress(user) {
    // Try cloud storage first, fallback to localStorage
    if (useCloudStorage && API_ENDPOINT) {
        try {
            const response = await fetch(API_ENDPOINT);
            const allRecords = await response.json();
            
            // Find this user's record
            const userRecord = Array.isArray(allRecords) 
                ? allRecords.find(r => r.user === user && r.activeQuizKey === activeQuizKey)
                : null;
            
            if (userRecord) {
                const { user: _, id, createdAt, ...progress } = userRecord;
                if (progress && Object.keys(progress).length > 0) {
                    console.log('Voortgang geladen van cloud');
                    return progress;
                }
            }
        } catch (error) {
            console.error('Cloud laden mislukt, probeert localStorage:', error);
        }
    }
    
    // Fallback to localStorage
    const saved = localStorage.getItem(`quiz_progress_${user}_${activeQuizKey}`);
    if (!saved) return null;
    
    try {
        return JSON.parse(saved);
    } catch (e) {
        return null;
    }
}

async function clearProgress(user) {
    // Clear from cloud storage
    if (useCloudStorage && API_ENDPOINT) {
        try {
            const response = await fetch(API_ENDPOINT);
            const allRecords = await response.json();
            
            // Find this user's record
            const userRecord = Array.isArray(allRecords) 
                ? allRecords.find(r => r.user === user && r.activeQuizKey === activeQuizKey)
                : null;
            
            if (userRecord && userRecord.id) {
                await fetch(`${API_ENDPOINT}/${userRecord.id}`, {
                    method: 'DELETE'
                });
                console.log('Voortgang verwijderd van cloud');
            }
        } catch (error) {
            console.error('Cloud verwijderen mislukt:', error);
        }
    }
    
    // Clear from localStorage
    localStorage.removeItem(`quiz_progress_${user}_${activeQuizKey}`);
}

async function selectUser(user) {
    currentUser = user;
    const progress = await loadProgress(user);
    
    if (progress && progress.currentQuestionIndex < quizData.length) {
        // Show resume option
        showResumeOption(user, progress);
    } else {
        // Start fresh
        startQuizFresh();
    }
}

function showResumeOption(user, progress) {
    userSelectionSection.style.display = 'none';
    document.getElementById('quizSelectionSection').style.display = 'none';
    resumeSection.style.display = 'block';
    quizContainer.style.display = 'none';
    resultsSection.style.display = 'none';
    
    const userName = user.charAt(0).toUpperCase() + user.slice(1);
    resumeUserName.textContent = userName;
    
    const progressPercent = Math.round(((progress.currentQuestionIndex) / quizData.length) * 100);
    const answeredQuestions = progress.userAnswers.length;
    const correctAnswers = progress.userAnswers.filter(a => a.isCorrect).length;
    
    resumeProgressInfo.innerHTML = `
        <div class="progress-stats">
            <p><strong>Voortgang:</strong> ${progress.currentQuestionIndex} van ${quizData.length} vragen (${progressPercent}%)</p>
            <p><strong>Beantwoord:</strong> ${answeredQuestions} vragen</p>
            <p><strong>Correct:</strong> ${correctAnswers} van ${answeredQuestions} beantwoorde vragen</p>
        </div>
    `;
}

async function resumeQuiz() {
    const progress = await loadProgress(currentUser);
    if (!progress) {
        startQuizFresh();
        return;
    }
    
    // Restore state
    currentQuestionIndex = progress.currentQuestionIndex;
    score = progress.score;
    userAnswers = progress.userAnswers;
    categoryScores = progress.categoryScores;
    shuffledQuizData = progress.shuffledQuizData;
    
    // Hide resume section, show quiz
    resumeSection.style.display = 'none';
    quizContainer.style.display = 'flex';
    resultsSection.style.display = 'none';
    
    // Show progress bar
    progressBarContainer.style.display = 'block';
    questionCounter.style.display = 'block';
    
    // Update UI
    currentUserDisplay.textContent = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
    totalQuestionsSpan.textContent = quizData.length;
    
    // If quiz is completed, show results
    if (currentQuestionIndex >= quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}

async function startQuizFresh() {
    // Clear any existing progress
    await clearProgress(currentUser);
    
    // Shuffle questions for variety
    shuffledQuizData = [...quizData];
    shuffleArray(shuffledQuizData);
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    categoryScores = {};
    
    // Initialize category scores
    const categories = [...new Set(quizData.map(q => q.category))];
    categories.forEach(category => {
        categoryScores[category] = { correct: 0, total: 0 };
    });
    
    // Hide selection/resume sections, show quiz
    userSelectionSection.style.display = 'none';
    document.getElementById('quizSelectionSection').style.display = 'none';
    resumeSection.style.display = 'none';
    quizContainer.style.display = 'flex';
    resultsSection.style.display = 'none';
    
    // Show progress bar
    progressBarContainer.style.display = 'block';
    questionCounter.style.display = 'block';
    
    // Update UI
    currentUserDisplay.textContent = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
    totalQuestionsSpan.textContent = quizData.length;
    
    showQuestion();
}

async function changeUser() {
    if (confirm('Weet je zeker dat je van gebruiker wilt wisselen? Je huidige voortgang wordt opgeslagen.')) {
        await saveProgress();
        currentUser = null;
        userSelectionSection.style.display = 'block';
        resumeSection.style.display = 'none';
        quizContainer.style.display = 'none';
        resultsSection.style.display = 'none';
        progressBarContainer.style.display = 'none';
        questionCounter.style.display = 'none';
    }
}

// Initialize quiz
function initQuiz() {
    // Don't auto-start - wait for user selection
    document.getElementById('quizSelectionSection').style.display = 'block';
    userSelectionSection.style.display = 'none';
    quizContainer.style.display = 'none';
    resultsSection.style.display = 'none';
    resumeSection.style.display = 'none';
    progressBarContainer.style.display = 'none';
    questionCounter.style.display = 'none';
}

// Show current question
function showQuestion() {
    const question = shuffledQuizData[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Show question
    questionText.textContent = question.question;
    
    // Clear previous answers and feedback
    answersSection.innerHTML = '';
    feedbackSection.style.display = 'none';
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    
    // Create answer options
    currentAnswerOrder = question.answers.map((_, i) => i);
    shuffleArray(currentAnswerOrder);
    // Normalize perceived length without truncating content
    const originalAnswers = question.answers.map(a => String(a || ''));
    const maxLen = Math.max(...originalAnswers.map(t => t.length));
    const padToTarget = (text) => {
        const base = String(text || '');
        if (base.length >= maxLen) return base;
        const deficit = maxLen - base.length;
        const zeroWidth = '\u200B'.repeat(deficit);
        return base + zeroWidth;
    };

    currentAnswerOrder.forEach((originalIndex) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.dataset.originalIndex = String(originalIndex);

        const textSpan = document.createElement('span');
        textSpan.className = 'answer-text';
        const displayText = padToTarget(question.answers[originalIndex]);
        textSpan.textContent = displayText;

        answerDiv.appendChild(textSpan);
        answerDiv.addEventListener('click', () => selectAnswer(originalIndex));
        answersSection.appendChild(answerDiv);
    });
    
    // Update category score total
    categoryScores[question.category].total++;
    
    // Save progress
    saveProgress();
}

// Handle answer selection
function selectAnswer(selectedOriginalIndex) {
    const question = shuffledQuizData[currentQuestionIndex];
    const answerOptions = document.querySelectorAll('.answer-option');
    
    // Disable all options
    answerOptions.forEach(option => {
        option.classList.add('disabled');
    });
    
    // Mark selected answer
    const selectedEl = Array.from(answerOptions).find(el => parseInt(el.dataset.originalIndex) === selectedOriginalIndex);
    if (selectedEl) selectedEl.classList.add('selected');
    
    // Check if correct
    const isCorrect = selectedOriginalIndex === question.correct;
    if (isCorrect) {
        score++;
        categoryScores[question.category].correct++;
        if (selectedEl) selectedEl.classList.add('correct');
        showFeedback(true, 'Correct! 🎉');
    } else {
        if (selectedEl) selectedEl.classList.add('incorrect');
        const correctEl = Array.from(answerOptions).find(el => parseInt(el.dataset.originalIndex) === question.correct);
        if (correctEl) correctEl.classList.add('correct');
        showFeedback(false, 'Helaas, dat is niet correct.');
    }
    
    // Store user answer
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedOriginalIndex,
        correctAnswer: question.correct,
        isCorrect: isCorrect
    });
    
    // Save progress after answering
    saveProgress();
    
    // Show next button or finish quiz
    setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
            nextButton.style.display = 'block';
            // Ensure button is visible on mobile without manual scrolling
            const nav = document.getElementById('navigationSection');
            if (nav) {
                nav.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        } else {
            showResults();
        }
    }, 1500);
}

// Show feedback
function showFeedback(isCorrect, message) {
    feedbackSection.style.display = 'block';
    feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    feedbackText.textContent = message;
    
    if (!isCorrect) {
        const question = shuffledQuizData[currentQuestionIndex];
        correctAnswer.innerHTML = `<strong>Correct antwoord:</strong> ${question.answers[question.correct]}`;
    } else {
        correctAnswer.innerHTML = '';
    }
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Show results
async function showResults() {
    quizContainer.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Clear progress when quiz is completed
    await clearProgress(currentUser);
    
    // Calculate percentage
    const percentage = Math.round((score / quizData.length) * 100);
    scorePercentage.textContent = percentage + '%';
    correctCount.textContent = score;
    totalCount.textContent = quizData.length;
    
    // Show category breakdown
    categoryBreakdown.innerHTML = '';
    Object.entries(categoryScores).forEach(([category, scores]) => {
        if (scores.total > 0) {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            const percentage = Math.round((scores.correct / scores.total) * 100);
            categoryItem.innerHTML = `
                <span class="category-name">${category}</span>
                <span class="category-score">${scores.correct}/${scores.total} (${percentage}%)</span>
            `;
            categoryBreakdown.appendChild(categoryItem);
        }
    });
    
    // Show detailed question review
    showQuestionReview();
}

// Show detailed question review
function showQuestionReview() {
    const questionReviewList = document.getElementById('questionReviewList');
    questionReviewList.innerHTML = '';
    
    shuffledQuizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer ? userAnswer.isCorrect : false;
        const userAnswerText = userAnswer ? question.answers[userAnswer.selectedAnswer] : 'Niet beantwoord';
        const correctAnswerText = question.answers[question.correct];
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `question-review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="question-review-question">
                Vraag ${index + 1}: ${question.question}
            </div>
            <div class="question-review-answers">
                <div class="question-review-your-answer">
                    <strong>Jouw antwoord:</strong> ${userAnswerText}
                </div>
                <div class="question-review-correct-answer">
                    <strong>Correct antwoord:</strong> ${correctAnswerText}
                </div>
            </div>
            <div class="question-review-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? 'Correct' : 'Incorrect'}
            </div>
        `;
        
        questionReviewList.appendChild(reviewItem);
    });
}

// Restart quiz
async function restartQuiz() {
    if (confirm('Weet je zeker dat je opnieuw wilt beginnen? Je huidige voortgang wordt gewist.')) {
        await clearProgress(currentUser);
        await startQuizFresh();
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
restartQuizButton.addEventListener('click', async () => {
    await clearProgress(currentUser);
    await startQuizFresh();
});
changeUserButton.addEventListener('click', changeUser);
resumeButton.addEventListener('click', resumeQuiz);
startFreshButton.addEventListener('click', startQuizFresh);

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    
    // User selection event listeners
    document.querySelectorAll('.user-option').forEach(option => {
        option.addEventListener('click', () => {
            const quizKey = option.getAttribute('data-quiz');
            if (quizKey) {
                // Choose quiz first
                activeQuizKey = quizKey;
                quizData = quizKey === 'quiz2' ? quiz2Data : quizKey === 'python' ? quizPythonData : quiz1Data;
                document.getElementById('quizSelectionSection').style.display = 'none';
                userSelectionSection.style.display = 'block';
                // Update total questions for header
                document.getElementById('totalQuestions').textContent = quizData.length;
            } else {
                const user = option.getAttribute('data-user');
                selectUser(user);
            }
        });
    });
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        const answerOptions = document.querySelectorAll('.answer-option');
        if (answerOptions[answerIndex] && !answerOptions[answerIndex].classList.contains('disabled')) {
            const originalIndex = parseInt(answerOptions[answerIndex].dataset.originalIndex);
            selectAnswer(originalIndex);
        }
    } else if (e.key === 'Enter' || e.key === ' ') {
        if (nextButton.style.display === 'block') {
            nextQuestion();
        }
    }
});
