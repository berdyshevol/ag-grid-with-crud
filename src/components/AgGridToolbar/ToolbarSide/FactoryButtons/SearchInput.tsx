import { useRef, useState } from 'react';

export const SearchInput = ({ handler }: any) => {
  const [input, setInput] = useState<string | undefined>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onchange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = e => {
    const { value } = e.target;
    handler(value);
    setInput(value);
  };

  const onKeyPress = (e: any) => {
    const { charCode } = e;
    if (charCode === 13) {
      inputRef.current?.blur();
    }
  };

  return (
    <div className="ToolbarSearch">
      <input
        ref={inputRef}
        value={input}
        onChange={onchange}
        onKeyPress={onKeyPress}
        placeholder={'Search'}
        className="ToolbarSearch-Input"
      />
    </div>
  );
};
