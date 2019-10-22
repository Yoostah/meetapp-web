import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import BannerInput from './BannerInput';

import api from '~/services/api';

import { Container } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  title: Yup.string().required('O Título é obrigatório.'),
  description: Yup.string().required('A Descrição é obrigatória.'),
  location: Yup.string().required('O Endereço é obrigatório.'),
});

export default function Meetup() {
  const [startDate, setStartDate] = useState();
  const [banner, setBanner] = useState();

  async function handleSubmit({ title, description, location }) {
    if (typeof banner === 'undefined') {
      toast.error('O Banner é obrigatório.');
    }

    if (!startDate) {
      toast.error('A Data é obrigatória.');
    }
    await api.post('meetup', {
      title,
      description,
      schedule: startDate,
      location,
      banner_id: banner,
    });
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" setBanner={setBanner} />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <ReactDatePicker
          name="date"
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          minDate={new Date()}
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Horário"
          placeholderText="Data do Meetup"
          dateFormat="d 'de' MMMM ', às' H'h'"
          locale={pt}
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
