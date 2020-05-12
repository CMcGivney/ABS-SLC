import React from 'react'
import {Header, Card, Image} from 'semantic-ui-react'
import Logo from '../images/abs-logo.jpeg'
import BlackCod from '../images/blackCodABS.jpeg'
import PacificSnapper from '../images/rockcodfillet.jpg'
import Ahi from '../images/ahituna.jpeg'
import AtlSalmon from '../images/atlanticsalmon.png'
import IsleSalmon from '../images/WildIsle.jpg'
import SteelHead from '../images/steelheadfillet.jpg'
import Striped from '../images/stripedBass.jpg'
import Petrale from '../images/Petrale.jpg'
import Manilla from '../images/manillaClams.jpeg'
import PEI from '../images/PEIMussels.jpeg'
import Hamachi from '../images/hamachi.jpg'
import MahiMahi from '../images/MahiFillet.jpg'
import Squid from '../images/montereysquid.jpg'
import Albacore from '../images/albacore.jpeg'
import Yellowfin from '../images/yellowfinTuna.jpg'
import Halibut from '../images/californiahalibut.jpg'
import Shrimp20 from '../images/shrimp20.jpeg'
import Shrimp90 from '../images/shrimp90.jpeg'
import Scallop from '../images/seascallop.jpg'
import LobsterTail from '../images/lobsterTailsFrozen.jpeg'
import Unagi from '../images/unagi.jpeg'


class Fresh { 
  constructor(image, image_alt, type, description,) {
   this.image = image;
   this.image_alt = image_alt;
   this.type = type;
   this.description = description;
 }
}
class Frozen { 
  constructor(image, image_alt, type, description,) {
   this.image = image;
   this.image_alt = image_alt;
   this.type = type;
   this.description = description;
 }
}

