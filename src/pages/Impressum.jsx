import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://example.com' // TODO: replace with real site URL

export default function Impressum(){
  return (
    <Container sx={{py:4}}>
      <Helmet>
        <title>Impressum — Niloofar Nasrollah</title>
        <meta name="description" content="Impressum und rechtliche Hinweise von Niloofar Nasrollah, freiberufliche Hebamme in Peine." />
        <link rel="canonical" href={`${siteUrl}/impressum`} />
      </Helmet>
      <Typography variant="h4" gutterBottom>Impressum</Typography>

      <Typography paragraph>
        Angaben gemäß § 5 TMG
      </Typography>

      <Typography>
        Niloofar Nasrollah
        <br />
        Freiberufliche Hebamme
        <br />
        Peine
        <br />
        Niedersachsen
        <br />
        Deutschland
      </Typography>

      <Typography paragraph>
        Telefon: 0176 20998220
        <br />
        E-Mail: Hebamme.niloofarnasrollah@gmail.com
      </Typography>

      <Typography paragraph>
        Berufsbezeichnung: Hebamme (verliehen in der Bundesrepublik Deutschland)
      </Typography>

      <Typography paragraph>
        Zuständige Aufsichtsbehörde:
        <br />
        Zuständiges Gesundheitsamt im Landkreis Peine
      </Typography>

      <Typography paragraph>
        Berufshaftpflichtversicherung:
        <br />
        {/* TODO: Versicherer eintragen */}
        <br />
        Räumlicher Geltungsbereich: Deutschland
      </Typography>

      <Typography paragraph>Berufsrechtliche Regelungen:</Typography>
      <Typography component="div">
        <ul>
          <li>Hebammengesetz (HebG)</li>
          <li>Berufsordnung für Hebammen in Niedersachsen</li>
          <li>Vertrag über die Versorgung mit Hebammenhilfe nach § 134a SGB V</li>
        </ul>
      </Typography>

      <Typography paragraph>Einsehbar unter: https://www.gesetze-im-internet.de</Typography>

      <Typography paragraph>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
        <br />
        Niloofar Nasrollah
        <br />
        Anschrift wie oben
      </Typography>

      <Divider sx={{my:3}} />

      <Typography variant="h5" gutterBottom>Datenschutzerklärung</Typography>

      <Typography variant="h6">1. Verantwortliche</Typography>
      <Typography paragraph>
        Niloofar Nasrollah
        <br />
        Peine
        <br />
        E-Mail: Hebamme.niloofarnasrollah@gmail.com
        <br />
        Telefon: 0176 20998220
      </Typography>

      <Typography variant="h6">2. Allgemeine Hinweise</Typography>
      <Typography paragraph>
        Der Schutz Ihrer personenbezogenen Daten ist mir ein besonderes Anliegen. Die Verarbeitung erfolgt gemäß der Datenschutz-Grundverordnung (DSGVO) sowie den geltenden nationalen Datenschutzvorschriften.
      </Typography>

      <Typography variant="h6">3. Datenerfassung beim Besuch der Website</Typography>
      <Typography paragraph>
        Beim Aufrufen dieser Website werden automatisch folgende Daten erhoben:
      </Typography>
      <Typography component="div">
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
      </Typography>
      <Typography paragraph>
        Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
      </Typography>

      <Typography variant="h6">4. Kontaktaufnahme</Typography>
      <Typography paragraph>
        Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
      </Typography>

      <Typography variant="h6">5. Verarbeitung von Gesundheitsdaten</Typography>
      <Typography paragraph>
        Im Rahmen meiner Tätigkeit als Hebamme verarbeite ich Gesundheitsdaten gemäß Art. 9 DSGVO. Die Verarbeitung erfolgt ausschließlich zur Durchführung des Behandlungsvertrages gemäß Hebammengesetz, § 630a BGB und § 134a SGB V.
      </Typography>

      <Typography variant="h6">6. Speicherdauer</Typography>
      <Typography paragraph>Gesundheitsdaten werden entsprechend der gesetzlichen Aufbewahrungsfrist (mindestens 10 Jahre) gespeichert.</Typography>

      <Typography variant="h6">7. Ihre Rechte</Typography>
      <Typography paragraph>Sie haben das Recht auf Auskunft; Berichtigung; Löschung; Einschränkung der Verarbeitung; Datenübertragbarkeit; Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde Niedersachsen.</Typography>

      <Typography variant="h6">8. SSL-Verschlüsselung</Typography>
      <Typography paragraph>Diese Website nutzt SSL-Verschlüsselung zur sicheren Datenübertragung.</Typography>

      <Typography variant="h6">Cookie-Hinweis (Kurzfassung)</Typography>
      <Typography paragraph>Diese Website verwendet ausschließlich technisch notwendige Cookies zur Sicherstellung der Funktionalität. Es werden keine Analyse- oder Tracking-Cookies eingesetzt.</Typography>

      <Divider sx={{my:3}} />

      <Typography variant="h5">Widerrufsbelehrung (für Selbstzahler-Leistungen)</Typography>
      <Typography variant="h6">Widerrufsrecht</Typography>
      <Typography paragraph>Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Frist beträgt 14 Tage ab Vertragsabschluss.</Typography>
      <Typography paragraph>Zur Ausübung des Widerrufsrechts richten Sie eine eindeutige Erklärung an:</Typography>
      <Typography paragraph>
        Niloofar Nasrollah
        <br />
        Peine
        <br />
        E-Mail: Hebamme.niloofarnasrollah@gmail.com
      </Typography>
      <Typography paragraph>Im Falle eines Widerrufs werden bereits geleistete Zahlungen binnen 14 Tagen zurückerstattet. Haben Sie ausdrücklich verlangt, dass die Dienstleistung vor Ablauf der Widerrufsfrist beginnen soll, so ist ein anteiliger Betrag zu zahlen. Das Widerrufsrecht erlischt bei vollständig erbrachter Dienstleistung.</Typography>

      <Divider sx={{my:3}} />

      <Typography variant="h5">AGB – Freiberufliche Hebamme</Typography>
      <Typography variant="h6">§1 Geltungsbereich</Typography>
      <Typography paragraph>Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von Niloofar Nasrollah, freiberufliche Hebamme.</Typography>
      <Typography variant="h6">§2 Vertragsgrundlage</Typography>
      <Typography paragraph>Die Leistungen erfolgen auf Grundlage des Behandlungsvertrages sowie des Vertrages über die Versorgung mit Hebammenhilfe nach § 134a SGB V.</Typography>
      <Typography variant="h6">§3 Leistungsangebot</Typography>
      <Typography paragraph>Ich biete folgende Leistungen an:</Typography>
      <Typography component="div">
        <ul>
          <li>Wochenbettbetreuung</li>
          <li>Stillberatung</li>
        </ul>
      </Typography>
      <Typography variant="h6">§4 Vergütung</Typography>
      <Typography paragraph>Leistungen für gesetzlich Versicherte werden direkt mit der Krankenkasse abgerechnet. Privatversicherte oder Selbstzahler erhalten eine Rechnung gemäß der gültigen Vergütungsvereinbarung.</Typography>
      <Typography variant="h6">§5 Terminabsagen</Typography>
      <Typography paragraph>Vereinbarte Termine sind verbindlich. Termine, die nicht mindestens 24 Stunden vorher abgesagt werden, können privat in Rechnung gestellt werden.</Typography>
      <Typography variant="h6">§6 Haftung</Typography>
      <Typography paragraph>Die Haftung erfolgt im Rahmen der gesetzlichen Bestimmungen. Eine Berufshaftpflichtversicherung besteht.</Typography>
      <Typography variant="h6">§7 Schweigepflicht</Typography>
      <Typography paragraph>Ich unterliege der gesetzlichen Schweigepflicht gemäß § 203 StGB.</Typography>
    </Container>
  )
}
