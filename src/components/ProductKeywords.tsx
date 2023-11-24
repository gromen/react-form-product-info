import React from 'react';
import CreatableSelect from 'react-select/creatable';

interface Option {
  readonly label: string;
  readonly value: string;
}

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
  const Controller = controller;

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
          value={keywords.find((keyword: Option) => keyword.value === value)}
          onChange={(keywords: Option[]) =>
            onChange(keywords.map((keyword: Option) => keyword.value))
          }
          ref={ref}
          openMenuOnFocus
          isMulti
        />
      )}
    />
  );
}