let seafoodFresh = [];
let seafoodFrozen= [];
let cod, sole, snapper, atlSalmon, tuna, steelhead, islesSalmon,
   halibut, stripedBass, mahiMahi, manilaClams, pEIMussel,
    shrimp15, shrimp20, shrimp90, lobster, hamachi, albacore,
    yellowfinTuna, mahiFrzn, scallop, japanScallop, squid, unagi

    cod = new Fresh(BlackCod, "California Black Cod Fillet", "California Black Cod Fillet", "Dense, Flaky, Delicious")
    seafoodFresh.push(cod)

    sole = new Fresh(Petrale, "West Coast Petrale Sole Fillet", "West Coast Petrale Sole Fillet", "This is a popular flatfish caught in the wild on the West Coast. It has a mild flavor and good texture that can be cooked and used in a variety of dishes.")
    seafoodFresh.push(sole)

    snapper = new Fresh(PacificSnapper, "Pacific Rock Snapper Fillet", "Pacific Rock Snapper Fillet", "Wild caught just off the West Coast, this fish is ideal for cooking in a variety of ways. Medium to firm texture with a mild flavor similar to other whitefish. Small fillets made it ideal for individual portions.")
    seafoodFresh.push(snapper)

    atlSalmon = new Fresh(AtlSalmon, "Atlantic Salmon Fillet", "Atlantic Salmon Fillet", "Responsibly farmed in Canada, this salmon has consistent quality. Salmon can be the main protein prepared raw for sushi or cooked in a variety of ways.")
    seafoodFresh.push(atlSalmon)

    tuna = new Fresh(Ahi, "Hawaiian Ahi Tuna Loin", "Hawaiian Ahi Tuna Loin", "Hand-line caught and 'Best Choice' on Monterey Seafood Watch Caught in the Pacific Ocean near Hawaii and cut fresh at ABS Seafood")
    seafoodFresh.push(tuna)

    steelhead = new Fresh(SteelHead, "Scottish Steelhead Fillet", "Scottish Steelhead Fillet", "Sashimi Quality, rich buttery flavor")
    seafoodFresh.push(steelhead)

    islesSalmon = new Fresh(IsleSalmon, "Wild Isles Salmon Fillet (Premium)", "Wild Isles Salmon Fillet (Premium)", "Sustainably raised in the wild open ocean waters off the Shetland Island’s and North Atlantic Islands rugged coastline. It is this unique environment that gives this fish firm texture, lean flesh and buttery sweet flavor. RSPCA Freedom Food and global GAP (Good Aquaculture Practices) approved, sustainable farming, and low stock densities make Wild Isles Salmon some of the best in the world.")
    seafoodFresh.push(islesSalmon)

    halibut = new Fresh(Halibut, "California Halibut Fillet", "California Halibut Fillet", "These large fish are caught in the Sea of Cortez during winter and spring. Known for their mild flavor and delicate texture, the fillets can be portion and cooked in a variety of dishes. ")
    seafoodFresh.push(halibut)

    stripedBass = new Fresh(Striped, "Baja Striped Bass Fillet", "Baja Striped Bass Fillet", "With it’s clean mouth feel, semi firm texture and superb fat content this fish allows for many preparation options: whole fried, sushi, sashimi, tempura, grilling, poaching and braising….EAT the skin – it crisps beautifully and has the snap of a fresh sea cracker.")
    seafoodFresh.push(stripedBass)

    mahiMahi = new Fresh(MahiMahi, "Mahi Mahi Fillet", "Mahi Mahi Fillet", "Dense, Flaky, Delicious")
    seafoodFresh.push(mahiMahi)

    manilaClams = new Fresh(Manilla, "Manila Clams", "Manila Clams", "Dense, Flaky, Delicious")
    seafoodFresh.push(manilaClams)

    pEIMussel = new Fresh(PEI, "PEI Mussels", "PEI Mussels", "Harvested of the coast of Prince Edward Island, Canada")
    seafoodFresh.push(pEIMussel)

    shrimp15 = new Frozen(Logo, "13/15 Jumbo Shrimp Deveined Tail On", "13/15 Jumbo Shrimp Deviened Tail On", "Dense, Flaky, Delicious")
    seafoodFrozen.push(shrimp15)

    shrimp20 = new Frozen(Shrimp20, "16/20 Medium Shrimp Deveined Tail oO", "16/20 Medium Shrimp Deveined Tail On", "Dense, Flaky, Delicious")
    seafoodFrozen.push(shrimp20)

    shrimp90 = new Frozen(Shrimp90, "71/90 Petite Shrimp Deveined Tail Off", "71/90 Petite Shrimp Deveined Tail Off", "Dense, Flaky, Delicious")
    seafoodFrozen.push(shrimp90)

    lobster = new Frozen(LobsterTail, "Cold Water Lobster Tail Shell On 4-5oz/piece", "Cold Water Lobster Tail Shell On 4-5oz/piece", "Dense, Flaky, Delicious")
    seafoodFrozen.push(lobster)

    hamachi = new Frozen(Hamachi, "Hamachi, Yellowtail Amberjack Fillet, 5-6lbs/piece", "Hamachi, Yellowtail Amberjack Fillet, 5-6lbs/piece", "Our Hamachi fillets are direct from Japan. They are responsibly farmed in Southern Japan. These fatty fish are a popular fish for sushi and poke. Don’t forget to grill the kama (collar) for a special treat. Each fillet is vacuum packed and treated before freezing to increase the color and longevity of the fish. ")
    seafoodFrozen.push(hamachi)

    albacore = new Frozen(Albacore, "Albacore Loin, 1lb/piece", "Albacore Loin, 1lb/piece", "Dense, Flaky, Delicious")
    seafoodFrozen.push(albacore)

    yellowfinTuna = new Frozen(Yellowfin, "Center Cut Yellowfin Tuna Loin 5-7lbs/piece", "Center Cut Yellowfin Tuna Loin 5-7lbs/piece", "Dense, Flaky, Delicious")
    seafoodFrozen.push(yellowfinTuna)

    mahiFrzn = new Frozen(MahiMahi, "Mahi Mahi Fillet 3-5lbs/piece", "Mahi Mahi Fillet 3-5lbs/piece", "Dense, Flaky, Delicious")
    seafoodFrozen.push(mahiFrzn)

    scallop = new Frozen(Scallop, "Jumbo Domestic Fresh/Frozen Scallop", "Jumbo Domestic Fresh/Frozen Scallop", "Dense, Flaky, Delicious")
    seafoodFrozen.push(scallop)

    japanScallop = new Frozen(Scallop, "Medium Japanese Fresh/Frozen Scallop", "Medium Japanese Fresh/Frozen Scallop", "These scallops are first picked in Hokkaido and then brought over to the United States where they are prepared and packed. 10/20 Size = 10-20 pieces per pound")
    seafoodFrozen.push(japanScallop)

    squid = new Frozen(Squid, "Monterey, CA Squid (CALIFORNIA LOLIGO) ", "Monterey, CA Squid (CALIFORNIA LOLIGO)", "Caught by local fisherman in Monterey Bay. Previously frozen")
    seafoodFrozen.push(squid)

    unagi = new Frozen(Unagi, "Unagi, Freshwater Eel 14oz Per Piece", "Unagi, Freshwater Eel 14oz Per Piece", "Rich, Buttery and Sweet")
    seafoodFrozen.push(unagi)

const Inventory = () => (
  <>
  <div className="inventoryContainer">
   <div className="faqHead">
    <Header.Content as="h1">Retail Offerings</Header.Content>
    <Header.Content as="h5">"Contact your regional sales rep. for pricing, availability and wholesale offerings"</Header.Content>
   </div>
    <Header.Content as="h1" className="proHead">Fresh Offerings</Header.Content>
    <Card.Group className="cardContainer" stackable>
     {seafoodFresh.map( seafood => 
      <Card className="faqCard">
       <Image
         src={seafood.image}
         alt={seafood.image_alt}
        />
       <Card.Content>
        <Card.Header as='h2' className="cardHead">{seafood.type}</Card.Header>
        <Card.Meta className="cardMeta">{seafood.description}</Card.Meta>
       </Card.Content>    
      </Card>
      )
     }
    </Card.Group>

    <Header.Content as="h1" className="proHead">Frozen Offerings</Header.Content>
     <Card.Group className="cardContainer" stackable>
      {seafoodFrozen.map( frozen => 
       <Card className="faqCard">
        <Image
          src={frozen.image}
          alt={frozen.image_alt}
         />
        <Card.Content>
        <Card.Header as='h2' className="cardHead">{frozen.type}</Card.Header>
        <Card.Meta className="cardMeta">{frozen.description}</Card.Meta>
       </Card.Content>    
      </Card>
      )
     }
    </Card.Group>
   </div>
  </>
)

export default Inventory;