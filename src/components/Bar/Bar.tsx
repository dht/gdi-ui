import { useEffect, useRef, useState } from 'react';
import { addListener } from 'shared-base';
import { IBarItem } from '../../types';
import { useTime } from './Bar.hooks';
import { BarItems, Emoji, Input, Item, Modifier, Sign, Wrapper } from './Bar.style';

export type BarProps = {
  prompt: string;
  promptPlaceholder: string;
  items: IBarItem[];
  onPrompt: (prompt: string) => void;
  onItemClick: (barItem: IBarItem) => void;
  is24Hours: boolean;
};

export function Bar(props: BarProps) {
  const { items = [], is24Hours, promptPlaceholder } = props;
  const [prompt, setPrompt] = useState('');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPrompt(props.prompt);
  }, [props.prompt]);

  const currentTime = useTime(is24Hours);

  function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Enter') {
      props.onPrompt(prompt);
      setPrompt('');
    }
  }

  addListener('prompt/focus', () => {
    if (!ref.current) {
      return;
    }

    ref.current.focus();
  });

  function renderBarItem(barItem: IBarItem) {
    let { value = '', emoji, modifier } = barItem;

    if (value.includes('$time')) {
      value = value.replace('$time', currentTime);
    }

    return (
      <Item key={barItem.id} className='barItem' onClick={() => props.onItemClick(barItem)}>
        {modifier && <Modifier>{modifier}</Modifier>}
        {emoji && <Emoji>{emoji}</Emoji>}
        {value}
      </Item>
    );
  }

  function renderBarItems() {
    return items
      .filter((barItem: IBarItem) => !barItem.isHidden)
      .map((barItem: IBarItem) => renderBarItem(barItem));
  }

  return (
    <Wrapper className='Bar-wrapper' data-testid='Bar-wrapper'>
      <Sign>&gt;</Sign>
      <Input
        ref={ref}
        onChange={(ev) => setPrompt(ev.target.value)}
        value={prompt}
        onKeyDown={onKeyDown}
        placeholder={promptPlaceholder}
      />
      <BarItems>{renderBarItems()}</BarItems>
    </Wrapper>
  );
}

export default Bar;
