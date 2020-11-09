import React, { useState } from 'react';
import { CardContainer, Button } from './styles';

function Card({ initialClickCount }) {
  const [clickCount, setClickCount] = useState(initialClickCount);
  const pluralize = (n, noun, suffix) =>
    `${n !== 1 ? 'are' : 'is'} ${n} ${noun + (n !== 1 ? suffix : '')}`;

  return (
    <CardContainer>
      <p>
        {`There ${
          clickCount > 0
            ? pluralize(clickCount, 'reason', 's')
            : 'are so many reasons'
        } to use HubSpot CMS + React! <3 <3`}
      </p>
      <Button  onClick={() => setClickCount(clickCount + 1)}>
        Add Reason!
      </Button>
    </CardContainer>
  );
}

export default Card;
