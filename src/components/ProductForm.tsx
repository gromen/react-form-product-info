import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import ProductKeywords from './ProductKeywords';

export default function ProductForm() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log({ data });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group
        className='mb-3'
        controlId='title'
      >
        <Form.Label>Product title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Add title'
          {...register('title', { required: true })}
        />
      </Form.Group>

      <Form.Group
        className='mb-3'
        controlId='keywords'
      >
        <Form.Label>Keywords</Form.Label>
        <ProductKeywords
          name='keywords'
          control={control}
          controller={Controller}
          keywords={[
            { label: 'cos', value: 'cos' },
            { label: 'cos2', value: 'cos2' },
            { label: 'cos3', value: 'cos3' },
            { label: 'cos4', value: 'cos4' },
          ]}
          register={register('keywords')}
        />
      </Form.Group>

      <Form.Group
        className='mb-3'
        controlId='description'
      >
        <Form.Label>Product description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          {...register('description')}
        />
      </Form.Group>

      <Button
        variant='primary'
        type='submit'
      >
        Submit
      </Button>
    </Form>
  );
}
