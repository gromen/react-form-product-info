import React, { KeyboardEventHandler } from 'react';
import CreatableSelect from 'react-select/creatable';

interface Option {
  readonly label: string;
  readonly value: string;
}

export type Keywords = { label: string; value: string }[];

const createOption = (label: string) => ({
  label,
  value: label,
});

interface ProductKeywordsProps {
  keywords: Keywords;
  control: any;
  controller: any;
  register: any;
  name: string;
}

export default function ProductKeywords({
  keywords,
  controller,
  control,
  register,
  name,
}: ProductKeywordsProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState<readonly Option[]>([]);
  const Controller = controller;
  console.log(value);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };

  console.log(keywords);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name, ref } }: any) => (
        <CreatableSelect
          {...register}
          options={keywords}
          value={keywords.find((keyword: Keywords) => keyword.value === value)}
          inputValue={inputValue}
          onChange={(event: any) => onChange(event.map((c: any) => c.value))}
          ref={ref}
          name={name}
          onKeyDown={handleKeyDown}
          isMulti
          isSearchable
        />
      )}
    />
  );
}
