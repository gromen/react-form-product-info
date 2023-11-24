import React, { KeyboardEventHandler } from 'react';
import CreatableSelect from 'react-select/creatable';

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

interface ProductKeywordsProps {
  keywords: Option[];
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
      render={({
        field: { onChange, value, ref },
      }: {
        field: {
          onChange: (event: Option[]) => void;
          value: string;
          ref: React.Ref<HTMLSelectElement>;
        };
      }) => (
        <CreatableSelect
          {...register}
          options={keywords}
          values={keywords.find((keyword: Option) => keyword.value === value)}
          inputValue={inputValue}
          onChange={(keywords: Option[]) =>
            onChange(
              keywords.map((keyword: Option) => {
                return keyword;
              })
            )
          }
          ref={ref}
          onKeyDown={handleKeyDown}
          isMulti
          isSearchable
        />
      )}
    />
  );
}
