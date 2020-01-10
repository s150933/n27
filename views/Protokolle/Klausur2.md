Klausur / Test 2 am 14.1.2020 um 9:30 Uhr

    Fehler finden und auf Papier dokumentieren
    alles, was in T1 / K1 relevant war
    Selbst etwas ausprogrammieren (GUI oder server.js)
    SQL. Evtl. einen unbekannten SQL-Befehl anhand einer gegebenen Dokumentation selbst erstellen.
    if und else (auch verschachtelt). Bitte auch die alten if-else-Sachen anschauen im Training-Ordner
    Symmetrische und asymmetrische Verschlüsselung erklären / gegeneinander abgrenzen. Den Sinn jeweils erklären. Die Implementation am Rechner kurrz beschreiben.

Beispiel zu If-Else:

// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = "nein"
var alter = 18;

if(alter >= 18){
    darfHinein = "ja"
}

Console.Log("Der Schüler / die Schülerin darf hinein: " + darfHinein )

// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = ""
var alter = 18;

if(alter >= 18){
    darfHinein = "ja"
}else{
    darfHinein = "nein"
}

Console.Log("Der Schüler / die Schülerin darf hinein: " + darfHinein )

// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = true
var istVolljaehrig = true;

if(istVolljaehrig){
    darfHinein = true
    Console.Log("Der Schüler / die Schülerin darf hinein.")
}else{
    darfHinein = false
    Console.Log("Der Schüler / die Schülerin darf nicht hinein.")
}

// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".
// Schülerinnen zahlen 3 Euro.
// Schüler zahlen 4 Euro.

var darfHinein = true
var istVolljaehrig = true;
var geschlecht = "w"

if(istVolljaehrig){

    darfHinein = true

    if(geschlecht === "w"){
        Console.Log("Die Schülerin darf hinein. Preis: 3 Euro")
    }else{
        Console.Log("Der Schüler darf hinein. Preis: 4 Euro")
    }
}else{
    darfHinein = false
    Console.Log("Der Schüler / die Schülerin darf nicht hinein.")
}
