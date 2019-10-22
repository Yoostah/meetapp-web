import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';
import { ptBR } from 'date-fns/locale';
import ReactDatePicker from 'react-datepicker';
import BannerInput from './BannerInput';
import { Container } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é necessário'),
  description: Yup.string().required('Descrição é necessário'),
  address: Yup.string().required('Endereço é necessário'),
});

export default function Meetup() {
  const [selected, setSelected] = useState();
  function handleSubmit(data) {
    // dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <ReactDatePicker
          name="date"
          selected={selected}
          onChange={date => setSelected(date)}
          showTimeSelect
          minDate={new Date()}
          timeFormat="HH:mm"
          placeholderText="Data do evento"
          dateFormat="d MMMM 'ás' H'h'"
          locale={ptBR}
          autoComplete="off"
        />
        <Input name="location" type="text" placeholder="Localização" />

        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
            Salvar Meetup
          </div>
        </button>
      </Form>
    </Container>
  );
}
