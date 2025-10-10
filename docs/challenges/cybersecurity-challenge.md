---
title: "Cyber Security Challenge"
sidebar_position: 3
---

# Cyber Security Challenge: Saarland Service Portal Testing

## An alle ethischen Hacker!

### Mentoren
- **Sebastian Klein** - Cybersecurity-Referent (MIBS)
- **Florian Fromm**

## Deine Mission

Teste die Sicherheit einer kritischen Ressource: das **Saarland Service Portal** (https://service.saarland.de/).

Das primäre Ziel ist nicht Zerstörung, sondern die **Verbesserung der Widerstandsfähigkeit** der Portalsicherheit für alle Bürger, die auf seine Dienste angewiesen sind.

**Denke wie ein Angreifer, aber handle als Verteidiger.**

## Die Challenge: Finde und melde Schwachstellen

Dein Team muss einen Penetrationstest am angegebenen Portal durchführen, um so viele legitime Sicherheitslücken wie möglich aufzudecken. Je mehr eindeutige, schwerwiegende Schwachstellen du findest, desto besser!

## Einreichungsanforderungen

Alle Befunde müssen der Jury als **kurzer, prägnanter Bericht** vorgelegt werden, der die Schwachstelle detailliert beschreibt. Klarheit und Vollständigkeit sind sowohl für die Bewertung als auch für das Sicherheitsteam des Portals zur Implementierung von Korrekturen entscheidend.

### Jeder Bericht muss folgende drei Abschnitte enthalten:

#### 1. Beschreibung
Eine klare und technische Zusammenfassung der identifizierten Schwachstelle.

**Beispiele:**
- "Cross-Site Scripting (XSS) im Benutzerfeedback-Formular"
- "Broken Access Control führt zu unbefugter Dateneinsicht"

#### 2. Gefahrenpotenzial (Mögliches Angriffsfenster)
Erkläre das Risiko und die potenziellen Auswirkungen dieser Schwachstelle:
- Wie könnte ein böswilliger Akteur dies ausnutzen, um Schaden anzurichten?
- Könnten Daten kompromittiert werden?
- Könnten Dienste gestört werden?

#### 3. Reproduktionsanleitung (How to Reproduce)
Stelle Schritt-für-Schritt-Anweisungen bereit, damit die Jury (und schließlich die Entwickler) den Fehler zuverlässig reproduzieren können. Dies ist für die Validierung und Behebung der Schwachstelle unerlässlich.

**Inkludiere:**
- Notwendige URLs
- Parameter
- Payloads

## Bewertung und Regeln

### Punktesystem
- **First Come, First Served:** Das Team, das zuerst einen gültigen Bericht für eine einzigartige Schwachstelle einreicht, erhält den Punkt für diesen Fund. Sei schnell!
- **Ein Punkt pro Fund** (wenn von der Jury akzeptiert)
- **Preisaufteilung:** Das Preisgeld wird durch alle Funde (Punkte) geteilt und entsprechend der von einem Team gesammelten Punkte verteilt
- **Der Gewinner:** Das Team mit den meisten Punkten am Ende des zweitägigen Hackathons gewinnt die Challenge

### Scope
Konzentriere deine Testbemühungen auf die **Webanwendungsfunktionalität** und zugängliche Dienste innerhalb der Domain des Saarland Service Portals (https://service.saarland.de).

### Ethik zuerst! ⚠️

**FÜHRE KEINE** Aktionen durch, die zu folgenden Konsequenzen führen könnten:
- ❌ Datenzerstörung
- ❌ Dienstunterbrechung
- ❌ Beeinträchtigung der Portal-Performance (z.B. groß angelegte Brute-Force-Angriffe, Denial-of-Service-Versuche)

**Wenn du eine Schwachstelle mit hoher Auswirkung vermutest** (wie RCE oder Datenbankeinbruch):
1. ⛔ Stoppe sofort
2. ✅ Melde es der Jury
3. ❌ Exploite es nicht weiter

## Viel Erfolg und Happy Hacking!

**Lass uns das Saarland Service Portal sicherer machen!**
