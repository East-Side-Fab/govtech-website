---
title: "Cyber Security Challenge"
sidebar_position: 3
---

# Cyber Security Challenge: Saarland Service Portal Testing

## To All Ethical Hackers!

### Mentors
- **Sebastian Klein** - Cybersecurity referent (MIBS)
- **Florian Fromm**

## Your Mission

Test the security of a critical resource: the **Saarland Service Portal** (https://service.saarland.de/).

The primary goal is not destruction but **improve resilience** of the portal's security for all citizens who rely on its services.

**Think like an attacker but act as a defender.**

## The Challenge: Find and Report Vulnerabilities

Your team must perform a penetration test on the specified portal to uncover as many legitimate security vulnerabilities as possible. The more unique, high-severity vulnerabilities you find, the better!

## Submission Requirements

All findings must be submitted to the jury as a **short, concise report** detailing the vulnerability. Clarity and completeness are crucial for both scoring and for the portal's security team to implement fixes.

### Each Report Must Contain the Following Three Sections:

#### 1. Description
A clear and technical summary of the identified vulnerability.

**Examples:**
- "Cross-Site Scripting (XSS) in the user feedback form"
- "Broken Access Control leading to unauthorized data viewing"

#### 2. Possible Attack Window (Gefahrenpotenzial)
Explain the risk and potential impact of this vulnerability:
- How could a malicious actor exploit this to cause harm?
- Could data be compromised?
- Could services be disrupted?

#### 3. How to Reproduce (Reproduktionsanleitung)
Provide step-by-step instructions so the jury (and eventually the developers) can reliably reproduce the error. This is essential for validating and fixing the vulnerability.

**Include:**
- Necessary URLs
- Parameters
- Payloads

## Scoring and Rules

### Point System
- **First Come, First Served:** The team that submits a valid report for a unique vulnerability first will receive the point for that finding. Be quick!
- **Point will be awarded per finding** (if accepted by the jury)
- **Price Share:** The price money is divided by all findings (points) and distributed according to points a team gathered
- **The Winner:** The team with the most points at the conclusion of the two-day Hackathon wins the challenge

### Scope
Focus your testing efforts on the **web application functionality** and accessible services within the Saarland Service Portal (https://service.saarland.de) domain.

### Ethics First! ⚠️

**DO NOT** perform any actions that could lead to:
- ❌ Data destruction
- ❌ Service disruption
- ❌ Degradation of the portal's performance (e.g., large-scale brute-forcing, Denial of Service attempts)

**If you suspect a high-impact vulnerability** (like an RCE or database breach):
1. ⛔ Stop immediately
2. ✅ Report it to the jury without further exploitation
3. ❌ Do not exploit further

## Good Luck, and Happy Hacking!

**Let's make the Saarland Service Portal more secure!**
