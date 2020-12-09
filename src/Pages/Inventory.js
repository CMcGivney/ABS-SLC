import React, { useContext } from "react";
import { SimpleImg } from "react-simple-img";
import { Header, Card } from "semantic-ui-react";
import { DataContext, DataProvider } from "../Context/DataContext";

const InventoryComponent = () => {
  const { seafoodFresh, seafoodFrozen } = useContext(DataContext);

  return (
    <>
      <div className="inventoryContainer">
        <div className="faqHead">
          <Header.Content as="h1">Retail Products</Header.Content>
          <Header.Content as="h5" style={{ fontStyle: "italic" }}>
            "Contact your regional sales rep. for pricing, availability and
            wholesale products not listed"
          </Header.Content>
        </div>
        <Header.Content as="h1" className="proHead">
          Fresh Products
        </Header.Content>
        <Card.Group className="cardContainer" stackable>
          {seafoodFresh.map((seafood, index) => (
            <Card className="faqCard" key={index}>
              <SimpleImg
                src={seafood.image}
                alt={seafood.image_alt}
                href={seafood.link}
                target="_blank"
                rel="noopener noreferrer"
                className="imageProduct"
                fluid="true"
              />
              <Card.Content>
                <Card.Header as="h2" className="cardHead">
                  {seafood.type}
                </Card.Header>
                <Card.Meta className="cardMeta">
                  {seafood.description}
                </Card.Meta>
                <Card.Meta style={{ textAlign: "center" }}>
                  {seafood.price}
                </Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>

        <Header.Content as="h1" className="proHead">
          Frozen Products
        </Header.Content>
        <Card.Group className="cardContainer">
          {seafoodFrozen.map((frozen, index) => (
            <Card className="faqCard" key={index}>
              <SimpleImg
                src={frozen.image}
                alt={frozen.image_alt}
                className="imageProduct"
                fluid="true"
              />
              <Card.Content>
                <Card.Header as="h2" className="cardHead">
                  {frozen.type}
                </Card.Header>
                <Card.Meta className="cardMeta">{frozen.description}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  );
};
const Inventory = () => {
  return (
    <DataProvider>
      <InventoryComponent></InventoryComponent>
    </DataProvider>
  );
};

export default Inventory;
