import React from 'react'
import {Header, Card, Image} from 'semantic-ui-react'
import Logo from '../images/abs-logo.jpeg'
import Ahi from '../images/ahituna.jpeg'
import AtlSalmon from '../images/atlanticsalmon.png'
import IsleSalmon from '../images/WildIsle.jpg'
import SteelHead from '../images/steelheadfillet.jpg'
import Striped from '../images/stripedBass.jpg'
import Petrale from '../images/Petrale.jpg'


class Seafood { 
  constructor(image, image_alt, type, description,) {
   this.image = image;
   this.image_alt = image_alt;
   this.type = type;
   this.description = description;
 }
}

let seafoodArr = [];
let cod, sole, snapper, atlSalmon, tuna, steelhead, islesSalmon,
   halibut, stripedBass, mahiMahi, manilaClams, pEIMussel,
    shrimp15, shrimp20, shrimp90, lobster, hamachi, albacore,
    yellowfinTuna, mahiFrzn, scallop, japanScallop, squid, unagi

    cod = new Seafood(Logo, "California Black Cod Fillet", "California Black Cod Fillet", "Dense, Flaky, Delicious")
    seafoodArr.push(cod)

    sole = new Seafood(Petrale, "West Coast Petrale Sole Fillet", "West Coast Petrale Sole Fillet", "This is a popular flatfish caught in the wild on the West Coast. It has a mild flavor and good texture that can be cooked and used in a variety of dishes.")
    seafoodArr.push(sole)

    snapper = new Seafood(Logo, "Pacific Rock Snapper Fillet", "Pacific Rock Snapper Fillet", "Dense, Flaky, Delicious")
    seafoodArr.push(snapper)

    atlSalmon = new Seafood(AtlSalmon, "Atlantic Salmon Fillet", "Atlantic Salmon Fillet", "Responsibly farmed in Canada, this salmon has consistent quality. Salmon can be the main protein prepared raw for sushi or cooked in a variety of ways.")
    seafoodArr.push(atlSalmon)

    tuna = new Seafood(Ahi, "Hawaiian Ahi Tuna Loin", "Hawaiian Ahi Tuna Loin", "Hand-line caught and 'Best Choice' on Monterey Seafood Watch Caught in the Pacific Ocean near Hawaii and cut fresh at ABS Seafood")
    seafoodArr.push(tuna)

    steelhead = new Seafood(SteelHead, "Scottish Steelhead Fillet", "Scottish Steelhead Fillet", "Sashimi Quality, rich buttery flavor")
    seafoodArr.push(steelhead)

    islesSalmon = new Seafood(IsleSalmon, "Wild Isles Salmon Fillet (Premium)", "Wild Isles Salmon Fillet (Premium)", "Sustainably raised in the wild open ocean waters off the Shetland Island’s and North Atlantic Islands rugged coastline. It is this unique environment that gives this fish firm texture, lean flesh and buttery sweet flavor.")
    seafoodArr.push(islesSalmon)

    halibut = new Seafood(Logo, "California Halibut Fillet", "California Halibut Fillet", "Dense, Flaky, Delicious")
    seafoodArr.push(halibut)

    stripedBass = new Seafood(Striped, "Baja Striped Bass Fillet", "Baja Striped Bass Fillet", "With it’s clean mouth feel, semi firm texture and superb fat content this fish allows for many preparation options: whole fried, sushi, sashimi, tempura, grilling, poaching and braising….EAT the skin – it crisps beautifully and has the snap of a fresh sea cracker.")
    seafoodArr.push(stripedBass)

    mahiMahi = new Seafood(Logo, "Mahi Mahi Fillet", "Mahi Mahi Fillet", "Dense, Flaky, Delicious")
    seafoodArr.push(mahiMahi)

    manilaClams = new Seafood(Logo, "Manila Clams", "Manila Clams", "Dense, Flaky, Delicious")
    seafoodArr.push(manilaClams)

    pEIMussel = new Seafood(Logo, "PEI Mussels", "PEI Mussels", "Dense, Flaky, Delicious")
    seafoodArr.push(pEIMussel)

    shrimp15 = new Seafood(Logo, "13/15 Jumbo Shrimp Deveined Tail On", "13/15 Jumbo Shrimp Deviened Tail On", "Dense, Flaky, Delicious")
    seafoodArr.push(shrimp15)

    shrimp20 = new Seafood(Logo, "16/20 Medium Shrimp Deveined Tail on", "16/20 Medium Shrimp Deveined Tail on", "Dense, Flaky, Delicious")
    seafoodArr.push(shrimp20)

    shrimp90 = new Seafood(Logo, "71/90 Petite Shrimp Deveined Tail On", "71/90 Petite Shrimp Deveined Tail On", "Dense, Flaky, Delicious")
    seafoodArr.push(shrimp90)

    lobster = new Seafood(Logo, "Cold Water Lobster Tail Shell On 4-5oz/piece", "Cold Water Lobster Tail Shell On 4-5oz/piece", "Dense, Flaky, Delicious")
    seafoodArr.push(lobster)

    hamachi = new Seafood(Logo, "Hamachi, Yellowtail Amberjack Fillet, 5-6lbs/piece", "Hamachi, Yellowtail Amberjack Fillet, 5-6lbs/piece", "Dense, Flaky, Delicious")
    seafoodArr.push(hamachi)

    albacore = new Seafood(Logo, "Albacore Loin, 1lb/piece", "Albacore Loin, 1lb/piece", "Dense, Flaky, Delicious")
    seafoodArr.push(albacore)

    yellowfinTuna = new Seafood(Logo, "Center Cut Yellowfin Tuna Loin 5-7lbs/piece", "Center Cut Yellowfin Tuna Loin 5-7lbs/piece", "Dense, Flaky, Delicious")
    seafoodArr.push(yellowfinTuna)

    mahiFrzn = new Seafood(Logo, "Mahi Mahi Fillet 3-5lbs/piece", "Mahi Mahi Fillet 3-5lbs/piece", "Dense, Flaky, Delicious")
    seafoodArr.push(mahiFrzn)

    scallop = new Seafood(Logo, "Jumbo Domestic Fresh/Frozen Scallop", "Jumbo Domestic Fresh/Frozen Scallop", "Dense, Flaky, Delicious")
    seafoodArr.push(scallop)

    japanScallop = new Seafood(Logo, "Medium Japanese Fresh/Frozen Scallop", "Medium Japanese Fresh/Frozen Scallop", "Dense, Flaky, Delicious")
    seafoodArr.push(japanScallop)

    squid = new Seafood(Logo, "Monterey, CA Squid", "Monterey, CA Squid", "Dense, Flaky, Delicious")
    seafoodArr.push(squid)

    unagi = new Seafood(Logo, "Unagi, Freshwater Eel 14oz Per Piece", "Unagi, Freshwater Eel 14oz Per Piece", "Dense, Flaky, Delicious")
    seafoodArr.push(unagi)

const Inventory = () => (
  <>
  <div className="inventoryContainer">
   <div className="faqHead">
    <Header.Content as="h1">ABS Seafood SLC Offerings</Header.Content>
    <Header.Content as="h5">"Contact your regional sales rep. for pricing, availability and additional offerings"</Header.Content>
   </div>
    <Card.Group className="cardContainer" stackable>
     {seafoodArr.map( seafood => 
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
   </div>
  </>
)

export default Inventory;