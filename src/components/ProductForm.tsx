import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import ProductKeywords from './ProductKeywords';
import { useEffect } from 'react';

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {
    setError('title', { type: 'manual' });
  }, [setError]);

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
          {...register('title', { required: 'Title is required' })}
        />
        {errors && (
          <Form.Control.Feedback
            type='invalid'
            className='d-block'
          >
            {errors.title?.message}
          </Form.Control.Feedback>
        )}
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
