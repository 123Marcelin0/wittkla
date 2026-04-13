import React from 'react';
import { motion } from 'framer-motion';

export const Datenschutz: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: 'max(14vh, 120px)', minHeight: '100vh', background: '#fcfcfc', color: '#000' }}
        >
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 5vw', paddingBottom: '10vh' }}>
                <h1 className="h1" style={{ marginBottom: '3rem', fontSize: '2.5rem', fontWeight: 700 }}>Datenschutzerklärung</h1>

                <div className="text-body" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>1. Datenschutz auf einen Blick</h2>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Allgemeine Hinweise</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Datenerfassung auf dieser Website</h3>
                    <p style={{ marginBottom: '1.5rem' }}><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
                    
                    <p style={{ marginBottom: '1.5rem' }}><strong>Wie erfassen wir Ihre Daten?</strong><br/>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br/>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                    <p style={{ marginBottom: '1.5rem' }}><strong>Wofür nutzen wir Ihre Daten?</strong><br/>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

                    <p style={{ marginBottom: '1.5rem' }}><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br/>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Des Weiteren haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br/>
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>2. Hosting</h2>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Externes Hosting (Vercel)</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Diese Website wird bei dem externen Dienstleister Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA („Vercel“) gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern dieses Hosters gespeichert. Hierbei handelt es sich insbesondere um IP-Adressen, Verbindungsdaten, Meta- und Kommunikationsdaten sowie Websitezugriffe.</p>
                    <p style={{ marginBottom: '1.5rem' }}>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebotes durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                    <p style={{ marginBottom: '1.5rem' }}>Vercel wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten im Rahmen eines Vertrags über Auftragsverarbeitung befolgen. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.</p>


                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Datenschutz</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br/>
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.<br/>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Hinweis zur verantwortlichen Stelle</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Wittmanns Klappschlafkabinen<br/>
                        Firma WITTKLA<br/>
                        Wellendorfer Straße 124<br/>
                        49124 Georgsmarienhütte<br/>
                        Telefon: +49 5401831598<br/>
                        E-Mail: info@wittkla.com
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Speicherdauer</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
                
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                    <p style={{ marginBottom: '1.5rem' }}>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. LEYEN SIE WIDERSPRUCH EIN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Recht auf Datenübertragbarkeit</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>SSL- bzw. TLS-Verschlüsselung</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.<br/>
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>4. Datenerfassung auf dieser Website</h2>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Cookies</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Unsere Website verwendet sogenannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.<br/>
                    Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb der Webseite (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).<br/>
                    Cookies erfüllen verschiedene Zwecke. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.<br/>
                    Zwingend notwendige Cookies werden stets auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG gespeichert.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Kontaktformular, E-Mail & Telefon</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br/>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.<br/>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Kommunikation via WhatsApp</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Für die Kommunikation mit unseren Kunden und Interessenten nutzen wir unter anderem den Messenger-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                    Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung, d. h. WhatsApp kann den Inhalt der Kommunikation nicht mitlesen. Allerdings erhält WhatsApp Zugriff auf Metadaten (z. B. Absender, Empfänger, Zeitpunkt), die teilweise an Server von Meta in den USA übertragen werden.
                    Wir setzen WhatsApp auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation mit unseren Kunden ein (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung vor Nutzung von WhatsApp abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit für die Zukunft widerrufbar.</p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>5. Analyse-Tools & Werbung</h2>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Google Analytics</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Soweit diese Website Google Analytics nutzt, wird der Dienst von der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland bereitgestellt.
                    Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Google Analytics verwendet Technologien (z. B. Cookies oder Fingerprinting), um Nutzer zum Zwecke der Analyse des Nutzerverhaltens wiederzuerkennen. 
                    Die Nutzung dieses Analyse-Tools erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG). Die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.</p>


                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem' }}>6. Plugins & Tools</h2>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>YouTube</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                    Wenn Sie eine unserer mit einem YouTube-Video ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                    Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare Wiedererkennungstechnologien verwenden.
                    Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '1.5rem', marginBottom: '0.5rem' }}>Google Web Fonts (lokales Hosting & Google-Server)</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                    Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
                    Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</p>
                </div>
            </div>
        </motion.section>
    );
};
