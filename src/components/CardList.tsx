import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [modalUrl, setModalUrl] = useState('');
  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleModal = (url: string): void => {
    onOpen();
    setModalUrl(url);
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={30}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleModal} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={modalUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
