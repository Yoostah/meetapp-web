import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Details(props) {
  const { match } = props;
  const [meetup, setMeetup] = useState({});
  const [bannerUrl, setBanner] = useState();

  useEffect(() => {
    async function getMeetupData() {
      const meetupID = match.params.meetup;

      const response = await api.get(`/meetup/${meetupID}`);

      const formattedMeetup = Object.assign({}, response.data, {
        formattedDate: format(
          parseISO(response.data.schedule),
          "d 'de' MMMM ', às' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      });

      const { url } = response.data.meetup_banner;
      setMeetup(formattedMeetup);
      setBanner(url);
    }
    getMeetupData();
  }, [match.params.meetup]);

  async function handleCancel(meetupID) {
    await api.delete(`/meetup/${meetupID}`);
    history.push('/');
  }

  return (
    <Container>
      <Meetup>
        <header>
          <strong>{meetup.title}</strong>
          <div>
            <button type="button">
              <div>
                <MdModeEdit size={20} color="#FFF" />
                Editar
              </div>
            </button>
            <button type="button" onClick={() => handleCancel(meetup.id)}>
              <div>
                <MdDeleteForever size={20} color="#FFF" />
                Cancelar
              </div>
            </button>
          </div>
        </header>
        <img src={bannerUrl} alt="Meetup_Banner" />
        <p>{meetup.description}</p>
        <div>
          <span>
            <MdEvent size={20} color="#FFF" />
            <p>{meetup.formattedDate}</p>
          </span>
          <span>
            <MdPlace size={20} color="#FFF" />
            <p>{meetup.location}</p>
          </span>
        </div>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup: PropTypes.string,
    }),
  }).isRequired,
};
