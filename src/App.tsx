import { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Grid, 
  Button,
  Paper,
  Box,
  Tooltip
} from '@mui/material';

interface FormData {
  klachtenEnBeloop: string;
  plaats: string;
  rangschikking: string[];
  omvang: string;
  vorm: string[];
  omtrek: string[];
  kleur: string[];
  efflorescentie: string[];
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    klachtenEnBeloop: '',
    plaats: '',
    rangschikking: [],
    omvang: '',
    vorm: [],
    omtrek: [],
    kleur: [],
    efflorescentie: []
  });

  const [zoekTerm, setZoekTerm] = useState('');
  const [zoekTermVorm, setZoekTermVorm] = useState('');
  const [zoekTermKleur, setZoekTermKleur] = useState('');
  const [zoekTermEfflorescentie, setZoekTermEfflorescentie] = useState('');

  const rangschikkingOpties = [
    { term: 'Arciform', beschrijving: 'Boogvormig' },
    { term: 'Circinair', beschrijving: 'Onderbroken ringvormig' },
    { term: 'Circumscript', beschrijving: 'Omschreven, beperkt tot een klein gebied' },
    { term: 'Concentrisch', beschrijving: 'Meerdere centrifugaal uitbreidende en elkaar opvolgende ringen' },
    { term: 'Confluerend', beschrijving: 'In elkaar overvloeiend' },
    { term: 'Corymbiform', beschrijving: 'Moederlaesie met satelieten' },
    { term: 'Deckchair fenomeen', beschrijving: 'Plooien in de huid blijven vrij van de aandoening' },
    { term: 'Diffuus', beschrijving: 'Aaneengesloten' },
    { term: 'Discreet', beschrijving: 'Van elkaar gescheiden' },
    { term: 'Folliculair', beschrijving: 'Follikelgebonden, beperkt tot de haarfollikels' },
    { term: 'Gedissemineerd', beschrijving: 'Gelijkmatig verspreid over het gehele lichaam' },
    { term: 'Gegeneraliseerd', beschrijving: 'Verspreid over het gehele lichaam' },
    { term: 'Herpetiform', beschrijving: 'Gegroepeerd, groepje van laesies bij elkaar (en bouquet)' },
    { term: 'Kokardevormig', beschrijving: 'Schietschijfvormig, centrum afwijkend van kleur' },
    { term: 'Opgeworpen rand', beschrijving: 'Verheven rand' },
    { term: 'Ptychotroop', beschrijving: 'Voorkeur voor de plooien van het lichaam' },
    { term: 'Regionaal', beschrijving: 'Beperkt tot één lichaamsgebied' },
    { term: 'Reticulair', beschrijving: 'Netvormig' },
    { term: 'Segmentaal', beschrijving: 'Beperkt tot één dermatoom' },
    { term: 'Solitair', beschrijving: 'Enkele laesie' },
    { term: 'Sporotrichoid', beschrijving: 'Opeenvolgende laesies in het verloop van een lymfbaan' },
    { term: 'Universeel', beschrijving: 'Uitgebreid over het gehele lichaam' }
  ];

  const vormOpties = [
    { term: 'Aan de rand verheven', beschrijving: 'Rand ligt hoger dan het centrum van de laesie' },
    { term: 'Annulair', beschrijving: 'Ringvormig, met een open centrum' },
    { term: 'Bolronde', beschrijving: 'Koepelvormig, symmetrisch verhoogd' },
    { term: 'Bolronde (met delle)', beschrijving: 'Koepelvormig met een centrale indeuking' },
    { term: 'Dendritische', beschrijving: 'Vertakt patroon, als een boomstructuur' },
    { term: 'Gegyreerde', beschrijving: 'Slingerend of kronkelend patroon' },
    { term: 'Geplooide', beschrijving: 'Met zichtbare huidplooien' },
    { term: 'Gerimpelde', beschrijving: 'Fijne, rimpelige structuur van de huid' },
    { term: 'Gesteelde', beschrijving: 'Op een smalle basis rustend' },
    { term: 'Gladde', beschrijving: 'Glad oppervlak zonder onregelmatigheden' },
    { term: 'Grillige', beschrijving: 'Onregelmatige vorm zonder duidelijk patroon' },
    { term: 'Hemisferische', beschrijving: 'Licht bolstaand oppervlak' },
    { term: 'Hobbelige', beschrijving: 'Oneffen oppervlak met bultjes of verhevenheden' },
    { term: 'Lineaire', beschrijving: 'Langgerekt en smal, vaak in strepen of lijnen' },
    { term: 'Ovale', beschrijving: 'Ellipsvormig, langer in één richting' },
    { term: 'Papillomateuze', beschrijving: 'Hobbelig, bloemkoolachtig of wratachtig' },
    { term: 'Polygonaale', beschrijving: 'Veelhoekig, zonder duidelijke cirkel- of ovale vorm' },
    { term: 'Polycyclische', beschrijving: 'Meerdere ronde randen, samengestelde ronde laesies' },
    { term: 'Rechthoekige', beschrijving: 'Vierhoekig, met rechte hoeken' },
    { term: 'Ronde', beschrijving: 'Cirkelvormig, zonder insnoeringen of onderbrekingen' },
    { term: 'Ruwe', beschrijving: 'Grof of korrelig oppervlak' },
    { term: 'Spitse', beschrijving: 'Uitstekend met een scherpe punt' },
    { term: 'Verruceuze', beschrijving: 'Wratachtig, met een onregelmatige verhevenheid' },
    { term: 'Vlakke', beschrijving: 'Plat, zonder verheven delen' }
  ];

  const omtrekOpties = [
    'Lijnscherp begrensd',
    'Scherp begrensd',
    'Matig scherp begrensd',
    'Onscherp begrensd'
  ];

  const kleurOpties = [
    'Appelmoeskleurig',
    'Bleek',
    'Blauw',
    'Donkerbruin',
    'Donkerbruin gepigmenteerd',
    'Donkerrood',
    'Erythemateus',
    'Erythemateus niet wegdrukbaar',
    'Erythemateus wegdrukbaar',
    'Felrood',
    'Gedepigmenteerd',
    'Gehypopigmenteerd',
    'Geel',
    'Groen',
    'Huidkleurig',
    'Lichtbruin',
    'Lichtbruin gepigmenteerd',
    'Lichtrood',
    'Livide',
    'Oranje',
    'Paars',
    'Roze',
    'Wit',
    'Zwart',
    'Zwart gepigmenteerd'
  ];

  const efflorescentieOpties = [
    { term: 'Abces', beschrijving: 'Een abces is een met pus gevulde, ontstoken holte zonder eigen wand, vaak veroorzaakt door een bacteriële infectie.' },
    { term: 'Atrofie', beschrijving: 'Atrofie verwijst naar een afname van het volume van de huid door verlies van epidermale, dermale of subcutane componenten.' },
    { term: 'Bulla', beschrijving: 'Een bulla is een blaar groter dan 1 cm, gevuld met helder, bloederig of etterig vocht en kan zich in verschillende huidlagen bevinden.' },
    { term: 'Carbunkel', beschrijving: 'Een carbunkel is een groep van met elkaar verbonden steenpuisten, veroorzaakt door stafylokokkeninfectie.' },
    { term: 'Colerette', beschrijving: 'Een colerette is een schilferig randje dat overblijft na het barsten van een vesicula, kenmerkend voor sommige virale of bacteriële infecties.' },
    { term: 'Comedo', beschrijving: 'Een comedo is een verstopte talgklieruitgang door een opeenhoping van talg en keratine, bekend als een mee-eter.' },
    { term: 'Craquelé', beschrijving: 'Craquelé is een patroon van oppervlakkige barstjes in de huid, vaak bij uitdroging of eczeem.' },
    { term: 'Crusta', beschrijving: 'Crusta is een korst bestaande uit ingedroogd exsudaat, bloed, fibrine of necrotisch materiaal.' },
    { term: 'Cyste', beschrijving: 'Een cyste is een met vocht of andere substanties gevulde afgesloten holte met een eigen epitheliale wand.' },
    { term: 'Dyschromia', beschrijving: 'Dyschromia is een verkleuring van de huid die niet berust op vaatverwijding en niet wegdrukbaar of afwasbaar is.' },
    { term: 'Dystrofie', beschrijving: 'Dystrofie verwijst naar een abnormale groei of degeneratie van de huid of andere weefsels.' },
    { term: 'Ecchymose', beschrijving: 'Ecchymose is een oppervlakkige, vlekkerige bloeding in de huid, vaak als gevolg van trauma.' },
    { term: 'Eczema', beschrijving: 'Eczema is een chronische, ontstekingsgebonden huidaandoening met roodheid, zwelling, schilfering en blaasjes.' },
    { term: 'Erythematosquameus', beschrijving: 'Erythematosquameus beschrijft een rode, schilferende huid die door ontsteking wordt veroorzaakt.' },
    { term: 'Erosie', beschrijving: 'Erosie is een oppervlakkig huiddefect beperkt tot de epidermis zonder bloeding.' },
    { term: 'Excoriatie', beschrijving: 'Excoriatie is een diepe huidbeschadiging die tot in de dermis reikt, vaak met puntbloedingen.' },
    { term: 'Erytheem', beschrijving: 'Erytheem is een tijdelijke roodheid van de huid door vaatverwijding, vaak een teken van ontsteking.' },
    { term: 'Erytrodermie', beschrijving: 'Erytrodermie is een uitgebreide roodheid en schilfering van de huid, vaak bij ernstige huidaandoeningen zoals psoriasis of eczeem.' },
    { term: 'Fissuur', beschrijving: 'Een fissuur is een diepe kloof of scheur in de huid, vaak pijnlijk en geassocieerd met een droge huid.' },
    { term: 'Fistel', beschrijving: 'Een fistel is een abnormale verbinding tussen een holte of orgaan en de huid, meestal als gevolg van een infectie of ontsteking.' },
    { term: 'Furunkel', beschrijving: 'Een furunkel is een diepe, necrotische ontsteking van een haarfollikel, vaak veroorzaakt door Staphylococcus aureus.' },
    { term: 'Hyperkeratose', beschrijving: 'Hyperkeratose is een verdikking van het stratum corneum door overmatige keratineproductie, zoals bij psoriasis.' },
    { term: 'Hypertrofie', beschrijving: 'Hypertrofie is een verdikking van de huid door toegenomen celgroei.' },
    { term: 'Lichenificatie', beschrijving: 'Lichenificatie is een verdikking van de huid met een grof huidreliëf, vaak door chronisch krabben.' },
    { term: 'Macula', beschrijving: 'Een macula is een vlakke, goed omschreven kleurverandering van de huid zonder verdikking.' },
    { term: 'Nodulus', beschrijving: 'Een nodulus is een kleine (<1 cm), solide onderhuidse zwelling die voelbaar is in de dermis of subcutis.' },
    { term: 'Nodus', beschrijving: 'Een nodus is een grotere (>1 cm) solide zwelling diep in de huid of subcutis.' },
    { term: 'Papel', beschrijving: 'Een papel is een kleine, solide verhevenheid van de huid, minder dan 1 cm groot.' },
    { term: 'Parakeratose', beschrijving: 'Parakeratose is een afwijkende verhoorning waarbij celkernen behouden blijven in het stratum corneum.' },
    { term: 'Petechiën', beschrijving: 'Petechiën zijn kleine (1-2 mm), niet-wegdrukbare puntvormige bloedingen in de huid.' },
    { term: 'Plaque', beschrijving: 'Een plaque is een solide, verheven laesie groter dan 1 cm, vaak door epidermale of dermale verdikking.' },
    { term: 'Purpura', beschrijving: 'Purpura is een rode of paarse huidverkleuring door bloeding in de huid die niet verdwijnt bij druk.' },
    { term: 'Pustula', beschrijving: 'Een pustula is een klein met pus gevuld blaasje, vaak geassocieerd met bacteriële infecties.' },
    { term: 'Rhagade', beschrijving: 'Een rhagade is een pijnlijke, diepe kloof in de huid, vaak in de handpalmen of hielen.' },
    { term: 'Schilfering', beschrijving: 'Schilfering verwijst naar afschilfering van dode huidcellen in verschillende vormen.' },
    { term: 'Sclerose', beschrijving: 'Sclerose is een verdikking en verharding van de huid door bindweefseltoename.' },
    { term: 'Seborrhoïsch', beschrijving: 'Seborrhoïsche schilfering is vettige, gelige schilfering, vaak geassocieerd met roos.' },
    { term: 'Squama', beschrijving: 'Squama is een droge, loslatende laag hoorncellen op het huidoppervlak.' },
    { term: 'Teleangiëctasie', beschrijving: 'Teleangiëctasieën zijn blijvend verwijde bloedvaatjes die zichtbaar zijn op de huid.' },
    { term: 'Tuber', beschrijving: 'Een tuber is een stevige, verheven laesie groter dan 1 cm, meestal in de dermis of subcutis.' },
    { term: 'Tumor', beschrijving: 'Een tumor is een abnormale zwelling van cellen, goedaardig of kwaadaardig.' },
    { term: 'Ulcus', beschrijving: 'Een ulcus is een diep huiddefect dat tot in de subcutis reikt, vaak met necrose.' },
    { term: 'Urtica', beschrijving: 'Urtica is een vluchtige, jeukende verhevenheid van de huid, kenmerkend voor netelroos.' },
    { term: 'Vegetaties', beschrijving: 'Vegetaties zijn bloemkoolachtige of wratachtige huidverhevenheden.' },
    { term: 'Vesicula', beschrijving: 'Een vesicula is een klein (<1 cm) blaasje gevuld met helder vocht.' },
    { term: 'Vulnus', beschrijving: 'Een vulnus is een wond door een extern trauma of pathologisch proces.' },
    { term: 'Wond', beschrijving: 'Een wond is een beschadiging van de huid door een endogene of exogene oorzaak.' }
  ];

  const handleCheckboxChange = (category: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [category]: checked 
        ? [...(prev[category] as string[]), value]
        : (prev[category] as string[]).filter((item: string) => item !== value)
    }));
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() 
        ? <span key={index} style={{ backgroundColor: '#FFEB3B' }}>{part}</span>
        : part
    );
  };

  const generateReport = () => {
    const report = `Je bent een dermatoloog met meer dan 20 jaar ervaring, gespecialiseerd in het opstellen van differentiaaldiagnoses binnen de dermatologie. Jouw taak is om op basis van een gedetailleerde beschrijving van een huidlaesie een gestructureerde en uitgebreide differentiaaldiagnose op te stellen. Hierbij gebruik je strikt de PROVOKE-methode, die staat voor Plaats, Rangschikking, Omvang en grootte, Vorm, Omtrek, Kleur en Efflorescentie:

Casusbeschrijving: ${formData.klachtenEnBeloop}
Plaats: ${formData.plaats}
Rangschikking: ${formData.rangschikking.join(' of ')}
Omvang en Grootte: ${formData.omvang}
Vorm: ${formData.vorm.join(' of ')}
Omtrek: ${formData.omtrek.join(' of ')}
Kleur: ${formData.kleur.join(' of ')}
Efflorescentie: ${formData.efflorescentie.join(' of ')}

Gebruik vervolgens de volgende gestructureerde stappen:

### Tree-of-Thought Prompting:
1. Maak eerst een overzichtelijke lijst met mogelijke differentiaaldiagnoses op basis van de PROVOKE-beschrijving.
2. Geef per diagnose een duidelijke onderbouwing:
   - Argumenten vóór de diagnose.
   - Argumenten tegen de diagnose.
3. Geef vervolgens een voorstel voor verdere diagnostiek.

### Self-Reflection Prompting:
- Geef een uitgebreide, initiële beantwoording van bovenstaande stappen.
- Reflecteer vervolgens kritisch op je eigen antwoord:
  - Controleer je logica.
  - Controleer op volledigheid.
  - Verbeter eventuele tekortkomingen en herformuleer je antwoord indien nodig.

### Progressive Prompting:
- Indien de initiële beschrijving onduidelijk of incompleet is, formuleer gerichte vervolgvragen om ontbrekende of aanvullende informatie te verkrijgen, waarbij je elke vraag apart en duidelijk stelt.

### Chain-of-Verification Prompting:
- Geef aan het einde van je antwoord een bondige samenvatting van de meest waarschijnlijke differentiaaldiagnose.
- Presenteer vervolgens minimaal één alternatieve redenering of tegenargument om de initiële conclusie te toetsen.
- Concludeer met een beoordeling welke redenering het sterkst en meest waarschijnlijk is.

### Therapeutisch advies:
Baseer je uiteindelijke therapeutische advies uitsluitend op actuele informatie van https://www.huidziekten.nl, met verwijzing naar de specifieke pagina van het betreffende ziektebeeld.`;

    return report;
  };

  const copyToClipboard = () => {
    const report = generateReport();
    navigator.clipboard.writeText(report);
  };

  const openChatGPT = async () => {
    const report = generateReport();
    await navigator.clipboard.writeText(report);
    window.open('https://chat.openai.com', '_blank');
  };

  const openClaude = async () => {
    const report = generateReport();
    await navigator.clipboard.writeText(report);
    window.open('https://claude.ai', '_blank');
  };

  const openDeepSeek = async () => {
    const report = generateReport();
    await navigator.clipboard.writeText(report);
    window.open('https://chat.deepseek.com', '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        PROVOKE
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', fontSize: '0.8rem', textAlign: 'left' }}>
        Disclaimer: Deze applicatie is uitsluitend bedoeld ter ondersteuning van medisch handelen en is expliciet niet ontworpen om medisch advies van een gekwalificeerde zorgverlener te vervangen. De applicatie bevindt zich momenteel in een bèta-versie, hetgeen betekent dat functionaliteiten en resultaten nog in ontwikkeling zijn en niet klinisch gevalideerd. Aan de uitkomsten of informatie die door deze applicatie worden verstrekt, kunnen daarom geen rechten worden ontleend.

        De gebruiker dient zich ervan bewust te zijn dat de output van deze applicatie onnauwkeurigheden, fouten of zogenaamde "hallucinaties" kan bevatten. Gebruik van de applicatie geschiedt geheel op eigen verantwoordelijkheid. De gebruiker blijft te allen tijde zelf verantwoordelijk voor het stellen van diagnoses, het nemen van klinische beslissingen en eventuele gevolgen daarvan.

        Wij adviseren nadrukkelijk om bij twijfel of vragen altijd contact op te nemen met een gekwalificeerd medisch professional.
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Klachten en beloop</Typography>
        <TextField
          fullWidth
          value={formData.klachtenEnBeloop}
          onChange={(e) => setFormData(prev => ({ ...prev, klachtenEnBeloop: e.target.value }))}
          placeholder="Beschrijf de klachten en het beloop"
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Plaats</Typography>
        <TextField
          fullWidth
          value={formData.plaats}
          onChange={(e) => setFormData(prev => ({ ...prev, plaats: e.target.value }))}
          placeholder="Beschrijf de plaats van de laesie"
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Rangschikking</Typography>
        <TextField
          fullWidth
          value={zoekTerm}
          onChange={(e) => setZoekTerm(e.target.value)}
          placeholder="Zoek in rangschikking..."
          size="small"
          sx={{ mb: 2 }}
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
        <Grid container spacing={1}>
          {(() => {
            const sortedOptions = [...rangschikkingOpties].sort((a, b) => a.term.localeCompare(b.term));
            const halfLength = Math.ceil(sortedOptions.length / 2);
            const firstColumn = sortedOptions.slice(0, halfLength);
            const secondColumn = sortedOptions.slice(halfLength);
            
            return (
              <>
                <Grid item xs={6}>
                  {firstColumn.map((optie) => (
                    <Box key={optie.term} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.rangschikking.includes(optie.term)}
                        onChange={(e) => handleCheckboxChange('rangschikking', optie.term, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        pr: 4,
                        width: '100%'
                      }}>
                        <span style={{ fontWeight: 700, flexShrink: 0 }}>{highlightText(optie.term, zoekTerm)}:</span>
                        <span style={{ 
                          color: 'text.secondary', 
                          fontStyle: 'italic',
                          overflow: 'visible',
                          marginLeft: '2px'
                        }}>{highlightText(optie.beschrijving, zoekTerm)}</span>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={6}>
                  {secondColumn.map((optie) => (
                    <Box key={optie.term} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.rangschikking.includes(optie.term)}
                        onChange={(e) => handleCheckboxChange('rangschikking', optie.term, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        pr: 4,
                        width: '100%'
                      }}>
                        <span style={{ fontWeight: 700, flexShrink: 0 }}>{highlightText(optie.term, zoekTerm)}:</span>
                        <span style={{ 
                          color: 'text.secondary', 
                          fontStyle: 'italic',
                          overflow: 'visible',
                          marginLeft: '2px'
                        }}>{highlightText(optie.beschrijving, zoekTerm)}</span>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </>
            );
          })()}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Omvang en Grootte</Typography>
        <TextField
          fullWidth
          value={formData.omvang}
          onChange={(e) => setFormData(prev => ({ ...prev, omvang: e.target.value }))}
          placeholder="Beschrijf de omvang en grootte"
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Vorm</Typography>
        <TextField
          fullWidth
          value={zoekTermVorm}
          onChange={(e) => setZoekTermVorm(e.target.value)}
          placeholder="Zoek in vorm..."
          size="small"
          sx={{ mb: 2 }}
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
        <Grid container spacing={1}>
          {(() => {
            const sortedOptions = [...vormOpties].sort((a, b) => a.term.localeCompare(b.term));
            const halfLength = Math.ceil(sortedOptions.length / 2);
            const firstColumn = sortedOptions.slice(0, halfLength);
            const secondColumn = sortedOptions.slice(halfLength);
            
            return (
              <>
                <Grid item xs={6}>
                  {firstColumn.map((optie) => (
                    <Box key={optie.term} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.vorm.includes(optie.term)}
                        onChange={(e) => handleCheckboxChange('vorm', optie.term, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        pr: 4,
                        width: '100%'
                      }}>
                        <span style={{ fontWeight: 700, flexShrink: 0 }}>{highlightText(optie.term, zoekTermVorm)}:</span>
                        <span style={{ 
                          color: 'text.secondary', 
                          fontStyle: 'italic',
                          overflow: 'visible',
                          marginLeft: '2px'
                        }}>{highlightText(optie.beschrijving, zoekTermVorm)}</span>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={6}>
                  {secondColumn.map((optie) => (
                    <Box key={optie.term} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.vorm.includes(optie.term)}
                        onChange={(e) => handleCheckboxChange('vorm', optie.term, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        pr: 4,
                        width: '100%'
                      }}>
                        <span style={{ fontWeight: 700, flexShrink: 0 }}>{highlightText(optie.term, zoekTermVorm)}:</span>
                        <span style={{ 
                          color: 'text.secondary', 
                          fontStyle: 'italic',
                          overflow: 'visible',
                          marginLeft: '2px'
                        }}>{highlightText(optie.beschrijving, zoekTermVorm)}</span>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </>
            );
          })()}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Omtrek</Typography>
        <Grid container spacing={1}>
          {omtrekOpties.map((optie) => (
            <Grid item xs={6} key={optie}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Checkbox
                  checked={formData.omtrek.includes(optie)}
                  onChange={(e) => handleCheckboxChange('omtrek', optie, e.target.checked)}
                  sx={{ 
                    padding: 0,
                    '& .MuiSvgIcon-root': { 
                      fontSize: 20
                    }
                  }}
                />
                <Typography sx={{ 
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 0.25,
                  overflow: 'visible',
                  textOverflow: 'ellipsis',
                  fontWeight: 700
                }}>
                  {optie}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Kleur</Typography>
        <TextField
          fullWidth
          value={zoekTermKleur}
          onChange={(e) => setZoekTermKleur(e.target.value)}
          placeholder="Zoek in kleur..."
          size="small"
          sx={{ mb: 2 }}
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
        <Grid container spacing={1}>
          {(() => {
            const sortedOptions = [...kleurOpties].sort((a, b) => a.localeCompare(b));
            const halfLength = Math.ceil(sortedOptions.length / 2);
            const firstColumn = sortedOptions.slice(0, halfLength);
            const secondColumn = sortedOptions.slice(halfLength);
            
            return (
              <>
                <Grid item xs={6}>
                  {firstColumn.map((optie) => (
                    <Box key={optie} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.kleur.includes(optie)}
                        onChange={(e) => handleCheckboxChange('kleur', optie, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        textOverflow: 'ellipsis',
                        fontWeight: 700
                      }}>
                        {highlightText(optie, zoekTermKleur)}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={6}>
                  {secondColumn.map((optie) => (
                    <Box key={optie} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Checkbox
                        checked={formData.kleur.includes(optie)}
                        onChange={(e) => handleCheckboxChange('kleur', optie, e.target.checked)}
                        sx={{ 
                          padding: 0,
                          '& .MuiSvgIcon-root': { 
                            fontSize: 20
                          }
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.25,
                        overflow: 'visible',
                        textOverflow: 'ellipsis',
                        fontWeight: 700
                      }}>
                        {highlightText(optie, zoekTermKleur)}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </>
            );
          })()}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Efflorescentie</Typography>
        <TextField
          fullWidth
          value={zoekTermEfflorescentie}
          onChange={(e) => setZoekTermEfflorescentie(e.target.value)}
          placeholder="Zoek in efflorescentie..."
          size="small"
          sx={{ mb: 2 }}
          inputProps={{
            style: { fontSize: '0.85rem' }
          }}
        />
        <Grid container spacing={1}>
          {efflorescentieOpties.map((optie) => (
            <Grid item xs={12} key={optie.term}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Checkbox
                  checked={formData.efflorescentie.includes(optie.term)}
                  onChange={(e) => handleCheckboxChange('efflorescentie', optie.term, e.target.checked)}
                  sx={{ 
                    padding: 0,
                    '& .MuiSvgIcon-root': { 
                      fontSize: 20
                    }
                  }}
                />
                <Typography sx={{ 
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 0.25,
                  overflow: 'visible',
                  pr: 4,
                  width: '100%'
                }}>
                  <span style={{ fontWeight: 700, flexShrink: 0 }}>{highlightText(optie.term, zoekTermEfflorescentie)}:</span>
                  <span style={{ 
                    color: 'text.secondary', 
                    fontStyle: 'italic',
                    overflow: 'visible',
                    marginLeft: '2px'
                  }}>{highlightText(optie.beschrijving, zoekTermEfflorescentie)}</span>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Rapport</Typography>
        <TextField
          fullWidth
          multiline
          rows={10}
          value={generateReport()}
          InputProps={{ 
            readOnly: true,
            sx: { 
              fontSize: '0.85rem'
            }
          }}
        />
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 300, mx: 'auto' }}>
          <Button variant="contained" onClick={copyToClipboard} sx={{ width: '100%' }}>
            Kopieer Rapport
          </Button>
          <Button 
            variant="contained" 
            onClick={openChatGPT}
            color="secondary"
            sx={{ width: '100%' }}
          >
            Open ChatGPT
          </Button>
          <Button 
            variant="contained" 
            onClick={openClaude}
            color="secondary"
            sx={{ width: '100%' }}
          >
            Open Claude
          </Button>
          <Button 
            variant="contained" 
            onClick={openDeepSeek}
            color="secondary"
            sx={{ width: '100%' }}
          >
            Open DeepSeek
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
